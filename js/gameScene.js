/**
 * Created by ¼â½ÐÞ¦ on 2016/11/8.
 */
(function (w) {
    function Scene(ctx,imgObj) {
        this.ctx = ctx;
        this.imgObj = imgObj;

        this.roles = [];
        this._initRoles();
    }
    Scene.prototype = {
        constructor: Scene,

        _initRoles : function () {
            this.roles.push( getSky( ctx, this.imgObj.sky, 3 ) );
            this.roles.push( getSky( ctx, this.imgObj.sky, 3 ) );

            for (var i = 0; i < 6; i++) {
                this.roles.push(getPipe(ctx, this.imgObj.pipeDown, this.imgObj.pipeUp, 150, this.imgObj.land.height, 5))

            }
            for (var i = 0; i < 4; i++) {
                this.roles.push(getLand(ctx, this.imgObj.land, 3));

            }
            this.roles.push(getBird(ctx,this.imgObj.bird,3,1,10,10));
        },

        draw : function () {
            this.ctx.beginPath();
            this.roles.forEach(function (role) {
                role.draw();
                role.update();
            })
        }
    }
    w.getGameScene = function (ctx, imgObj) {
        return new Scene(ctx, imgObj);
    }

}(window))