
// Question 74:Swapping Variables: Demonstrate how to swap the values of two variables. Start with 
// variables `a = 5` and `b = 10`, then swap their values so that `a` becomes `10` and `b` becomes `5`.


function swap_Values(){
    let a = 5, b = 10;
    console.log("Before Swapping: a=",a, "and b=",b);
    
    let temporary = a;
    a = b;
    b = temporary;
    console.log("After Swapping: a=",a, "anf b=",b);
    
}

swap_Values();