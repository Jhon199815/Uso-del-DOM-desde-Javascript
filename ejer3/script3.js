function nuevoP(){
  var p = document.createElement("p")
  p.innerHTML = "Este es un párrafo creado dinámicamente"
  p.className = "mb-0"
  document.querySelector(".card").appendChild(p)
}

nuevoP()
document.getElementById("crear").onclick = nuevoP

document.getElementById("eliminar").onclick = function(){
  var p0 = document.querySelector(".card p")
  if(p0){ p0.parentNode.removeChild(p0) }
}
