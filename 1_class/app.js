h1 = document.querySelector("div.hello:first-child h1");
//h1 = document.getElementById('hello h1');

function handleTitleClick() {
  // h1.className = "active";

  const clickedClass = "clicked";

  // if ( h1.classList.contains(clickedClass) === "active") {
  // if ( h1.classList.contains(clickedClass)) {
  //   // h1.className = "";
  //   h1.classList.remove(clickedClass);
  // } else {
  //   // h1.className = clickedClass;
  //   h1.classList.add(clickedClass);
  // }

    h1.classList.toggle(clickedClass);

  // const currentColor = h1.style.color;
  // let newColor;

  // if(currentColor === "blue") {
  //     newColor = "tomato";
  // } else {
  //     newColor = "blue";
  // }

  // h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
