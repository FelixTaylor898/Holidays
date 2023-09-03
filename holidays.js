/* CS280 project
 * Holiday Calendars JS
 * Felix Taylor */

/* PART ONE - Set-up*/

//Pre-written holidays made for testing purposes.
//Add these holidays with the button provided on the "create.html" page
let sampleHolidays = [
  {"day":"New Year's Day", "date":"01-01", "link":"https://en.wikipedia.org/wiki/New_Year%27s_Day"},
  {"day":"National Spaghetti Day", "date":"01-04", "link":"https://nationaldaycalendar.com/national-spaghetti-day-january-4/"},
  {"day":"Martin Luther King Jr. Day", "date":"01-18", "link":"https://en.wikipedia.org/wiki/Martin_Luther_King_Jr._Day"},
  {"day":"Inauguration Day", "date":"01-20", "link":"https://www.timeanddate.com/holidays/us/inauguration-day"},
  {"day":"Groundhog Day", "date":"02-02", "link":"https://en.wikipedia.org/wiki/Groundhog_Day"},
  {"day":"Super Bowl", "date":"02-07", "link":"https://en.wikipedia.org/wiki/Super_Bowl"},
  {"day":"National Pizza Day", "date":"02-09", "link":"https://nationaldaycalendar.com/national-pizza-day-february-9/"},
  {"day":"Valentine's Day", "date":"02-14", "link":"https://en.wikipedia.org/wiki/Valentine%27s_Day"},
  {"day":"Mardi Gras", "date":"02-16", "link":"https://en.wikipedia.org/wiki/Mardi_Gras"},
  {"day":"St. Patrick's Day", "date":"03-17", "link":"https://en.wikipedia.org/wiki/Saint_Patrick%27s_Day"},
  {"day":"National Spinach Day", "date":"03-26", "link":"https://nationaldaycalendar.com/national-spinach-day-march-26/"},
  {"day":"Transgender Day of Visibility", "date":"03-31", "link":"https://en.wikipedia.org/wiki/International_Transgender_Day_of_Visibility"},
  {"day":"April Fools' Day", "date":"04-01", "link":"https://en.wikipedia.org/wiki/April_Fools%27_Day"},
  {"day":"Edible Book Day", "date":"04-01", "link":"https://en.wikipedia.org/wiki/Edible_Book_Festival"},
  {"day":"Fossil Fools Day", "date":"04-01", "link":"https://en.wikipedia.org/wiki/Fossil_Fools_Day"},
  {"day":"Reading is Funny Day", "date":"04-01", "link":"https://www.daysoftheyear.com/days/reading-is-funny-day/"},
  {"day":"Easter", "date":"04-04", "link":"https://en.wikipedia.org/wiki/Easter"},
  {"day":"Arbor Day", "date":"04-30", "link":"https://en.wikipedia.org/wiki/Arbor_Day"},
  {"day":"Cinco de Mayo", "date":"05-05", "link":"https://en.wikipedia.org/wiki/Cinco_de_Mayo"},
  {"day":"Mother's Day", "date":"05-09", "link":"https://en.wikipedia.org/wiki/Mother%27s_day"},
  {"day":"National Chocolate Chip Day", "date":"05-15", "link":"https://nationaldaycalendar.com/days-2/national-chocolate-chip-day-may-15/"},
  {"day":"Memorial Day", "date":"05-31", "link":"https://en.wikipedia.org/wiki/Memorial_Day"},
  {"day":"National Cheese Day", "date":"06-04", "link":"https://nationaldaycalendar.com/days-2/national-cheese-day-june-4th/"},
  {"day":"D-Day", "date":"06-06", "link":"https://en.wikipedia.org/wiki/Normandy_landings"},
  {"day":"Juneteenth", "date":"06-19", "link":"https://en.wikipedia.org/wiki/Juneteenth"},
  {"day":"Father's Day", "date":"06-20", "link":"https://en.wikipedia.org/wiki/Father%27s_Day"},
  {"day":"National Sea Shell Day", "date":"06-21", "link":"https://nationaldaycalendar.com/national-seashell-day-first-day-of-summer/"},
  {"day":"Independence Day", "date":"07-04", "link":"https://en.wikipedia.org/wiki/Independence_Day_(United_States)"},
  {"day":"National French Fry Day", "date":"07-13", "link":"https://nationaldaycalendar.com/national-french-fry-day-july-13/"},
  {"day":"Cat Day", "date":"08-08", "link":"https://en.wikipedia.org/wiki/International_Cat_Day"},
  {"day":"National S'mores Day", "date":"08-10", "link":"https://nationaldaycalendar.com/what-is-today/national-smores-day-august-10/"},
  {"day":"Labor Day", "date":"09-06", "link":"https://en.wikipedia.org/wiki/Labor_Day"},
  {"day":"Constitution Day and Citizenship Day", "date":"09-17", "link":"https://www.uscis.gov/citizenship/resources-for-educational-programs/constitution-day-and-citizenship-day"},
  {"day":"National Pancake Day", "date":"09-26", "link":"https://nationaldaycalendar.com/national-pancake-day-september-26/"},
  {"day":"National M&M Day", "date":"10-13", "link":"https://nationaltoday.com/national-mm-day/"},
  {"day":"Halloween", "date":"10-31", "link":"https://en.wikipedia.org/wiki/Halloween"},
  {"day":"World Vegan Day", "date":"11-01", "link":"https://en.wikipedia.org/wiki/World_Vegan_Day"},
  {"day":"Veterans Day", "date":"11-11", "link":"https://en.wikipedia.org/wiki/Veterans_Day"},
  {"day":"Thanksgiving", "date":"11-25", "link":"https://en.wikipedia.org/wiki/Thanksgiving"},
  {"day":"Hanukkah", "date":"11-28", "link":"https://en.wikipedia.org/wiki/Hanukkah"},
  {"day":"Pearl Harbor Remembrance Day", "date":"12-07", "link":"https://en.wikipedia.org/wiki/National_Pearl_Harbor_Remembrance_Day"},
  {"day":"Human Rights Day", "date":"12-10", "link":"https://en.wikipedia.org/wiki/Human_Rights_Day"},
  {"day":"Christmas Eve", "date":"12-24", "link":"https://en.wikipedia.org/wiki/Christmas_Eve"},
  {"day":"Christmas", "date":"12-25", "link":"https://en.wikipedia.org/wiki/Christmas"},
  {"day":"National Candy Cane Day", "date":"12-26", "link":"https://nationaldaycalendar.com/national-candy-cane-day-december-26/"},
  {"day":"New Year's Eve", "date":"12-31", "link":"https://en.wikipedia.org/wiki/Christmas"},
  {"day":"National Bird Day", "date":"01-05", "link":"https://en.wikipedia.org/wiki/Bird_Day#Bird_Day_and_National_Bird_Day_(United_States)"},
  {"day":"Squirrel Appreciation Day", "date":"01-21", "link":"https://nationaldaycalendar.com/squirrel-appreciation-day-january-21/"},
  {"day":"National Pet Day", "date":"04-11", "link":"https://nationaldaycalendar.com/national-pet-day-april-11/"},
  {"day":"World Penguin Day", "date":"04-25", "link":"https://nationaldaycalendar.com/world-penguin-day-april-25/"}
]

