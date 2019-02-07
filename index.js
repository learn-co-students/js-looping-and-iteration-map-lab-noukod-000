// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map((driver)=>driver.toLowerCase());
}

function nameToAttributes(array){
  return array.map((name)=>Object.assign({},{firstName:name.split(" ")[0]},{lastName:name.split(" ")[1]}))
}

function attributesToPhrase(array){
  return array.map((element)=>`${element.name} is from ${element.hometown}`)
}
