const summaries = document.querySelectorAll('#summary');
const timeBox= document.querySelector('.time');


setInterval(()=>{

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    timeBox.innerHTML= `${h}:${m}:${s}`;
}, 1000)


function mouson() {
    this.style.color = "black";
}

function mousout() {
    this.style.color = "";
}


summaries.forEach(summary => {
    summary.addEventListener('mouseover', mouson);
    summary.addEventListener('mouseout', mousout);
});

