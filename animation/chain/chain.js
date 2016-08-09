/**
 * Created by xffree on 2016/8/9.
 */

function getStyle(obj, attr) {
    return getComputedStyle(obj)[attr];
}

function startMove(obj,attr,target,fn) {
    var icur = 0;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        if(attr == 'opacity'){
            icur = Math.round(parseFloat(getStyle(obj,attr)) * 100);
        }else{
            icur = parseInt(getStyle(obj,attr));
        }
        var speed = (target-icur)/8;
        speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
        if(icur == target){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }else{
            if(attr == 'opacity'){
                obj.style[attr] = (icur+speed)/100;
            }else{
                obj.style[attr] = icur + speed + 'px';
            }
        }
    },30)
}