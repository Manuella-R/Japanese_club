// Quiz Data
const questions = [
    {
        phase: 1,
        bridgeText: "The Guild Master watches you as you look around the room...",
        question: "You are at the tavern waiting for the rain to stop. Where are you sitting?",
        answers: [
            { text: "Right at the bar, chatting with the bartender.", scores: { leader: 1, heart: 1 } },
            { text: "In a booth in the back corner, reading.", scores: { lancer: 1, edgelord: 1 } },
            { text: "Moving around, bothering my teammates.", scores: { gremlin: 1, wildcard: 1 } },
            { text: "Checking the supplies list for the third time.", scores: { strategist: 1, parent: 1 } }
        ]
    },
    {
        phase: 1,
        bridgeText: "",
        question: "The party is packing the wagon. You have space for ONE non-essential item.",
        answers: [
            { text: "A musical instrument or sketchbook.", scores: { heart: 1, giant: 1 } },
            { text: "A sentimental charm I refuse to explain.", scores: { edgelord: 1, underdog: 1 } },
            { text: "My pillow. I need quality sleep.", scores: { cynic: 1, lancer: 1 } },
            { text: "Weights. Never skip training.", scores: { junkie: 1, leader: 1 } }
        ]
    },
    {
        phase: 1,
        bridgeText: "",
        question: "The journey begins. The path is flat. How do you walk?",
        answers: [
            { text: "In the front, setting the pace.", scores: { leader: 1, wildcard: 1 } },
            { text: "In the back, watching our rear.", scores: { lancer: 1, parent: 1 } },
            { text: "Sleeping in the wagon.", scores: { cynic: 1, strategist: 1 } },
            { text: "Wandering off to look at bugs/flowers.", scores: { gremlin: 1, giant: 1 } }
        ]
    },
    {
        phase: 1,
        bridgeText: "",
        question: "It's lunchtime. The rations are dry bread. Reaction?",
        answers: [
            { text: "Eat it quickly. Fuel is fuel.", scores: { junkie: 1, lancer: 1 } },
            { text: "Forage for herbs to make it taste better.", scores: { parent: 1, giant: 1 } },
            { text: "Complain loudly. \"Again?!\"", scores: { gremlin: 1, cynic: 1 } },
            { text: "Share my portion with the hungriest person.", scores: { heart: 1, leader: 1 } }
        ]
    },
    {
        phase: 1,
        bridgeText: "",
        question: "The map is damaged at a fork in the road.",
        answers: [
            { text: "\"Let's go left! It feels right!\"", scores: { wildcard: 1, leader: 1 } },
            { text: "Look for environmental clues.", scores: { strategist: 1, lancer: 1 } },
            { text: "Flip a coin.", scores: { cynic: 1, gremlin: 1 } },
            { text: "Ask a local squirrel for directions.", scores: { heart: 1, giant: 1 } }
        ]
    },
    {
        phase: 2,
        bridgeText: "The Guild Master nods. \"So that's how you prepare. Interesting. Now, imagine you are deeper on the road...\"",
        question: "A stray dog starts following the group.",
        answers: [
            { text: "It's our new mascot!", scores: { leader: 1, gremlin: 1 } },
            { text: "Ignore it. Attachments are weakness.", scores: { lancer: 1, edgelord: 1 } },
            { text: "Check it for fleas immediately.", scores: { parent: 1 } },
            { text: "If it can fight, it can stay.", scores: { junkie: 1 } }
        ]
    },
    {
        phase: 2,
        bridgeText: "",
        question: "You are on \"First Watch\" at night. What are you thinking about?",
        answers: [
            { text: "\"I hope I'm strong enough to protect them.\"", scores: { underdog: 1, parent: 1 } },
            { text: "Simulating tomorrow's battles.", scores: { strategist: 1, junkie: 1 } },
            { text: "Nothing. Pure zen.", scores: { lancer: 1, wildcard: 1 } },
            { text: "\"What is the point of this quest?\"", scores: { edgelord: 1, cynic: 1 } }
        ]
    },
    {
        phase: 2,
        bridgeText: "",
        question: "A broken bridge over a ravine.",
        answers: [
            { text: "Jump it.", scores: { wildcard: 1, junkie: 1 } },
            { text: "Look for a safe way around.", scores: { parent: 1, cynic: 1 } },
            { text: "Build a pulley system using physics.", scores: { strategist: 1, underdog: 1 } },
            { text: "\"I'll go first to test it.\"", scores: { leader: 1, giant: 1 } }
        ]
    },
    {
        phase: 2,
        bridgeText: "",
        question: "A shopkeeper tries to scam your friend.",
        answers: [
            { text: "Flip the table.", scores: { junkie: 1, gremlin: 1 } },
            { text: "Negotiate the price down with a scary smile.", scores: { strategist: 1, lancer: 1 } },
            { text: "Pay the difference yourself to avoid drama.", scores: { heart: 1, giant: 1 } },
            { text: "Yell \"That's not fair!\"", scores: { leader: 1, underdog: 1 } }
        ]
    },
    {
        phase: 2,
        bridgeText: "",
        question: "A goblin steals your boots.",
        answers: [
            { text: "Chase it down barefoot with rage.", scores: { junkie: 1, gremlin: 1 } },
            { text: "Laugh about it.", scores: { heart: 1, leader: 1 } },
            { text: "Sigh. \"I hate this adventure.\"", scores: { cynic: 1 } },
            { text: "Track it silently. It will pay.", scores: { edgelord: 1, lancer: 1 } }
        ]
    },
    {
        phase: 3,
        bridgeText: "The rain outside gets heavier. The Guild Master looks you in the eye. \"Let's see how you handle pressure...\"",
        question: "The team argues about directions.",
        answers: [
            { text: "Stay out of it.", scores: { cynic: 1, lancer: 1 } },
            { text: "Yell louder to assert dominance.", scores: { leader: 1, gremlin: 1 } },
            { text: "Mediate and make peace.", scores: { parent: 1, heart: 1 } },
            { text: "Just start walking the right way.", scores: { strategist: 1, wildcard: 1 } }
        ]
    },
    {
        phase: 3,
        bridgeText: "",
        question: "You reach the dungeon. It's too quiet.",
        answers: [
            { text: "Scream at the darkness.", scores: { junkie: 1, leader: 1 } },
            { text: "Hand on weapon. Eyes scanning.", scores: { lancer: 1, strategist: 1 } },
            { text: "My stomach hurts.", scores: { underdog: 1, cynic: 1 } },
            { text: "Listen to the wind. Trust senses.", scores: { wildcard: 1, giant: 1 } }
        ]
    },
    {
        phase: 3,
        bridgeText: "",
        question: "The Boss is a Mirror showing your fear.",
        answers: [
            { text: "I see myself alone.", scores: { heart: 1, parent: 1 } },
            { text: "I see myself weak.", scores: { underdog: 1, junkie: 1 } },
            { text: "I see myself as the villain.", scores: { edgelord: 1, leader: 1 } },
            { text: "Smash the mirror immediately.", scores: { gremlin: 1, wildcard: 1 } }
        ]
    },
    {
        phase: 3,
        bridgeText: "",
        question: "You get knocked down hard.",
        answers: [
            { text: "\"What's the counter-strategy?\"", scores: { strategist: 1, cynic: 1 } },
            { text: "\"Is everyone else okay?\"", scores: { parent: 1, giant: 1 } },
            { text: "\"I can still move.\"", scores: { underdog: 1, leader: 1 } },
            { text: "*Smiles.* \"Now it's interesting.\"", scores: { junkie: 1, lancer: 1 } }
        ]
    },
    {
        phase: 3,
        bridgeText: "",
        question: "You win a magical ring. Who gets it?",
        answers: [
            { text: "The person who needs the stat boost.", scores: { strategist: 1, parent: 1 } },
            { text: "Sell it and split the cash.", scores: { cynic: 1, lancer: 1 } },
            { text: "Rock-Paper-Scissors!", scores: { leader: 1, gremlin: 1 } },
            { text: "I don't want it. Cursed items are trouble.", scores: { wildcard: 1, giant: 1 } }
        ]
    },
    {
        phase: 4,
        bridgeText: "He puts down his pen. \"One last thing. The journey ends...\"",
        question: "Celebration drink?",
        answers: [
            { text: "Biggest mug of ale.", scores: { leader: 1, giant: 1 } },
            { text: "Water.", scores: { lancer: 1, strategist: 1 } },
            { text: "Something sweet and colorful.", scores: { heart: 1, gremlin: 1 } },
            { text: "Black coffee alone.", scores: { cynic: 1, edgelord: 1 } }
        ]
    },
    {
        phase: 4,
        bridgeText: "",
        question: "A bard asks for your story.",
        answers: [
            { text: "\"Make sure I sound cool!\"", scores: { leader: 1, gremlin: 1 } },
            { text: "\"Don't mention me.\"", scores: { lancer: 1, edgelord: 1 } },
            { text: "Tell the truth about our hard work.", scores: { parent: 1, underdog: 1 } },
            { text: "Feed them a fake story.", scores: { cynic: 1, wildcard: 1 } }
        ]
    },
    {
        phase: 4,
        bridgeText: "",
        question: "The adventure is over. How do you feel?",
        answers: [
            { text: "Restless.", scores: { junkie: 1, wildcard: 1 } },
            { text: "Relieved.", scores: { cynic: 1, strategist: 1 } },
            { text: "Sad.", scores: { heart: 1, leader: 1 } },
            { text: "Proud.", scores: { underdog: 1, parent: 1 } }
        ]
    },
    {
        phase: 4,
        bridgeText: "",
        question: "Role in the group chat?",
        answers: [
            { text: "Memes at 3 AM.", scores: { gremlin: 1, wildcard: 1 } },
            { text: "Reads but never replies.", scores: { lancer: 1, edgelord: 1 } },
            { text: "Organizing the hang out.", scores: { parent: 1, leader: 1 } },
            { text: "Correcting grammar.", scores: { strategist: 1, cynic: 1 } }
        ]
    },
    {
        phase: 4,
        bridgeText: "",
        question: "One word to live by.",
        answers: [
            { text: "Freedom.", scores: { leader: 1, wildcard: 1 } },
            { text: "Logic.", scores: { strategist: 1, cynic: 1 } },
            { text: "Strength.", scores: { junkie: 1, lancer: 1 } },
            { text: "Kindness.", scores: { heart: 1, giant: 1 } }
        ]
    }
];

