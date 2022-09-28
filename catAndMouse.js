function catAndMouse(x, y, z) {
    // while(true){
    //     if(x<z){
    //         x ++
    //     }else if(x>z){
    //         x --
    //     }if(y<z){
    //         y ++
    //     }else if(y>z){
    //         y --
    //     }if(x === z && y === z){
    //         return ("Mouse C")
    //     }else if(y === z){
    //         return ("Cat B")
    //     }else if(x === z){
    //         return ("Cat A")
    //     }
    // }

    let aToC = Math.abs(x-z)
    let bToC = Math.abs(y-z)

    if(aToC == bToC){
        return ("Mouse C")
    }else if(aToC > bToC){
        return ("Cat B")
    }else if(aToC < bToC){
        return ("Cat A")
    }
}