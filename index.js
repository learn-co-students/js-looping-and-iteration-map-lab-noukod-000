// Code your solution in this file.
function lowerCaseDrivers(lower)
{
    return lower.map((driver) => driver.toLowerCase());
}

function nameToAttributes(profile_user){
  return profile_user.map(function(user_info){
    const user_infoFirst = user_info.split(' ')[0];
    const user_infoLast = user_info.split(' ')[1];

    return { firstName: user_infoFirst, lastName: user_infoLast };
  });
}

function attributesToPhrase(attributes){
  return attributes.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  });
}
