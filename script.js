window.addEventListener("mousemove",function(details){

    var box = document.querySelector(".box"); //select the box
    var boxwidth = box.getBoundingClientRect().width;//finding the width of the box
    // console.log(dets.clientX);
    var xval = gsap.utils.mapRange(0,window.innerWidth,80+boxwidth/2,window.innerWidth-(boxwidth/2+80),details.clientX);
    gsap.to('.box',{
        // left:details.clientX+'px',
        left:xval+'px',
        ease:Power3
    });
})