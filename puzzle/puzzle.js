let currentQuestionIndex = 0; // 当前问题的索引，从0开始
const questions = document.querySelectorAll('.question'); // 获取所有问题
const totalQuestions = questions.length; // 问题总数

// 初始化，只显示第一个问题
function init() {
  hideAllQuestions(); // 先隐藏所有问题
  showQuestion(currentQuestionIndex); // 显示第一个问题
}

// 隐藏所有问题
function hideAllQuestions() {
  questions.forEach(question => {
    question.style.display = 'none';
  });
}

// 显示指定索引的问题
function showQuestion(index) {
  questions[index].style.display = 'block';
}

// "next" 按钮的逻辑
function next() {
  if (currentQuestionIndex < totalQuestions - 1) {
    hideAllQuestions();
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  }
}

// "back" 按钮的逻辑
function back() {
  if (currentQuestionIndex > 0) {
    hideAllQuestions();
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
  }
}

// 在页面加载完成后初始化
window.onload = function() {
  init();
};

function playAudio(audioId) {
    var audio = document.getElementById(audioId);
    audio.play();
}


function checkAnswer() {
  var userAnswers = {};

  var form1 = document.getElementById('question-form1');
  userAnswers['answerQ1'] = form1.querySelector('input[name="answerQ1"]:checked')?.value;
  var form2 = document.getElementById('question-form2');
  userAnswers['answerQ2'] = form2.querySelector('input[name="answerQ2"]:checked')?.value;
  var form3 = document.getElementById('question-form3');
  userAnswers['answerQ3'] = form3.querySelector('input[name="answerQ3"]:checked')?.value;
  var form4 = document.getElementById('question-form4');
  userAnswers['answerQ4'] = form4.querySelector('input[name="answerQ4"]:checked')?.value;
  var form5 = document.getElementById('question-form5');
  userAnswers['answerQ5'] = form5.querySelector('input[name="answerQ5"]:checked')?.value;
  var form6 = document.getElementById('question-form6');
  userAnswers['answerQ6'] = form6.querySelector('input[name="answerQ6"]:checked')?.value;
  var form7 = document.getElementById('question-form7');
  userAnswers['answerQ7'] = form7.querySelector('input[name="answerQ7"]:checked')?.value;
  var form8 = document.getElementById('question-form8');
  userAnswers['answerQ8'] = form8.querySelector('input[name="answerQ8"]:checked')?.value;
  var form9 = document.getElementById('question-form9');
  userAnswers['answerQ9'] = form9.querySelector('input[name="answerQ9"]:checked')?.value;
  var form10 = document.getElementById('question-form10');
  userAnswers['answerQ10'] = form10.querySelector('input[name="answerQ10"]:checked')?.value;

  const correctAnswers = {
    answerQ1: '2',
    answerQ2: '3',
    answerQ3: '2',
    answerQ4: '4',
    answerQ5: '5',
    answerQ6: 'B',
    answerQ7: 'D',
    answerQ8: 'C',
    answerQ9: 'B',
    answerQ10: 'A',
  };

  let score = 0;
  for (var question in correctAnswers) {
      // 首先检查答案是否为数字。如果是数字（对于前五个问题），则将答案转换为整数进行比较。然后，直接比较用户答案和正确答案。
      let userAnswer = isNaN(userAnswers[question]) ? userAnswers[question] : parseInt(userAnswers[question], 10);
      let correctAnswer = isNaN(correctAnswers[question]) ? correctAnswers[question] : parseInt(correctAnswers[question], 10);

      if (userAnswer === correctAnswer) {
          score++;
      }
  }

  alert(`Your score: ${score}/${Object.keys(correctAnswers).length}`);
}
