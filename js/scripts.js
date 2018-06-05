function countUpTo(countTo, countBy) {
  console.log(countTo);
  console.log(countBy);
  var numberStorage = [];
  if ((numberCompare() === true) || (noZero() === true)  ) {
    alert("Count To should be lower than Count By");
  }
  if (countTo.length = 0) {
    alert("You left something blank");
  }
  if (countBy.length = 0) {
    alert("You left something blank");
  } else {
    for(var i = 0; i <= countTo; i += countBy) {
      numberStorage.push(i);
      console.log(numberStorage);
    }
  }
}

function numberCompare(countBy, countTo) {
  if (countTo <= countBy) {
    return true;
  }
}

function noZero(countBy, countTo) {
  if ((countTo <= 0) || (countBy <= 0)) {
    return true;
  }
}

function noBlanks(countTo, countBy) {
  if ((countTo.length === 0) || (countBy.length === 0)) {
    return true;
  }  
}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();

    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());
    countUpTo(countTo, countBy);
  });
});
