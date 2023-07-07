let Nodelist = document.getElementsByTagName("li");
let i;
for (i = 0; i < Nodelist.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("×");
  span.className = "close";
  span.appendChild(txt);
  Nodelist[i].appendChild(span);
}

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("Input").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
  alert("inch vor bann gri!");
  } else {
    document.getElementById("UL").appendChild(li);
  }
  document.getElementById("Input").value = "";
  let span = document.createElement("span");
  let txt = document.createTextNode("×");
  span.classList = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
        console.log(this);
    }
  }
}
let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  let div = this.parentElement;
  div.remove()
  }
}
