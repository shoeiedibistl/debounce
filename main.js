const showBtn = document.querySelector(".show-button");
elements = document.querySelectorAll(".element");

function showElements (){
    elements.forEach(e => e.classList.toggle("show"));
    (elements[0].classList.contains("show")) ? showBtn.innerHTML = "Скрыть элементы" : showBtn.innerHTML = "Показать элементы";
}

function debounce(myFunc, myTime) {

    let waitMe = false;
  
    return function() {
      if (waitMe) return;
      myFunc.apply(this, arguments);
      waitMe = true;
      setTimeout(() => waitMe = false, myTime);
    };
}

const debounceShow = debounce(showElements, 1000);

showBtn.addEventListener("click", debounceShow);