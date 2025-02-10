const btn = document.getElementById("btn");
let randomNum = () => {
  return Math.floor(Math.random() * 256);
};

let changecolor = () => {
  let randomColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
  document.body.style.backgroundColor = randomColor;
};
btn.addEventListener("click", changecolor);
window.addEventListener("load", changecolor);

// For Experiments use the addEventListener

// btn.addEventListener('mousemove',changecolor)
// btn.addEventListener('mousedown',changecolor)
// btn.addEventListener('mouseenter',changecolor)
// btn.addEventListener('mouseleave',changecolor)
// btn.addEventListener('mouseout',changecolor)
// btn.addEventListener('mouseup',changecolor)
// btn.addEventListener('mouseover',changecolor)
