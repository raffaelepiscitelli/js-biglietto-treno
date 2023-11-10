const numberKm = parseInt(prompt("Type the number of kilometers to travel"));
const passengerAge = parseInt(prompt("Type the passenger's age"));
const ticketPricePerKm = 0.21;
const minorAge = passengerAge < 18;
const seniorAge = passengerAge > 65;
let ticketPrice = numberKm * ticketPricePerKm;
const minorAgeDiscount = ticketPrice * 20 / 100;
const seniorAgeDiscount = ticketPrice * 40 / 100;
if (minorAge) {ticketPrice = ticketPrice - minorAgeDiscount};
if (seniorAge) {ticketPrice = ticketPrice - seniorAgeDiscount};
ticketPrice = ticketPrice.toFixed(2);
document.getElementById("ticket-price").innerHTML = "The ticket price is "+ticketPrice+"€";




