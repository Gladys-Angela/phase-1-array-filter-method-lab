// Code your solution here
function findMatching (drivers,Bobby ) {
    return drivers.filter(function (members) {
      return members.toLowerCase() === Bobby.toLowerCase();
    });
  }
  function fuzzyMatch (drivers, Sa) {
    let lengthOfName = Sa.length;
    return drivers.filter(function (members) {
      return members.slice(0, lengthOfName) === Sa;
    });
  }
  function matchName(drivers, Bobby){
    return drivers.filter((Pittsburgh) => Pittsburgh.name === Bobby);

  }