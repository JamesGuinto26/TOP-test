const monthSelector = document.getElementById("calendar-selector");
const monthHeader = document.getElementById("month-label");
const calendarList = document.querySelector(".calendar-grid")
const currentDate = document.querySelector(".date-holder");

monthSelector.addEventListener("change", () => {

    let month = monthSelector.value;
    createCalendar(month);
});

function createCalendar(month) {

    let numOfDays;

    switch (month) {

        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December": {

            numOfDays = 31;
            break;
        }    
        case "February": {

            numOfDays = 28;
            break;
        }
        case "April":
        case "June":
        case "September":
        case "November": {

            numOfDays = 30;
            break;
        }
        default : {

            break;
        }
    }

    let i;

    /* Clear the stuff first so it won't overload */
    calendarList.textContent = "";
    monthHeader.textContent = month;
    currentDate.textContent = "";

    for (i = 1 ; i <= numOfDays ; i++) {

        const listCard = document.createElement("li");

        const dateButton = document.createElement("button");
        dateButton.textContent = i;
        
        dateButton.addEventListener("click", () => {

            document.querySelectorAll(".calendar-grid button").forEach(button => {
                button.classList.remove("selected"); /* to ensure that only one date is selected */
            });

            dateButton.classList.add("selected"); /* to indicate it is selected */

            currentDate.textContent = `${month} ${dateButton.textContent}`;
        });
        
        calendarList.appendChild(listCard);
        listCard.appendChild(dateButton);
    }
}