// Results Data
const resultsData = {
    "leader": {
        "title": "The Shonen Leader",
        "description": "Loud, ambitious, and fueled by willpower. You might not have the plan, but you have the vision. You pull people together through sheer charisma.",
        "compatible": "The Strategist",
        "incompatible": "The Cynic",
        "recs": ["One Piece", "Haikyuu!!", "Gintama", "Gurren Lagann"]
    },
    "lancer": {
        "title": "The Stoic Lancer",
        "description": "Cool, skilled, and socially distant. You are the rival who pushes the hero to be better. You show affection by being slightly less mean than usual.",
        "compatible": "The Shonen Leader",
        "incompatible": "The Chaos Gremlin",
        "recs": ["Samurai Champloo", "Jujutsu Kaisen", "Cowboy Bebop", "Slam Dunk"]
    },
    "strategist": {
        "title": "The Strategist",
        "description": "The brains of the operation. You win wars with logic and planning, not brute force. You are likely the one holding the map.",
        "compatible": "The Battle Junkie",
        "incompatible": "The Instinctive Wildcard",
        "recs": ["Log Horizon", "Death Note", "Psycho-Pass", "Kuroko's Basketball"]
    },
    "giant": {
        "title": "The Gentle Giant",
        "description": "Intimidating on the outside, soft on the inside. You protect the weak, love nature, and probably have the most patience in the group.",
        "compatible": "The Team Parent",
        "incompatible": "The Edgelord",
        "recs": ["Fullmetal Alchemist: Brotherhood", "Ore Monogatari!!", "Ranking of Kings", "Spy x Family"]
    },
    "gremlin": {
        "title": "The Chaos Gremlin",
        "description": "High energy and highly destructive. You cause problems on purpose because it's funny. Boredom is your greatest enemy.",
        "compatible": "The Instinctive Wildcard",
        "incompatible": "The Stoic Lancer",
        "recs": ["Chainsaw Man", "Konosuba", "Aho-Girl", "Slayers"]
    },
    "parent": {
        "title": "The Team Parent",
        "description": "Responsible and caring. You keep the team fed, healthy, and out of jail. You are the glue holding everyone together.",
        "compatible": "The Underdog",
        "incompatible": "The Battle Junkie",
        "recs": ["Jojo's Bizarre Adventure: Golden Wind", "Delicious in Dungeon", "The Way of the Househusband", "Haikyuu!!"]
    },
    "edgelord": {
        "title": "The Edgelord",
        "description": "A dark past and a darker wardrobe. You sit in the corner and brood, but you secretly care deeply about your friends.",
        "compatible": "The Heart",
        "incompatible": "The Shonen Leader",
        "recs": ["The Eminence in Shadow", "Tokyo Ghoul", "Code Geass", "The Rising of the Shield Hero"]
    },
    "junkie": {
        "title": "The Battle Junkie",
        "description": "You live for the fight. You don't care about the plot or the politics, you just want a strong opponent to test your limits.",
        "compatible": "The Strategist",
        "incompatible": "The Team Parent",
        "recs": ["Hunter x Hunter", "Dragon Ball Super", "Hellsing Ultimate", "Baki"]
    },
    "heart": {
        "title": "The Heart",
        "description": "Empathetic and kind. You are the moral compass. You might not deal the most damage, but the team would fall apart without you.",
        "compatible": "The Edgelord",
        "incompatible": "The Cynic",
        "recs": ["Fruits Basket", "Demon Slayer", "Cardcaptor Sakura", "Made in Abyss"]
    },
    "cynic": {
        "title": "The Cynic",
        "description": "Deadpan and realistic. You hate cliches and aren't afraid to point out how stupid the plan is. You are the voice of reason.",
        "compatible": "The Stoic Lancer",
        "incompatible": "The Heart",
        "recs": ["The Disastrous Life of Saiki K.", "My Teen Romantic Comedy SNAFU", "Konosuba", "The Melancholy of Haruhi Suzumiya"]
    },
    "wildcard": {
        "title": "The Instinctive Wildcard",
        "description": "Unpredictable and animalistic. You rely on gut instinct rather than logic. No one knows what you will do next, not even you.",
        "compatible": "The Chaos Gremlin",
        "incompatible": "The Strategist",
        "recs": ["Demon Slayer", "Princess Mononoke", "Hunter x Hunter", "Blue Lock"]
    },
    "underdog": {
        "title": "The Underdog",
        "description": "Hard working and gritty. You might not have the natural talent, but you will outwork everyone else to achieve your dream.",
        "compatible": "The Team Parent",
        "incompatible": "The Stoic Lancer",
        "recs": ["World Trigger", "Hajime no Ippo", "History's Strongest Disciple Kenichi", "Megalo Box"]
    }
};

