// Code your solution in this file

 function findMatching(drivers, name) {
   return drivers.filter(function(match) {return match.charAt(0).toUpperCase() + match.slice(1) === name})
 }

function fuzzyMatch(drivers, slice) {
  return drivers.filter(function(match) {return match.slice(0, slice.length) === slice})
}

function matchName(drivers, person) {
  return drivers.filter(function(match) {return match["name"] === person} )
}
