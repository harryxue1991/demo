/**
 * Created by ���ަ on 2016/11/7.
 */

(function (w) {
    function Sky(ctx, img,speed) {
        this.ctx = ctx;
        this.img = img;
        this.width = this.img.width;
        this.height = this.img.height;
        this.speed = speed || 2;

        Sky.len++;
        this.x = this.width*(Sky.len - 1);
        this.y = 0;
    };
    Sky.len = 0;
    Sky.prototype = {
        constructor: Sky,
        draw: function () {
            this.ctx.drawImage(this.img,this.x,this.y);
        },
        update: function () {
            this.x -= this.speed;
            if(this.x <= -this.width){
                this.x += this.width * Sky.len;
            }
        }

    }
    w.getSky = function ( ctx, img, speed ) {
        return new Sky( ctx, img, speed );
    }
}(window));
