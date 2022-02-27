let kimCounter = 0; 
let kourtneyCounter = 0; 
let khloeCounter = 0; 

var kimpercent = 0;
var kourtneypercent = 0;
var klhoepercent = 0; 

var gkimcounter = 0;
var gkourtneycounter = 0;
var gklhoecounter = 0;

const kimQuestions = () => {
    let questionTwo = document.quiz.questionTwo.value;
    let questionFour = document.quiz.questionFour.value;
    let questionSeven = document.quiz.questionSeven.value;
    let questionTen = document.quiz.questionTen.value;
    let questionThirteen = document.quiz.questionThirteen.value;
    let questionSixteen = document.quiz.questionSixteen.value;
    
    if(questionTwo === 'Yes') {
        kimCounter++;
    }
    if(questionFour === 'Yes') {
        kimCounter++;
    }
    if(questionSeven === 'Yes') {
        kimCounter++;
    }
    if(questionTen === 'Yes') {
        kimCounter++;
    }
    if(questionThirteen === 'Yes') {
        kimCounter++;
    }
    if(questionSixteen === 'Kim') {
        kimCounter++;
    }
    kimpercent = (((kimCounter/16) *100) - 100)*-1;
    gkimcounter = kimCounter;
};

const kourtneyQuestions = () => {
    let questionOne = document.quiz.questionOne.value;
    let questionSix = document.quiz.questionSix.value;
    let questionNine = document.quiz.questionNine.value;
    let questionTwelve = document.quiz.questionTwelve.value;
    let questionFifteen = document.quiz.questionFifteen.value;
    let questionSixteen = document.quiz.questionSixteen.value;

     
    if(questionOne === 'Yes') {
        kourtneyCounter++;
    }
    if(questionSix === 'Yes') {
        kourtneyCounter++;
    }
    if(questionNine === 'Yes') {
        kourtneyCounter++;
    }
    if(questionTwelve === 'Yes') {
        kourtneyCounter++;
    }
    if(questionFifteen === 'Yes') {
        kourtneyCounter++;
    }
    if(questionSixteen === 'Kourtney') {
        kourtneyCounter++;
    }
    kourtneypercent = (((kourtneyCounter/16) *100) - 100)*-1;    
    gkourtneycounter = kourtneyCounter;
};

const khloeQuestions = () => {
    let questionThree = document.quiz.questionThree.value;
    let questionFive = document.quiz.questionFive.value;
    let questionEight = document.quiz.questionEight.value;
    let questionEleven = document.quiz.questionEleven.value;
    let questionFourteen = document.quiz.questionFourteen.value;
    let questionSixteen = document.quiz.questionSixteen.value;
     
    if(questionThree === 'Yes') {
        khloeCounter++;
    }
    if(questionFive === 'Yes') {
        khloeCounter++;
    }
    if(questionEight === 'Yes') {
        khloeCounter++;
    }
    if(questionEleven === 'Yes'  ) {
        khloeCounter++;
    }
    if(questionFourteen === 'Yes') {
        khloeCounter++;
    }
    if(questionSixteen === 'Khloe') {
        khloeCounter++;
        
    }
    klhoepercent = (((khloeCounter/16) *100 - 100))*-1;    
    gklhoecounter = khloeCounter;
};

const checkAnswers = () => {
    if (kimCounter > khloeCounter && kimCounter > kourtneyCounter)
    {
        document.getElementById("results").innerHTML = (`Your personality is like Kim! ${kimCounter}`); 
    } else if (khloeCounter > kimCounter && khloeCounter > kourtneyCounter)
    {
        document.getElementById("results").innerHTML = (`Your personality is like Khloe! ${khloeCounter}`); 
    } else if (kourtneyCounter > kimCounter && kourtneyCounter > khloeCounter)
    {
        document.getElementById("results").innerHTML = (`Your personality is like Kourtney! ${kourtneyCounter}`);
    }
};

function initialize()
{
    var result = "You are " + kimpercent + "% Kim, " + kourtneypercent + "% Kourtney, " + klhoepercent + "% Khloe!"
    alert(result)
    
    var result2 = "You are most likely a " + mostLikely(); + "Kardashian";
    alert(result2);
}
function mostLikely()
{
    var mostlikely;
    if (gkimcounter > gkourtneycounter && gklhoecounter)
        {
            mostlikely = "Kim";
        }
  else if (gkourtneycounter > gkimcounter && gklhoecounter)
        {
            mostlikely = "Kourtney";
        }
    else if (gklhoecounter > gkimcounter && gkourtneycounter)
        {
            mostlikely = "Khloe";
        }
    else 
        {
            mostlikely = "mix of";
        }
    return mostlikely
}
