const questionSets = {
    
    doomscrolling: {
        name:"Doomscrolling 📱",
        category: "doomscrolling", 
        questions: [
        {
        question: "Doomscrolling levels",
        category: "doomscrolling", 
        options: [
            {text: "🟡 I scroll through social media posts/news, but I can stop myself after a certain amount of time.", points: 5},
            {text: "🟠  I feel the need to stay-up-to-date with social media to “feel in control over negative events around me, but I have some control over my scrolling. I may have some trouble falling asleep or notice more tension in my body after scrolling.", points: 10},
            {text: "🔴  I find myself scrolling through social media nonstop. I react negatively if I am separated from access to these info sources and might begin to feel anxious, experience a general decrease in my mood/eating habits, or begin drinking or smoking more.", points: 15}
        ]
    }
    ]},
    drinking: {
        name:"Drinking 🍺" ,
        category: "drinking",
        questions: [
            {
                question: "Drinking levels: select which statement applies to you.",
                category: "drinking",
                options: [
                    {text: "🟡 I have 1-2 drinks a day (< 14 drinks a week).",  points: 5},
                    {text: "🟠 I have 3-4 drinks a day / 14 drinks a week.",  points: 10},
                    {text: "🔴 I have 5+ drinks a day (> 14 drinks a week).",  points: 15}
                ]
            },
        ]},
    
    drugs: {
        name:"Drugs 🍃",
        category: "drugs", 
        questions: [
        {
        question: "Drug levels",
        category: "drugs", 
        options: [
            {text: "🟡 I have experimented with drugs or substances.", points: 5},
            {text: "🟠 I use drugs or substances regularly (daily, weekly, etc.)", points: 10},
            {text: `🔴 I use drugs or substances frequently (multiple times a day, every day), and feel reliant on drugs to get through the day.
`, points: 15}
        ]
    }
    ]},
    exercise: {
        name:"Exercise 💪" ,
        category: "exercise",
        questions: [
            {
                question: "Exercise levels",
                category: "exercise",
                options: [
                    {text: `🟡 I exercise once a week. I don’t focus on doing moderate/anaerobic exercise or strength training. It just depends on how I feel.`,  points: 5},
                    {text: "🟠 I rarely exercise, it could be as often a month, or yearly.",  points: 10},
                    {text: `🔴 I never exercise. I just don’t feel like it or can’t work up the energy to do it, or I’m not sure how to get started.`,  points: 15}
                ]
            }
        ]},
    vitaminc: {
        name:"Vitamin C 🍊" ,
        category: "vitaminc",
        questions: [
            {
                question: "Vitamin C levels",
                category: "vitaminc",
                options: [
                    {text: "🟡 I consume Vitamin C supplements or foods/drinks with vitamin C once a week (e.g. fruits, vegetables).", points: 5},
                    {text: "🟠 I consume Vitamin C supplements or foods/drinks with vitamin C biweekly/monthly/less frequently (e.g. fruits, vegetables).", points: 10},
                    {text: "🔴 I never consume Vitamin C supplements or foods/drinks with vitamin C(e.g. fatty fish - salmon, tuna, egg yolks, yogurt, orange juice).", points: 15}
                ]
            }
        ]},
    vitamind: {
        name:"Vitamin D ☀️" ,
        category: "vitamind",
        questions: [
            {
                question: "Vitamin D levels",
                category: "vitamind",
                options: [
                    {text: "🟡 I consume Vitamin D supplements or foods/drinks with vitamin D, or spend time in the sun once a week (e.g. fatty fish - salmon, tuna, egg yolks, yogurt, orange juice).", points: 5},
                    {text: `🟠 I consume Vitamin D supplements or foods/drinks with vitamin D, or spend time in the sun biweekly/monthly/less frequently (e.g. fatty fish - salmon, tuna, egg yolks, yogurt, orange juice).`, points: 10},
                    {text: "🔴 I never consume Vitamin D supplements or foods/drinks with vitamin D, or spend time in the sun (e.g. fatty fish - salmon, tuna, egg yolks, yogurt, orange juice).", points: 15}
                ]
            },
        ]},
    overeating: {
        name:"Overeating 🍴" ,
        category: "overeating",
        questions: [
            {
                question: "Overeating levels",
                category: "overeating",
                options: [
                    {text: "🟡 I overeat once a week.", points: 5},
                    {text: "🟠 I overeat a couple times a week.", points: 10},
                    {text: "🔴 I overeat daily, over multiple weeks or more.", points: 15}
                ]
            },
        ]},
    sleepquantity: {
        name:"Sleep Quantity 😴" ,
        category: "sleepquantity",
        questions: [
            {
                question: "Sleep Quantity levels",
                category: "sleepquantity",
                options: [
                    {text: "🟡 I sleep 5 - 7 hours a night.", points: 5},
                    {text: "🟠 I sleep 1 - 5 hours/night.", points: 10},
                    {text: "🔴 I don’t sleep at all.", points: 15}
                ]
            },
        ]},
    
    smoking: {
        name:"Smoking 🚬",
        category: "smoking",
        questions: [
        {
        question: "Smoking levels",
        category: "smoking",
        options: [
            {text: "🟡 I smoke once a week or less.", points: 5},
            {text: "🟠 I smoke once or twice a day.", points: 10},
            {text: "🔴 I smoke more than 1-2 times a day.", points: 15}
        ]
    }, 
    ]},
    undereating: {
        name:"Undereating 🍴" ,
        category: "undereating",
        questions: [
            {
                question: "Undereating levels",
                category: "undereating",
                options: [
                    {text: "🟡 I undereat once a week.", points: 5},
                    {text: "🟠 I undereat a couple times a week.", points: 10},
                    {text: "🔴 I undereat daily, and over several weeks or more.", points: 15}
                ]
            },
        ]}
}

