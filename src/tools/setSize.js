(function(doc, win) {

  const docEl = doc.documentElement,

    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',

    recalc = function() {

      let clientWidth = docEl.clientWidth;

      if (!clientWidth) return

      docEl.style.fontSize = 50 * (clientWidth / 375) + 'px'

      console.log(docEl.style.fontSize)

    }

  if (!doc.addEventListener) return

  win.addEventListener(resizeEvt, recalc, false)

  doc.addEventListener('DOMContentLoaded', recalc, false)

})(document, window)
