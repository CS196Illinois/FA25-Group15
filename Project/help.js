const questionSets = {
    drugs: {
        name:"Drugs",
        category: "drugs", 
        questions: [
        {
        question: "Drug levels",
        category: "drugs", 
        options: [
            {text: "1", points: 5},
            {text: "2", points: 10},
            {text: "3", points: 15}
        ]
    }, 
    {
        question: "Drug follow-up",
        category: "drugs",
        options: [
            {text: "1", points: 5},
            {text: "2", points: 10},
            {text: "3", points: 15}
        ]
    }
    ]},
    alcohol: {
        name:"Alcohol",
        category: "alcohol",
        questions: [
        {
        question: "Alcohol levels",
        category: "alcohol",
        options: [
            {text: "1", points: 5},
            {text: "2", points: 10},
            {text: "3", points: 15}
        ]
    }, 
    {
        question: "Alcohol follow-up",
        category: "alcohol",
        options: [
            {text: "1", points: 5},
            {text: "2", points: 10},
            {text: "3", points: 15}
        ]
    }
    ]},
    smoking: {
        name:"Smoking",
        category: "smoking",
        questions: [
        {
        question: "Smoking levels",
        category: "smoking",
        options: [
            {text: "1", points: 5},
            {text: "2", points: 10},
            {text: "3", points: 15}
        ]
    }, 
    {
        question: "Smoking follow-up",
        category: "smoking",
        options: [
            {text: "1", points: 5},
            {text: "2", points: 10},
            {text: "3", points: 15}
        ]
    }
    ]}
}

let allQs = [];
let selectedLevels = new Set();

const questionEl = document.getElementById("question");
const answerButton = document.getElementById("options1");
const nextButton = document.getElementById("next");

let currentQuestionNum = 0;
let scoreD = 0;
let scoreA = 0;
let scoreS = 0;

function showInitialChoice() {
    questionEl.innerHTML = "Select your issues";
    answerButton.innerHTML = "";
    
    Object.keys(questionSets).forEach(typeKey => {
        const type = questionSets[typeKey];
        const button = document.createElement("button");
        button.innerHTML = type.name;
        button.classList.add("option");
        button.dataset.type = typeKey;
        
        button.addEventListener("click", () => {
            if (selectedLevels.has(typeKey)) {
                selectedLevels.delete(typeKey);
                button.classList.remove("selected");
            } else {
                selectedLevels.add(typeKey);
                button.classList.add("selected");
            }
        });
        
        answerButton.appendChild(button);
    });
    
    const startButton = document.createElement("button");
    startButton.innerHTML = "Start Quiz";
    startButton.classList.add("start");
    startButton.addEventListener("click", () => {
        if (selectedLevels.size > 0) {
            startQuiz();
        } else {
            alert("Please select at least one issue!");
        }
    });
    answerButton.appendChild(startButton);
}

function startQuiz() {
    allQs = [];
    selectedLevels.forEach(level => {
        allQs = allQs.concat(questionSets[level].questions);
    });
    currentQuestionNum = 0;
    scoreD = 0;
    scoreA = 0;
    scoreS = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = allQs[currentQuestionNum];
    let questionNo = currentQuestionNum + 1;
    questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerHTML = option.text;
        button.classList.add("option");
        button.dataset.points = option.points;
        button.dataset.category = currentQuestion.category; 
        answerButton.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    
    Array.from(answerButton.children).forEach(btn => {
        btn.classList.remove("selected");
    });
    
    selectedBtn.classList.add("selected");
    
    const points = parseInt(selectedBtn.dataset.points);
    const category = selectedBtn.dataset.category;
    
    if (category === "drugs") {
        scoreD += points;
        console.log("Drugs score:", scoreD);
    } else if (category === "alcohol") {
        scoreA += points;
        console.log("Alcohol score:", scoreA);
    } else if (category === "smoking") {
        scoreS += points;
        console.log("Smoking score:", scoreS);
    }
    
    nextButton.style.display = "block";
}

function getResults() {
    let results = [];
    
    if (selectedLevels.has("drugs")) {
        const drugResult = getDrugResult(scoreD);
        results.push(drugResult);
    }
    
    if (selectedLevels.has("alcohol")) {
        const alcoholResult = getAlcoholResult(scoreA);
        results.push(alcoholResult);
    }
    
    if (selectedLevels.has("smoking")) {
        const smokingResult = getSmokingResult(scoreS);
        results.push(smokingResult);
    }
    
    return results;
}

function getDrugResult(score) {
    if (score <= 10) {
        return {
            category: "Drugs",
            level: "Low",
            message: "low drug",
            color: "#4CAF50"
        };
    } else if (score <= 20) {
        return {
            category: "Drugs",
            level: "Medium",
            message: "med drug",
            color: "#FF9800"
        };
    } else {
        return {
            category: "Drugs",
            level: "High",
            message: "high drug",
            color: "#F44336"
        };
    }
}

function getAlcoholResult(score) {
    if (score <= 10) {
        return {
            category: "Alcohol",
            level: "low",
            message: "low alcohol",
            color: "#4CAF50"
        };
    } else if (score <= 20) {
        return {
            category: "Alcohol",
            level: "Medium",
            message: "mediyum alcohol",
            color: "#FF9800"
        };
    } else {
        return {
            category: "Alcohol",
            level: "high",
            message: "high alcohol",
            color: "#F44336"
        };
    }
}

function getSmokingResult(score) {
    if (score <= 10) {
        return {
            category: "Smoking",
            level: "low",
            message: "low smoking",
            color: "#4CAF50"
        };
    } else if (score <= 20) {
        return {
            category: "Smoking",
            level: "med",
            message: "medium smoking",
            color: "#FF9800"
        };
    } else {
        return {
            category: "Smoking",
            level: "high",
            message: "high smoking",
            color: "#F44336"
        };
    }
}

function getScoreForCategory(category) {
    if (category === "Drugs") return scoreD;
    if (category === "Alcohol") return scoreA;
    if (category === "Smoking") return scoreS;
    return 0;
}

function showResults() {
    resetState();
    const results = getResults();
    
    let resultsHTML = '<div class="results-container">';
    resultsHTML += '<h2>Your Results</h2>';
    
    results.forEach(result => {
        resultsHTML += `
            <div class="result-card" style="border-left: 5px solid ${result.color};">
                <h3>${result.category}: ${result.level}</h3>
                <p>${result.message}</p>
                <p class="score">Score: ${getScoreForCategory(result.category)}</p>
            </div>
        `;
    });
    
    resultsHTML += '</div>';
    questionEl.innerHTML = resultsHTML;
    
    // Add a restart button
    const restartButton = document.createElement("button");
    restartButton.innerHTML = "Take Quiz Again";
    restartButton.classList.add("start");
    restartButton.addEventListener("click", () => {
        selectedLevels.clear();
        showInitialChoice();
    });
    answerButton.appendChild(restartButton);
}

function handleNextButton() {
    currentQuestionNum++;
    if (currentQuestionNum < allQs.length) {
        showQuestion();
    } else {
        showResults();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionNum < allQs.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

showInitialChoice();