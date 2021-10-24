box.style.width = window.innerWidth + "px";
// box.style.height = window.innerHeight + "px";
box.style.height = 650 + "px";
branch.style.left = (window.innerWidth - 30) / 2 + "px";
var deg = - 55;

var fragment = document.createDocumentFragment();
for (var i = 0; i < 40; i++) {
    var div = document.createElement("div");
    div.className = i < 30 ? "flower" : "leaf";
    if (i >= 38) {
        div.style.top = 250 + (i - 37) * 30 + "px";
    }
    div.id = "div_" + i;
    var info = getInfoByIndex(i);
    div.style.zIndex = Math.round(100 * Math.cos(info.deg / 360 * Math.PI * 2) * info.translate);
    div.style.left = info.left + "px";
    var skew = i < 38 ? 0 : info.skew;
    div.style.transform = "rotateX(" + (Math.cos(info.deg / 360 * Math.PI * 2) * (-skew)) + "deg) rotateZ(" + Math.sin(info.deg / 360 * Math.PI * 2) * (skew) + "deg) rotateY(" + (info.deg) + "deg) translateZ(" + info.translate + "px) scale(" + info.scale + ")";
    fragment.appendChild(div);
}
box.appendChild(fragment);

function getInfoByIndex(i) {
    var info = {
        left: (window.innerWidth - 100) / 2
    };
    if (i < 4) {
        info.deg = 10 + 90 * i;
        info.translate = 30;
        info.scale = 0.7;
        info.skew = 15;
    } else if (i < 10) {
        info.deg = 30 + 60 * i;
        info.translate = 45;
        info.scale = 0.8;
        info.skew = 20;
    } else if (i < 18) {
        info.deg = 50 + 45 * i;
        info.translate = 60;
        info.scale = 0.9;
        info.skew = 20;
    } else if (i < 30) {
        info.deg = 70 + 30 * i;
        info.translate = 85;
        info.scale = 1;
        info.skew = 20;
    } else if (i < 38) {
        info.deg = 20 + 45 * i + 20;
        info.translate = 95
        info.scale = 1.2;
        info.skew = 45;
        info.left = Math.round((window.innerWidth - 40) / 2);
    } else {
        info.deg = 90 + 180 * i + 20;
        info.translate = 50
        info.scale = 1.2;
        info.skew = 75;
        info.left = Math.round((window.innerWidth - 40) / 2);
    }
    return info;
}

function step() {
    for (var i = 0; i < 38; i++) {
        var info = getInfoByIndex(i);
        var skew = Math.max(0, deg + info.skew);
        document.getElementById("div_" + i).style.transform = "rotateX(" + (Math.cos(info.deg / 360 * Math.PI * 2) * (-skew)) + "deg) rotateZ(" + Math.sin(info.deg / 360 * Math.PI * 2) * (skew) + "deg) rotateY(" + (info.deg) + "deg) translateZ(" + info.translate + "px) scale(" + info.scale + ")";
    }
    deg += 0.3;
    if (deg < 0) requestAnimationFrame(step);
}
document.addEventListener('click', () => {
    if (!window.firstClick) {
        window.firstClick = true
        document.getElementById('myaudio').play()
        step()
        window.start()
        setInterval(() => {
            getTime()
        }, 1000)
        
    }

})
// requestAnimationFrame(step);
