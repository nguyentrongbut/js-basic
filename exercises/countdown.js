window.addEventListener("load", function () {
    const daysText = document.querySelector(".days");
    const hoursText = document.querySelector(".hours");
    const minutesText = document.querySelector(".minutes");
    const secondsText = document.querySelector(".seconds");
    // Wed Oct 11 2023 15:54:51 GMT+0700 (Indochina Time)
    function countdown(date) {
        const endDate = new Date(date).getTime();
        let currentDate = new Date().getTime();
        if (isNaN(endDate) || endDate - currentDate <= 0) return;
        setInterval(calculate, 1000);
        function calculate() {
            let days, hours, minutes, seconds;
            const now = new Date();
            // covert to timestamp
            const startDate = now.getTime();
            // time remaining calculate to seconds
            let timeRemaining = parseInt((endDate - startDate) / 1000);
            if (timeRemaining > 0) {
                // 1 day = 24h * 60 * 60 = 86400
                days = parseInt(timeRemaining / 86400);
                timeRemaining = timeRemaining % 86400;
                // 1h = 60 * 60 = 3600
                hours = parseInt(timeRemaining / 3600);
                timeRemaining = timeRemaining % 3600;
                // 1m = 60s
                minutes = parseInt(timeRemaining / 60);
                timeRemaining = timeRemaining % 60;
                seconds = parseInt(timeRemaining);
                daysText.textContent = `0${days}`.slice(-2);
                hoursText.textContent = `0${hours}`.slice(-2);
                minutesText.textContent = `0${minutes}`.slice(-2);
                secondsText.textContent = `0${seconds}`.slice(-2);
            } else {
                return;
            }
        }
    }
    countdown("Wed Oct 18 2023 15:54:51 GMT+0700 (Indochina Time)");
});
