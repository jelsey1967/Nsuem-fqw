let btnBurger = document.querySelector('.burger');
let headerNav = document.querySelector('.header__nav');

btnBurger.addEventListener('click', function(){
	btnBurger.classList.toggle('active');
	headerNav.classList.toggle('active');
	document.body.classList.toggle('lock');
});

// *Составление календаря
const date = new Date();  //переменная для текущей даты

const renderCalendar = () => {

	date.setDate(1); //устанавливаем первый день месяца

	const monthDays = document.querySelector(".days");
	//получение блока с датами

	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();  //находим последнее число месяца, таким образом узнаем количество дней в месяце

	const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate(); //находим последнее число прошлого месяца

	const firstDayIndex = date.getDay() - 1; //нахождение индекса недели первого дня месяца

	const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay(); //находим индекс недели последнего дня месяца

	const nextDays = 7 - lastDayIndex; // первый день следующего месяца

	const months = [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь",
		"Ноябрь",
		"Декабрь",
	]; //составление массива с названиями месяцев

	document.querySelector(".month-name").innerHTML = months[date.getMonth()]; //подставление в заголовок текущего месяца

	document.querySelector(".year-name").innerHTML = date.getFullYear(); //подставление в заголовок текущего года

	let days = "";

	for (let x = firstDayIndex; x > 0; x--) {
		days += `<p class="prev-month">${prevLastDay - x + 1}</p>`;
	} //подставление дней предыдущего месяца

	for (let i = 1; i <= lastDay; i++) {
		if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
			days += `<p class="today">${i}</p>`;
		} else if (i === 1 && date.getMonth() === 3) {
			days += `<a href="https://nsuem.ru/employee/events/?date=1.04.2021" class="link">${i}</a>`;
		}
		else {
			days += `<p>${i}</p>`;
		}
	} // подставление дней в календаре от 1 до 31, на сегодняшний день установлен класс today, добавляются ссылки на события по дням, т к я не знаю как ещё сделать

	for (let y = 1; y <= nextDays; y++) {
		days += `<p class="next-month">${y}</p>`;
		monthDays.innerHTML = days;
	} //подставление дней следующего месяца
};

document.querySelector(".icon-prev").addEventListener("click", () => {
	date.setMonth(date.getMonth() - 1);
	renderCalendar();
}); //при клике на стрелку влево показывается предыдущий месяц

document.querySelector(".icon-next").addEventListener("click", () => {
	date.setMonth(date.getMonth() + 1);
	renderCalendar();
}); //при клике на стрелку вправо показывается следующий месяц

renderCalendar();
// *Конец составления календаря

// *Открытие полезных ссылок
let linksButton = document.querySelector('.footer__useful-links');
let usefulLinksBlock = document.querySelector('.useful-links');

linksButton.addEventListener('click', function(){
	linksButton.classList.toggle('active');
	usefulLinksBlock.classList.toggle('active');
});

// *Конец открытия ссылок
