const Timer = {
    time: 120 * 3374,
    currentTime: 0,
    interval: null,

    timeToDays: time => Math.floor((time / 86400) % 24),
    timeToHours: time => Math.floor((time / 3600) % 60),
    timeToMinutes: time => Math.floor((time / 60) % 60),
    timeToSeconds: time => time % 60,

    formatTime: time => String(time).padStart(2, '0'),

    init() {
        Timer.currentTime = Timer.time
        Timer.interval = setInterval(Timer.countdown, 1000)
    },

    countdown() {
        Timer.currentTime = Timer.currentTime - 1

        const days = Timer.formatTime(Timer.timeToDays(Timer.currentTime))
        const hours = Timer.formatTime(Timer.timeToHours(Timer.currentTime))
        const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime))
        const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime))

        const daysElement = document.querySelector('.days')
        const hoursElement = document.querySelector('.hours')
        const minutesElement = document.querySelector('.minutes')
        const secondsElement = document.querySelector('.seconds')

        daysElement.innerHTML = days
        hoursElement.innerHTML = hours
        minutesElement.innerHTML = minutes
        secondsElement.innerHTML = seconds

        if(Timer.currentTime === 0) {
            clearInterval(Timer.interval)
            return
        }
    }
}

Timer.init()