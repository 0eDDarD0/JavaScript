function username(str){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('sugest').innerHTML = "Sugerencias:<br>";
            names = JSON.parse(this.responseText);
            for(let i = 0 ; i < names.response.length ; i++){
                let p = document.createElement('p');
                p.innerHTML = names.response[i];
                document.getElementById('sugest').appendChild(p);
            }
        }
    };
    xhttp.open("GET", "username.php?str=" + str, true);
    xhttp.send();
}

window.addEventListener('keyup', (e)=>{
    if(document.getElementById('name').value.length > 3){
        username(document.getElementById('name').value);
    }
});
