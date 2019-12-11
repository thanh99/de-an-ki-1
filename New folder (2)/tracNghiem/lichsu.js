let cauHoi = [{
    'id': 1,
    'question': 'Vị vua nào nổi tiếng có tài "đánh đâu thắng đó"?',
    'answer': [{
        'title': 'Ngô Quyền',
        'isRight': false,
    },
    {
        'title': 'Lê Hoàn',
        'isRight': true,
    },
    {
        'title': 'Lý Thái Tổ',
        'isRight': false,
    },
    {
        'title': 'Đinh Bộ Lĩnh',
        'isRight': false,
    },
    ],
    'isMultiAnswer': false,
},
{
    'id': 2,
    'question': 'Quốc hiệu Việt Nam xuất hiện từ thời vua Nguyễn nào?',
    'answer': [{
        'title': 'Tự Đức',
        'isRight': false,
    },
    {
        'title': 'Minh Mạng',
        'isRight': false,
    },
    {
        'title': 'Gia Long',
        'isRight': true,
    },
    {
        'title': 'Quang Trung',
        'isRight': false,
    },
    ],
    'isMultiAnswer': false,
},
{
    'id': 3,
    'question': `Trong chiến thắng vang dội trước quân Nguyên Mông, một phần công sức không nhỏ thuộc về nàng công chúa này. 
    Cô được xem như một "điệp viên cấp cao" của nhà Trần giai đoạn bấy giờ.Cô Là Ai?`,
    'answer': [{
        'title': 'Huyền Trân công chúa',
        'isRight': false,
    },
   
    {
        'title': 'An Tư công chúa',
        'isRight': true,
    },
    {
        'title': 'Công chúa Ngọc Khoa',
        'isRight': false,
    },
    ],
    'isMultiAnswer': false,
},
{
    'id': 4,
    'question': `Chiếc xe tăng nào húc đổ cổng Dinh Độc Lập trưa ngày 30/4/1975?`,
    'answer': [{
        'title': 'Chiếc xe tăng T59 số hiệu 843',
        'isRight': false,
    },
    {
        'title': 'Chiếc xe tăng T54B số hiệu 843',
        'isRight': false,
    },
    {
        'title': 'Chiếc xe tăng T54B số hiệu 390',
        'isRight': false,
    },
    {
        'title': 'Chiếc xe tăng T59 số hiệu 390',
        'isRight': true,
    },
    ],
    'isMultiAnswer': false,
},
{
    'id': 5,
    'question': `Ai đặt tên quảng trường Ba Đình?`,
    'answer': [{
        'title': 'Dược sỹ Thẩm Hoàng Tín',
        'isRight': false,
    },
    {
        'title': 'Bác sĩ Trần Văn Lai',
        'isRight': true,
    },
    {
        'title': 'Bác sỹ Trần Duy Hưng',
        'isRight': false,
    },
    ],
    'isMultiAnswer': false,
},
{
    'id': 6,
    'question': `Ngày thành lập Liên Hiệp Quốc là?`,
    'answer': [{
        'title': '20/11/1945.',
        'isRight': false,
    },
    {
        'title': '4/10/1946.',
        'isRight': false,
    },
    {
        'title': '24/10/1945. ',
        'isRight': true,
    },
    {
        'title': '27/7/1945',
        'isRight': false,
    },
    ],
    'isMultiAnswer': false,
},
{
    'id': 7,
    'question': `Bạn có biết về vị vua giàu nhất lịch sử nhân loại?`,
    'answer': [{
        'title': 'Mansa Musa',
        'isRight': true,
    },
    {
        'title': 'Roma Augustus Caesar',
        'isRight': false,
    },
    {
        'title': 'Napoleon Bonaparte',
        'isRight': false,
    },
    ],
    'isMultiAnswer': false,
},
{
    'id': 8,
    'question': `Nước nào là nước đầu tiên cho công nhân nghỉ vào ngày Quốc tế Lao động 1-5?`,
    'answer': [{
        'title': 'Liên Xô',
        'isRight': true,
    },
    {
        'title': 'Mỹ',
        'isRight': false,
    },
    {
        'title': 'Anh',
        'isRight': false,
    },
    {
        'title': 'Không phải nước nào ở trên',
        'isRight': false,
    },
    ],
    'isMultiAnswer': false,
},
{
    'id': 9,
    'question': `Ai là tiến sĩ đầu tiên của đất Nam Bộ?`,
    'answer': [{
        'title': 'Phạm Phú Thư',
        'isRight': false,
    },
    {
        'title': 'Ngụy Khắc Đản"',
        'isRight': false,
    },
    {
        'title': 'Phan Thanh Giản',
        'isRight': true,
    },
    {
        'title': 'Nguyễn Đình Chiểu',
        'isRight': false,
    },
    ],
    'isMultiAnswer': false,
},
{
    'id': 10,
    'question': `Vào thời Lý, Trần, trong dịp Tết nhiều bậc thiên tử thường làm công việc trọng đại gì?`,
    'answer': [{
        'title': 'Đổi niên hiệu',
        'isRight': true,
    },
    {
        'title': 'Lập thê tử',
        'isRight': false,
    },
    {
        'title': 'Lập hoàng hậu',
        'isRight': false,
    },
    {
        'title': 'Không làm gì cả',
        'isRight': false,
    },
    ],
    'isMultiAnswer': false,
},
];

let rightAnswerMessages = [
    `Yeahhh! Chính xác <i class="far fa-2x fa-laugh-squint"></i>`,
    `Wow,bạn ghê đấy <i class="far fa-2x fa-grin-stars"></i>`,
    `Bạn đã trả lời đúng! <i class="far fa-2x fa-kiss"></i>`,
    `Đúng rồi, tiếp nào... <i class="far fa-2x fa-grin-alt"></i>`,
]

