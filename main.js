
const name = document.getElementById("name"),
number = document.getElementById("number"),
email = document.getElementById("email"),
age = document.getElementById("age")
from = document.getElementById("from"),
to = document.getElementById("to"),
ddate = document.getElementById("ddate"),
rdate = document.getElementById("rdate"),
bookingButton = document.querySelector(".btn"),
passengerList = document.getElementById("passenger-list");


bookingButton.addEventListener("click", function (e) {
e.preventDefault();


if (name.value === "" && number.value === "" && email.value === "" && age.value === "" && from.value === "" && to.value === "" &&
  ddate.value === "" ) 
  {
  alert("You can't leave these fields empty.");
}

else {
 
  const newRow = document.createElement("tr");

  
  const newName = document.createElement("th");
  newName.innerHTML = name.value;
  newRow.appendChild(newName);

  
  const newNumber = document.createElement("th");
  newNumber.innerHTML = number.value;
  newRow.appendChild(newNumber);

  
  const newEmail = document.createElement("th");
  newEmail.innerHTML = email.value;
  newRow.appendChild(newEmail);

 
  const newAge = document.createElement("th");
  newAge.innerHTML = age.value;
  newRow.appendChild(newAge);

 
  const newFrom = document.createElement("th");
  newFrom.innerHTML = from.value;
  newRow.appendChild(newFrom);

  
  const newTo = document.createElement("th");
  newTo.innerHTML = to.value;
  newRow.appendChild(newTo);

  
  const newDdate = document.createElement("th");
  newDdate.innerHTML = ddate.value;
  newRow.appendChild(newDdate);

  
  const newRdate = document.createElement("th");
  newRdate.innerHTML = rdate.value;
  newRow.appendChild(newRdate);
  
  passengerList.appendChild(newRow);
}
});

