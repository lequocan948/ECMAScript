class Shape{
    constructor(x, y){
        this.x = x
        this.y = y
    }
    move(x,y){
        this.x = x
        this.y = y
    }
}
const shape1 = new Shape()
shape1.move(12,20)
console.log("x và y là:" ,shape1);