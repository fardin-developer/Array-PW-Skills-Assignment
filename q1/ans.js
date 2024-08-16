let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//task1
shoppingCart.unshift('Meat')

//another way
let shoppingCarts = ['Milk', 'Coffee', 'Tea', 'Honey']
for (let i = shoppingCarts.length; i > 0; i--) {
    shoppingCarts[i] = shoppingCarts[i - 1];
}
shoppingCarts[0] = 'Meat';
console.log(shoppingCarts);



//task2 add sugar
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar')
}


// task3 remove honey
const allergicToHoney = false; 
if (allergicToHoney) {
    shoppingCart = shoppingCart.filter(item => item !== 'Honey');
}


//task4 modify tea to green tea
const indexOfTea = shoppingCart.indexOf('Tea');
if (indexOfTea !== -1) {
    shoppingCart[indexOfTea]= "Green Tea"
}

console.log(shoppingCart);