//-- 3 pre-written lists --//

let candyList = [
  {"day":"Christmas", "date":"12-25", "link":"https://en.wikipedia.org/wiki/Christmas"},
  {"day":"Halloween", "date":"10-31", "link":"https://en.wikipedia.org/wiki/Halloween"},
  {"day":"Easter", "date":"04-04", "link":"https://en.wikipedia.org/wiki/Easter"},
  {"day":"Valentine's Day", "date":"02-14", "link":"https://en.wikipedia.org/wiki/Valentine%27s_Day"},
  {"day":"National Candy Cane Day", "date":"12-26", "link":"https://nationaldaycalendar.com/national-candy-cane-day-december-26/"},
  {"day":"National M&M Day", "date":"10-13", "link":"https://nationaltoday.com/national-mm-day/"}
]

let foodList = [
  {"day":"National Spaghetti Day", "date":"01-04", "link":"https://nationaldaycalendar.com/national-spaghetti-day-january-4/"},
  {"day":"National Pizza Day", "date":"02-09", "link":"https://nationaldaycalendar.com/national-pizza-day-february-9/"},
  {"day":"National Spinach Day", "date":"03-26", "link":"https://nationaldaycalendar.com/national-spinach-day-march-26/"},
  {"day":"Edible Book Day", "date":"04-01", "link":"https://en.wikipedia.org/wiki/Edible_Book_Festival"},
  {"day":"National Chocolate Chip Day", "date":"05-15", "link":"https://nationaldaycalendar.com/days-2/national-chocolate-chip-day-may-15/"},
  {"day":"National Cheese Day", "date":"06-04", "link":"https://nationaldaycalendar.com/days-2/national-cheese-day-june-4th/"},
  {"day":"National French Fry Day", "date":"07-13", "link":"https://nationaldaycalendar.com/national-french-fry-day-july-13/"},
  {"day":"National S'mores Day", "date":"08-10", "link":"https://nationaldaycalendar.com/what-is-today/national-smores-day-august-10/"},
  {"day":"National Pancake Day", "date":"09-26", "link":"https://nationaldaycalendar.com/national-pancake-day-september-26/"},
  {"day":"National M&M Day", "date":"10-13", "link":"https://nationaltoday.com/national-mm-day/"},
  {"day":"World Vegan Day", "date":"11-01", "link":"https://en.wikipedia.org/wiki/World_Vegan_Day"},
  {"day":"National Candy Cane Day", "date":"12-26", "link":"https://nationaldaycalendar.com/national-candy-cane-day-december-26/"}
]

