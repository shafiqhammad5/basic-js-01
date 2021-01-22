


// kilometerToMeter function
function kilometerToMeter(kilometer) {
  if(kilometer < 1) {
    return "Invalid input. Kilometer cann't be nagetive."
  }
  var meter = kilometer * 1000; 
  return meter;
}
var totalMeter = kilometerToMeter(10);
console.log(totalMeter);



// budgetCalculator function
function budgetCalculator(watch, mobile, laptop) {
  var watchPrice = watch * 50;
  var mobilePrice = mobile * 100;
  var laptopPrice = laptop * 500;
  var totalBudget = watchPrice + mobilePrice + laptopPrice;

  return totalBudget;
}

var budget = budgetCalculator(2, 3, 5);
console.log(budget);



// hotelCost function
function hotelCost(days) {

  if(days < 0) {
    return "Invalid Input. Input can't be negative."
  } else if(days <= 10) {
    var hotelCost = days * 100;
  } else if ( days <= 20) {
    var firstDaysCost = 10 * 100;
    var remaining = days - 10;
    var secondDaysCost = remaining * 80;
    var hotelCost = firstDaysCost + secondDaysCost;
  } else {
    var firstDaysCost = 10 * 100;
    var secondDaysCost = 10 * 80;
    var remaining = days - 20;
    var thirdDaysCost = remaining * 50;
    var hotelCost = firstDaysCost + secondDaysCost + thirdDaysCost;
  }
  return hotelCost;
}

var totalHotelCost = hotelCost(22);
console.log(totalHotelCost);



// megaFriend function
function megaFriend(friendsName) {
  
  if(friendsName.length == 0) {
    return " Array is empty. "
  }

  var largestFriendName = "";
  
  for(var i = 0; i < friendsName.length; i++){
    if(friendsName[i].length > largestFriendName.length){
      largestFriendName = friendsName[i];
    }
  }
  return largestFriendName;
}

var friendsLargeName = megaFriend([]);
console.log(friendsLargeName);