// State Management
let currentQuestion = 0;
let scores = {
    leader: 0,
    lancer: 0,
    strategist: 0,
    giant: 0,
    gremlin: 0,
    parent: 0,
    edgelord: 0,
    junkie: 0,
    heart: 0,
    cynic: 0,
    wildcard: 0,
    underdog: 0
};

// DOM Elements
const introScreen = document.getElementById('intro-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers');
const bridgeText = document.getElementById('bridge-text');
const progressFill = document.getElementById('progress-fill');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);

// Functions
function startQuiz() {
    introScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQuestion = 0;
    scores = {
        leader: 0, lancer: 0, strategist: 0, giant: 0,
        gremlin: 0, parent: 0, edgelord: 0, junkie: 0,
        heart: 0, cynic: 0, wildcard: 0, underdog: 0
    };
    // Change to tavern background when quiz starts
    changeBackground('tavern');
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestion >= questions.length) {
        showResults();
        return;
    }

    const question = questions[currentQuestion];
    
    // Change background based on question context
    const backgroundName = getBackgroundForQuestion(currentQuestion);
    changeBackground(backgroundName);
    
    // Update progress bar
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = progress + '%';

    // Display bridge text if it exists
    if (question.bridgeText) {
        bridgeText.textContent = question.bridgeText;
        bridgeText.style.display = 'block';
    } else {
        bridgeText.style.display = 'none';
    }

    // Display question
    questionNumber.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    questionText.textContent = question.question;

    // Display answers
    answersContainer.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const answerBtn = document.createElement('button');
        answerBtn.className = 'answer-btn';
        answerBtn.textContent = answer.text;
        answerBtn.addEventListener('click', () => selectAnswer(answer.scores));
        answersContainer.appendChild(answerBtn);
    });
}

