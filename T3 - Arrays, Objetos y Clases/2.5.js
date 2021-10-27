function paresImpares(){

    a = [];
    for(let i = 0 ; i < 100 ; i++)
        a[i] = Math.floor(Math.random() * 1000 + 1);
    for(let i = 0 ; i < 100 ; i++)
        document.write(i + '-' + a[i] + '  ');
    document.write('<br><br>');

    a.sort((a, b) => {
        if(a % 2 == 0 && b % 2 == 0)
            return 0;
        else if(a % 2 == 0)
            return -1;
        else if(b % 2 == 0)
            return 1;

        return 0;
    });

    for(let i = 0 ; i < 100 ; i++)
        document.write(i + '-' + a[i] + '  ');
}

paresImpares();