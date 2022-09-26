const eyes = document.getElementsByClassName("eye");
const balls = document.getElementsByClassName("ball");

document.addEventListener('mousemove', (event) => {
    var x = (event.clientX * 100) / window.innerWidth + "%";
    var y = (event.clientY * 100) / window.innerHeight + "%";

    for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transform = "translate(-" + x + ",-" + y + ")";
    }
})


document.querySelectorAll('.eye').forEach((eye) => {
    eye.addEventListener('mouseenter', () => {
        eye.classList.add("close-eye")
        setTimeout(() => eye.classList.remove("close-eye"), 150);
    })
});


const myCursor = document.querySelector('.my-cursor');
const moveCursor = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    myCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  }

window.addEventListener('mousemove', moveCursor)
