base = parseInt(window.prompt("base"));
exp = parseInt(window.prompt("exponente"));
sol = 1;

for(let i = 0 ; i < exp ; i++)
    sol *= base;

document.write(sol);