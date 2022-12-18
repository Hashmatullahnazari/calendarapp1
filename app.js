
var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();

function renderCalendar() {
  // get the current month and year
  var month = currentMonth;
  var year = currentYear;

  // get the first day of the month
  var firstDay = new Date(year, month, 1);
  var firstDayOfWeek = firstDay.getDay();

  // get the number of days in the month
  var daysInMonth = new Date(year, month + 1, 0).getDate();

  // get the calendar body element
  var calendarBody = document.getElementById("calendar-body");

  // clear the calendar body
  calendarBody.innerHTML = "";

  // update the month and year in the header
  var monthYear = document.getElementById("month-year");
  monthYear.innerHTML = firstDay.toLocaleString("default", { month: "long" }) + " " + year;

  // create rows for each week of the month
  var row;
  var cell;
  var day = 1;
  for (var i = 0; i < 6; i++) {
    // create a row
    row = document.createElement("tr");

    // create cells for each day of the week
    for (var j = 0; j < 7; j++) {
      // create a cell
      cell = document.createElement("td");

      // add the day number to the cell
      if (i === 0 && j < firstDayOfWeek) {
        // this is a blank cell for a day from the previous month
        cell.innerHTML = "&nbsp;";
      } else if (day > daysInMonth) {
        // this is a blank cell for a day from the next month
        cell.innerHTML = "&nbsp;";
      } else {
        // this is a day from the current month
        cell.innerHTML = day;

        // check if this is today's date
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
          cell.classList.add("today");
        }
        day++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }
}

// render the calendar when the page loads
renderCalendar();

// functions for navigating to previous and next months
function prevMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
}

function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
}

