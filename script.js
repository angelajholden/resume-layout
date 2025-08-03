console.log("Script has loaded!");

const date = document.getElementById("date");
const year = new Date().getFullYear();

if (date) {
	date.textContent = year;
}

const print = document.querySelector(".print_resume");

if (print) {
	print.addEventListener("click", () => {
		window.print();
	});
}
