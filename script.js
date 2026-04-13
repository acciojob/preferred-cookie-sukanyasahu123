
window.onload = function () {
    let fs = getCookie("fontsize");
    let fc = getCookie("fontcolor");

    if (fs) {
        document.documentElement.style.setProperty('--fontsize', fs);
    }

    if (fc) {
        document.documentElement.style.setProperty('--fontcolor', fc);
    }
};
document.getElementById("form").onsubmit = function (e) {
    e.preventDefault();

    let fontsize = document.getElementById("fontsize").value + "px";
    let fontcolor = document.getElementById("fontcolor").value;

    setCookie("fontsize", fontsize);
    setCookie("fontcolor", fontcolor);

    // Apply immediately
    document.documentElement.style.setProperty('--fontsize', fontsize);
    document.documentElement.style.setProperty('--fontcolor', fontcolor);
};


function setCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
}
function getCookie(name) {
    let cookies = document.cookie.split("; ");

    for (let c of cookies) {
        let [key, val] = c.split("=");
        if (key === name) return val;
    }
    return null;
}