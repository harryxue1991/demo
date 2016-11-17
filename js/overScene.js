/**
 * Created by ���ަ on 2016/11/8.
 */
(function (w) {
    function OverScene(ctx) {
        this.ctx = ctx;
    }
    OverScene.prototype.draw = function () {

        this.ctx.save();

        this.ctx.fillStyle = 'rgba( 100, 100, 100, 0.8 )';
        this.ctx.fillRect( 0, 0, ctx.canvas.width, ctx.canvas.height );
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillStyle = 'red';
        this.ctx.font = '900 40px ΢���ź�';
        this.ctx.fillText( 'GAME OVER!!!', ctx.canvas.width / 2, ctx.canvas.height / 2 );
        this.ctx.restore();
    }
    w.getOverScene = function (ctx) {
        return new OverScene(ctx);
    }
}(window))