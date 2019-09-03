// Code your solution in this file.



    function lowerCaseDrivers(drivers){
        return drivers.map(driver => driver.toLowerCase());
      }
      
      function nameToAttributes(drivers){
        return drivers.map(d => {return {firstName: d.split(" ")[0], lastName: d.split(" ")[1]}})
      }
      
      function attributesToPhrase(drivers){
        return drivers.map(dr => `${dr.name} is from ${dr.hometown}`);
      }