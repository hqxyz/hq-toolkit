(function (w, c, ce, ac, h) {
  if (!w) {
    return
  }
  const d = w.document
  let g
  const gr = ['logoUrl', 'url', 'name']
  w.hq = {
    v: '0.1.3'
  }
  hq.init = function (o) {
    if (!o) {
      c.error('HQ could not be initialised. ' + gr.join(', ') + ' are all required parameters.')
      return
    }
    const t = Object.keys(o).reduce(function (a, v) {
      if (gr.includes(v)) {
        a[v] = o[v]
      }
      return a
    }, {})
    if (o.staging) {
      t.staging = true
    }
    if (Object.keys(t).length < gr.length) {
      c.error('HQ could not be initialised. ' + gr.join(', ') + ' are all required parameters.')
    } else {
      g = t
      c.debug('HQ v' + w.hq.v + ' has been initialised.')
    }
  }
  hq.multisend = function ({
    recipients,
    purpose,
    elem,
    label
  }) {
    if (!g) {
      c.error('HQ has not been initialised. Call hq.init() first')
      return
    }
    const e = d.getElementById(elem)
    if (!e) {
      c.error('HQ multisend requires elem to be a valid DOM element id')
      return
    }
    if (!purpose && purpose.length > 4) {
      c.error('HQ multisend requires a transaction purpose')
      return
    }
    if (!Array.isArray(recipients)) {
      c.error('HQ multisend requires an array of recipients')
      return
    }
    const f = d[ce]('form')
    f.method = 'post'
    f.action = 'https://' + (g.staging ? 'staging' : 'app') + '.hq.xyz/multisend'
    f.style = 'border: 1px solid #ddd; background: #fff; padding: 1rem; border-radius: 1rem; display: inline-block; width: auto;'
    Object.keys(g).forEach(function (k) {
      const i = d[ce]('input')
      i.type = h
      i.name = 'platform' + k.charAt(0).toUpperCase() + k.substring(1)
      i.value = g[k]
      f[ac](i)
    })
    recipients.forEach(function (r) {
      Object.keys(r).forEach(function (k) {
        const i = d[ce]('input')
        i.type = h
        i.name = 'recipients[][' + k + ']'
        i.value = r[k]
        f[ac](i)
      })
    })
    const i = d[ce]('input')
    i.type = h
    i.name = 'purpose'
    i.value = purpose
    f[ac](i)
    const b = d[ce]('button')
    b.style = 'appearance: none; border: 0; color: #fff; background: #000; font-size: 16px; font-family: Inter, sans-serif; cursor: pointer; font-weight: bold; padding: 1rem 2rem; border-radius: 2rem;'
    b.innerText = label || 'Send transaction with HQ Multisend'
    b.disabled = !recipients.length
    f[ac](b)
    const v = d[ce]('div')
    v.style = 'font-size: 14px; font-family: Inter, sans-serif; color: #000; text-align: center; width: 100%;'
    v.innerText = 'Powered by '
    const a = d[ce]('a')
    a.src = 'https://www.hq.xyz'
    a.target = '_blank'
    a.style = 'color: #000; display: inline-block; margin-top: .2em;'
    a.innerText = 'Headquarters'
    v[ac](a)
    f[ac](v)
    if (e.hasChildNodes()) {
      e.childNodes.forEach(function (n) {
        e.removeChild(n)
      })
    }
    e[ac](f)
  }
})(typeof window !== 'undefined' ? window : null, console, 'createElement', 'appendChild', 'hidden')