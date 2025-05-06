const Item = require('./EmitterItems.js');

let item=new Item("buiscuit",100)

console.log(`Item Name ${item.Name}`)
console.log(`Item Price ${item.Price}`)
item.on("priceChanged",(newDetails)=>{
console.log(`Items Name:${newDetails.name},Old Price is:${newDetails.oldPrice},New Price is:${newDetails.newPrice},Percentage Increased by:${newDetails.raisePer}%`)
})

item.NewPrice=120