let wrongAnswerMessages = [
    `Hả? Sai rồi. <i class="far fa-2x fa-flushed"></i>`,
    `Sai rồi nha bạn. Cố lên <i class="far fa-2x fa-grin-beam-sweat"></i>`,
    `Bạn đã trả lời sai! <i class="far fa-2x fa-meh"></i>`,
    `Có gì đó không đúng? <i class="far fa-2x fa-meh-rolling-eyes"></i>`,
]

let suffleCauHoi;

let userResult = 0;

let currentQuestion;
let indexQuestion = 0;
let totalQuestion = 0;

newGame();

function submitAnswer() {
    if (checkHasAnswer()) {
        let nameAnswer = "answer_" + currentQuestion.id;
        let right = true;
        for (let i = 0; i < document.getElementsByName(nameAnswer).length; i++) {
            let answer = document.getElementsByName(nameAnswer)[i];
            if (answer.value.toLowerCase() === 'true' && !answer.checked) {
                right = false;
                break;
            }
        }
        if (right) {
            rightAnswer();
        } else {
            wrongAnswer();
        }
        preParaForNextQuestion();
    } else {
        needAnswerQuestion();
    }
}

function checkHasAnswer() {
    let hasAnswer = false;
    let nameAnswer = "answer_" + currentQuestion.id;
    for (let i = 0; i < document.getElementsByName(nameAnswer).length; i++) {
        let answer = document.getElementsByName(nameAnswer)[i];
        if (answer.checked) {
            hasAnswer = true;
            break;
        }
    }
    return hasAnswer;
}

function nextQuestion() {
    currentQuestion = suffleCauHoi.shift();
    if (currentQuestion) {
        indexQuestion++;
        newQuestion();
        hideResult();
        displayQuestion(currentQuestion, indexQuestion);
    } else {
        finished();
    }
}

function preParaForNextQuestion() {
    document.getElementById('btnSubmitAnswer').style.display = 'none';
    document.getElementById('btnNextQuestion').style.display = 'block';
}

function displayQuestion(cQuestion, indexQuestion) {
    document.getElementById("indexQuestion").innerHTML = indexQuestion;
    document.getElementById("totalQuestion").innerHTML = totalQuestion;
    document.getElementById("contentQuestion").innerHTML = standardContentQuestion(cQuestion.question);
    document.getElementById("answerQuestion").innerHTML = "";
    let tblAnswert = '';
    if(cQuestion.isMultiAnswer){
        for (let i = 0; i < cQuestion.answer.length; i++) {
            const answer = cQuestion.answer[i];
            tblAnswert += `<li>
                            <input class="hidden" type="checkbox" value="${answer.isRight}" id="answer_${indexQuestion}_${i + 1}" name="answer_${cQuestion.id}"/>
                            <label class="w-100p m-0 py-1" for="answer_${indexQuestion}_${i + 1}">
                                ${standardContentQuestion(answer.title)}
                            </label>
                        </li>`;
        }
    }else{
        for (let i = 0; i < cQuestion.answer.length; i++) {
            const answer = cQuestion.answer[i];
            tblAnswert += `<li>
                            <input class="hidden" type="radio" value="${answer.isRight}" id="answer_${indexQuestion}_${i + 1}" name="answer_${cQuestion.id}"/>
                            <label class="w-100p m-0 py-1" for="answer_${indexQuestion}_${i + 1}">
                                ${standardContentQuestion(answer.title)}
                            </label>
                        </li>`;
        }
    }
    document.getElementById("answerQuestion").innerHTML = tblAnswert;
}

function standardContentQuestion(content){
    return content.replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
}

function onToggleSelected(e){
    console.dir(e.target.parentElement);
    e.target.parentElement.classList.toggle('selected');
}

function hideResult() {
    document.getElementById("rightAnswer").style.display = 'none';
    document.getElementById("wrongAnswer").style.display = 'none';
    document.getElementById("needAnswer").style.display = 'none';
}

function newQuestion() {
    document.getElementById('btnSubmitAnswer').style.display = 'block';
    document.getElementById("btnNextQuestion").style.display = "none";
}

function rightAnswer() {
    hideResult();
    document.getElementById("rightAnswer").style.display = 'block';
    document.getElementById("rightAnswer").innerHTML = getRandomMessage(rightAnswerMessages);
    userResult++;
}

function getRandomMessage(listMessages){
    let ran = Math.floor(Math.random() * listMessages.length);
    return listMessages[ran];
}



function wrongAnswer() {
    hideResult();
    document.getElementById("wrongAnswer").style.display = 'block';
    document.getElementById("wrongAnswer").innerHTML = getRandomMessage(wrongAnswerMessages);
}

function needAnswerQuestion() {
    hideResult();
    document.getElementById("needAnswer").style.display = 'block';
}

function finished() {
    document.getElementById("playing").style.display = 'none';
    document.getElementById("result").style.display = 'block';
    document.getElementById("userResult").innerHTML =
        "Bạn trả lời đúng " + userResult + " trên " + totalQuestion + " câu hỏi";
}

function newGame() {
    document.getElementById("playing").style.display = 'block';
    document.getElementById("result").style.display = 'none';
    suffleCauHoi = suffleCauHoiF();
    indexQuestion = 0;
    userResult = 0;
    totalQuestion = suffleCauHoi.length;
    nextQuestion();
}

function suffleCauHoiF() {
    let copy = JSON.parse(JSON.stringify(cauHoi));
    let result = [];
    while(copy.length > 0){
        let i = Math.floor(Math.random() * copy.length);
        result.push(copy.splice(i, 1)[0]);
    }
    return result;
}