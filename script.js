const btn = document.getElementById("click")
const hed = document.getElementById("h_1")
var count = 0
btn.addEventListener('click', ()=>{
    count+=1
    console.log(count)
    if(hed.innerHTML == "World"){
        hed.innerHTML = "game on"
    }
    else{
        hed.innerHTML="World"
    }
    if(count == 10){
        hed.innerHTML = "CTF{H3ll0_Y0U_G0t_M3}"
    }
})