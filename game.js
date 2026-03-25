"use strict"

let firstBox = document.getElementById("firstContainer");
let secondBox = document.getElementById("secondContainer");
let thirdBox = document.getElementById("thirdContainer");
let question = document.getElementById("questionMark");

let answerA = document.getElementById("answer-A");
let answerB = document.getElementById("answer-B");
let answerC = document.getElementById("answer-C");
let answerD = document.getElementById("answer-D");


let score = document.getElementById("score");
let totalScore = document.getElementById("total-score");

let answersScore = 0;

answersScore = score.textContent;



let pageNum = 1;


const numbers = [
    {
        max: 50,
        min: 5
    },
    {
        max: 10,
        min: 0
    },
    {
        max: 40,
        min: 10
    },
    {
        max: 200,
        min: 100
    },
    {
        max: 30,
        min: 5
    }
]



let position = 0;

function startGame (){
    
    firstBox.style.zIndex = 0;
    secondBox.style.zIndex = 1;
    
    firstNumber = (Math.floor(Math.random() * numbers[0].max) + numbers[0].min);
    secondNumber = (Math.floor(Math.random() * numbers[0].max) + numbers[0].min);
    total = firstNumber + secondNumber;

    question.textContent = firstNumber + " + " + secondNumber + " = " + " ? ";

    position = (Math.floor(Math.random() * 4) + 1);

        if(position === 1){
            answerA.textContent = total;
            answerB.textContent = total + 5;
            answerC.textContent = total - 10;
            answerD.textContent = total / 2;
        }
        else if(position === 2){
            answerA.textContent = total + 5;
            answerB.textContent = total;
            answerC.textContent = total - 10;
            answerD.textContent = total / 2;
        }
        else if(position === 3){
            answerA.textContent = total + 5;
            answerB.textContent = total - 10;
            answerC.textContent = total;
            answerD.textContent = total / 2;
        }
        else if(position === 4){
            answerA.textContent = total + 5;
            answerB.textContent = total - 10;
            answerC.textContent = total / 2;
            answerD.textContent = total;
        }
    }


let total = 0;
let firstNumber = 0;
let secondNumber = 0;



