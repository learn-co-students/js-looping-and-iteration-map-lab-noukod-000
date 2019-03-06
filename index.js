// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(driverName){return driverName.toLowerCase()});
}

function nameToAttributes(drivers)
 {
  return drivers.map(function(driver){
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];
    return {firstName: driverFirst, lastName: driverLast};
    })
};

function attributesToPhrase(drivers)
 {
  const strings = [];
  drivers.map(function(driver) {
    strings.push(`${driver.name} is from ${driver.hometown}`)
  })
  return strings;
}
attributesToPhrase(drivers);
