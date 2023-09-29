window.addEventListener("DOMContentLoaded", function () {

    let imgSlider = document.getElementById("imgSlider");
    let prevBtn = document.getElementById("prevBtn");
    let nextBtn = document.getElementById("nextBtn");
    let content = document.querySelector(".content h2");


    let images = ["/src/img/cat1.jpeg", "/src/img/cat2.jpeg", "/src/img/cat3.jpeg", "/src/img/cat4.jpeg", "/src/img/cat5.jpeg", "/src/img/cat6.jpeg", "/src/img/cat7.jpeg", "/src/img/cat8.jpeg", "/src/img/cat9.jpeg"];
    let title= ["Cat 1","Cat 2","Cat 3","Cat 4","Cat 5","Cat 6","Cat 7","Cat 8","Cat 9"];

    let index = 0;

    function Slider() {
        if (index < 0) {
            index = images.length - 1
        } else if (index > images.length-1) {
            index = 0;
        }
        imgSlider.src = images[index];
        content.innerHTML=title[index]
    }


    prevBtn.addEventListener("click",function(){
        index--;
        Slider()
    })

    nextBtn.addEventListener("click",function(){
        index++;
        Slider()
    })
})