var c = document.querySelector("#clickMe")
var r = document.querySelector("#removeEvent")

function h(){
  alert("¡Botón clickeado!")
}

c.onclick = h

r.onclick = function(){
  c.onclick = null
  r.disabled = true
  r.innerHTML = "Evento eliminado"
}
