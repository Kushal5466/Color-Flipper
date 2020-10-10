const colors = ["green","red","rgba{133,122,200}","#f15025","yellow","pink","blue","violet","blueviolet","brown","coral","CadetBlue","grey","Gray","GoldenRod","GhostWhite","Olive"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click',function()
{
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber()
{
    return Math.floor(Math.random() * colors.length);
}