let allQs = [];
let selectedLevels = new Set();

const questionEl = document.getElementById("question");
const answerButton = document.getElementById("options1");
const nextButton = document.getElementById("next");

let currentQuestionNum = 0;
let scoreDo = 0;
let scoreDri = 0;
let scoreDru = 0;
let scoreExc = 0;
let scoreVc = 0;
let scoreVd = 0;
let scoreO = 0;
let scoreSq = 0;
let scoreSm = 0;
let scoreU = 0;

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
    startButton.innerHTML = "Start Quiz ➡️";
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
    scoreDo = 0;
    scoreDri = 0;
    scoreDru = 0;
    scoreExc = 0;
    scoreVc = 0;
    scoreVd = 0;
    scoreO = 0;
    scoreSq = 0;
    scoreSm = 0;
    scoreU = 0;
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
    
    if (category === "doomscrolling") {
        scoreDo = points;
        console.log("Doomscrolling score:", scoreDo);
    } else if (category === "drinking") {
        scoreDri = points;
        console.log("Drinking score:", scoreDri);
    } else if (category === "drugs") {
        scoreDru = points;
        console.log("Drug score:", scoreDru);
    } else if (category === "exercise") {
        scoreExc = points;
        console.log("Exercise score:", scoreExc);
    } else if (category === "vitaminc") {
        scoreVc = points;
        console.log("Vitamin C score:", scoreVc);
    } else if (category === "vitamind") {
        scoreVd = points;
        console.log("Vitamin D score:", scoreVd);
    } else if (category === "overeating") {
        scoreO = points;
        console.log("Overeating score:", scoreO);
    } else if (category === "sleepquantity") {
        scoreSq = points;
        console.log("Sleep quantity score:", scoreSq);
    } else if (category === "smoking") {
        scoreSm = points;
        console.log("Smoking score:", scoreSm);
    } else if (category === "undereating") {
        scoreU = points;
        console.log("Undereating score:", scoreU);
    }
    
    nextButton.style.display = "block";
}

