const chrono = {
    minutes: 0,
    seconds: 0,
    tenthOfSeconds: 0,
    intervId: null,
    init: function () {
        const chronoDiv = document.getElementById("chrono");

        const minutesDiv = document.createElement("div");
        minutesDiv.classList.add("minutes");
        chronoDiv.appendChild(minutesDiv);

        const secondesDiv = document.createElement("div");
        secondesDiv.classList.add("secondes");
        chronoDiv.appendChild(secondesDiv);

        const centiemsDiv = document.createElement("div");
        centiemsDiv.classList.add("centiems");
        chronoDiv.appendChild(centiemsDiv);

        chrono.display();
    },
    display: function () {
        const minutesDiv = document.querySelector(".minutes");
        const secondesDiv = document.querySelector(".secondes");
        const centiemsDiv = document.querySelector(".centiems");

        if (chrono.tenthOfSeconds < 10) {
            chrono.tenthOfSeconds = "0" + parseInt(chrono.tenthOfSeconds)
        }
        if (chrono.seconds < 10) {
            chrono.seconds = "0" + parseInt(chrono.seconds)
        }
        if (chrono.minutes < 10) {
            chrono.minutes = "0" + parseInt(chrono.minutes)
        }

        centiemsDiv.textContent = chrono.tenthOfSeconds;
        secondesDiv.textContent = chrono.seconds;
        minutesDiv.textContent = chrono.minutes;

    },
    changeTheTime: function () {

        chrono.tenthOfSeconds++

        if (chrono.tenthOfSeconds === 100) {
            chrono.tenthOfSeconds = 0;
            chrono.seconds++;
        }
        if (chrono.seconds === 60) {
            chrono.seconds = 0;
            chrono.minutes++;
        }
        chrono.display();
    },
    start: function () {
        if (!(this.intervId)) {
            chrono.intervId = setInterval(chrono.changeTheTime, 100);
        }
    },
    stop: function () {
        clearInterval(chrono.intervId)
        chrono.intervId = null;
    }
}
chrono.init()

const start = document.getElementById("start");
start.addEventListener("click", function () {
    chrono.start();
});

const end = document.getElementById("stop");
end.addEventListener("click", function () {
    chrono.stop();
});

/* BIG UP
Seb B
Alicia C
Himed*/