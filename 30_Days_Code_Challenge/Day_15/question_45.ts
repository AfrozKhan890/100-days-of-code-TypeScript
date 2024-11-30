// Question 45: Cars: Create detailed car objects with flexible properties.

function make_car(manufacture:string,year:number,price:string, ...moreInfo:[string,any][]): Object{
    let Car:{[key:string]:any} = {manufacture,year,price};
    moreInfo.forEach(([key,value])  => Car[key] = value);
    return Car;
}

let Car = make_car("Ford",2023,"$400000", ["features", "Power window"] );
console.log(Car);

