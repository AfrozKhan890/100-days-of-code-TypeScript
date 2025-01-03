// Question 80: Updating Object Properties: Add a property named color to the existing car object,
// and then update the year property to 2021. Show how to perform these operations.


interface Car{
    make:string,
    model:string,
    year:number|string,
    color?:string
}


let  car:Car = {
    make:'Suzuki',
    model:'Ciaz',
    year:2020
};
car.color = 'Red';
car.year = '2021';

console.log(car);

