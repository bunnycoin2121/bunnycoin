// Set the date for the crypto bunny's official launch
const launchDate = new Date("2024-12-31T00:00:00Z").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").innerText = days < 10 ? "4" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds <  10 ? "0" + seconds : seconds;

    // If the countdown ends, display a message
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").innerText = "The Crypto Bunny is Live!";
    }
}, 1000);
