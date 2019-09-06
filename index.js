// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driverName){
    return driverName.toLowerCase();
  });
}
  
function nameToAttributes(drivers) {
   return drivers.map(function (driverName){
     const driverFirst = driverName.split(' ')[0];
     const driverLast = driverName.split(' ')[1];
    return { firstName: driverFirst, lastName: driverLast };
   });
  
}  

function attributesToPhrase(array) {
  return array.map(function(driver) {
    return  `${driver.name} is from ${driver.hometown}`;
  });
}