let animalList = [
  {"day":"Groundhog Day", "date":"02-02", "link":"https://en.wikipedia.org/wiki/Groundhog_Day"},
  {"day":"Cat Day", "date":"08-08", "link":"https://en.wikipedia.org/wiki/International_Cat_Day"},
  {"day":"National Bird Day", "date":"01-05", "link":"https://en.wikipedia.org/wiki/Bird_Day#Bird_Day_and_National_Bird_Day_(United_States)"},
  {"day":"Squirrel Appreciation Day", "date":"01-21", "link":"https://nationaldaycalendar.com/squirrel-appreciation-day-january-21/"},
  {"day":"National Pet Day", "date":"04-11", "link":"https://nationaldaycalendar.com/national-pet-day-april-11/"},
  {"day":"World Penguin Day", "date":"04-25", "link":"https://nationaldaycalendar.com/world-penguin-day-april-25/"}
]

//Pre-written list of month-long holidays for testing purposes
let monthLongSamples = [
  {"month":"april", "name":"Cancer Control Month", "link":"https://en.wikipedia.org/wiki/Cancer_Control_Month"},
  {"month":"april", "name":"Child Abuse Prevention Month", "link":"https://en.wikipedia.org/wiki/National_Child_Abuse_Prevention_Month"},
  {"month":"april", "name":"Jazz Appreciation Month", "link":"https://en.wikipedia.org/wiki/Jazz_Appreciation_Month"},
  {"month":"april", "name":"Poetry Month", "link":"https://en.wikipedia.org/wiki/National_Poetry_Month"},
  {"month":"august", "name":"American Artist Appreciation Month", "link":"https://blog.library.si.edu/blog/2010/08/11/its-american-artist-appreciation-month/#.XnjSdI7YrnE"},
  {"month":"august", "name":"National Peach Month", "link":"https://blog.aghires.com/august-national-peach-month/"},
  {"month":"december", "name":"Advent", "link":"https://en.wikipedia.org/wiki/Advent"},
  {"month":"december", "name":"Safe Toys and Gifts Month", "link":"https://nationaldaycalendar.com/safe-toys-and-gifts-month-december/"},
  {"month":"february", "name":"Black History Month", "link":"https://en.wikipedia.org/wiki/Black_History_Month"},
  {"month":"february", "name":"National Bird-Feeding Month", "link":"https://en.wikipedia.org/wiki/National_Bird-Feeding_Month"},
  {"month":"july", "name":"National Ice Cream Month", "link":"https://en.wikipedia.org/wiki/National_Ice_Cream_Month"},
  {"month":"july", "name":"National Picnic Month", "link":"https://nationaldaycalendar.com/national-picnic-month-july/"},
  {"month":"march", "name":"Irish-American Heritage Month", "link":"https://en.wikipedia.org/wiki/Irish-American_Heritage_Month"},
  {"month":"march", "name":"Women's History Month", "link":"https://en.wikipedia.org/wiki/Women%27s_History_Month"},
  {"month":"may", "name":"Asian Pacific American Heritage Month", "link":"https://en.wikipedia.org/wiki/Asian_Pacific_American_Heritage_Month"},
  {"month":"may", "name":"ASL Awareness Month", "link":"https://en.wikipedia.org/wiki/ALS_Awareness_Month"},
  {"month":"may", "name":"Jewish American Heritage Month", "link":"Jewish American Heritage Month"},
  {"month":"may", "name":"Mental Health Awareness Month", "link":"https://en.wikipedia.org/wiki/Mental_Health_Awareness_Month"},
  {"month":"november", "name":"Academic Writing Month", "link":"https://en.wikipedia.org/wiki/Academic_Writing_Month"},
  {"month":"november", "name":"National Novel Writing Month", "link":"https://en.wikipedia.org/wiki/National_Novel_Writing_Month"},
  {"month":"november", "name":"Native American Indian Heritage Month", "link":"https://en.wikipedia.org/wiki/Native_American_Indian_Heritage_Month"},
  {"month":"september", "name":"Native Guide Dog Month", "link":"https://en.wikipedia.org/wiki/National_Guide_Dog_Month"},
  {"month":"september", "name":"Native Yoga Month", "link":"https://en.wikipedia.org/wiki/Yoga_as_exercise#National_Yoga_Month"},
  {"month":"june", "name":"Aquarium Month", "link":"https://nationaldaycalendar.com/national-zoo-and-aquarium-month-june/"},
  {"month":"june", "name":"LGBT Pride Month", "link":"https://en.wikipedia.org/wiki/Gay_pride#LGBT_Pride_Month"},
  {"month":"october", "name":"Breast Cancer Awareness Month", "link":"https://en.wikipedia.org/wiki/Breast_Cancer_Awareness_Month"},
  {"month":"october", "name":"National Bullying Prevention Month", "link":"https://en.wikipedia.org/wiki/National_Bullying_Prevention_Month"},
  {"month":"october", "name":"National Disability Employment Awareness Month", "link":"https://en.wikipedia.org/wiki/National_Disability_Employment_Awareness_Month"},
  {"month":"january", "name":"National Hobby Month", "link":"https://nationaltoday.com/national-hobby-month/"},
  {"month":"january", "name":"National Slavery and Human Trafficking Prevention Month", "link":"https://en.wikipedia.org/wiki/Blue_Heart_Campaign#National_Slavery_and_Human_Trafficking_Prevention_Month"}
]