function getResults() {
    let results = [];
    

    if (selectedLevels.has("doomscrolling")) {
        const doomscrollingResult = getDoomscrollingResult(scoreDo);
        results.push(doomscrollingResult);
    }
    if (selectedLevels.has("drinking")) {
        const drinkingResult = getDrinkingResult(scoreDri);
        results.push(drinkingResult);
    }
    if (selectedLevels.has("drugs")) {
        const drugResult = getDrugResult(scoreDru);
        results.push(drugResult);
    }
    if (selectedLevels.has("exercise")) {
        const exerciseResult = getExerciseResult(scoreExc);
        results.push(exerciseResult);
    }
    if (selectedLevels.has("vitaminc")) {
        const vitaminCResult = getVitaminCResult(scoreVc);
        results.push(vitaminCResult);
    }
    if (selectedLevels.has("vitamind")) {
        const vitaminDResult = getVitaminDResult(scoreVd);
        results.push(vitaminDResult);
    }
    if (selectedLevels.has("overeating")) {
        const overeatingResult = getOvereatingResult(scoreO);
        results.push(overeatingResult);
    }
    if (selectedLevels.has("sleepquantity")) {
        const sleepQuantityResult = getSleepQuantityResult(scoreSq);
        results.push(sleepQuantityResult);
    }
    if (selectedLevels.has("smoking")) {
        const smokingResult = getSmokingResult(scoreSm);
        results.push(smokingResult);
    }
    if (selectedLevels.has("undereating")) {
        const undereatingResult = getUndereatingResult(scoreU);
        results.push(undereatingResult);
    }
    
    return results;
}



function getDoomscrollingResult(score) {
    if (score <= 5) {
        return {
            category: "Doomscrolling",
            level: "Low",
            message: `Low doomscrolling: <br> 
            Not too bad, but thinking about setting time limits on the apps you are using to
            control how much time you spend on them. 
            `,
            color: "#4CAF50"
        };
    } else if (score <= 10) {
        return {
            category: "Doomscrolling",
            level: "Moderate",
            message: `Moderate doomscrolling: <br>
            You should be concerned. Reflect on how you feel when you scroll on these social media platforms and watch/read certain content(sad, angry, anxious). Set time limits on apps so that you are not continuously scrolling and make conscious choices about the type of content you consume. Put your phone away before bedtime, and allow your mind to wind down properly.
            `,
            color: "#FF9800"
        };
    } else {
        return {
            category: "Doomscrolling",
            level: "High",
            message: `High doomscrolling: <br>
            It’s time to seek out help. Find a therapist you feel comfortable with, to begin addressing your emotions and the reasons behind your doomscrolling. Keep note of any additional habits you have been indulging in, and work on limiting screen time and consuming negative content to help decrease your need for those indulgences.
            `,
            color: "#F44336"
        };
    }
}
function getDrinkingResult(score) {
    if (score <= 5) {
        return {
            category: "Drinking",
            level: "Low",
            message: `Low drinking: 
                This is close to heavy drinking, and you put yourself at higher risk for cancer the more you drink. Alcohol is addictive, 
                and can pose risks to your digestive system and lead to weight gain due to added calories. To protect your health and wellbeing, 
                it is best to abstain completely!
            `,
            color: "#4CAF50"
        };
    } else if (score <= 10) {
        return {
            category: "Drinking",
            level: "Moderate",
            message: `Moderate drinking: <br>
            Stop! This indicates heavy/binge drinking, which can increase blood alcohol levels up to 0.08%, putting you at higher risk for  
            colorectal, breast, and other cancers, as well as liver or cardiovascular disease. This may put you and others at risk when 
            driving, moving around, or if you are pregnant. Work on cutting down your alcohol intake and seek help if necessary by speaking  
            to a healthcare provider or joining an Alcoholics Anonymous group.
            `,
            color: "#FF9800"
        };
    } else {
        return {
            category: "Drinking",
            level: "High",
            message: `High drinking: <br> 
            You are putting your body in lots of danger, and need to stop engaging in this behavior immediately. You might be at risk for 
            alcohol poisoning, high blood pressure, or stroke. But it is not too late to stop. Please seek help from a healthcare provider,  
            and take the necessary steps to keep your body healthy. A potentially helpful resource may be an Alcoholics Anonymous group 
            near you, and asking a family member/friend to keep you accountable to make necessary changes to your lifestyle. 
            `,
            color: "#F44336"
        };
    }
}

