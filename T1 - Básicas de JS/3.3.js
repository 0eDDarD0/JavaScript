function calculateSupply(age, amount){

    const MAX_AGE = 100;
    let days = (MAX_AGE - age) * 365;
    alert(`You will need ${days * amount} to last until the ripe old age of ${MAX_AGE   }`);
}

let age = window.prompt("Edad: ");
let amount = window.prompt("amount per day");
calculateSupply(age, amount);

age = window.prompt("Edad: ");
amount = window.prompt("amount per day");
calculateSupply(age, amount);

age = window.prompt("Edad: ");
amount = window.prompt("amount per day");
calculateSupply(age, amount);