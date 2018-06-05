function countUpTo(countTo, countBy) {
  console.log(countTo);
  console.log(countBy);
  var numberStorage = [];
  if ((numberCompare(countTo, countBy) === true) || (noZero(countTo, countBy) === true) || (noBlanks(countTo, countBy) === true) || (notNum(countTo, countBy) === true)) {
    alert("try again");
  } else {
    for(var i = 0; i <= countTo; i += countBy) {
      numberStorage.push(i);
      console.log(numberStorage);
    }
  }
}

function numberCompare(countTo, countBy) {
  if (countTo <= countBy) {
    return true;
  }
}

function noZero(countTo, countBy) {
  if ((countTo <= 0) || (countBy <= 0)) {
    return true;
  }
}

function noBlanks(countTo, countBy) {
  if ((countTo.length === 0) || (countBy.length === 0)) {
    return true;
  }
}

function notNum(countTo, countBy) {
  if ((isNaN(countTo)) || (isNaN(countBy))) {
    return true;
  }
}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();

    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());
    console.log(countTo);
    console.log(countBy);
    countUpTo(countTo, countBy);
  });
});
