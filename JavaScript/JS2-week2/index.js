'use strict'
const inventory = 
[ {
    product : "Milk, 1L carton",
    best_before : "2018-10-04",
    price : 15.5
}, 
{
    product : "Milk, 1L carton",
    best_before:  "2018-10-04",
    price : 15.5   
},
{
    product : "Eggs 12pcs",
    best_before : "2018-10-04",
    price : 35.0
},
{
    product : "Swedish meatballs",
    best_before : "2018-10-25",
    price : 22.0
}
];


//RESPUESTA 1 - Returns min and max array.price


const sortPrice = inventory.sort((a, b) => (a.price > b.price? 1 : -1));
console.log(sortPrice);

const min = sortPrice[0]
console.log (min);

const max = sortPrice[sortPrice.length-1]
console.log(max);


// // RESPUESTA 2 - return ONLY price of the item 
// const min = Math.min(...inventory.map(item => item.price));

// console.log(min);

// const max = Math.max(...inventory.map(item => item.price));

// console.log(max);








// Write her two Javascript functions which, given a list of inventory items, return 1) the most expensive item, and
// 2) the cheapest item.
// The functions receive the inventory as a text string in JSON format, and should both return a text string containing an array of items (possibly only one item), in the same JSON format as the input. If there are several items with equal price, they should all be included in the array. You can assume that the input is always valid and in the same format, and its length isn't more than a few hundred items.





