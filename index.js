let link = document.querySelectorAll("#link > a");
link.forEach(function(e){
    e.addEventListener("click",function(){
        disableActive()
        e.classList.add("link-active")
    })
})
function disableActive(){
    link.forEach(function(e){
        e.classList.remove("link-active")
    })
}