//Accessing storage to load the holidays
var holidays = [];
if (localStorage.getItem("holidays") && localStorage.getItem("holidays").length > 0) {
  let list = JSON.parse(localStorage.getItem("holidays"));
  for (var k = 0; k < list.length; k++) holidays.push(list[k]);
}

//Loading month-long holidays from storage
var holimonths = [];
if (localStorage.getItem("holimonths") && localStorage.getItem("holimonths").length > 0) {
  let list2 = JSON.parse(localStorage.getItem("holimonths"));
  for (var k = 0; k < list2.length; k++) holimonths.push(list2[k]);
}

//Holding the names of the lists
let lists = [];

//Adds click listener to show the holidays on each date
const buttons = document.querySelectorAll('.btn-light');
for (const current of buttons) current.addEventListener('click', () => { showHolidays(current.id); });

const delButtons = document.querySelectorAll('.delMonth');
for (const current of delButtons) current.addEventListener('click', () => { showDeletion(current.id); }); 

//Click listener to show the month-long holidays
const month = document.querySelector('.month');
if (month != null) month.addEventListener('click', () => { showMonth(month.id); }); 

if (document.querySelector("#accordion") != null) listSetUp();

/* PART TWO - Functions */

/* P2S1 - Mini-Helpers */

//Creates a p element with specific text
function makeP(text) {
  let p = document.createElement('p');
  p.classList.add("mt-3");
  p.innerText = text;
  return p;
}

//Opening holiday links in new tab
function openLink(link) {
  if (link != null && link != "") {
      var win = window.open(link, '_blank');
      win.focus();
  }
}

//Setting up buttons
function addFeatures(button) {
  button = addFeaturesMonth(button);
  button.classList.remove('col-10')
  button.classList.add("col-3");
  button.classList.add("col-md-3");
  button.classList.add("m-1");
  return button;
}

//Adding features to a month
function addFeaturesMonth(button) {
  button.classList.add("btn");
  button.classList.add("btn-outline-secondary");
  button.classList.add("col-10");
  return button;
}

