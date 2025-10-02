var d = document.getElementById("info")
console.log("contenido:", d.innerText)

var x = document.querySelector(".detalle")
x.innerHTML = "Este es un detalle modificado"

var ps = document.getElementsByTagName("p")
for(var i=0;i<ps.length;i++){
  ps[i].style.background="#add8e6"
}
