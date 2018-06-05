function countUpTo(countTo, countBy) {
  console.log(countTo);
  console.log(countBy);
  var numberStorage = [];
  for(var i = 0; i <= countTo; i += countBy) {
    numberStorage.push(i);
    console.log(numberStorage);
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
