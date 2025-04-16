console.log("Перевірка підключеного скрипта");

let ItemsDIV = document.getElementById("items");

if (ItemsDIV) {
    console.log(ItemsDIV)  
    
    // ItemsDIV.innerHTML += `<dict class="item">`;
    // ItemsDIV.innerHTML += `<dict class="item">`;
    // ItemsDIV.innerHTML += `<dict class="item">`;
    // ItemsDIV.innerHTML += `<dict class="item">`;

    for (let i=0; i < 100; i++) {
        ItemsDIV.innerHTML += `<dict class="item">`;
    }
}
else {
    console.log("Елемент items не знайдено");
}