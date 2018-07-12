function answers () {
  var numbers_array = ['Совершенно точно', 'Определенно', 'Несомненно', 'Да', 'Можно на это смело рассчитывать', 'Как мне кажется, да','Скорее всего', 'Прогноз положительный', 'По всем признакам - да','Ответ как-то мутно выглядит, попробуй еще', 'Попробуй позже', 'Тебеопределенное', 'Сосредоточься и спроси меня опять', 'Я бы не стала наэто рассчитывать', 'Мой ответ - нет', 'Мои источники все отрицают', 'Прогноз выглядит неутешительно', 'Сомнительно', 'Не мучай меня своимискучными вопросами, пожалуйста'];
  var rand = Math.random()
  console.log('RAND', rand);
  var numb = numbers_array.length;
  console.log('ARRNUMB', numb);
  var answer = rand * numb;
  console.log('mid answer:', answer);
  var answerround = Math.floor(answer);
  var i = numbers_array[answerround]
  console.log('ORACLE says:', i);
   document.getElementById("OrQutput").innerHTML = i
// var first_string = string_array[0];
}
// answers ()
function showQuestion() {
  var  myInput = document.getElementById('question');
  console.log('myInput', myInput);
  var inputValue = myInput.value;
  if (inputValue.length != 0) {
    console.log('inputValue', inputValue);
    document.getElementById("qQutput").innerHTML = inputValue
    answers ()
  } else {
    document.getElementById("qQutput").innerHTML = "Введите вопрос!"

  }
}

function total () {
  showQuestion()

}
