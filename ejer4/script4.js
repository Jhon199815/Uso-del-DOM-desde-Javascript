var b = document.querySelector("#reemplazar")
b.onclick = function(){
  var v = document.querySelector("#viejo")
  var c = v.parentNode
  var n = document.createElement("div")
  n.setAttribute("class","alert alert-success")
  n.innerHTML = "Soy un nuevo div "
  c.replaceChild(n,v)
}

