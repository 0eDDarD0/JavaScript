document.addEventListener("mousemove", (e)=>{
    document.body.innerHTML = e.clientX + ", " + e.clientY;
});