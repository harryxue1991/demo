/**
 * Created by 尖叫蕈 on 2016/11/4.
 */
function loadImage(imgUrl, fn) {
    var imgObj = {};

    var tempImg;

    //记录已经加载完毕的图像数量
    var loaded = 0;
    var imgLength = 0;

    for (var key in imgUrl){

        imgLength++;
        tempImg = new Image();

        tempImg.onload = function () {
            loaded++;
            if(loaded >= imgLength) {
                fn(imgObj);
            }
        }

        tempImg.src = imgUrl[key];
        imgObj[key] = tempImg;
    }





}