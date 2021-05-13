document.addEventListener("DOMContentLoaded", function() {
    let hour = document.querySelector(".hours");
    let minute = document.querySelector(".minutes");
    let second = document.querySelector(".seconds");

    function clock() {
        let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();
        
        hour.innerHTML = zero(h) + ":";
        minute.innerHTML = zero(m) + ":";
        second.innerHTML = zero(s);
    }
    function zero(a) {
        if (a < 10) return "0" + a;
        return a;
    }
    setInterval(clock,1000);
})