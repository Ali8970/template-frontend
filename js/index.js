let countdowndate = new Date("Mar 20, 2022 23:59:59").getTime();
let counter = setInterval(() => {
    let data = new Date().getTime();
    let diffDate = countdowndate - data;
    let days = Math.floor(diffDate / (1000*60*60*24));
    let hours = Math.floor(diffDate % (1000*60*60*24)/(1000*60*60));
    let minutes = Math.floor(diffDate % (1000*60*60)/(1000*60));
    let seconds = Math.floor(diffDate % (1000*60)/(1000));;
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
},1000)

let skill = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");
let st= document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .box .number");
let started = false;
window.onscroll = function(){
    if(window.scrollY >= skill.offsetTop){
        spans.forEach(span => {
            span.style.width = span.dataset.progress;
        })
    }
    if(window.scrollY >= st.offsetTop){
        if(!started){
            numbers.forEach(num => {
                let maxnum = num.dataset.num;
                let counter = setInterval(()=>{
                    num.textContent++;
                    if(num.textContent == maxnum){
                        clearInterval(counter);
                    }
                },2000 / maxnum)
            })
        }
        started=true;
        
    }
}
let ico = document.querySelector(".ic i");
document.onscroll = ()=>{
    if(window.scrollY >=700){
        ico.style.display = 'block';
    }
    else {
        ico.style.display = 'none';
    }
    
}


ico.onclick = ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

