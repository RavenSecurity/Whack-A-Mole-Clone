let level = 0;
let maxHittableTime = 7;
let minHittableTime = 4;

function randMinMax(max, min)
{
    let rand = Math.floor(Math.random() * (max - min)) + min;
    return rand * 1000;
}

function wrongAnswer()
{
    while (1)
        alert("you lost, refresh page and try again");
}

function rigthAnswer()
{
    alert("right answer my dude");
}

function selectRandDiv()
{
    let allDivs = document.body.querySelectorAll(".hole");
    let randDiv = allDivs[randMinMax(0, 12)/1000];
    randDiv.style.background = "white";

    for(let i = 0; i < allDivs.length; i++){
        if(allDivs[i] !== randDiv)
            allDivs[i].addEventListener("click", wrongAnswer);
    }
    randDiv.addEventListener("click", rigthAnswer);
}

//display the game grid when clicking on the start button
function displayGame()
{
    document.body.querySelector(".start").style.display = "none";
    let p = document.createElement("p");
    let container = document.createElement("div");
    document.body.appendChild(container);
    document.body.appendChild(p);
    container.setAttribute("class", "container");
    p.setAttribute("class", "score");
    let newDiv;
    for (let i = 0; i < 12; i++)
    {
        newDiv = document.createElement("div");
        container.appendChild(newDiv);
        newDiv.setAttribute("class", "hole");
    }
    p.innerHTML = "Score : 0";
}
document.querySelector(".start").addEventListener("click", () => {
    displayGame()
    selectRandDiv()
});





// setInterval(selectRandDiv, randMinMax(maxHittableTime, minHittableTime))