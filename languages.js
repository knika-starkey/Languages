let n = prompt("Type a number from 1 to 7");
if (isNaN(n)) alert("It's not a number");
else if (n > 7 || n < 1) alert("Number must be between 1 and 7");
else {
  let lang = prompt(
    'Type "ru" if you want to chage laguage on russian, "ua" - ukranian and "en" - english'
  );
  let en = ["mon", "tue", "wen", "thu", "fri", "sat", "sun"];
  let ua = [
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п'ятниця",
    "субота",
    "неділя",
  ];
  let ru = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ];
  switch (lang) {
    case "en":
      alert(en[n - 1]);
      break;
    case "ru":
      alert(ru[n - 1]);
      break;
    case "ua":
      alert(ua[n - 1]);
      break;
    default:
      alert("Ведите язык правильно!");
  }
}