//Creating a button that opens the "Create" link
function createButton() {
  let div = document.createElement('button');
  div = addFeatures(div);
  div.classList.remove('btn-outline-secondary');
  div.classList.add('btn-outline-primary');
  div.innerText = "Create";
  div.addEventListener('click', () => { window.open("create.html","_self"); } );
  return div;
}

/* P2S2 - List functions */

//Adding the names of the lists
function listArray() {
  lists = [];
  for (const key in localStorage) 
    if (key.startsWith('list')) lists.push(key);
}

//Setting up the list accordion
function listSetUp() {
  listArray();
  let count = 0;
  let accordion = document.querySelector('#accordion');
  accordion.replaceChildren();
  //Stepping through each list
  for (const item of lists) {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    //Setting up collapse
    let firstDiv = document.createElement('div');
    firstDiv.classList.add('card-header');
    let h2 = document.createElement('h2');
    let button = document.createElement('button');
    button.classList.add('btn');
    button.setAttribute('data-toggle', 'collapse');
    button.setAttribute('data-target', '#col' + count);
    button.setAttribute('aria-expanded', false);
    button.setAttribute('aria-controls', 'col' + count);
    button.innerText = item.substring(4);
    h2.appendChild(button);
    firstDiv.appendChild(h2);
    cardDiv.appendChild(firstDiv);

    //Setting up holiday buttons
    let secondDiv = document.createElement('div');
    secondDiv.id = 'col' + count;
    secondDiv.classList.add('collapse');
    secondDiv.setAttribute('aria-labelledby', 'headingTwo');
    secondDiv.setAttribute('data-parent', 'accordion');
    let holiDiv = fillList(item);
    secondDiv.appendChild(holiDiv);

    //Setting up modification buttons
    let buttonDiv = document.createElement('div');
    buttonDiv.classList.add('row');
    buttonDiv.classList.add('d-flex');
    buttonDiv.classList.add('justify-content-around');
    //Allowing the user to add holidays to the list
    let create = document.createElement('button');
    create = addFeatures(create);
    create.classList.remove('btn-outline-secondary');
    create.classList.add('btn-outline-primary');
    create.innerText = "Add holidays";
    create.addEventListener('click', () => { addtoList(item) });
    buttonDiv.appendChild(create);
    //Allowing the user to delete holidays from the list
    let del = document.createElement('button');
    del = addFeatures(del);
    del.classList.remove('btn-outline-secondary');
    del.classList.add('btn-outline-danger');
    del.innerText = "Remove holidays";
    del.addEventListener('click', () => listDelete(item))
    buttonDiv.appendChild(del);
    secondDiv.appendChild(buttonDiv);
    cardDiv.appendChild(secondDiv);
    accordion.appendChild(cardDiv);
    count++;
  }
  //Default text for empty list
  if (!accordion.hasChildNodes()) accordion.appendChild(makeP("There are no lists to display."));
}

//Filling up a div with buttons for the holidays
function fillList(name) {
  let div = document.createElement('div');
  div.classList.add("row");
  div.classList.add("d-flex");
  div.classList.add("justify-content-around");
  if (localStorage.getItem(name) && localStorage.getItem(name).length > 0 && JSON.parse(localStorage.getItem(name))) {
    let listItems = JSON.parse(localStorage.getItem(name));
    for (var k = 0; k < listItems.length; k++) {
      if (findIndex(holidays, listItems[k]) != -1) {
        let day = document.createElement('button');
        day = addFeatures(day);
        day.innerText = listItems[k].day + " (" + listItems[k].date + ")";
        let link = listItems[k].link;
        day.addEventListener('click', () => { openLink(link); } );
        div.appendChild(day);
      } else remove(name, listItems[k]); //If the holiday no longer exists in the main array, remove it from the list
    }
  } //Default text
  if (!div.hasChildNodes()) {
    let p = makeP("No holidays added to this list.");
    p.tabIndex = 0;
    div.appendChild(p);
  }
  return div;
}

