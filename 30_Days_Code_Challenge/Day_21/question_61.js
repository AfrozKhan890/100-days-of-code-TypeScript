"use strict";
// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, 
// and motorcycles using enums, and show one example.
var VehiclesType;
(function (VehiclesType) {
    VehiclesType[VehiclesType["car"] = 0] = "car";
    VehiclesType[VehiclesType["bus"] = 1] = "bus";
    VehiclesType[VehiclesType["truck"] = 2] = "truck";
    VehiclesType[VehiclesType["aeroplane"] = 3] = "aeroplane";
    VehiclesType[VehiclesType["bike"] = 4] = "bike";
    VehiclesType[VehiclesType["motorcycle"] = 5] = "motorcycle";
})(VehiclesType || (VehiclesType = {}));
console.log(VehiclesType.motorcycle);
