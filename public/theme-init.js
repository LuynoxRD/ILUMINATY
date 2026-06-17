(function () {
  try {
    var stored = localStorage.getItem('iluminaty-theme')
    var preference = stored === 'light' || stored === 'dark' || stored === 'system'
      ? stored
      : 'system'
    var theme = preference === 'system'
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : preference

    if (!stored)
      localStorage.setItem('iluminaty-theme', 'system')

    document.documentElement.classList.add(theme)
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.setAttribute('data-theme-preference', preference)
  }
  catch (e) {
    if (e instanceof DOMException && e.name === 'SecurityError') {
      console.warn('ILUMINATY: localStorage bloqueado por el navegador. Usando tema claro por defecto.')
    }
  }
})()
