const questions = [
    {
        question: "What is the main theme color of the Department of Computer Science and Technology?",
        answers: [
            { text: "a. Red", correct: false},
            { text: "b. Green", correct: false},
            { text: "c. Orange", correct: true},
            { text: "d. Blue", correct: false}
        ] 
    },
    {
        question: "In what date that the BS in Computer Science degree program was approaved by the Comission of the Higher Education with BOR resolution No. 17, series of 2002.",
        answers: [
            { text: "a. February 08, 2002", correct: true},
            { text: "b. February 19, 2002", correct: false},
            { text: "c. March 08, 2002", correct: false},
            { text: "a. March 08, 2002", correct: false},
        ] 
    },
    {
        question: "What is the name of the student organization who represents the Department of Computer Science and Technology?",
        answers: [
            { text: "a. ByteMinds Collective", correct: false},
            { text: "b. Computer Science Student Society", correct: true},
            { text: "c. VSU Coder's Assassin", correct: false},
            { text: "d. CodeCrafters Union", correct: false}
        ] 
    },
    {
        question: "How many years does the Bachelor of Science in Computer Science program offer?",
        answers: [
            { text: "a. 3", correct: false},
            { text: "b. 4", correct: true},
            { text: "c. 5", correct: false},
            { text: "d. 6", correct: false}
        ] 
    },
    {
        question: "To which VSU college does the Department of Computer Science belong?",
        answers: [
            { text: "a. College of Nursing", correct: false},
            { text: "b. College of Education", correct: false},
            { text: "c. College of Engineering and Technolgy", correct: true},
            { text: "d. College of  Forestry and Environmental Sciences", correct: false}
        ] 
    },
    {
        question: "Who is currently acting as the Dean of the Department of Computer Science and Technology?",
        answers: [
            { text: "a. Dr. Jude B. Rola", correct: false},
            { text: "b. Dr. Magdalene C. Unajan", correct: true},
            { text: "c. Dr. Winston M. Tabada", correct: false},
            { text: "d. Jona Flor O. Maaghop", correct: false}
        ] 
    },
    {
        question: "Who is currently acting as the President of the Department of Computer Science and Technology Students Orgranization?",
        answers: [
            { text: "a. Pres. Joshua Sosmeña", correct: true},
            { text: "b. Joseph Andrey Dacera", correct: false},
            { text: "c. Kyle Anthony F. Nierras", correct: false},
            { text: "d. Joerick Amadora", correct: false}
        ] 
    },
    {
        question: "What club or clubs are offered by the Department of Computer Science and Technology?",
        answers: [
            { text: "a. VSU Robotics Organization", correct: false},
            { text: "b. CS^3 Game Development Club", correct: false},
            { text: "c. CS^3 Research Club", correct: false},
            { text: "d. All of the above", correct: true}
        ] 
    },
    {
        question: "In which room in Department of Computer Science and Technology is the mini library located?",
        answers: [
            { text: "a. Room 101", correct: false},
            { text: "b. Room 103", correct: true},
            { text: "c. Room 202", correct: false},
            { text: "d. Room 203", correct: false}
        ] 
    },
    {
        question: "In which room, within the Department of Computer Science and Technology, is the main lecture room where there is no computer?",
        answers: [
            { text: "a. Room 101", correct: true},
            { text: "b. Room 103", correct: false},
            { text: "c. Room 202", correct: false},
            { text: "d. Room 203", correct: false}
        ] 
    },
    {
        question: "He is one of the notable alumni of the class 2011, the person behind almost all the web systems applications that the Visayas State University has been using especially during the COVID-19 pandemic. Leading his team, they developed the VSU Student Portal, CumulusOne Enrollment Information System, VSUEE Learning Management System, VSU-CAT Admissions Management System, and the VSU Human Resource Information System.",
        answers: [
            { text: "a. Dr. Winston C. tabada", correct: false},
            { text: "b. Jude B. Rola", correct: false},
            { text: "c. Norman Villas", correct: true},
            { text: "d. Jonel Dominic Tapang", correct: false}
        ] 
    },
    {
        question: "What is/are career opportunities of having a Bachelors degree in Computer Science?",
        answers: [
            { text: "a. Web Developer", correct: false},
            { text: "b. Game Developer", correct: false},
            { text: "c. System Engineer", correct: false},
            { text: "d. All of the Above", correct: true}
        ] 
    },
    {
        question: "One of the leading global IT service provider companies that has a connection to the Department of Computer Science and Technology, offering students opportunities to learn, train, and develop their skills and knowledge in the IT industry is ___.",
        answers: [
            { text: "a. Google", correct: false},
            { text: "b. Fullscale", correct: true},
            { text: "c. Amazon", correct: false},
            { text: "d. Microsoft", correct: false}
        ] 
    },
    {
        question: "Google is a Browser or a Search Engine?",
        answers: [
            { text: "a. Browser", correct: false},
            { text: "b. Search Engine", correct: true},
            { text: "c. Both Browser or Search Engine", correct: false},
            { text: "d. Neither Browser nor Search Enginer", correct: false}
        ] 
    },
    {
        question: "Printer is an example of which types of device, Output or Input?",
        answers: [
            { text: "a. Input", correct: false},
            { text: "b. Output", correct: true},
            { text: "c. Storage", correct: false},
            { text: "d. None of the above mentioned", correct: false}
        ] 
    },
    {
        question: "All mathematical and logical functions in the computer are done by?",
        answers: [
            { text: "a. Central Processing Unit", correct: false},
            { text: "b. Arithmetic and Logical Unit", correct: true},
            { text: "c. Control Unit", correct: false},
            { text: "d. Memory Unit", correct: false}
        ] 
    },
    {
        question: "Attempts made by individuals to obtain confidential information from you by falsifying their identity are called?",
        answers: [
            { text: "a. Phishing scams", correct: true},
            { text: "b. Information stealing", correct: false},
            { text: "c. Network congestion", correct: false},
            { text: "d. None of the above mentioned", correct: false}
        ] 
    },
    {
        question: "The first program that runs on a computer when the computer boots up is?",
        answers: [
            { text: "a. Software Program", correct: false},
            { text: "b. Operating System", correct: true},
            { text: "c. Utilities", correct: false},
            { text: "d. None of the above mentioned", correct: false}
        ] 
    },
    {
        question: "The process of transferring files from the Internet to your computer is called?",
        answers: [
            { text: "a. Downloading", correct: true},
            { text: "b. Uploading", correct: false},
            { text: "c. Storing", correct: false},
            { text: "d. All of the above", correct: false}
        ] 
    },
    {
        question: "Buying and selling products and services over the Internet is called?",
        answers: [
            { text: "a. E-Computer", correct: false},
            { text: "b. F-Commerce", correct: false},
            { text: "c. E-Commerce", correct: true},
            { text: "d. None of the above", correct: false}
        ] 
    },
    {
        question: "1 Kilobyte is equal to how many bytes?",
        answers: [
            { text: "a. 1024 bytes", correct: true},
            { text: "b. 512 bytes", correct: false},
            { text: "c. 256 bytes", correct: false},
            { text: "d. 128 bytes", correct: false}
        ] 
    },
    {
        question: "Who is called the Father of the Computer?",
        answers: [
            { text: "a. Andrew N.", correct: false},
            { text: "b. Dinnis Ritchie", correct: false},
            { text: "c. Mark Zuckerberg", correct: false},
            { text: "d. Charles Babbage", correct: true}
        ] 
    },
    {
        question: "An address given to a computer connected to a network is called?",
        answers: [
            { text: "a. Local address", correct: false},
            { text: "b. Localhost", correct: false},
            { text: "c. Network address", correct: false},
            { text: "d. IP address", correct: true}
        ] 
    },
    {
        question: "What is the name of the software that allows us to browse through web pages called?",
        answers: [
            { text: "a. Webpage", correct: false},
            { text: "b. Website", correct: false},
            { text: "c. Browser", correct: true},
            { text: "d. Search engine", correct: false}
        ] 
    },
    {
        question: "A program that translates High-Level Language to a Machine Level Language is called?",
        answers: [
            { text: "a. Compiler", correct: true},
            { text: "b. Interpreter", correct: false},
            { text: "c. Assembler", correct: false},
            { text: "d. Operating system", correct: false}
        ] 
    },
    {
        question: "The process to find an error in a software code is called?",
        answers: [
            { text: "a. Debugging", correct: true},
            { text: "b. Compiling", correct: false},
            { text: "c. Error handling", correct: false},
            { text: "d. None of the above", correct: false}
        ] 
    },
    {
        question: "What contains specific rules and words that express the logical steps of an algorithm?",
        answers: [
            { text: "a. Semantic", correct: false},
            { text: "b. No method", correct: false},
            { text: "c. Syntax", correct: true},
            { text: "d. Comment", correct: false}
        ] 
    },
    {
        question: "The simultaneous execution of two or more instructions is called?",
        answers: [
            { text: "a. Multiprocessing", correct: true},
            { text: "b. Multiprogramming", correct: false},
            { text: "c. Multithreading", correct: false},
            { text: "d. Hybridthreading", correct: false}
        ] 
    },
    {
        question: "Servers are computers that provide resources to other computers connected to a ____.",
        answers: [
            { text: "a. Network", correct: true},
            { text: "b. Bluetooth", correct: false},
            { text: "c. WiFi", correct: false},
            { text: "d. MAN", correct: false}
        ] 
    },
    {
        question: "Excel spreadsheet, Powerpoint, and Word processing are examples of which type of software?",
        answers: [
            { text: "a. Application software", correct: true},
            { text: "b. System software", correct: false},
            { text: "c. Utility program", correct: false},
            { text: "d. Firmware", correct: false}
        ] 
    },
    {
        question: "Data that has been organized or presented in a meaningful way is called?",
        answers: [
            { text: "a. Data", correct: false},
            { text: "b. Files", correct: false},
            { text: "c. Information", correct: true},
            { text: "d. Instructions", correct: false}
        ] 
    },
    {
        question: "In the binary language each letter of the alphabet, each number, and each special character is made up of a unique combination of?",
        answers: [
            { text: "a. 32 bits", correct: false},
            { text: "b. 16 bits", correct: false},
            { text: "c. 8 bits", correct: true},
            { text: "d. 128 bits", correct: false}
        ] 
    },
    {
        question: "C, Java, PHP, and C++ are examples of?",
        answers: [
            { text: "a. Software types", correct: false},
            { text: "b. Firmware", correct: false},
            { text: "c. Programming languages", correct: true},
            { text: "d. Programming translators", correct: false}
        ] 
    },
    {
        question: "What is the shortcut key for printing a document in Windows?",
        answers: [
            { text: "a. Ctrl + P", correct: true},
            { text: "b. SHIFT + P", correct: false},
            { text: "c. ALT + P", correct: false},
            { text: "d. CTRL + SHIFT + P", correct: false}
        ] 
    },
    {
        question: "In which type of computer, data are represented as discrete signals?",
        answers: [
            { text: "a. Hybrid computer", correct: false},
            { text: "b. Analog computer", correct: false},
            { text: "c. Digital computer", correct: true},
            { text: "d. None of the above", correct: false}
        ] 
    },
    {
        question: "What is the scientific name of the computer?",
        answers: [
            { text: "a. Homo silicium", correct: false},
            { text: "b. Homo digitalis", correct: false},
            { text: "c. Homo computatrix", correct: false},
            { text: "d. Silico sapiens", correct: true}
        ] 
    },
    {
        question: "What is the term for computers that integrate both measuring and counting functionalities?",
        answers: [
            { text: "a. Analog computer", correct: false},
            { text: "b. Digital computer", correct: false},
            { text: "c. Hybrid computer", correct: true},
            { text: "d. Python", correct: false}
        ] 
    },
    {
        question: "Which was the first web browser?",
        answers: [
            { text: "a. World Wide Web", correct: true},
            { text: "b. Mosaic", correct: false},
            { text: "c. Lynx", correct: false},
            { text: "d. Netscape Navigator", correct: false}
        ] 
    },
    {
        question: "Unit of measurement of the output quality of a printer?",
        answers: [
            { text: "a. Pixels per inch", correct: false},
            { text: "b. Megapixels", correct: false},
            { text: "c. Lines per inch", correct: false},
            { text: "d. Dot per sq inch", correct: true}
        ] 
    },
    {
        question: "The refresh rate of the monitor is measured in?",
        answers: [
            { text: "a. Pixels", correct: false},
            { text: "b. Frames per Second (FPS)", correct: false},
            { text: "c. Inches", correct: false},
            { text: "d. Hertz (Hz)", correct: true}
        ] 
    },
    {
        question: "What term is used to refer to the geometric arrangement of devices on a network?",
        answers: [
            { text: "a. Architecture", correct: false},
            { text: "b. Topology", correct: true},
            { text: "c. Configuration", correct: false},
            { text: "d. Infrastructure", correct: false}
        ] 
    },
    {
        question: "In which year, the Microsoft company was founded??",
        answers: [
            { text: "a. 1972", correct: false},
            { text: "b. 1975", correct: true},
            { text: "c. 1980", correct: false},
            { text: "d. 1982", correct: false}
        ] 
    },
    {
        question: ".doc, .xls, .ppt, and .html are examples of?",
        answers: [
            { text: "a. Document", correct: false},
            { text: "b. Extensions", correct: true},
            { text: "c. Both (A) and (B)", correct: false},
            { text: "d. None of the above mentioned", correct: false}
        ] 
    },
    {
        question: "Android mobile operating system is the product of which software giant?",
        answers: [
            { text: "a. Microsoft", correct: false},
            { text: "b. Google", correct: true},
            { text: "c. Oracle", correct: false},
            { text: "d. Apple", correct: false}
        ] 
    },
    {
        question: "Gmail, a web-based email service is the product of which company?",
        answers: [
            { text: "a. Google", correct: true},
            { text: "b. Oracle", correct: false},
            { text: "c. Apple", correct: false},
            { text: "d. Yahoo", correct: false}
        ] 
    },
    {
        question: "A pointer is shaped like a hand when it is positioned over ___.",
        answers: [
            { text: "a. URL", correct: false},
            { text: "b. File", correct: false},
            { text: "c. Document", correct: false},
            { text: "d. Hyperlink", correct: true}
        ] 
    },
    {
        question: "Information travels between components on the Mother Board through ____.",
        answers: [
            { text: "a. Buses", correct: true},
            { text: "b. Packets", correct: false},
            { text: "c. Peer-to-Peer (P2P)", correct: false},
            { text: "d. Both (A) and (C)", correct: false}
        ] 
    },
    {
        question: "The most frequently used instructions of a computer program are likely to be fetched from which type of memory?",
        answers: [
            { text: "a. Read Only Memory", correct: false},
            { text: "b. Random Access Memory", correct: false},
            { text: "c. Cache memory", correct: true},
            { text: "d. None of the above mentioned", correct: false}
        ] 
    },
    {
        question: "Text or Graphics while copying is temporarily stored in?",
        answers: [
            { text: "a. Clipboards", correct: true},
            { text: "b. Cache", correct: false},
            { text: "c. RAM", correct: false},
            { text: "d. ROM", correct: false}
        ] 
    },
    {
        question: "Computers use the ___ Number System to store data and perform calculations.",
        answers: [
            { text: "a. Binary", correct: true},
            { text: "b. Hexadecimal", correct: false},
            { text: "c. Octal", correct: false},
            { text: "d. Roman", correct: false}
        ] 
    },
     
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore()
{
    resetState();
    questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
       handleNextButton(); 
    }else{
        startQuiz();
    }
});

startQuiz();



