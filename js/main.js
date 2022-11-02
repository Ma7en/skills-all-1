


/*  
===============================================
===============================================
*/

/* start skils 1 */

let s1container = document.querySelector(".skils-1 .progress-bars");
let s1progress = document.querySelectorAll(".skils-1 .progress");
let s1percentage = document.querySelectorAll(".skils-1 .percentage");
let s1bol = false;
let s1count;


window.addEventListener("scroll", () => {
    if(pageYOffset > s1container.offsetTop - 400 && s1bol === false) {
        for(let i = 0; i < s1progress.length; i++) {
            s1percentage.innerText = 0;
            s1count = 0;

            let data = parseInt(s1progress[i].dataset.count);

            s1progress[i].style.transition = "width " + (data * 75) + "ms"; // 30

            s1progress[i].style.width = data + "%";

            function updataCount() {
                if(s1count < data) {
                    s1count++;
                    s1percentage[i].innerText = s1count + "%";
                    setTimeout(updataCount, 50);
                } else {
                    s1percentage[i].innerText = data + "%";
                }
            }

            updataCount();

            s1bol = true;
        }
    }
});


/* end skils 1 */

/*  
===============================================
===============================================
*/

/* start skils 2 */

let skils2 = document.querySelector(".skils-2");
let s2spans = document.querySelectorAll(".skils-2 .the-progress span");


window.addEventListener("scroll", () => {
    if(window.scrollY >= skils2.offsetTop) {
        s2spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    } else {
        s2spans.forEach((span) => {
            span.style.width = "0px";
        });
    }
});


/* end skils 2 */

/*  
===============================================
===============================================
*/

/* start skils 3 */

let skils3 = document.querySelector(".skils-3");
let s3progSpans = document.querySelectorAll(".skils-3 .prog span");

window.addEventListener("scroll", () => {
    if (window.scrollY >= skils3.offsetTop ) {
        s3progSpans.forEach((span) => {
            span.style.width = span.dataset.progress;
        });
    }
});


/* end skils 3 */

/*  
===============================================
===============================================
*/

/* start skils 4 */

let skils4 = document.querySelector(".skils-4");
let s4progSpans = document.querySelectorAll(".skils-4 .prog span");

window.addEventListener("scroll", () => {
    if (window.scrollY >= skils4.offsetTop ) {
        s4progSpans.forEach((span) => {
            span.style.width = span.dataset.progress0;
            span.style.width = span.dataset.progress20;
            span.style.width = span.dataset.progress40;
            span.style.width = span.dataset.progress60;
            span.style.width = span.dataset.progress80;
            span.style.width = span.dataset.progress;
            span.classList.add("active");
        });
    } else {
        s4progSpans.forEach((span) => {
            span.style.width = "0%";
            span.classList.remove("active");
        });
    }
});


/* end skils 4 */

/*  
===============================================
===============================================
*/

/* start skils 5 */

let skils5 = document.querySelector(".skils-5");
let s5perS = document.querySelectorAll(".skils-5 .skill-per");

window.addEventListener("scroll", () => {
    if (window.scrollY >= skils5.offsetTop ) {
        s5perS.forEach((pre) => {
            pre.classList.add("active");
        });
    } else if (window.scrollY <= skils5.offsetTop - 400) {
        s5perS.forEach((pre) => {
            pre.classList.remove("active");
        });
    }
});


/* end skils 5 */

/*  
===============================================
===============================================
*/

/* start skils 6 */

let skils6 = document.querySelector(".skils-6");
let s6progs = document.querySelectorAll(".skils-6 .prog");

window.addEventListener("scroll", () => {
    if (window.scrollY >= skils6.offsetTop ) {
        s6progs.forEach((span) => {
            span.classList.add("active");
        });
    } else if (window.scrollY <= skils6.offsetTop - 400) {
        s6progs.forEach((span) => {
            span.classList.remove("active");
        });
    }
});

/* end skils 6 */

/*  
===============================================
===============================================
*/

/* start skils 7 */

