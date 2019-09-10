// Code your solution in this file.
function lowerCaseDrivers(driversArray){
  const newArray = [];
  for(const el of driversArray){
    newArray.push(el.toLowerCase());
  }
    return  newArray;
}

function nameToAttributes(driversArray){
  return driversArray.map(function(driver){
    const firstName = driver.split(" ")[0];
    const lastName = driver.split(" ")[1];
    return {firstName: firstName, lastName: lastName};
  });
}

function attributesToPhrase(driversArray){
  return driversArray.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  });
}
