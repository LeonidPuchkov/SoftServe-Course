// var billAmount = billAmount.value;
// var numberPeople = numberPeople.value;
// var tips = tips.value;

btn.addEventListener(
  "click",
  function(e) {
    var amount = billAmount.value; // read value from input with id="billAmount"
    var mytips = tips.value;
    var mynumber = numberPeople.value;
    var res =
      (Number.parseFloat(amount) + Number.parseFloat(amount * mytips)) /
      mynumber;
    result.innerHTML = res; // write result to span with is="result"
    console.log("test");
    e.preventDefault(); // prevent form submission
  },
  true
);

/* $(document).ready(function() {
  alert("Would you like to share your tips?");
}); */

$(function() {
  alert("Would you like to share your tips?");
});

var textColor = $("h1").css("color");

$("h1").click(function() {
  alert("This is header -H1!!!");
  $("h1").css("color", "red");
});

$("p").click(function() {
  alert("This is paragraph -P!!!");
  $("p").css("color", "#800000");
});

$("#btn").click(function() {
  alert("This is button. It has id = btn!!!");
  $("form").hide();
});

$(function() {
  navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
});

function locationSuccess(position) {
  var weatherAPI =
    "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=eed13138845dbcaf86e0b1c2a9739b36";
  $.getJSON(weatherAPI, function(response) {
    $("#loc").html(response.name);
    $("#temp").html(response.main.temp - 273.15);
  });
}

function locationError(error) {
  console.warn("Error:" + error.message);
}
