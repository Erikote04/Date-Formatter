const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate() < 10 ? "0" + (date.getDate()) : date.getDate();
const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours() < 10 ? "0" + (date.getHours()) : date.getHours();
const minutes = date.getMinutes() < 10 ? "0" + (date.getMinutes()) : date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {
    switch (dateOptionsSelectElement.value) {
        case "yyyy-mm-dd":
            currentDateParagraph.textContent = formattedDate
                .split("-")
                .reverse()
                .join("-");
        break;
        case "mm-dd-yyyy-h-mm":
            currentDateParagraph.textContent = `${month}-${day}-${year}, ${hours}:${minutes}`;
            break;
        default:
            currentDateParagraph.textContent = formattedDate;
            break;
    }
});