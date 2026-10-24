// 移动端导航菜单开关（全站共享）
// 用事件代理挂在 document 上，不依赖 DOMContentLoaded 时序
document.addEventListener('click', function (e) {
  var toggle = e.target.closest && e.target.closest('.hark-nav-toggle');
  if (toggle) {
    var menu = document.querySelector('.hark-mobile-menu');
    if (!menu) return;
    var open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    return;
  }
  var link = e.target.closest && e.target.closest('.hark-mobile-menu a');
  if (link) {
    var m = document.querySelector('.hark-mobile-menu');
    var t = document.querySelector('.hark-nav-toggle');
    if (m) m.classList.remove('open');
    if (t) t.setAttribute('aria-expanded', 'false');
  }
});
