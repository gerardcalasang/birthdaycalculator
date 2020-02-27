setInterval(function(){timer();}, 1000);

function timer() {
    var today = new Date();
    var timeH = today.getHours();
    var timeM = today.getMinutes();
    var timeS = today.getSeconds();

    if (timeH < 10) {
        timeH = "0" + timeH;
    }
    if (timeM < 10) {
        timeM = "0" + timeM;
    }
    if (timeS < 10) {
        timeS = "0" + timeS;
    }


    var time = timeH + ":" + timeM + ":" + timeS;
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'<br>'+time;
    document.getElementById("date").innerHTML = "Today is " + date;
}






























function birthday() {
    let today = new Date();
    let cYear = today.getFullYear();
    let cMonth = today.getMonth() + 1;
    let cDay = today.getDate();

    let bYear = prompt("Enter your birth year");
    let bMonth = prompt("Enter your birth month");
    let bDay = prompt("Enter your birth day");

    let age = cYear - bYear;

    if (cMonth > bMonth)
        {
            age = age;
        }
    else if (cMonth < bMonth)
        {
            age--;
        }
    else if (cMonth == bMonth)
        {
            if (cDay >= bDay)
                {   
                    age = age;
                }
            else if (cDay < bDay)
                {
                    age--;
                }
        }
    

    document.getElementById("age").innerHTML = "You are " + age + " years old.";



}


