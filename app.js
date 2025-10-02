window.addEventListener('DOMContentLoaded', function(){
  var m = document.querySelector('#menu-ejercicio')
  var v = document.querySelector('#visor')
  var o = document.querySelector('#open-new')

  function activo(x){
    Array.prototype.forEach.call(document.querySelectorAll('.tab-link'), function(n){
      n.classList.remove('active')
    })
    if(x) x.classList.add('active')
  }

  function ir(a){
    if(!a) return
    var h = a.getAttribute('data-href') || a.dataset.href
    if(!h) return
    v.setAttribute('src', h)
    o.setAttribute('href', h)
    activo(a)
    try{ history.replaceState(null,'', a.getAttribute('href')) }catch(_){}
  }

  m && m.addEventListener('click', function(e){
    var t = e.target.closest('.tab-link')
    if(!t) return
    e.preventDefault()
    ir(t)
  })

  var ini = document.querySelector('.tab-link[href="'+location.hash+'"]') || document.querySelector('.tab-link')
  ir(ini)
})