function questionAdd(){

    pageNum++;
    
    if(pageNum === 2){

        firstNumber = (Math.floor(Math.random() * numbers[1].max) + numbers[1].min);
        secondNumber = (Math.floor(Math.random() * numbers[1].max) + numbers[1].min);
        total = firstNumber * secondNumber;

        question.textContent = firstNumber + " * " + secondNumber + " = " + " ? ";

        position = (Math.floor(Math.random() * 4) + 1);

        if(position === 1){
            answerA.textContent = total;
            answerB.textContent = total + 5;
            answerC.textContent = total - 10;
            answerD.textContent = total / 2;
        }
        else if(position === 2){
            answerA.textContent = total + 5;
            answerB.textContent = total;
            answerC.textContent = total - 10;
            answerD.textContent = total / 2;
        }
        else if(position === 3){
            answerA.textContent = total + 5;
            answerB.textContent = total - 10;
            answerC.textContent = total;
            answerD.textContent = total / 2;
        }
        else if(position === 4){
            answerA.textContent = total + 5;
            answerB.textContent = total - 10;
            answerC.textContent = total / 2;
            answerD.textContent = total;
        }
    }
    else if(pageNum === 3){
        
        firstNumber = (Math.floor(Math.random() * numbers[2].max) + numbers[2].min);
        secondNumber = (Math.floor(Math.random() * numbers[2].max) + numbers[2].min);
        total = firstNumber - secondNumber;

        question.textContent = firstNumber + " - " + secondNumber + " = " + " ? ";

        position = (Math.floor(Math.random() * 4) + 1);

        if(position === 1){
            answerA.textContent = total;
            answerB.textContent = total + 5;
            answerC.textContent = total - 10;
            answerD.textContent = total / 2;
        }
        else if(position === 2){
            answerA.textContent = total + 5;
            answerB.textContent = total;
            answerC.textContent = total - 10;
            answerD.textContent = total / 2;
        }
        else if(position === 3){
            answerA.textContent = total + 5;
            answerB.textContent = total - 10;
            answerC.textContent = total;
            answerD.textContent = total / 2;
        }
        else if(position === 4){
            answerA.textContent = total + 5;
            answerB.textContent = total - 10;
            answerC.textContent = total / 2;
            answerD.textContent = total;
        }
    }
    else if(pageNum === 4){
        
        firstNumber = (Math.floor(Math.random() * numbers[3].max) + numbers[3].min);
        secondNumber = (Math.floor(Math.random() * numbers[3].max) + numbers[3].min);
        total = firstNumber - secondNumber;

        question.textContent = firstNumber + " - " + secondNumber + " = " + " ? ";

        position = (Math.floor(Math.random() * 4) + 1);

        if(position === 1){
            answerA.textContent = total;
            answerB.textContent = total + 5;
            answerC.textContent = total - 10;
            answerD.textContent = total / 2;
        }
        else if(position === 2){
            answerA.textContent = total + 5;
            answerB.textContent = total;
            answerC.textContent = total - 10;
            answerD.textContent = total / 2;
        }
        else if(position === 3){
            answerA.textContent = total + 5;
            answerB.textContent = total - 10;
            answerC.textContent = total;
            answerD.textContent = total / 2;
        }
        else if(position === 4){
            answerA.textContent = total + 5;
            answerB.textContent = total - 10;
            answerC.textContent = total / 2;
            answerD.textContent = total;
        }
    }
    else if(pageNum === 5){
        
        firstNumber = (Math.floor(Math.random() * numbers[4].max) + numbers[4].min);
        secondNumber = (Math.floor(Math.random() * numbers[4].max) + numbers[4].min);
        total = firstNumber + secondNumber;

        question.textContent = firstNumber + " + " + secondNumber + " = " + " ? ";

        position = (Math.floor(Math.random() * 4) + 1);

        if(position === 1){
            answerA.textContent = total;
            answerB.textContent = total + 5;
            answerC.textContent = total - 10;
            answerD.textContent = total / 2;
        }
        else if(position === 2){
            answerA.textContent = total + 5;
            answerB.textContent = total;
            answerC.textContent = total - 10;
            answerD.textContent = total / 2;
        }
        else if(position === 3){
            answerA.textContent = total + 5;
            answerB.textContent = total - 10;
            answerC.textContent = total;
            answerD.textContent = total / 2;
        }
        else if(position === 4){
            answerA.textContent = total + 5;
            answerB.textContent = total - 10;
            answerC.textContent = total / 2;
            answerD.textContent = total;
        }
    }
    else if(pageNum > 5){

        secondBox.style.zIndex = 0;
        thirdBox.style.zIndex = 1;

        totalScore.textContent = score.textContent + ' / 5';
    }



}



function answerRandomA(word){
    if(position == 1){
        answerA.textContent = "Correct";
    
       score.textContent++;
    }else{
        answerA.textContent = "Fail";
        
    }
    return word;
}

answerRandomA(answerA);

function answerRandomB(word){
    if(position == 2){
        answerB.textContent = "Correct";
        
        score.textContent++;
    }else{
        answerB.textContent = "Fail";
        
    }
    return word;
}

answerRandomB(answerB);

function answerRandomC(word){
    if(position == 3){
        answerC.textContent = "Correct";
        
        score.textContent++;
    }else{
        answerC.textContent = "Fail";
       
    }
    return word;
}

answerRandomD(answerC);

function answerRandomD(word){
    if(position == 4){
        answerD.textContent = "Correct";
        
        score.textContent++;
    }else{
        answerD.textContent = "Fail";
       
    }
    return word;
}

answerRandomD(answerD);


function backToStart(){
    firstBox.style.zIndex = 1;
    secondBox.style.zIndex = 0;

    score.textContent = 0;
}

function firstPage(){

    firstBox.style.zIndex = 1;
    secondBox.style.zIndex = 0;
    thirdBox.style.zIndex = 0;
    pageNum = 0;

    score.textContent = 0;
}

function restartGame(){

    firstBox.style.zIndex = 0;
    secondBox.style.zIndex = 1;
    thirdBox.style.zIndex = 0;
    pageNum = 1;

    score.textContent = 0;
}