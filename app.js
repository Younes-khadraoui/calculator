let done = false;
const buttons = document.querySelectorAll('.button');
const screen = document.querySelector('.screen-text')
const reset = document.querySelector('.reset');
const equal = document.querySelector('.equal');
const delet = document.querySelector('.delet');
const nom = document.querySelector('.nom');
buttons.forEach(buttons => {
  buttons.addEventListener("click", () => {
    const text = buttons.textContent;
    if(done===true){
      screen.textContent = text;
      done = false;
    }else{
      screen.textContent += text;
    }
  });
});
reset.addEventListener("click", () => {
  screen.textContent = '';
});
equal.addEventListener("click", () => {
  done = true;
  const resultat = eval(screen.textContent);
  screen.textContent = resultat.toFixed(2);
}); 
delet.addEventListener("click", () => {
  if(done == true){
    screen.textContent = ''
    done = false;
  }else{
    screen.textContent = screen.textContent.slice(0,-1);
  }
  alert("hello world!");
});
nom.addEventListener("click",() => {
  window.open("https://github.com/Younes-khadraoui");
});