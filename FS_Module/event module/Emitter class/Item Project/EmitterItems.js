const EventsEmitter = require('events');
class Item extends EventsEmitter{
    constructor(itemName,itemPrice)
    {
        super()
        this.itemName=itemName
        this.itemPrice=itemPrice
    }
    get Name()
    {
        return this.itemName
    }
    get Price()
    {
       return this.itemPrice
    }
    set NewPrice(price)
    {
        if(price>this.itemPrice){
            let percentage=(((price-this.itemPrice)*100)/this.itemPrice).toFixed(2)
            this.emit("priceChanged",{name:this.itemName,oldPrice:this.itemPrice,newPrice:price,raisePer:percentage})
        }
        this.itemPrice=price
    }
}

module.exports=Item