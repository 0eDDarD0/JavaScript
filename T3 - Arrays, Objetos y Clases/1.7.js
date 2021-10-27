function factorial(n){

    if(n == 0){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}

document.write('<table border="solid">');
for(let i = 0 ; i < 10 ; i++){
    document.write('<tr><td>' + factorial(i + 1) + '</td></tr>');
}
document.write('</table>');