//Allowing the user to add holidays to the list via a modal
function addtoList(list) {
  document.querySelector('#titleList').innerText = "Add holidays to " + list.substring(4);
  let parent = document.querySelector('#listItems');
  parent.replaceChildren();
  let listArray = [];
  if (localStorage.getItem(list).length > 0 && JSON.parse(localStorage.getItem(list)))
    listArray = JSON.parse(localStorage.getItem(list));
  for (const day of holidays) {
    if (findIndex(listArray, day) == -1) {
      let button = document.createElement('button');
      button = addFeatures(button);
      button.innerText = day.day + " (" + day.date + ")";
      button.addEventListener('click', () => {
        listArray.push(day);
        localStorage.setItem(list, JSON.stringify(listArray));
        button.style.visibility="hidden";
        listSetUp();
      });
      parent.appendChild(button);
    }
  }
  if (!parent.hasChildNodes()) parent.appendChild(makeP("No holidays can be added to this list."));
  $('#listModal').modal('show');
}

//Removes an entry from a list when it is no longer valid/desired
function remove(list, item) {
  let thisList = JSON.parse(localStorage.getItem(list));
  let index = findIndex(thisList, item);
  thisList.splice(index, 1);
  localStorage.setItem(list, JSON.stringify(thisList));
}

//Finds where an item exists in an array
function findIndex(list, item) {
  let num = 0;
  for (const entry of list) {
    if (entry.date == item.date && entry.day == item.day && entry.link === item.link) return num;
    num++;
  }
  return -1;
}

//Using a modal to delete entries from a list
function listDelete(list) {
  document.querySelector('#titleList').innerText = "Remove holidays from " + list.substring(4);
  let div = document.querySelector('#listItems');
  div.replaceChildren();
  if (localStorage.getItem(list) && localStorage.getItem(list).length > 0 && JSON.parse(localStorage.getItem(list))) {
    let listItems = JSON.parse(localStorage.getItem(list));
    for (var k = 0; k < listItems.length; k++) {
      let item = listItems[k];
      let day = document.createElement('button');
      day = addFeatures(day);
      day.innerText = item.day + " (" + item.date + ")";
      day.addEventListener('click', () => {
        remove(list, item);
        day.style.visibility="hidden";
        listSetUp();
      });
      div.appendChild(day);
    }
  } if (!div.hasChildNodes()) div.appendChild(makeP("This list is empty."));
  //Letting the user completely remove the list
  let removeList = document.createElement('button');
  removeList = addFeatures(removeList);
  removeList.classList.remove('btn-outline-secondary');
  removeList.classList.add('btn-danger');
  removeList.innerText = "Remove list";
  removeList.addEventListener('click', () => {
    localStorage.removeItem(list);
    listSetUp();
    $('#listModal').modal('hide');
  })
  div.appendChild(removeList);
  $('#listModal').modal('show');
}

/* P2S3 - Holiday and holimonth display and modification */

//Searches the array for each holiday on a certain date and presents them in a modal
function showHolidays (date) {
  let title = document.getElementById("title");
  title.innerText = "Holidays on " + date;
  let hds = document.getElementById("hds");
  hds.replaceChildren();
  if (holidays != null) {
    for (const holiday of holidays) {
      if (holiday["date"] == date) {
        let day = document.createElement('button');
        day = addFeatures(day);
        day.innerText = holiday["day"];
        day.addEventListener('click', () => { openLink(holiday["link"]); } );
        hds.appendChild(day);
      }
    }
  }
  if (!hds.hasChildNodes()) hds.appendChild(makeP("No holidays added for this date."));
  $('#show').modal('show');
}

//Presents the month-long holidays in a modal when selecting the month's name
function showMonth(month) {
  let title = document.getElementById("title");
  title.innerText = "Holimonths on " + month.charAt(0).toUpperCase() + month.slice(1);
  let hds = document.getElementById("hds");
  hds.replaceChildren();
  for (const ml of holimonths) {
    if (ml["month"] == month) {
      let div = document.createElement('button');
      div = addFeaturesMonth(div);
      div.innerText = ml["name"];
      div.addEventListener('click', () => { openLink(ml["link"]); } );
      hds.appendChild(div);
    }
  }
  if (!hds.hasChildNodes()) hds.appendChild(makeP("No holimonths added for this month."));
  $('#show').modal('show');
}

