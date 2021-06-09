const input = document.getElementById("text");
const addButton = document.getElementById("add")
const list = document.getElementById("to-do-items")
const el = document.getElementsByTagName("li")

addButton.addEventListener("click", function(){
  let text = input.value;
  if(text == ''){
    alert('You must write something.')
  }else{
    li = document.createElement('li');
    li.innerHTML = text;
    list.insertBefore(li, list.childNodes[0]);
    input.value = ''
  }
})

list.onclick = function(ev) {
  if (ev.target.tagName == 'LI'){
    ev.target.classList.toggle('checked')
  }
}
