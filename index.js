var ua = window.navigator.userAgent;

var msie = ua.indexOf('MSIE ');
if (msie > 0) {
  // IE 10 or older
  var version = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  document.body.className += ' ie' + version;
}

var trident = ua.indexOf('Trident/');
if (trident > 0) {
  // IE 11
  var version = ua.indexOf('rv:');
  document.body.className += ' ie' + parseInt(ua.substring(version + 3, ua.indexOf('.', version)), 10);
}