function selectAnswer(answerScores) {
    // Add scores
    Object.keys(answerScores).forEach(key => {
        if (scores.hasOwnProperty(key)) {
            scores[key] += answerScores[key];
        }
    });

    // Move to next question
    currentQuestion++;
    setTimeout(() => {
        displayQuestion();
    }, 300);
}

function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    // Change to tavern background for results
    changeBackground('tavern');

    // Find highest score
    let maxScore = 0;
    let winner = 'leader';
    
    Object.keys(scores).forEach(key => {
        if (scores[key] > maxScore) {
            maxScore = scores[key];
            winner = key;
        }
    });

    // Display results
    const result = resultsData[winner];
    document.getElementById('result-title').textContent = result.title;
    document.getElementById('result-description').textContent = result.description;
    document.getElementById('compatible').textContent = result.compatible;
    document.getElementById('incompatible').textContent = result.incompatible;

    // Display recommendations
    const recsList = document.getElementById('recs-list');
    recsList.innerHTML = '';
    result.recs.forEach(rec => {
        const li = document.createElement('li');
        li.textContent = rec;
        recsList.appendChild(li);
    });
}

function restartQuiz() {
    resultsScreen.classList.remove('active');
    introScreen.classList.add('active');
    // Change back to homepage background
    changeBackground('homepage');
}

