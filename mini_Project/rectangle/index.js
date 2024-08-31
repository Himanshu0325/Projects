const rec = document.querySelector("#rec");

rec.addEventListener( "mousemove" , function(details){
        console.log(details)
        let recl =   rec.getBoundingClientRect();        
        let mouseLocation = details.clientX - recl.left;
        if(mouseLocation < recl.width/2){
         var bluecolor = gsap.utils.mapRange(0,recl.width/2,255,0,mouseLocation );
           gsap.to(rec,{
            backgroundColor : `rgb(${bluecolor/4},${bluecolor},0)`,
            ease : Power4
           });
          
        }
        else{
         var redcolor = gsap.utils.mapRange(recl.width/2,recl.width,0,255,mouseLocation );
         gsap.to(rec,{
          backgroundColor : `rgb(${redcolor},${redcolor/2},0)`,
          ease : Power4
         });
           
        }
});
rec.addEventListener("mouseleave",function(){
      // rec.style.backgroundColor = 'white';
      //second way 
      gsap.to(rec,{
         backgroundColor : `white`
      });
});
