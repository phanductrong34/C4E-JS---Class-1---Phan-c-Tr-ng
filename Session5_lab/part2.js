{
    alert('bai 2');
console.log('bai 2');
let myArr = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of','hat', 'late', 'sorry', 'my', 'team'];
let dem = {};
for(i = 0; i < myArr.length; i++){
    var temp = myArr[i];
    dem[temp] = (dem[temp]|| 0) + 1;
    console.log(`${temp} = ${dem[myArr[i]]} `)
}
console.log(dem);
}

{
alert('bai 3');

let inventory = [
{
    name: 'HP Envy 13aq',
    price: 21000,
    brand: 'HP',
    quantity: 5,
},
{
    name: 'Dell XPS 9370',
    price: 30000,
    brand: 'Dell',
    quantity: 1,
},
{
    name: 'Dell Inspiron 3567',
    price: 9300,
    brand: 'Dell',
    quantity: 12,   
},
{
    name: 'Dell Latitude E5450',
    price: 8600,
    brand: 'Dell',
    quantity: 2,   
},
{
    name: 'Asus Zenbook',
    price: 20000,
    brand: 'Asus',
    quantity: 4,
},
{
    name: 'HP Pavilion',
    price: 14000,
    brand: 'HP',
    quantity: 7,
}]

let inventoryByBrand = {};
for ( i = 0; i < inventory.length; i++){
    let brand = inventory[i]["brand"].toLocaleLowerCase();
    console.log(` this item brand is ${brand}`);
    if(inventoryByBrand[brand]){ //phát hiện xem có property ấy trong object inventoryByBrand ko, nếu có thì nó sẽ cho ra value, nếu chưa có property đó thì nó hiện undefine
        inventoryByBrand[brand].push(inventory[i]);
        console.log(`we already have ${brand}, update more item to it`);  
        
    } else {
        console.log(`brand ${brand} not found, create new box for it`)
        inventoryByBrand[brand] = []; // muốn push 1 hay nhiều phần tử mảng thì phải khai báo cái propety ấy là kiểu mảng đá
        inventoryByBrand[brand].push(inventory[i]);
    }

}

console.log(inventoryByBrand);

alert('bai 4');
let inputUser = (prompt('Which Brand')).toLocaleLowerCase();
let number = (inventoryByBrand[inputUser]).length;
alert(` There are ${number} generation of ${inputUser} in inventory`); 

alert('bai 567');
let inputUser2 = (prompt('Which Brand')).toLocaleLowerCase();
let number2 = (inventoryByBrand[inputUser2]).length;
let tempArr = [];
let total = 0;
for( i = 0; i < number2; i++){
    let temp = inventoryByBrand[inputUser2][i]["name"];
    tempArr.push(temp);
    total += inventoryByBrand[inputUser2][i]["price"];
}
let listName = tempArr.join('\n');

alert(` There are ${number} generation of ${inputUser} in inventory
${listName}

With the total cost of: ${total} $`);

}

