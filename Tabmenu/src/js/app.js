
window.addEventListener("DOMContentLoaded",function(){
    let menuTop=document.querySelectorAll(".tab_menu_top div");
    let menuDown=document.querySelectorAll(".tab_menu_down div");

    menuTop.forEach((item)=>{
        item.addEventListener("click",function(){
            let activeElement=document.querySelector(".active");
            activeElement.classList.remove("active");
            this.classList.add("active");
            let index= this.getAttribute("data-index");

        //    for(let content of menuDown){
        //     if(content.getAttribute("data-index")==index){
        //         content.classList.add("show")
        //     }else{
        //         content.classList.remove("show")
        //     }
        //    }

        menuDown.forEach((x)=>{
            x.classList.remove("show")
        })

        let contentToShow = document.querySelector(`.tab_menu_down div[data-index="${index}"]`);
        if (contentToShow) {
            contentToShow.classList.add("show");
        }
        })

    })


  
})