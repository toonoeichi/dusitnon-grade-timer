 // Set the date we're counting down to (replace with your desired date and time)
 var countDownDate = new Date("October 6, 2023 08:30:00").getTime();

  // Update the countdown timer every 1 second
  var countdown = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time in milliseconds
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format the countdown timer as DD:HH:MM:SS with leading zeros
    var formattedCountdown =
      (days < 10 ? "0" : "") + days + " วัน " +
      (hours < 10 ? "0" : "") + hours + " ชั่วโมง " +
      (minutes < 10 ? "0" : "") + minutes + " นาที " +
      (seconds < 10 ? "0" : "") + seconds + " วินาที";

    // Display the countdown timer in the HTML element with id "countdown"
    document.getElementById("countdown").innerHTML = formattedCountdown;

    // When the countdown is over, display a message
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "00 วัน 00 ชั่วโมง 00 นาที 00 วินาที";
    }
  }, 1000); // Update every 1 second
