(function (m, a, i, s, _i, _m) {
  if (m.location.pathname == '/inscreva-se/ibra+') {
    return 0;
  }
  m.addEventListener('load', function () {
    m.top.maisim ||
      (function () {
        _m = a.createElement(i);
        i = a.getElementsByTagName(i)[0];
        _m.async = !0;
        _m.src = s;
        _m.id = 'maisim';
        _m.charset = 'utf-8';
        _m.setAttribute('data-token', _i);
        i.parentNode.insertBefore(_m, i);
      })();
  });
})(
  window,
  document,
  'script',
  'https://app.mais.im/support/assets/js/core/embed.js',
  '46d0cf178371be382849e562587c5379'
);

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-140453308-1');