function getDrugResult(score) {
    if (score <= 5) {
        return {
            category: "Drugs",
            level: "Low",
            message: `Low drug use: <br>
            Now is a great time to stop. With continued drug use, you can become addicted or overreliant 
            on the drug or substance you use. Drug use can have harmful, possibly severe consequences on 
            your brain, heart, and other parts of your body. If you feel pressured to use drugs, it’s 
            okay to say no. If possible, separate yourself from those who pressure you to do so. 
             `,
            color: "#4CAF50"
        };
    } else if (score <= 10) {
        return {
            category: "Drugs",
            level: "Moderate",
            message: `Moderate drug use: <br> 
            Take note of your behavior/symptoms. Do you feel you are getting more reliant on the drug or substance you are using? 
            When do you notice you feel the urge to use this drug or substance most - when you feel stressed or anxious, tired, in 
            social gatherings, etc? This may be a good time to reach out to a doctor for help, and a trusted family member/friend if 
            you need someone to keep you accountable.
            `,
            color: "#FF9800"
        };
    } else {
        return {
            category: "Drugs",
            level: "High",
            message: `High drug use: <br> 
            This is an indication of addiction, and you should seek help right away! Continued substance or drug use could lead to an 
            overdose, making dangerous decisions under the influence, and possibly severe health consequences. If you feel that you 
            would do anything to get access to a certain substance or drug, or experience withdrawal symptoms (tremors, jitteriness,  
            inability to focus) when away from the drug/substance for too long, go see a doctor and get help! It might also be a good idea 
            to seek out a trusted family member/friend if you need someone to keep you accountable.
            `,
            color: "#F44336"
        };
    }
}

function getExerciseResult(score) {
    if (score <= 5) {
        return {
            category: "Exercise",
            level: "Low",
            message: `Low sedentary lifestyle: <br> 
            You’re trying! But you should definitely try to improve. Your body needs consistent exercise so you can maintain 
            good health. Try scheduling time apart 4-5 days a week to exercise, and start simple! As recommended, try to get in 
            150 minutes of moderate aerobic exercise weekly (walking at a faster pace, riding a bike, mowing the lawn, etc.) and 
            75 minutes of vigorous intensity (running, swimming, martial arts, etc).
            `,
            color: "#4CAF50"
        };
    } else if (score <= 10) {
        return {
            category: "Exercise",
            level: "Moderate",
            message: `Moderately sedentary lifestyle: <br>
            This is definitely not good. An overly sedentary lifestyle can increase risk of heart disease or stroke. It’s time 
            to get moving! Try scheduling time apart 4-5 days a week to exercise, and start simple! As recommended, try to get in 
            150 minutes of moderate aerobic exercise weekly (walking at a faster pace, riding a bike, mowing the lawn, etc.) and 75 
            minutes of vigorous intensity.
            `,
            color: "#FF9800"
        };
    } else {
        return {
            category: "Exercise",
            level: "High",
            message: `High sedentary lifestyle: <br>
            Now’s a great time to begin your exercise journey! If you’re nervous or unsure, start with brisk walking 
            a few times a week and trying a light jog. Exercise is all about getting your body moving and keeping your heart healthy. 
            Try scheduling time apart 4-5 days a week to exercise, and start simple! As recommended, try to get in 150 minutes of moderate 
            aerobic exercise weekly (walking at a faster pace, riding a bike, mowing the lawn, etc.) and 75 minutes of vigorous intensity 
            `,
            color: "#F44336"
        };
    }
}

