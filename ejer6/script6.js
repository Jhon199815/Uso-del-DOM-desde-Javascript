var txt = document.querySelector("#taskText")
var btn = document.querySelector("#addTask")
var ul  = document.querySelector("#taskList")

function nuevaTarea(t){
  var li = document.createElement("li")
  li.className = "list-group-item"

  var chk = document.createElement("button")
  chk.innerHTML = "✔"
  chk.className = "btn btn-sm btn-outline-success"

  var sp = document.createElement("span")
  sp.innerHTML = t

  var del = document.createElement("button")
  del.innerHTML = "✖"
  del.className = "btn btn-sm btn-outline-danger"

  li.appendChild(chk)
  li.appendChild(sp)
  li.appendChild(del)

  chk.onclick = function(){
    li.classList.toggle("done")
  }

  del.onclick = function(){
    if(confirm("¿Seguro que quieres eliminar esta tarea?")){
      ul.removeChild(li)
    }
  }

  return li
}

btn.onclick = function(){
  var v = txt.value.trim()
  if(v.length==0){ txt.focus(); return }
  var item = nuevaTarea(v)
  ul.appendChild(item)
  txt.value=""
  txt.focus()
}

txt.onkeydown = function(e){
  if(e.key=="Enter"){ btn.click() }
}