// Background Image Management
const backgroundSlides = document.querySelectorAll('.background-slide');
const backgroundMap = {
    'homepage': 0,
    'tavern': 1,
    'forest': 2,
    'dungeons': 3,
    'night': 4
};

// Initialize with homepage background
changeBackground('homepage');

function changeBackground(backgroundName) {
    // Remove active class from all slides
    backgroundSlides.forEach(slide => slide.classList.remove('active'));
    
    // Add active class to the specified background
    if (backgroundMap.hasOwnProperty(backgroundName)) {
        backgroundSlides[backgroundMap[backgroundName]].classList.add('active');
    }
}

function getBackgroundForQuestion(questionIndex) {
    // Question 0 (Q1): Tavern - "You are at the tavern waiting for the rain to stop"
    if (questionIndex === 0) return 'tavern';
    
    // Question 1 (Q2): Tavern - "The party is packing the wagon" (still at tavern)
    if (questionIndex === 1) return 'tavern';
    
    // Questions 2-4 (Q3-Q5): Forest (journey begins, on the road)
    if (questionIndex >= 2 && questionIndex <= 4) return 'forest';
    
    // Questions 5-8 (Q6-Q9): Forest (deeper on the road, habits)
    if (questionIndex >= 5 && questionIndex <= 8) return 'forest';
    
    // Question 9 (Q10): Night (first watch)
    if (questionIndex === 9) return 'night';
    
    // Question 10 (Q11): Forest (back to quest, team argues about directions)
    if (questionIndex === 10) return 'forest';
    
    // Questions 11-14 (Q12-Q15): Dungeons (reach dungeon, boss fight)
    if (questionIndex >= 11 && questionIndex <= 14) return 'dungeons';
    
    // Questions 15-19 (Q16-Q20): Tavern (aftermath, celebration)
    if (questionIndex >= 15 && questionIndex <= 19) return 'tavern';
    
    return 'forest'; // Default
}