function getOvereatingResult(score) {
    if (score <= 5) {
        return {
            category: "Overeating",
            level: "Low",
            message: `Low overeating:  
            Happens to the best of us! If this happens, don’t shame yourself, but take note of repeated habits 
            or situations that might lead you to do this. It might be a good idea to go for a walk and drink water 
            to help with digestion.
            `,
            color: "#4CAF50"
        };
    } else if (score <= 10) {
        return {
            category: "Overeating",
            level: "Moderate",
            message: `Moderate overeating: <br>
            Not too great, you should take note of when you overeat. If you are feeling stressed/overwhelmed, try breathing 
            exercises or going on a walk. Try to eat your meals slowly so you can know when you actually feel 
            full, and fill your plate with vegetables, which help you feel full faster. Cut back on alcohol, 
            which can increase your appetite.
            `,
            color: "#FF9800"
        };
    } else {
        return {
            category: "Overeating",
            level: "High",
            message: `High overeating: <br>
            It’s time to get help. You should go see a doctor, to discuss your eating habits and symptoms 
            so that you can address them and get help to improve your health. Don’t feel ashamed for asking
            for help, your health matters most!
        
            `,
            color: "#F44336"
        };
    }
}

function getSleepQuantityResult(score) {
    if (score <= 5) {
        return {
            category: "Sleep Quantity",
            level: "Low",
            message: `Low sleep quantity: <br>
            Not terrible, but not great either. Put away devices before going to sleep and if you notice 
            you are procrastinating, adjust your schedule so you can go to bed earlier.
            `,
            color: "#4CAF50"
        };
    } else if (score <= 10) {
        return {
            category: "Sleep Quantity",
            level: "Moderate",
            message: `Moderate sleep quantity: <br>
            You should be concerned. If you are having trouble sleeping, you should go see your healthcare 
            provider. Otherwise, examine your sleep habits. Put away devices before going to sleep and if you 
            notice you are procrastinating, adjust your schedule so you can go to bed earlier.
            `,
            color: "#FF9800"
        };
    } else {
        return {
            category: "Sleep Quantity",
            level: "High",
            message: `High sleep quantity: <br>
            If this is a short-term issue (1 day), you may have: Acute sleep deprivation 
            If this is a long-term issue (Multiple days), you may have: Chronic sleep deprivation 
            In both cases, this is an immediate concern, and it is a good idea to speak to your physician.
            `,
            color: "#F44336"
        };
    }
}

function getSmokingResult(score) {
    if (score <= 5) {
        return {
            category: "Smoking",
            level: "Low",
            message: `Low smoking levels: <br> 
            Not too bad, but you are still putting your body at risk for lung, heart, and other health issues. 
            Cut out smoking completely to preserve your health and find other, healthier alternatives such as 
            exercising, or therapy.
            `,
            color: "#4CAF50"
        };
    } else if (score <= 10) {
        return {
            category: "Smoking",
            level: "Moderate",
            message: `Moderate smoking levels: <br>
            This isn’t great. The more you smoke, the higher your risk for lung cancer and other health issues. 
            Notice when you smoke (when you feel stressed, for fun, or to stay in the zone for certain tasks), 
            and try to cut back on cigarettes to help your lungs stay healthy.
            `,
            color: "#FF9800"
        };
    } else {
        return {
            category: "Smoking",
            level: "High",
            message: `High smoking levels: <br>
            Not good! You are at a very high risk for lung cancer, and possibly heart and vascular disease, 
            eye disease, and other health issues. You need to stop smoking so your lungs can heal: 
            Try quitting completely, doing nicotine replacement therapy, using provider-recommended medications,  
            or exercising to break the cycle.
            `,
            color: "#F44336"
        };
    }
}

