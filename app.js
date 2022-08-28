const container = document.querySelector('.container');
const card = document.querySelector('.card');

const productimg = document.querySelector('.upper img')
const title = document.querySelector('.title');
const dis = document.querySelector('.dis');
const seclastbtn = document.querySelector('.seclast');
const purchasebtn = document.querySelector('.purchase button');



container.addEventListener("mousemove", (e) => {
    console.log(e.pageX, e.pageY);
    let xAxis = (window.innerWidth/ 2 - e.pageX)/20;
    let yAxis = (window.innerHeight/ 2 - e.pageY)/20;

    card.style.transform =`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", e =>{
    card.style.transition ='none';
    title.style.transform = "translateZ(150px)";
    productimg.style.transform = "translateZ(200px) rotateZ(-45deg)";
    dis.style.transform = "translateZ(125px)";
    seclastbtn.style.transform = "translateZ(100px)";
    purchasebtn.style.transform = "translateZ(75px)";
})


container.addEventListener("mouseleave", e =>{
    card.style.transition ='all 0.5s ease';
    card.style.transform =`rotateY(0deg) rotateX(0deg)`;

    title.style.transform = "translateZ(0px)";
    productimg.style.transform = "translateZ(0px) rotateZ(0deg)";
    dis.style.transform = "translateZ(0px)";
    seclastbtn.style.transform = "translateZ(0px)";
    purchasebtn.style.transform = "translateZ(0px)";
})