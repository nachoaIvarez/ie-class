var ua = window.navigator.userAgent;
var msieIndex = ua.indexOf('MSIE ');
var version = parseInt(ua.substring(msieIndex + 5, ua.indexOf('.', msieIndex)), 10);
document.body.className += ' ie' + version;