function getUndereatingResult(score) {
    if (score <= 5) {
        return {
            category: "Undereating",
            level: "Low",
            message: `Low undereating: <br>
            Not to worry! Sometimes, there are busy days and you might have to skip a meal or two. 
            But it’s important for your body to get the fuel it needs so you can focus on your daily tasks 
            without feeling drained. It might be a good idea to carry along a snack/lunch, so you can make sure 
            you’re staying fueled. 
            `,
            color: "#4CAF50"
        };
    } else if (score <= 10) {
        return {
            category: "Undereating",
            level: "Moderate",
            message: `Moderate undereating: <br>
            Not too great. Take note of why you undereat, and consider logging your food intake. 
            Do you feel afraid of weight gain, peer pressure from others (coaches/friends/family) 
            to starve yourself, or a low appetite? It’s important to make sure you are fueling your body, 
            you deserve to feel good! Schedule times for yourself to eat, and if you’re a busy bee, think about 
            signing up for a meal plan or getting to-go lunches/dinners!
            `,
            color: "#FF9800"
        };
    } else {
        return {
            category: "Undereating",
            level: "High",
            message: `High undereating: <br> 
            It’s time to get help. You should go see a doctor, to discuss your eating habits 
            and symptoms so that you can address them and get help to improve your health. 
            Don’t feel ashamed for asking for help, your health matters most!
            `,
            color: "#F44336"
        };
    }
}

function getVitaminCResult(score) {
    if (score <= 5) {
        return {
            category: "Not Consuming Enough Vitamin C",
            level: "Low",
            message: `Low vitamin C: <br>
            Not terrible, but make sure you are consuming some type of vitamin C daily, 
            either a supplement or food. This is important to prevent scurvy - severe vitamin  
            C deficiency (swollen, bleeding gums, loose teeth, easily bruised skin, etc).
            `,
            color: "#4CAF50"
        };
    } else if (score <= 10) {
        return {
            category: "Not Consuming Enough Vitamin C",
            level: "Moderate",
            message: `Moderate vitamin C: <br> 
            You should be concerned. If you notice symptoms such as hair loss, bruising easily, wobbly teeth or bleeding gums, 
            it is possible you may have a vitamin C deficiency, so speak to your doctor.`,
            color: "#FF9800"
        };
    } else {
        return {
            category: "Not Consuming Enough Vitamin C",
            level: "High",
            message: `High vitamin C: <br>
            This is not good at all! If you are experiencing symptoms such as:
            swollen, bleeding gums, loose teeth, easily bruised skin, etc, 
            you most likely have severe vitamin C deficiency, and should 
            speak to your healthcare provider to check. If this is the case, 
            discuss with your provider how to adjust your habits to get your health back on track.
            `,
            color: "#F44336"
        };
    }
}

function getVitaminDResult(score) {
    if (score <= 5) {
        return {
            category: "Not Consuming Enough Vitamin D",
            level: "Low",
            message: `Low vitamin D: <br>
            Not terrible, but make sure you are consuming some type of vitamin D daily, 
            either a supplement or food, and spend time outside in the sun (beyond going outside for a few minutes). 
            This is important for bone strength!`,
            color: "#4CAF50"
        };
    } else if (score <= 10) {
        return {
            category: "Not Consuming Enough Vitamin D",
            level: "Moderate",
            message: `Moderate vitamin D: <br> 
            You should be concerned. If you notice symptoms such as feeling tired, 
            experiencing bone pain, muscle cramps, or significant mood swings, 
            it is possible you may have a vitamin D deficiency, so look into taking 
            a blood test or speak to your doctor.
            `,
            color: "#FF9800"
        };
    } else {
        return {
            category: "Not Consuming Enough Vitamin D",
            level: "High",
            message: `High vitamin D: <br>
            This is not good at all! You most likely have vitamin D deficiency, 
            and should speak to your healthcare provider or take a blood test to check. 
            If this is the case, discuss with your provider how to adjust your habits to get 
            your health back on track.
            `,
            color: "#F44336"
        };
    }
}

function getScoreForCategory(category) {
    if (category === "Doomscrolling") return scoreDo;
    if (category === "Drinking") return scoreDri;
    if (category === "Drugs") return scoreDru;
    if (category === "Exercise") return scoreExc;
    if (category === "Not Consuming Enough Vitamin C") return scoreVc;
    if (category === "Not Consuming Enough Vitamin D") return scoreVd;
    if (category === "Overeating") return scoreO;
    if (category === "Sleep Quantity") return scoreSq;
    if (category === "Smoking") return scoreSm;
    if (category === "Undereating") return scoreU;
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

