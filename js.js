
function change (my_image){
    my_image.src='img/bg-img/4.jpg'

}
function change1 (my_image){
    my_image.src='img/bg-img/1.jpg'

}
function change2 (my_image){
    my_image.src='img/product-img/product6.jpg'

}
function change3 (my_image){
    my_image.src='img/bg-img/5.jpg'

}
function change4 (my_image){
    my_image.src='img/product-img/product2.jpg'

}
function change5 (my_image){
    my_image.src='img/bg-img/3.jpg'

}
function last (my_image){
     my_image.src='img/bg-img/2.jpg'

}
function last1 (my_image){

    my_image.src='img/product-img/product6.jpg'

}

const backtotop=document.getElementById("backtotop")
backtotop.addEventListener("click", function (){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})



