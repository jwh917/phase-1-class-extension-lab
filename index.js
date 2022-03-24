// Your code here

class Polygon {
    constructor(array){
        this.array = array
    }

    get countSides(){
        // console.log(this.array)
        return this.array.length 
    }

    get perimeter(){
        // console.log(this.array)
        let sum = 0

        for (let i = 0; i < this.array.length; i++) {
            sum += this.array[i]
        }
        return sum
    }

}


class Triangle extends Polygon{
    get isValid(){
        
        if (this.array.length !== 3) return
        let side1 = this.array[0]
        let side2 = this.array[1]
        let side3 = this.array[2]
        // console.log(side1)
        // console.log(side2)
        // console.log(side3)
        if((side1 + side2 >= side3) && (side1 + side3 >= side2) && (side2 + side3 >= side1)){
            return true
        }
        else
            return false

    }
    
}


class Square extends Polygon{
    get area(){
        // only need one side for area of square
        // console.log(this.array)
        // console.log(this.array.shift())
        // console.log(this.array.pop())
        let side = this.array.shift()
        // console.log(side)
        let area = Math.pow(side,2)
        return area
    }

    get isValid(){
        // console.log(this.array)
        // all sides of a square are equal 
        let validSq = this.array.every( (val, i, arr) => val === arr[0] )
        return validSq

    }
    
}


