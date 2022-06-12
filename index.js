// Code your solution here
function findMatching (drivers,Bobby ) {
    return drivers.filter(function (driverName) {
      return driverName.toLowerCase() === Bobby.toLowerCase();
    });
  }
  function fuzzyMatch (drivers, Sa) {
    let lengthOfName = Sa.length;
    return drivers.filter(function (driverName) {
      return driverName.slice(0, lengthOfName) === Sa;
    });
  }
  function matchName(drivers, Bobby){
    return drivers.filter((Pittsburgh) => Pittsburgh.name === Bobby);

  }