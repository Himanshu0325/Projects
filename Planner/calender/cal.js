today = new Date()
currentMonth = today.getMonth();
currentYear = today.getFullYear();

document.addEventListener("DOMContentLoaded", function() {
  showCalendar(currentMonth, currentYear);
});

function showCalendar(month, year) {
  let firstDay = (new Date(year, month)).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  let calendarDays = document.getElementById("calendar-days");
  calendarDays.innerHTML = "";

  document.getElementById("month-year").textContent = `${getMonthName(month)} ${year}`;

  // Add empty days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    let dayDiv = document.createElement("div");
    calendarDays.appendChild(dayDiv);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    let dayDiv = document.createElement("div");
    dayDiv.textContent = day;
    if (day === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
      dayDiv.classList.add("current-day");
    }
    dayDiv.addEventListener("click" ,function(){
        console.log(day)
        popup ();
    });
    calendarDays.appendChild(dayDiv);
  }
}

function getMonthName(month) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
  return monthNames[month];
}

function prevMonth() {
  currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
  currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function nextMonth() {
  currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function popup(){
  var x = document.getElementById("popup");
   x.style.cssText = "visibility: visible";
}
function remove_popup(){
  var x = document.getElementById("popup");
  x.style.cssText = "visibility: hidden";
  let y =1;
  y = y+1;
  task_list();
}
function task_list(){
  let list = document.createElement("li")
  let holiday = document.getElementById("ts")
  let input = document.getElementById("input")
  let task = input.value 
  list.textContent = task
  
  holiday.appendChild(list)
}