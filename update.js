(function IEUpgrade(){
    var ua = window.navigator.userAgent.toLowerCase();
    if (/msie/.test(ua)) {
        window.location.href = '4fan.html';
    }
})();