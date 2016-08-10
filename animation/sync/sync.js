/**
 * Created by xffree on 2016/8/9.
 */
function getStyle(obj, attr) {
    return getComputedStyle(obj)[attr];
}

function startMove(obj, json, fn) {
    var icur = 0;
    var flag = true;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        for (attr in json) {
            if (attr == 'opacity') {
                icur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                icur = parseInt(getStyle(obj, attr));
            }
            var speed = (json[attr] - icur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (icur != json[attr]) {
                flag = false;
            }
            if (attr == 'opacity') {
                obj.style[attr] = (icur + speed) / 100;
            } else {
                obj.style[attr] = icur + speed + 'px';
            }

            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }

    }, 30)
}