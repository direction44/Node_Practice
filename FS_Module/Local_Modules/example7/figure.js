class circle{
    constructor(radius)
    {
        this.radius=radius
    }
    calculateArea()
    {
        return Math.PI*Math.pow(this.radius,2)
    }
}

module.exports=circle