let skils7 = document.querySelector(".skils-7");
let s7barSpans = document.querySelectorAll(".skils-7 .bar span");
let s7abbrS = document.querySelectorAll(".skils-7 .bar abbr");

window.addEventListener("scroll", () => {
    if (window.scrollY >= skils7.offsetTop ) {
        s7barSpans.forEach((span) => {
            span.classList.add("active");
        });
        s7abbrS.forEach((abbr) => {
            abbr.classList.add("active");
        });
    } else if (window.scrollY <= skils7.offsetTop - 400) {
        s7barSpans.forEach((span) => {
            span.classList.remove("active");
        });
        s7abbrS.forEach((abbr) => {
            abbr.classList.remove("active");
        });
    }
});


/* end skils 7 */

/*  
===============================================
===============================================
*/

/* start skils 8 */



/* end skils 8 */

/*  
===============================================
===============================================
*/

/* start skils 9 */

let skils9 = document.querySelector(".skils-9");
let s9progText = document.querySelectorAll(".skils-9 .progText");
let s9progress = document.querySelectorAll(".skils-9 .progress");
let s9bol = false;

window.addEventListener("scroll", function() {
    if(pageYOffset > skils9.offsetTop && s9bol === false) {
        for(let i = 0; i < s9progText.length; i++) {
            s9progText[i].innerText = 0;
            count = 0;

            s9progress[i].style.bottom = "120%";

            s9progress[i].style.bottom = s9progText[i].dataset.countt - 100 + "%";

            function updataCount() {
                target = parseInt(s9progText[i].dataset.countt);

                if(count < target) {
                    count++;
                    s9progText[i].innerText = count;
                    setTimeout(updataCount, 2000 / target ); // 70
                } else {
                    s9progText[i].innerText = target + "%";
                }
            }

            updataCount();

            s9bol = true;
        }
    } else if (window.scrollY <= skils9.offsetTop - 400) {
        s9progText.forEach((text) => {
            text.innerText = "0";
        });
        s9progress.forEach((prog) => {
            prog.style.bottom = "-120%";
        });
        s9bol = false;
    }
});



/* end skils 9 */

/*  
===============================================
===============================================
*/

/* start skils 10 */

let skils10 = document.querySelector(".skils-10");
let s10barS = document.querySelectorAll(".skils-10 .bar");
let s10spanS = document.querySelectorAll(".skils-10 .box span");

window.addEventListener("scroll", () => {
    if (window.scrollY >= skils10.offsetTop ) {
        s10barS.forEach((bar) => {
            bar.classList.add("active");
        });
        s10spanS.forEach((span) => {
            span.classList.add("active");
        });
    } else if (window.scrollY <= skils10.offsetTop - 400) {
        s10barS.forEach((bar) => {
            bar.classList.remove("active");
        });
        s10spanS.forEach((span) => {
            span.classList.remove("active");
        });
    }
});


/* end skils 10 */

/*  
===============================================
===============================================
*/

/* start skils 11 */
let skils11 = document.querySelector(".skils-11");
let s11numb = document.querySelector(".skils-11 .numb");
let s11progress = document.querySelectorAll(".skils-11 .progress");
let s11counter = 0;

window.addEventListener("scroll", () => {
    if (window.scrollY >= skils11.offsetTop ) {
        s11progress.forEach((prog) => {
            prog.classList.add("active");
        });
        setInterval(() => {
            if(s11counter == 100) {
                clearInterval();
            } else {
                s11counter+=1;
                s11numb.textContent = `${s11counter}%`;
            }
        }, 80);
        
    } else if (window.scrollY <= skils11.offsetTop - 400) {
        s11progress.forEach((prog) => {
            prog.classList.remove("active");
        });
    }
});


/*
80 = 8S


*/

/* end skils 11 */

/*  
===============================================
===============================================
*/

/* start skils 12 */



/* end skils 12 */

/*  
===============================================
===============================================
*/

/* start skils 13 */



/* end skils 13 */

/*  
===============================================
===============================================
*/

/* start skils 14 */



/* end skils 14 */

/*  
===============================================
===============================================
*/

/* start skils 15 */



/* end skils 15 */

/*  
===============================================
===============================================
*/

