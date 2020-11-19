export default function correctEndings(n, textForms) {  
  n = Math.abs(n) % 100; let n1 = n % 10;
  if (n > 10 && n < 20) { return textForms[2]; }
  if (n1 > 1 && n1 < 5) { return textForms[1]; }
  if (n1 === 1) { return textForms[0]; }
  return textForms[2];
} 
// Функция принимает в себя цифру, и склонения слова
// Пример работы, подставлять интуитивно :)
// correctEndings(1, ['минута', 'минуты', 'минут']); вернет — минута
// correctEndings(2, ['минута', 'минуты', 'минут']);  вернет — минуты
// correctEndings(5, ['минута', 'минуты', 'минут']);  вернет — минут