//Presents options for deletion based on a month
function showDeletion(month) {
  let deletionDays = document.getElementById("delHolidays");
  let deletionMonths = document.getElementById("delHolimonths");
  let str = month.charAt(0).toUpperCase() + month.slice(1);
  str = str.substring(0, str.length - 2);
  document.querySelector("#titleDays").innerText = "Delete holidays for " + str;
  document.querySelector("#titleMonths").innerText = "Delete holimonths for " + str;
  deletionDays.replaceChildren();
  deletionMonths.replaceChildren();
  for (const hd of holidays) {
    if (hd["date"].substring(0, 2) == month.slice(-2)) {
      let div = document.createElement('button');
      div = addFeatures(div);
      div.innerText = hd["day"];
      div.addEventListener('click', () => { 
        let index = holidays.indexOf(hd);
        holidays.splice(index, 1);
        div.style.visibility = "hidden";
        localStorage.setItem("holidays", JSON.stringify(holidays));
      });
      deletionDays.appendChild(div);
    }
  }
  if (!deletionDays.hasChildNodes()) deletionDays.appendChild(makeP("There are no holidays to delete."));
  for (const hm of holimonths) {
    if (hm["month"] == month.substring(0, month.length - 2)) {
      let mbutton = document.createElement('button');
      mbutton = addFeaturesMonth(mbutton);
      mbutton.innerText = hm["name"];
      mbutton.addEventListener('click', () => { 
        let num = holimonths.indexOf(hm);
        holimonths.splice(num, 1);
        mbutton.style.visibility = "hidden";
        localStorage.setItem("holimonths", JSON.stringify(holimonths));
      });
      deletionMonths.appendChild(mbutton);
    }
  }
  if (!deletionMonths.hasChildNodes()) deletionMonths.appendChild(makeP("There are no holimonths to delete."));
  $('#deletion').modal('show');
}

//Adding pre-written holidays. This has its own function to make adding pre-written lists easier.
function clickAddPre() {
    for (var k = 0; k < sampleHolidays.length; k++) 
      if (findIndex(holidays, sampleHolidays[k]) == -1) holidays.push(sampleHolidays[k]);
    localStorage.setItem("holidays", JSON.stringify(holidays));
}

/* PART THREE - Clickers */

//Loading pre-written holidays
$('#addPre').click(() => {
  clickAddPre();
});

//Deleting all holidays
$('#deleteAllD').click(() => {
  holidays = [];
  localStorage.setItem("holidays", JSON.stringify(holidays));
} );

//Deleting all holimonths
$('#deleteAllM').click(() => {
  holimonths = [];
  localStorage.setItem("holimonths", JSON.stringify(holimonths));
});

//Loading pre-written holimonths
$('#addPreMonth').click(() => {
    for (var k = 0; k < monthLongSamples.length; k++) 
      if (findIndex(holimonths, monthLongSamples[k]) == -1) holimonths.push(monthLongSamples[k]);
    localStorage.setItem("holimonths", JSON.stringify(holimonths));
});

//Using the form to add new holidays
$('#submit').click(() => {
  const form = document.querySelector('#form');
  const name = form.elements.namedItem("name").value;
  const date = form.elements.namedItem("date").value;
  const link = form.elements.namedItem("link").value;
  if (name && date) {
    const newHol = {
      "day": name,
      "date": date.substring(5),
      "link": link
    }
    holidays.push(newHol);
    localStorage.setItem('holidays', JSON.stringify(holidays));
  }
  document.querySelector("#form").reset();    
});

//Using the form to add new holimonths
$('#submit2').click(() => {
  const form = document.querySelector('#form2');
  const month = form.elements.namedItem("month").value;
  const title = form.elements.namedItem("title").value;
  const link = form.elements.namedItem("link").value;
  if (month && title) {
    const newHol = {
      "month": month,
      "name": title,
      "link": link
     }
     holimonths.push(newHol);
     localStorage.setItem('holimonths', JSON.stringify(holimonths));
  }
  document.querySelector("#form2").reset();    
});

//Using the form to add new lists
$('#submit3').click(() => {
  const form = document.querySelector('#form3');
  const name = form.elements.namedItem("name").value;
  if (name && name.length > 0) {
    lists.push("list" + name);
    localStorage.setItem('list' + name, new Array());
  }
  document.querySelector("#form3").reset(); 
  listSetUp();  
});

//Adding pre-written lists
$('#addList').click(() => {
  clickAddPre();
  localStorage.setItem('listAnimal Holidays', JSON.stringify(animalList));
  localStorage.setItem('listCandy Holidays', JSON.stringify(candyList));
  localStorage.setItem('list Food Holidays', JSON.stringify(foodList));
  listSetUp();
});

  //Removing all saved data
$('#clear').click(() => { localStorage.clear(); });