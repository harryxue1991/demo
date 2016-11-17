/**
 * Created by 尖叫蕈 on 2016/11/7.
 */
(function (w) {
    function Pipe(ctx, imgDowm, imgUp, space, landHeight,speed ) {
        this.ctx = ctx;
        this.imgDowm = imgDowm;
        this.imgUp = imgUp;
        this.space = space;
        this.landHeight = landHeight;
        this.speed = speed;

        this.minHeight = 100;

        this.width = this.imgDowm.width;
        this.height = this.imgDowm.height;

        Pipe.len++;

        this.x = 300 + this.width*3*(Pipe.len - 1);
        this.y = 0;

        this._init();
    }
    Pipe.len = 0;
    util.extend(Pipe.prototype, {
        _init: function () {
//            单个管道的最大高度
            var maxHeight = this.ctx.canvas.height - this.landHeight - this.space - this.minHeight;
            var randomHeight = Math.random() * maxHeight;
            randomHeight = randomHeight < this.minHeight? this.minHeight : randomHeight;
            this.downY = randomHeight - this.height;
            this.upY = randomHeight + this.space;
        },
        draw: function () {
            this.ctx.drawImage( this.imgDowm, this.x, this.downY );
            this.ctx.drawImage( this.imgUp, this.x, this.upY );
            this._drawPath();
        },
        _drawPath: function () {
            this.ctx.rect( this.x, this.downY, this.width, this.height);
            this.ctx.rect( this.x, this.upY, this.width, this.height);
        },
        update: function () {
            this.x -= this.speed;
            if( this.x <= -this.width) {
                this._init();
                this.x += this.width * 3 * Pipe.len;
            }
        }
    })
    w.getPipe = function (ctx, imgDowm, imgUp, space, landHeight,speed ) {
        return new Pipe(ctx, imgDowm, imgUp, space, landHeight,speed );
    }
}(window))
    /*
     * constructor { Pipe } 管道
     * param { ctx: Context } 绘图环境
     * param { imgDown：Image } 口朝下的管道，在画布的上面
     * param { imgUp：Image } 口朝上的管道，在画布的下面
     * param { space：number } 上下管道的间距
     * param { landHeight：number } 大地的高度
     * param { speed：number } 速度
     * */
