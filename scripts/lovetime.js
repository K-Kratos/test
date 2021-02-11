function lovetime() {
    window.setTimeout("lovetime()", 1000);
    var seconds = 1000
    var minutes = seconds * 60
    var hours = minutes * 60
    var days = hours * 24
    var months = days * 30;
    var years = days * 365
    var today = new Date()
    var todayYear = today.getFullYear()
    var todayMonth = today.getMonth()
    var todayDate = today.getDate()
    var todayHour = today.getHours()
    var todayMinute = today.getMinutes()
    var todaySecond = today.getSeconds()
    var t1 = Date.UTC(2020, 10, 12, 00, 00, 00)
    var t2 = Date.UTC(todayYear, todayMonth+1, todayDate+2, todayHour, todayMinute, todaySecond)
    var diff = t2 - t1
/*    var diffYears = Math.floor(diff / years)
    var diffDays = Math.floor((diff / days) - diffYears * 365)
    var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours)
    var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes)
    var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes *
        minutes) / seconds)*/

    var diffYears = Math.floor(diff / months + 1)
    var diffDays = Math.floor(diff / days)
    var diffHours = Math.floor(diff / hours)
    var diffMinutes = Math.floor(diff / minutes)
    var diffSeconds = Math.floor(diff / seconds)

    document.getElementById("lovetime").innerHTML = " 这是我们在一起的第    " + diffYears + "    个月 " + "第      " + diffDays + " 天    " +
        "   第  " + diffHours + "   小时   " + " 第     " + diffMinutes + "   分钟    " + " 第  " + diffSeconds + "    秒"
}
lovetime()