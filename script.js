const questions = [
    {
      question: "Where to use CSS?",
      options: ["For style", "For functionality", "For structure", "For library"],
      answer: "For style",
    },
    {
      question: "What does MERN stand for?",
      options: [
        "MongoDB, Express, React, Node",
        "MySQL, Express, React, Node",
        "MongoDB, EJS, React, Node",
        "MongoDB, Express, Vue, Node",
      ],
      answer: "MongoDB, Express, React, Node",
    },
    {
      question: "Which language is used to structure web pages?",
      options: ["JavaScript", "CSS", "HTML", "Python"],
      answer: "HTML",
    },
  ];
  
  let ques_index = 0;
  let userAnswers = []; //USER KE ANSWERS KE LIE
  
  function displayQuestion() {
    const questionElement = document.getElementById("questions");
    const optionsElement = document.getElementById("options");
    const questionData = questions[ques_index];
  
    questionElement.textContent = questionData.question;
  
    optionsElement.innerHTML = "";
  
    questionData.options.forEach((option) => {
      const optionLabel = document.createElement("label");
      const radioBtn = document.createElement("input");
  
      radioBtn.type = "radio";
      radioBtn.name = "option";
      radioBtn.value = option;
      radioBtn.onclick = () => saveAnswer(option); // Save answer when option is clicked
  
      optionLabel.appendChild(radioBtn);
      optionLabel.append(` ${option}`);
  
      optionsElement.appendChild(optionLabel);
      optionsElement.appendChild(document.createElement("br"));
    });
  }
  
  function saveAnswer(selectedOption) {
    userAnswers[ques_index] = selectedOption; // Save krlo selected option in userAnswers array
  }
  
  function next() {
    if (ques_index < questions.length - 1) {
      ques_index++;
      displayQuestion();
    } else {
      alert("This is the last question. Submit your answers.");
    }
  }
  
  function prev() {
    if (ques_index > 0) {
      ques_index--;
      displayQuestion();
    } else {
      alert("This is the first question.");
    }
  }
  
  function submitQuiz() {
    let score = 0;
  
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        score += 10; // 10 point ke saare ques
      }
    });
  
    alert(`Your score is: ${score}/${questions.length * 10}`);
  }
  
  displayQuestion();
  