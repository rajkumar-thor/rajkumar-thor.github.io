const nextBtn=document.querySelector('.nextBtn');
const prevbtn=document.querySelector('.prevBtn');
const container=document.querySelector('.images');
let counter=0;
nextBtn.addEventListener('click',nextSlide);
prevbtn.addEventListener('click',prevSlide);
function nextSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
    if(counter==7){
        counter=-1;
    }
    counter++;
    console.log('next Slide', counter)
    // container.style.backgroundImage='url("img/bcg('+counter+').PNG")'
    container.src="img/bcg("+counter+").PNG";
}
function prevSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
    if(counter==0){
        counter=8;
    }
    counter--;
    console.log('next Slide', "img/bcg("+counter+").PNG")
  //  document.getElementById("myImg").src = "hackanm.gif";
    // container.style.backgroundImage='url("img/bcg('+counter+').PNG")'
    container.src="img/bcg("+counter+").PNG";

}
