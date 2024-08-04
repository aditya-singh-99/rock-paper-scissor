var userScore=0
var compScore=0
const result=document.querySelector('#result')
const user_score=document.querySelector('#user-score')
const comp_score=document.querySelector('#comp-score')

let choices=document.querySelectorAll('.choice')
for(let choice of choices)
{
    choice.addEventListener("click",()=>{
        fun(choice.getAttribute('id'))
    })
}

function fun(userChoice){
    let choices=['rock','paper','scissor']
    let compChoice=choices[Math.floor(Math.random()*3)]
    if(userChoice==compChoice)
    {
        draw()
    }
    else if(userChoice=='rock')
    {
        if(compChoice=='scissor')
        win()
        else
        lose()
    }
    else if(userChoice=='paper')
    {
        if(compChoice=='rock')
        win()
        else
        lose()
    }
    else
    {
        if(compChoice=='paper')
        win()
        else
        lose()
    }
}

function draw(){
    result.innerHTML='It is a DRAW'
}
function win(){
    userScore++
    user_score.innerHTML=userScore
    result.innerHTML='It is a WIN'
}
function lose(){
    compScore++
    comp_score.innerHTML=compScore
    result.innerHTML='It is a LOSE'
}