(function(e) { function t(t) { for (var a, r, c = t[0], s = t[1], u = t[2], l = 0, d = []; l < c.length; l++)r = c[l], Object.prototype.hasOwnProperty.call(o, r) && o[r] && d.push(o[r][0]), o[r] = 0; for (a in s)Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]); f && f(t); while (d.length)d.shift()(); return i.push.apply(i, u || []), n() } function n() { for (var e, t = 0; t < i.length; t++) { for (var n = i[t], a = !0, r = 1; r < n.length; r++) { var c = n[r]; o[c] !== 0 && (a = !1) }a && (i.splice(t--, 1), e = s(s.s = n[0])) } return e } var a = {}; var r = { app: 0 }; var o = { app: 0 }; var i = []; function c(e) { return s.p + 'js/' + ({}[e] || e) + '.' + { 'chunk-2602b94f': '07bc68a9', 'chunk-38c098e0': 'e2d18f2a', 'chunk-3b6f00e2': '9246aaf4', 'chunk-5896f3bc': 'ddeda44e', 'chunk-619e0eee': '5298a24b', 'chunk-667b7e20': '037cc078', 'chunk-7f0368e4': '7841a1f7', 'chunk-947d9ce0': 'a65ca888', 'chunk-d606f42a': '2764f94e', 'chunk-dfc49b32': 'acae11c7', 'chunk-e2a90842': '89160a6e' }[e] + '.js' } function s(t) { if (a[t]) return a[t].exports; var n = a[t] = { i: t, l: !1, exports: {} }; return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports }s.e = function(e) { var t = []; var n = { 'chunk-2602b94f': 1, 'chunk-38c098e0': 1, 'chunk-3b6f00e2': 1, 'chunk-5896f3bc': 1, 'chunk-619e0eee': 1, 'chunk-667b7e20': 1, 'chunk-7f0368e4': 1, 'chunk-947d9ce0': 1, 'chunk-d606f42a': 1, 'chunk-dfc49b32': 1, 'chunk-e2a90842': 1 }; r[e] ? t.push(r[e]) : r[e] !== 0 && n[e] && t.push(r[e] = new Promise(function(t, n) { for (var a = 'css/' + ({}[e] || e) + '.' + { 'chunk-2602b94f': 'c0778966', 'chunk-38c098e0': '22122674', 'chunk-3b6f00e2': '028e7cd0', 'chunk-5896f3bc': 'dbdf5a2e', 'chunk-619e0eee': '6938ff00', 'chunk-667b7e20': '5d3099c3', 'chunk-7f0368e4': '27051a52', 'chunk-947d9ce0': '9d516d3f', 'chunk-d606f42a': '08639829', 'chunk-dfc49b32': '9aa2d1f7', 'chunk-e2a90842': 'b948c855' }[e] + '.css', o = s.p + a, i = document.getElementsByTagName('link'), c = 0; c < i.length; c++) { var u = i[c]; var l = u.getAttribute('data-href') || u.getAttribute('href'); if (u.rel === 'stylesheet' && (l === a || l === o)) return t() } var d = document.getElementsByTagName('style'); for (c = 0; c < d.length; c++) { u = d[c], l = u.getAttribute('data-href'); if (l === a || l === o) return t() } var f = document.createElement('link'); f.rel = 'stylesheet', f.type = 'text/css', f.onload = t, f.onerror = function(t) { var a = t && t.target && t.target.src || o; var i = new Error('Loading CSS chunk ' + e + ' failed.\n(' + a + ')'); i.code = 'CSS_CHUNK_LOAD_FAILED', i.request = a, delete r[e], f.parentNode.removeChild(f), n(i) }, f.href = o; var h = document.getElementsByTagName('head')[0]; h.appendChild(f) }).then(function() { r[e] = 0 })); var a = o[e]; if (a !== 0) if (a)t.push(a[2]); else { var i = new Promise(function(t, n) { a = o[e] = [t, n] }); t.push(a[2] = i); var u; var l = document.createElement('script'); l.charset = 'utf-8', l.timeout = 120, s.nc && l.setAttribute('nonce', s.nc), l.src = c(e); var d = new Error(); u = function(t) { l.onerror = l.onload = null, clearTimeout(f); var n = o[e]; if (n !== 0) { if (n) { var a = t && (t.type === 'load' ? 'missing' : t.type); var r = t && t.target && t.target.src; d.message = 'Loading chunk ' + e + ' failed.\n(' + a + ': ' + r + ')', d.name = 'ChunkLoadError', d.type = a, d.request = r, n[1](d) }o[e] = void 0 } }; var f = setTimeout(function() { u({ type: 'timeout', target: l }) }, 12e4); l.onerror = l.onload = u, document.head.appendChild(l) } return Promise.all(t) }, s.m = e, s.c = a, s.d = function(e, t, n) { s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, s.r = function(e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }) }, s.t = function(e, t) { if (1 & t && (e = s(e)), 8 & t) return e; if (4 & t && typeof e === 'object' && e && e.__esModule) return e; var n = Object.create(null); if (s.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string') for (var a in e)s.d(n, a, function(t) { return e[t] }.bind(null, a)); return n }, s.n = function(e) { var t = e && e.__esModule ? function() { return e['default'] } : function() { return e }; return s.d(t, 'a', t), t }, s.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, s.p = '/', s.oe = function(e) { throw console.error(e), e }; var u = window['webpackJsonp'] = window['webpackJsonp'] || []; var l = u.push.bind(u); u.push = t, u = u.slice(); for (var d = 0; d < u.length; d++)t(u[d]); var f = l; i.push([0, 'chunk-vendors']), n() })({ 0: function(e, t, n) { e.exports = n('cd49') }, '02bc': function(e, t, n) { 'use strict'; var a = function() { var e = this; var t = e.$createElement; var n = e._self._c || t; return n('div', { staticClass: 'empty-container' }, [n('Icon', { staticClass: 'empty-icon', attrs: { type: 'ios-leaf' } }), n('span', { staticClass: 'empty-text' }, [e._v(e._s(e.text))])], 1) }; var r = []; var o = n('d4ec'); var i = n('99de'); var c = n('7e84'); var s = n('262e'); var u = n('9ab4'); var l = n('60a3'); var d = (function(e) { function t() { return Object(o['a'])(this, t), Object(i['a'])(this, Object(c['a'])(t).apply(this, arguments)) } return Object(s['a'])(t, e), t }(l['e'])); u['a']([Object(l['d'])({ type: String, required: !1, default: '还未拥有数据，尝试添加一下吧' })], d.prototype, 'text', void 0), d = u['a']([l['a']], d); var f = d; var h = f; var p = (n('985f'), n('2877')); var m = Object(p['a'])(h, a, r, !1, null, '527e4151', null); t['a'] = m.exports }, '03ee': function(e, t, n) {}, '09aa': function(e, t, n) { 'use strict'; function a(e) { var t = localStorage.getItem(e) || ''; return t ? JSON.parse(t) : '' } function r(e, t) { var n = JSON.stringify(t); localStorage.setItem(e, n) } function o(e) { localStorage.removeItem(e) }n.d(t, 'a', function() { return a }), n.d(t, 'c', function() { return r }), n.d(t, 'b', function() { return o }) }, '2bb9': function(e, t, n) { 'use strict'; var a = n('ae8f'); var r = n.n(a); r.a }, '3d7d': function(e, t, n) { var a = { './index.ts': '69b0', './module/mock_device_api.ts': '03ee', './module/mock_login_api.ts': 'afef' }; function r(e) { var t = o(e); return n(t) } function o(e) { if (!n.o(a, e)) { var t = new Error("Cannot find module '" + e + "'"); throw t.code = 'MODULE_NOT_FOUND', t } return a[e] }r.keys = function() { return Object.keys(a) }, r.resolve = o, e.exports = r, r.id = '3d7d' }, 5156: function(e, t, n) {}, '521c': function(e, t, n) {}, '5c0a': function(e, t, n) { 'use strict'; n('d3b7'); var a = n('bc3a'); var r = n.n(a); var o = n('09aa'); var i = n('f825'); var c = n.n(i); var s = r.a; var u = c.a; var l = s.default.create({ baseURL: '/', timeout: 4e3, maxContentLength: 4e3 }); l.interceptors.request.use(function(e) { var t = Object(o['a'])('token'); return e.headers['X-Token'] = t || '', e }), l.interceptors.response.use(function(e) { if (u.LoadingBar.start(), e.status === 200) return u.LoadingBar.finish(), e.data; u.LoadingBar.error(), console.warn('请求发生错误') }, function(e) { return u.LoadingBar.error(), Promise.reject(e) }), t['a'] = l }, '5c0b': function(e, t, n) { 'use strict'; var a = n('9c0c'); var r = n.n(a); r.a }, '65fa': function(e, t, n) { var a = { './router1.ts': 'a5ea', './router2.ts': '66f7' }; function r(e) { var t = o(e); return n(t) } function o(e) { if (!n.o(a, e)) { var t = new Error("Cannot find module '" + e + "'"); throw t.code = 'MODULE_NOT_FOUND', t } return a[e] }r.keys = function() { return Object.keys(a) }, r.resolve = o, e.exports = r, r.id = '65fa' }, '66f7': function(e, t, n) { 'use strict'; n.r(t), t['default'] = { path: '/base2', name: 'dashboard', redirect: '/dashboard', children: [{ path: '/dashboard', name: 'dashboard', component: function(e) { n.e('chunk-947d9ce0').then(function() { var t = [n('a79c')]; e.apply(null, t) }).catch(n.oe) } }] } }, 6908: function(e, t, n) { 'use strict'; var a = function() { var e = this; var t = e.$createElement; var n = e._self._c || t; return n('div', { staticClass: 'tool-container' }, [n('div', { staticClass: 'title-box' }, [n('i', { staticClass: 'fas title-box__icon', class: e.currentRoutesList.meta.icon }), n('div', { staticClass: 'title-box__info' }, [n('h3', [e._v(e._s(e.currentRoutesList.meta.title))]), n('h6', [e._v('当前访问用户: ' + e._s(e.$store.getters.name))])])]), n('ul', { staticClass: 'route-list' }, e._l(e.currentRoutesList.children, function(t, a) { return n('router-link', { key: a, class: t.name === e.$route.name && 'is-active', attrs: { tag: 'li', to: t.path } }, [n('i', { staticClass: 'fas', class: t.meta.icon }), e._v(' ' + e._s(t.meta.title) + ' ')]) }), 1)]) }; var r = []; var o = (n('4160'), n('b0c0'), n('159b'), n('d4ec')); var i = n('bee2'); var c = n('99de'); var s = n('7e84'); var u = n('262e'); var l = n('9ab4'); var d = n('60a3'); var f = n('4bb5'); var h = (function(e) { function t() { return Object(o['a'])(this, t), Object(c['a'])(this, Object(s['a'])(t).apply(this, arguments)) } return Object(u['a'])(t, e), Object(i['a'])(t, [{ key: 'getRouteList', value: function() { var e = this.$route; var t = e; return this.currentRoutes.forEach(function(n, a) { if (n.name === e.name)t = n; else { var r = n.children ? n.children : []; r.forEach(function(a) { a.name === e.name && (t = n) }) } }), t } }, { key: 'created', value: function() { this.currentRoutesList = this.getRouteList() } }, { key: 'onRoute', value: function(e, t) { e.name !== t.name && (this.currentRoutesList = this.getRouteList()) } }]), t }(d['e'])); l['a']([Object(f['b'])('currentRoutes')], h.prototype, 'currentRoutes', void 0), l['a']([Object(d['f'])('$route', { deep: !0 })], h.prototype, 'onRoute', null), h = l['a']([d['a']], h); var p = h; var m = p; var b = (n('dbcd'), n('2877')); var v = Object(b['a'])(m, a, r, !1, null, '611e00a7', null); t['a'] = v.exports }, '69b0': function(e, t, n) { 'use strict'; n.r(t); n('99af'), n('4160'), n('d3b7'), n('ac1f'), n('1276'), n('159b'), n('ddb0'); var a = n('96eb'); var r = n.n(a); var o = n('3d7d'); var i = []; o.keys().forEach(function(e) { e !== 'index.ts' && (i = i.concat(o(e).default)) }), i.forEach(function(e) { if (e) for (var t in e) { var n = t.split('|'); r.a.mock(n[1], n[0], e[t]) } }), t['default'] = r.a }, '6d66': function(e, t, n) {}, '985f': function(e, t, n) { 'use strict'; var a = n('d5c7'); var r = n.n(a); r.a }, '9c0c': function(e, t, n) {}, '9c72': function(e, t, n) {}, '9d73': function(e, t, n) {}, '9dea': function(e, t, n) {}, '9eae': function(e, t, n) { 'use strict'; var a = n('9c72'); var r = n.n(a); r.a }, a5ea: function(e, t, n) { 'use strict'; n.r(t), t['default'] = { path: '/base1', name: 'dashboard', redirect: '/dashboard', children: [{ path: '/dashboard', name: 'dashboard', component: function(e) { n.e('chunk-947d9ce0').then(function() { var t = [n('a79c')]; e.apply(null, t) }).catch(n.oe) } }] } }, ae8f: function(e, t, n) {}, afef: function(e, t, n) { 'use strict'; n.r(t); var a = function(e) { return { status: 200, data: { success: !0, token: 1111, message: '即将进入' } } }; t['default'] = { 'post|/login': a, 'get|/person': function(e) { return { status: 200, data: { success: !0, avatar: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1361981880,3052617388&fm=111&gp=0.jpg', name: '王方华', roles: ['admin'] } } } } }, bd86: function(e, t, n) { 'use strict'; function a() { var e = document.documentElement.clientWidth; return e > 1920 ? 1920 : e }(function(e) { e.addEventListener('resize', function() { document.documentElement.style.fontSize = ''.concat(a() / 10, 'px') }), document.documentElement.style.fontSize = ''.concat(a() / 10, 'px') })(window) }, cbd1: function(e, t, n) { 'use strict'; var a = n('6d66'); var r = n.n(a); r.a }, cce4: function(e, t, n) { 'use strict'; var a = n('521c'); var r = n.n(a); r.a }, cd49: function(e, t, n) { 'use strict'; n.r(t); n('e260'), n('e6cf'), n('cca6'), n('a79d'); var a = n('2b0e'); var r = function() { var e = this; var t = e.$createElement; var n = e._self._c || t; return n('div', { attrs: { id: 'app' } }, [n('router-view')], 1) }; var o = []; var i = n('d4ec'); var c = n('99de'); var s = n('7e84'); var u = n('262e'); var l = n('60a3'); var d = (function(e) { function t() { return Object(i['a'])(this, t), Object(c['a'])(this, Object(s['a'])(t).apply(this, arguments)) } return Object(u['a'])(t, e), t }(l['e'])); var f = d; var h = (n('5c0b'), n('2877')); var p = Object(h['a'])(f, r, o, !1, null, null, null); var m = p.exports; var b = n('8c4f'); var v = function() { var e = this; var t = e.$createElement; var n = e._self._c || t; return n('div', { staticClass: 'app-container' }, [n('div', { staticClass: 'side-wrapper', style: e.isShowSide && { width: '300px' } }, [n('i', { staticClass: 'fas fa-cog on-off', style: e.isShowSide && { 'margin-left': 0 }, on: { click: function(t) { e.isShowSide = !e.isShowSide } } }), n('div', { staticClass: 'body-container' }, [n('SystemSetting')], 1)]), n('HeaderView', { staticClass: 'header-wrapper' }), n('transition', [n('Toolbar', { directives: [{ name: 'show', rawName: 'v-show', value: e.isShowToolBar, expression: 'isShowToolBar' }], staticClass: 'tool-view' })], 1), n('div', { staticClass: 'route-wrapper' }, [n('router-view')], 1)], 1) }; var g = []; var k = n('9ab4'); var w = n('4bb5'); var y = function() { var e = this; var t = e.$createElement; var n = e._self._c || t; return n('Header', { staticClass: 'app-header', style: 'background: ' + e.color + ';' }, [n('Modal', { attrs: { fullscreen: '', title: 'Fullscreen Modal' }, model: { value: e.isShowUpdateUserInfo, callback: function(t) { e.isShowUpdateUserInfo = t }, expression: 'isShowUpdateUserInfo' } }, [n('div', [e._v('This is a fullscreen modal')])]), n('div', { staticClass: 'logo' }), n('MenuView'), n('ul', { staticClass: 'naviction' }, [n('li', { staticClass: 'naviction__item', on: { click: function(t) { return t.stopPropagation(), e.onIconListClick(0) } } }, [n('i', { staticClass: 'fas naviction-icon fa-layer-group', style: e.isShowToolBar ? { color: 'white' } : {} })]), n('li', { staticClass: 'naviction__item', on: { click: function(t) { return t.stopPropagation(), e.onIconListClick(1) } } }, [n('i', { staticClass: 'fas naviction-icon fa-atom' })]), n('li', { staticClass: 'naviction__item', on: { click: function(t) { return t.stopPropagation(), e.onIconListClick(2) } } }, [n('a', { attrs: { href: 'https://www.github.com/wangly19' } }, [n('i', { staticClass: 'fab naviction-icon fa-github' })])]), n('li', { staticClass: 'naviction__item' }, [n('Dropdown', { staticClass: 'naviction__tabs', attrs: { trigger: 'click' } }, [n('Badge', { staticStyle: { height: 'auto', 'line-height': '0' }, attrs: { dot: '' } }, [n('i', { staticClass: 'fas naviction-icon fa-bell' })]), n('template', { slot: 'list' }, [n('div', [n('Tabs', { attrs: { value: 'name1' } }, [n('TabPane', { attrs: { label: '通知(0)', name: 'name1' } }, [e._v('标签一的内容')]), n('TabPane', { attrs: { label: '系统(0)', name: 'name2' } }, [e._v('标签二的内容')])], 1)], 1)])], 2)], 1), n('li', { staticClass: 'naviction__item' }, [n('Dropdown', { attrs: { trigger: 'click' }, on: { 'on-click': e.dropClickEvents } }, [n('Avatar', { staticClass: 'is-mouse', attrs: { src: e.avatar } }), n('DropdownMenu', { attrs: { slot: 'list' }, slot: 'list' }, [n('DropdownItem', { attrs: { name: 0 } }, [e._v('个人资料')]), n('DropdownItem', { attrs: { name: 1 } }, [e._v('退出登录')])], 1)], 1)], 1)])], 1) }; var O = []; var j = (n('ac1f'), n('5319'), n('96cf'), n('1da1')); var _ = n('bee2'); var C = function() { var e = this; var t = e.$createElement; var n = e._self._c || t; return n('Menu', { style: 'background: ' + e.color + ';', attrs: { mode: 'horizontal', theme: 'dark', 'active-name': e.$route.name }, on: { 'on-select': e.onMenuClick } }, [e._l(e.getCurrentRoutes, function(t) { return [!t.meta.hidden && t.children.length < 2 ? n('MenuItem', { attrs: { name: t.children[0].name, to: t.children[0].path } }, [n('i', { staticClass: 'fas', class: t.children[0].meta.icon }), n('span', [e._v(e._s(t.children[0].meta.title))])]) : e._e(), !t.meta.hidden && t.children && t.children.length > 1 ? n('Submenu', { attrs: { name: t.name } }, [n('template', { slot: 'title' }, [n('i', { staticClass: 'fas', class: t.meta.icon }), e._v(' ' + e._s(t.meta.title) + ' ')]), e._l(t.children, function(t) { return [n('MenuItem', { attrs: { name: t.name, to: t.path } }, [n('i', { staticClass: 'fas', class: t.meta.icon }), n('span', [e._v(e._s(t.meta.title))])])] })], 2) : e._e()] })], 2) }; var x = []; var S = (function(e) { function t() { return Object(i['a'])(this, t), Object(c['a'])(this, Object(s['a'])(t).apply(this, arguments)) } return Object(u['a'])(t, e), Object(_['a'])(t, [{ key: 'onMenuClick', value: function(e) { console.log(e) } }, { key: 'created', value: function() { console.log(this.$route) } }]), t }(l['e'])); k['a']([Object(w['b'])('currentRoutes')], S.prototype, 'getCurrentRoutes', void 0), k['a']([Object(w['b'])('colorTheme')], S.prototype, 'color', void 0), S = k['a']([Object(l['a'])({ name: 'headerView' })], S); var T = S; var L = T; var E = Object(h['a'])(L, C, x, !1, null, '5f9a09c6', null); var M = E.exports; var R = (function(e) { function t() { var e; return Object(i['a'])(this, t), e = Object(c['a'])(this, Object(s['a'])(t).apply(this, arguments)), e.isShowUpdateUserInfo = !1, e.iconList = ['fa-angle-double-down', 'fa-atom', 'fa-github', 'fa-bell'], e } return Object(u['a'])(t, e), Object(_['a'])(t, [{ key: 'dropClickEvents', value: (function() { var e = Object(j['a'])(regeneratorRuntime.mark(function e(t) { var n; return regeneratorRuntime.wrap(function(e) { while (1) switch (e.prev = e.next) { case 0:e.t0 = t, e.next = e.t0 === 0 ? 3 : e.t0 === 1 ? 5 : 11; break; case 3:return this.isShowUpdateUserInfo = !0, e.abrupt('break', 11); case 5:return e.next = 7, this.logout(); case 7:return n = e.sent, n ? this.$Message.success('退出成功') : this.$Message.success('退出失败，检查网络'), this.$router.replace({ path: '.login' }), e.abrupt('break', 11); case 11:case 'end':return e.stop() } }, e, this) })); function t(t) { return e.apply(this, arguments) } return t }()) }, { key: 'onIconListClick', value: function(e) { switch (e) { case 0:this.setShowToolBar(!this.isShowToolBar); break; case 1:this.$Message.error('React版本正在奔跑中...'); break; default:this.$Message.error('正在完善中....') } } }, { key: 'created', value: function() { console.log(this.avatar) } }]), t }(l['e'])); k['a']([Object(w['b'])('avatar')], R.prototype, 'avatar', void 0), k['a']([Object(w['a'])('logout')], R.prototype, 'logout', void 0), k['a']([Object(w['b'])('isShowToolBar')], R.prototype, 'isShowToolBar', void 0), k['a']([Object(w['c'])('setShowToolBar')], R.prototype, 'setShowToolBar', void 0), k['a']([Object(w['b'])('colorTheme')], R.prototype, 'color', void 0), R = k['a']([Object(l['a'])({ name: 'headerView', components: { MenuView: M } })], R); var P = R; var D = P; var B = (n('9eae'), Object(h['a'])(D, y, O, !1, null, '3ceae284', null)); var I = B.exports; var N = n('6908'); var A = function() { var e = this; var t = e.$createElement; var n = e._self._c || t; return n('div', { staticClass: 'systemconfig-container' }, [n('h3', [e._v('系统设置')]), n('ul', { staticClass: 'setting-wrapper' }, [n('li', { staticClass: 'color-item' }, [n('p', [e._v('主题色')]), n('ul', { staticClass: 'colors' }, e._l(e.colors, function(t, a) { return n('li', { key: a, on: { click: function(n) { return e.setTheme(t[1]) } } }, [n('Tooltip', { attrs: { content: t[0], placement: 'top' } }, [n('p', { style: 'background: ' + t[1] }, [n('span', { directives: [{ name: 'show', rawName: 'v-show', value: t[1] === e.color, expression: 'item[1] === color' }] })])])], 1) }), 0)])]), n('CellGroup', [n('Cell', { attrs: { title: '当前版本', extra: '1.0.5' } }), n('Cell', { attrs: { title: '开发者', extra: 'wangly' } }), n('Cell', { attrs: { title: '最后更新时间', extra: '2020年2月14日' } }), n('Cell', { attrs: { title: '查看更新内容', to: 'http://www.github.com/wangly' } }), n('Cell', { attrs: { title: '开启搜索框' } }, [n('i-switch', { attrs: { slot: 'extra' }, slot: 'extra', model: { value: e.switchValue1, callback: function(t) { e.switchValue1 = t }, expression: 'switchValue1' } })], 1), n('Cell', { attrs: { title: '开启工具栏' } }, [n('i-switch', { attrs: { slot: 'extra' }, slot: 'extra', model: { value: e.switchValue2, callback: function(t) { e.switchValue2 = t }, expression: 'switchValue2' } })], 1), n('Cell', { attrs: { title: '隐藏LOGO' } }, [n('i-switch', { attrs: { slot: 'extra' }, slot: 'extra', model: { value: e.switchValue3, callback: function(t) { e.switchValue3 = t }, expression: 'switchValue3' } })], 1)], 1)], 1) }; var $ = []; var V = (n('4ec9'), n('d3b7'), n('3ca3'), n('ddb0'), (function(e) { function t() { var e; return Object(i['a'])(this, t), e = Object(c['a'])(this, Object(s['a'])(t).apply(this, arguments)), e.switchValue1 = !1, e.switchValue2 = !1, e.switchValue3 = !1, e.colors = new Map([['优雅灰', '#515a6e'], ['水鸭青', '#00796B'], ['葡萄蓝', '#303F9F'], ['基佬紫', '#512DA8'], ['杨柳绿', '#388E3C'], ['少女粉', '#fb7299']]), e } return Object(u['a'])(t, e), Object(_['a'])(t, [{ key: 'setTheme', value: function(e) { this.setColorTheme(e) } }]), t }(l['e']))); k['a']([Object(w['c'])('setColorTheme')], V.prototype, 'setColorTheme', void 0), k['a']([Object(w['b'])('colorTheme')], V.prototype, 'color', void 0), V = k['a']([l['a']], V); var U = V; var F = U; var z = (n('cbd1'), Object(h['a'])(F, A, $, !1, null, '50b0bcb7', null)); var H = z.exports; var G = (function(e) { function t() { var e; return Object(i['a'])(this, t), e = Object(c['a'])(this, Object(s['a'])(t).apply(this, arguments)), e.isShowSide = !1, e } return Object(u['a'])(t, e), t }(l['e'])); k['a']([Object(w['b'])('isShowToolBar')], G.prototype, 'isShowToolBar', void 0), G = k['a']([Object(l['a'])({ name: 'dash', components: { HeaderView: I, Toolbar: N['a'], SystemSetting: H } })], G); var q = G; var K = q; var J = (n('2bb9'), Object(h['a'])(K, v, g, !1, null, '0ba0e404', null)); var W = J.exports; var Q = [{ path: '/', name: 'dashboard', component: W, redirect: '/dashboard', meta: { title: '仪表盘', icon: 'fa-rocket', hidden: !1 }, children: [{ path: '/dashboard', name: 'dashboard', meta: { title: '仪表盘', icon: 'fa-rocket', hidden: !1 }, component: function(e) { n.e('chunk-947d9ce0').then(function() { var t = [n('a79c')]; e.apply(null, t) }).catch(n.oe) } }] }, { path: '/login', name: 'login', meta: { title: '登录', icon: 'air-login-bars', hidden: !0 }, component: function(e) { n.e('chunk-3b6f00e2').then(function() { var t = [n('d9c9')]; e.apply(null, t) }).catch(n.oe) } }, { path: '/404', name: 'error', meta: { title: '错误页面', icon: '', hidden: !0 }, component: function(e) { n.e('chunk-d606f42a').then(function() { var t = [n('afa4')]; e.apply(null, t) }).catch(n.oe) } }]; var X = Q; n('f2ab'); a['default'].use(b['a']); var Y = new b['a']({ mode: 'history', base: '/', routes: X }); var Z = Y; var ee = n('2f62'); var te = (n('b0c0'), n('5c0a')); function ne(e) { return Object(te['a'])({ url: '/login', method: 'post', data: e }) } function ae() { return Object(te['a'])({ url: '/person', method: 'get' }) } var re = n('09aa'); var oe = { name: '', token: '', avatar: '', roles: [] }; var ie = { _setName: function(e, t) { e.name = t }, _setToken: function(e, t) { e.token = t }, _setAvatar: function(e, t) { e.avatar = t }, _setRoles: function(e, t) { e.roles = t } }; var ce = { LOGIN: function(e, t) { var n = e.commit; return new Promise(function() { var e = Object(j['a'])(regeneratorRuntime.mark(function e(a, r) { var o, i; return regeneratorRuntime.wrap(function(e) { while (1) switch (e.prev = e.next) { case 0:return e.prev = 0, e.next = 3, ne(t); case 3:return o = e.sent, i = o.data, console.log(i), i.success && (Object(re['c'])('token', i.token), n('_setToken', i.token)), e.abrupt('return', a(i)); case 10:return e.prev = 10, e.t0 = e['catch'](0), console.log(e.t0), e.abrupt('return', r({ success: !1, message: '请求失败' })); case 14:case 'end':return e.stop() } }, e, null, [[0, 10]]) })); return function(t, n) { return e.apply(this, arguments) } }()) }, USERINFO: (function() { var e = Object(j['a'])(regeneratorRuntime.mark(function e(t) { var n, a, r; return regeneratorRuntime.wrap(function(e) { while (1) switch (e.prev = e.next) { case 0:return n = t.commit, e.prev = 1, e.next = 4, ae(); case 4:return a = e.sent, r = a.data, n('_setName', r.name), n('_setAvatar', r.avatar), n('_setRoles', r.roles), e.abrupt('return', Promise.resolve(!0)); case 12:e.prev = 12, e.t0 = e['catch'](1), console.error(e.t0, '个人信息接口异常'); case 15:case 'end':return e.stop() } }, e, null, [[1, 12]]) })); function t(t) { return e.apply(this, arguments) } return t }()), logout: function() { return Object(re['b'])('token'), Promise.resolve(!0) } }; var se = { state: oe, mutations: ie, actions: ce }; var ue = { name: function(e) { return e.user.name }, token: function(e) { return e.user.token }, avatar: function(e) { return e.user.avatar }, roles: function(e) { return e.user.roles }, currentRoutes: function(e) { return e.promiss.currentRoutes }, addRoutes: function(e) { return e.promiss.addRoutes }, isShowToolBar: function(e) { return e.app.isShowToolBar }, colorTheme: function(e) { return e.app.colorTheme } }; var le = ue; var de = (n('a4d3'), n('99af'), n('4de4'), n('4160'), n('caad'), n('45fc'), n('e439'), n('dbb4'), n('b64b'), n('2532'), n('159b'), n('ade3')); var fe = function() { var e = this; var t = e.$createElement; var a = e._self._c || t; return a('div', { staticClass: 'map-container' }, [e.showMapComponent ? a('el-amap', { staticClass: 'amap-box', attrs: { vid: e.mapConfig.vid, zoom: e.mapConfig.zoom, center: e.mapConfig.center, amapManager: e.mapManager }, on: { complete: e.onReady } }, [e._l(e.markersList, function(e, t) { return a('el-amap-marker', { key: t, attrs: { position: e.location, visible: !0, vid: t, events: e.event, icon: n('ed31') } }) }), e.windowMarker !== null ? a('el-amap-info-window', { attrs: { position: e.windowMarker.location, isCustom: !0, offset: [9, -50], visible: e.windowMarker.show } }, [a('div', { staticClass: 'map-custom-window' }, [a('div', { staticClass: 'header' }, [a('h3', [e._v('广州白云分厂货仓中心')]), a('Icon', { staticClass: 'close-window', attrs: { type: 'md-close-circle' }, on: { click: function(t) { t.stopPropagation(), e.windowMarker.show = !1 } } })], 1), a('div', { staticClass: 'container' }, [a('p', [e._v('当前地址')]), a('p', [e._v('联系电话')]), a('p', [e._v('厂长')])])])]) : e._e()], 2) : e._e(), a('div', { staticClass: 'kms-tool-container' }, [a('ul', { staticClass: 'side-wrapper' }, [a('li', { staticClass: 'is-tab', class: e.tabIndexDefalut === 0 && 'is-tab__active', on: { click: function(t) { return e.toggleTabTag(0) } } }, [a('h5', [e._v('未处理')]), a('span', [e._v(e._s(e.noStock) + '个')])]), a('li', { staticClass: 'is-tab', class: e.tabIndexDefalut === 1 && 'is-tab__active', on: { click: function(t) { return e.toggleTabTag(1) } } }, [a('h5', [e._v('已处理')]), a('span', [e._v(e._s(e.yesStock) + '个')])])]), a('ul', { directives: [{ name: 'loading', rawName: 'v-loading', value: e.isTreeLoading, expression: 'isTreeLoading' }], staticClass: 'tree-wrapper' }, [a('Empty', { directives: [{ name: 'show', rawName: 'v-show', value: e.kmsListData.length === 0 && !e.isTreeLoading, expression: 'kmsListData.length === 0 && !isTreeLoading' }], attrs: { text: '暂时还没有信息哦！' } }), e._l(e.kmsListData, function(t, n) { return a('li', { key: n, staticClass: 'item' }, [a('Card', { staticClass: 'item__infobox' }, [a('p', { staticClass: 'title' }, [e._v(e._s(t.upName))]), a('Steps', { attrs: { current: t.status, direction: 'vertical', size: 'small' } }, [a('Step', { attrs: { title: '始发地', content: t.startLand } }), a('Step', { attrs: { title: '运输中', content: '正在运输过程中' } }), a('Step', { attrs: { title: '已到达', content: t.endLand } })], 1), a('p', { staticClass: 'text' }, [e._v('更新时间: ' + e._s(t.upDate))])], 1)], 1) })], 2)])], 1) }; var he = []; function pe() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return Object(te['a'])({ url: '/kms/overslist', method: 'get', data: e }) } var me = n('02bc'); var be = (function(e) { function t() { var e; return Object(i['a'])(this, t), e = Object(c['a'])(this, Object(s['a'])(t).apply(this, arguments)), e.mapManager = null, e.mapConfig = { zoom: 12, center: [116.41088, 39.92069], vid: 'kmsMapView' }, e.showMapComponent = !1, e.tabIndexDefalut = 0, e.kmsListData = [], e.isTreeLoading = !1, e.yesStock = 0, e.noStock = 0, e.markersList = [], e.windowMarker = null, e } return Object(u['a'])(t, e), Object(_['a'])(t, [{ key: 'addMakers', value: function(e, t) { var n = this; this.markersList.push({ location: e, show: !0, event: { click: function(e) { var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t; n.callbackMapClick(e, a) } } }) } }, { key: 'toggleTabTag', value: function(e) { this.tabIndexDefalut !== e ? (this.tabIndexDefalut = e, this.getTreeKmsDataList(e)) : this.$Message.success('已经在当前的Tab页') } }, { key: 'onReady', value: function() { console.log('地图加载完成') } }, { key: 'callbackMapClick', value: function(e, t) { console.log(e, t); var n = this.windowMarker; this.windowMarker = { location: t.location, show: !n || !n.show, data: t } } }, { key: 'getTreeKmsDataList', value: (function() { var e = Object(j['a'])(regeneratorRuntime.mark(function e(t) { var n; var a; var r = this; return regeneratorRuntime.wrap(function(e) { while (1) switch (e.prev = e.next) { case 0:return e.prev = 0, this.isTreeLoading = !0, e.next = 4, pe({ flag: t }); case 4:n = e.sent, a = n.data, a.success ? (this.yesStock = a.yesStock, this.noStock = a.noStock, this.kmsListData = a.list, a.list.forEach(function(e) { r.addMakers(e.location, e) })) : this.$Message.error(a.message), this.isTreeLoading = !1, e.next = 13; break; case 10:e.prev = 10, e.t0 = e['catch'](0), this.isTreeLoading = !1; case 13:case 'end':return e.stop() } }, e, this, [[0, 10]]) })); function t(t) { return e.apply(this, arguments) } return t }()) }, { key: 'mounted', value: function() { var e = this; this.$nextTick(function() { e.showMapComponent = !0 }) } }, { key: 'created', value: (function() { var e = Object(j['a'])(regeneratorRuntime.mark(function e() { return regeneratorRuntime.wrap(function(e) { while (1) switch (e.prev = e.next) { case 0:this.getTreeKmsDataList(this.tabIndexDefalut); case 1:case 'end':return e.stop() } }, e, this) })); function t() { return e.apply(this, arguments) } return t }()) }]), t }(l['e'])); be = k['a']([Object(l['a'])({ components: { Toolbar: N['a'], Empty: me['a'] } })], be); var ve = be; var ge = ve; var ke = (n('cce4'), Object(h['a'])(ge, fe, he, !1, null, null, null)); var we = ke.exports; var ye = [{ path: '/deviceManage', name: 'deviceManage', meta: { title: '设备管理', icon: 'fa-adjust', hidden: !1 }, component: W, children: [{ path: '/deviceManage', name: 'deviceManage', meta: { title: '设备管理', icon: 'fa-adjust', hidden: !1 }, component: function(e) { n.e('chunk-38c098e0').then(function() { var t = [n('7a2c')]; e.apply(null, t) }).catch(n.oe) } }] }, { path: '/warningAdmin', name: 'warningAdmin', meta: { title: '警告管理', icon: 'fa-exclamation-triangle', hidden: !1 }, component: W, children: [{ path: '/warningList', name: 'warningList', meta: { title: '实时预警', icon: 'fa-bell', hidden: !1 }, component: function(e) { n.e('chunk-619e0eee').then(function() { var t = [n('f774')]; e.apply(null, t) }).catch(n.oe) } }, { path: '/warningHistory', name: 'warningHistory', meta: { title: '历史报警', icon: 'fa-radiation-alt', hidden: !1 }, component: function(e) { n.e('chunk-2602b94f').then(function() { var t = [n('410d')]; e.apply(null, t) }).catch(n.oe) } }, { path: '/warningNotice', name: 'warningNotice', meta: { title: '设备预警', icon: 'fa-fire-alt', hidden: !1 }, component: function(e) { n.e('chunk-e2a90842').then(function() { var t = [n('944e')]; e.apply(null, t) }).catch(n.oe) } }] }, { path: '/kmsadmin', name: 'kmsadmin', meta: { title: '分布地图', icon: 'fa-truck', hidden: !1 }, component: W, redirect: '/kmsmap', children: [{ path: '/kmsmap', name: 'kmsadmin', meta: { title: '分布地图', icon: 'fa-truck', hidden: !1 }, component: we }] }, { path: '/useradmin', name: 'useradmin', meta: { title: '人员管理', icon: 'fa-user', hidden: !1 }, component: W, redirect: '/useradmin/user', children: [{ path: '/useradmin/user', name: 'user', meta: { title: '账号管理', icon: 'fa-user', hidden: !1 }, component: function(e) { n.e('chunk-5896f3bc').then(function() { var t = [n('7368')]; e.apply(null, t) }).catch(n.oe) } }, { path: '/useradmin/inform', name: 'inform', meta: { title: '账号申报', icon: 'fa-rss-square', hidden: !1 }, component: function(e) { n.e('chunk-7f0368e4').then(function() { var t = [n('7d3d')]; e.apply(null, t) }).catch(n.oe) } }] }, { path: '/AdminSetting', name: 'AdminSetting', meta: { title: '系统设置', icon: 'fa-wrench', hidden: !1 }, component: W, children: [{ path: '/roleSetting', name: 'roleSetting', meta: { title: '权限设置', icon: 'fa-user-shield', hidden: !1 }, component: function(e) { n.e('chunk-dfc49b32').then(function() { var t = [n('4107')]; e.apply(null, t) }).catch(n.oe) } }, { path: '/siteSetting', name: 'siteSetting', meta: { title: '站点设置', icon: 'fa-user-edit', hidden: !1 }, component: function(e) { n.e('chunk-667b7e20').then(function() { var t = [n('6324')]; e.apply(null, t) }).catch(n.oe) } }, { path: '/companySetting', name: 'companySetting', meta: { title: '公司设置', icon: 'fa-building', hidden: !1 } }] }]; var Oe = ye; function je(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); t && (a = a.filter(function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable })), n.push.apply(n, a) } return n } function _e(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t] != null ? arguments[t] : {}; t % 2 ? je(Object(n), !0).forEach(function(t) { Object(de['a'])(e, t, n[t]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : je(Object(n)).forEach(function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }) } return e } var Ce = { currentRoutes: [], addRoutes: [] }; var xe = { _setRoutesList: function(e, t) { e.addRoutes = t, e.currentRoutes = X.concat(t) } }; var Se = { GenerateRoutes: function(e, t) { var n = e.commit; return new Promise(function(e) { var a; a = t.includes('root') ? Oe : Le(Oe, t), n('_setRoutesList', a), console.log(a, 'send'), e(a) }) } }; function Te(e, t) { return !e.meta || !e.meta.roles || t.some(function(t) { return e.meta.roles.includes(t) }) } function Le(e, t) { var n = []; return e.forEach(function(e) { var a = _e({}, e); Te(a, t) && a.children && Le(a.children, t), n.push(a) }), n } var Ee = { state: Ce, mutations: xe, actions: Se }; var Me = { isShowToolBar: !0, colorTheme: '#515a6e' }; var Re = { setShowToolBar: function(e, t) { e.isShowToolBar = t }, setColorTheme: function(e, t) { e.colorTheme = t } }; var Pe = { namespaced: !0, state: Me, mutations: Re }; a['default'].use(ee['a']); var De = new ee['a'].Store({ modules: { user: se, promiss: Ee, app: Pe }, getters: le }); var Be = (n('bd86'), n('5156'), n('f825')); var Ie = n.n(Be); n('f8ce'), n('c975'); function Ne(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); t && (a = a.filter(function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable })), n.push.apply(n, a) } return n } function Ae(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t] != null ? arguments[t] : {}; t % 2 ? Ne(Object(n), !0).forEach(function(t) { Object(de['a'])(e, t, n[t]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach(function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }) } return e } var $e = Be['Message']; var Ve = ['/login', '/404']; Z.beforeEach(function() { var e = Object(j['a'])(regeneratorRuntime.mark(function e(t, n, a) { var r, o, i, c, s, u; return regeneratorRuntime.wrap(function(e) { while (1) switch (e.prev = e.next) { case 0:if (Be['LoadingBar'].start(), t.path !== '/404') { e.next = 5; break } return a(), Be['LoadingBar'].finish(), e.abrupt('return'); case 5:if (r = Object(re['a'])('token'), !r) { e.next = 41; break } if (t.path !== '/login') { e.next = 11; break }a({ path: '/' }), e.next = 39; break; case 11:if (o = De.getters.roles, !(o.length < 1)) { e.next = 38; break } return e.prev = 13, e.next = 16, De.dispatch('USERINFO'); case 16:if (i = e.sent, !i) { e.next = 26; break } return c = De.getters.roles, e.next = 21, De.dispatch('GenerateRoutes', c); case 21:s = e.sent, Z.addRoutes(s), a(Ae({}, t, { replace: !0 })), e.next = 27; break; case 26:a({ path: '/404' }); case 27:e.next = 36; break; case 29:return e.prev = 29, e.t0 = e['catch'](13), e.next = 33, De.dispatch('logout'); case 33:u = e.sent, u && $e.error('令牌授权错误，重新登录'), a('/login'); case 36:e.next = 39; break; case 38:a(); case 39:e.next = 42; break; case 41:Ve.indexOf(t.path) !== -1 ? a() : a('/login'); case 42:case 'end':return e.stop() } }, e, null, [[13, 29]]) })); return function(t, n, a) { return e.apply(this, arguments) } }()), Z.afterEach(function() { Be['LoadingBar'].finish() }); var Ue = n('8f9b'); var Fe = n.n(Ue); setTimeout(function() { a['default'].use(Fe.a) }, 0), Fe.a.initAMapApiLoader({ key: 'dc5c65431e487cb4114b8d3aec6ce22b', plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'], v: '1.4.4' }); n('9dea'); a['default'].directive('loading', { bind: function(e, t) { var n = document.createElement('div'); n.className = 'custom-loading'; var a = document.createElement('div'); a.className = 'custom-loading-round', n.appendChild(a), e.loadingElement = n; var r = window.getComputedStyle(e); var o = r.position; e.style.position = o === 'absolute' || o === 'relative' ? o : 'relative', t.value && e.appendChild(n) }, update: function(e, t) { t.value ? e.loadingElement.parentNode === null && e.appendChild(e.loadingElement) : e === e.loadingElement.parentNode && e.removeChild(e.loadingElement) }, unbind: function(e) { e.loadingElement.parentNode === e && e.removeChild(e.loadingElement), e.loadingElement = null } }); n('15f5'), n('69b0'); var ze = n('3654'); a['default'].use(ze['a']), a['default'].use(Ie.a), a['default'].config.productionTip = !1, new a['default']({ router: Z, store: De, render: function(e) { return e(m) } }).$mount('#app') }, d5c7: function(e, t, n) {}, dbcd: function(e, t, n) { 'use strict'; var a = n('9d73'); var r = n.n(a); r.a }, ed31: function(e, t, n) { e.exports = n.p + 'img/location.ab19836c.svg' }, f2ab: function(e, t, n) { n('99af'), n('4160'), n('d3b7'), n('159b'), n('ddb0'); var a = n('65fa'); var r = []; a.keys().forEach(function(e) { a(e).default instanceof Array ? r.concat(a(e).default) : r.push(a(e).default) }), console.log(r) } })
// # sourceMappingURL=app.88e5b8a7.js.map
