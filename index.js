const crypto = require('crypto');


let value=process.argv.slice(2)

let opration = value[0]

let numbers=value.slice(1)

if(opration==undefined ){
    console.log(`Please provide an operation(add, sub, mult, div, sin, cos, tan, random) and at least one number.`);
}

// addition
function add(arr){
    let output=0
    for(let num of arr){
        output+=Number( num)
    }
    return output
}

// subtraction 
function sub(arr){
    let output=numbers[0]
    for(let i=1;i<numbers.length;i++){
        output-=Number( numbers[i])
    }
    return output
}

// multiply
function mult(arr){
    let output=1
    for(let num of arr){
        output*=Number( num)
    }
    return output
}


// division
function div(arr){
    let result=numbers[0]
    for(let i=1;i<numbers.length;i++){
        result/=Number( numbers[i])
        if(Number( numbers[i])==0){
            console.log(`Error: Division by zero`);
            return result=`try another number`
        }
    }
    return result
}


// sin
function sin(number) {
    return Math.sin(number);
}

// cos
function cos(number) {
    return Math.cos(number);
}

// tan
function tan(number) {
    return Math.tan(number);
}

// random
function random1(length){
    if(!length){
        console.log(`provide length`);
        return
    }
    const readomBytes= crypto.randomBytes(Number(length))
    return readomBytes.toString('binary')
}
// console.log(random1(10));


if(opration=='add' || opration=='sub' || opration=='mult' || opration=='div'  ){
    if(opration=="add" && numbers.length>1){
        console.log("result:",add(numbers));
     }
     else if(opration=="sub" && numbers.length>1){
         console.log("result:",sub(numbers));
      }
      else if(opration=="mult" && numbers.length>1){
         console.log("result:",mult(numbers));
      }
      else if(opration=="div" && numbers.length>1){
         console.log("result:",div(numbers));
      }
      else{
         console.log(`Please provide an operation and at least one number .`);
      }
}

if(opration=="sin" || opration =="tan" ||opration == "cos" || opration=="random"){
    if(opration=="sin" && numbers.length==1){
        console.log("result:",sin(numbers));
     }
     else if(opration=="cos" && numbers.length==1){
        console.log("result:",cos(numbers));
     }
    
     else if(opration=="tan" && numbers.length==1){
        console.log("result:",tan(numbers));
     }
     else if(opration=="random" && numbers.length==1){
        console.log("result:",random1(numbers));
     }
     else{
        console.log(`Please provide an operation and only one number.`);
     }
    
    
}
