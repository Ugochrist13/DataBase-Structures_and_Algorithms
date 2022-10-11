
function remainderOperator(a,b){
    let remainder = 0;
    let divans = Math.floor(a/b)
    remainder = (a -(divans*b))
    return remainder
    }
    
    console.log(remainderOperator(11,3))