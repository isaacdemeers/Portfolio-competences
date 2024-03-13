function disableselect(e) {
    return false
}

function reEnable() {
    return true
}

//if IE4+ 
document.onselectstart = new Function("return false")
document.oncontextmenu = new Function("return false")
    //if NS6 
if (window.sidebar) {
    document.onmousedown = disableselect
    document.onclick = reEnable
};
document.onkeydown = function(e) {
    if (e.ctrlKey &&
        (e.keyCode === 67 ||
            e.keyCode === 86 ||
            e.keyCode === 123 ||
            e.keyCode === 85 ||
            e.keyCode === 117)) {
        return false;
    } else if (e.keyCode === 123) {
        return false;
    } else if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        return false;
    } else {
        return true;
    }
};