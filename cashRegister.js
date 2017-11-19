function showStaff() {
    var passWord = prompt("Please enter staff password");
    if (passWord == "password"){
      alert("Password is correct");
      var x = document.getElementById('staffMembers');
      if (x.style.display === 'none') {
          x.style.display = 'block';
          x.style.display === 'none';
      } else {
          x.style.display = 'none';
      }
  }
    else {
      alert("Password incorrect");
      }
}

var itemsForSale = [];
function groceryItem(name, price, costperKilo, category){
  this.name = name;
  this.price = price;
  this.costperKilo = costperKilo;
  this.category = category;
  this.updateItem = function(){
    var stockTable = document.getElementById("elstocktable");
    stockTable.innerHTML = "<tr><td>"+this.name+"</td><td>"+this.price+"</td><td>"+this.costperKilo+"</td></tr>";
}
}
var eggs = new groceryItem("eggs", 0.98, 0,"fridge");
var milk = new groceryItem("milk", 1.23, 0, "dairy");
var magazine = new groceryItem("magazine", 4.99, 0, "misc");
var chocolate = new groceryItem("chocolate", 0.45, 0, "confectionary");

console.log(eggs);
console.log(milk);


var StaffMember = {
    staffName: this.staffName,
    getStaffName: function (){
      var radios = document.getElementsByName('staff');
      for (var i=0, len= radios.length; i<len; i++){
        if(radios[i].checked){
          this.staffName = radios[i].value;
          break;
        }
      }
    },
    staffDiscount: this.discountPercent,
    getStaffDiscount: function(){
      switch(this.staffName){
      case("Bob"):
        this.staffDiscount = 10;
      break;
      case("Susan"):
        this.staffDiscount = 5;
      break;
      case("Scott"):
        this.staffDiscount = 20;
      break;
      }
      return (this.staffDiscount);
    }
}

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
      },
    showLastTransaction: function(){
        var transactionLog = document.getElementById("receipt");
        transactionLog.innerHTML=this.lastTransactionAmount.toFixed(2);
    },
    scan: function(item,quantity){
      var itemQty = document.getElementsByName('item');
      var outPut = "";
      this.transactionLog = document.getElementById("receipt");
      for (var i=0, len= itemQty.length; i<len; i++){
        if(itemQty[i].value > 0){
        var eggsQty = document.getElementById("eggsQty").value;
        if (eggsQty > 0){
          item = "eggs";
          console.log(item=="eggs");
          console.log(eggsQty + item);
          if (item = "eggs"){
            this.add(eggsQty * 0.98);
            outPut = outPut + "<br>" + eggsQty + " x " + item + " = " + (eggsQty*0.98) + "<input type='checkbox' name='receipt' value="+(eggsQty * 0.98) +">";
          }
        }
        var milkQty = document.getElementById("milkQty").value;
        if (milkQty > 0){
          item = "milk";
          console.log(item=="milk");
          console.log(milkQty + item);
          if (item = "milk"){
            this.add(milkQty * 1.23);
            outPut = outPut + "<br>" + milkQty + " x " + item + " = " + (milkQty*1.23) + "<input type='checkbox' name='receipt' value="+(milkQty * 1.23) +">";
          }
        }
        var magazineQty = document.getElementById("magazinesQty").value;
        if (magazineQty > 0){
          item = "magazine";
          console.log(item=="magazine");
          console.log(magazineQty + item);
          if (item = "magazine"){
            this.add(magazineQty * 4.99);
            outPut = outPut + "<br>" + magazineQty + " x " + item + " = " + (magazineQty*4.99) + "<input type='checkbox' name='receipt' value="+(magazineQty * 4.99) +">";
          }
        }
        var chocolateQty = document.getElementById("chocolateQty").value;
        if (chocolateQty > 0){
          item = "chocolate";
          console.log(item=="chocolate");
          console.log(chocolateQty + item);
          if (item = "chocolate"){
            this.add(chocolateQty * 0.45);
            outPut = outPut + "<br>" + chocolateQty + " x " + item + " = " + (chocolateQty*0.45) + "<input type='checkbox' name='receipt' value="+(chocolateQty * 0.45) +">";
            break;
          }
        }
      }
    }
    this.transactionLog.innerHTML = outPut;
  },
  //       switch (item){
  //       case "eggs":
  //       this.add(0.98 * eggsQty);
  //       break;
  //       case "milk":
  //       this.add(1.23 * milkQty);
  //       break;
  //       case "magazine":
  //       this.add(4.99 * magazineQty);
  //       break;
  //       case "chocolate":
  //       this.add(0.45 * chocolateQty);
  //       break;
  //       }
  //       return true;
  //     }
  //   }
  // },

    voidLastTransaction : function(){
        var totalRefund = 0;
        var receiptItem = document.getElementsByName('receipt');
        for (var i=0, len= receiptItem.length; i<len; i++){
          if(receiptItem[i].checked){
            totalRefund = receiptItem[i].value;
            console.log(totalRefund);
            this.total -= totalRefund;
            console.log("minus last transaction " + totalRefund);
            function myFunction(){
            if(receiptItem.checked){
              receiptItem.removeChild(receiptItem.childNodes[i]);
            }
          }
        }
        showBill();
       }
     }

    // applyStaffDiscount: function(){
    // console.log(this.total);
    // this.total -= (this.total * StaffMember.discountPercent / 100);
    // console.log(StaffMember.discountPercent);
}



var applyStaffDiscount = function(){
  StaffMember.getStaffName();
  StaffMember.getStaffDiscount();
  console.log(StaffMember.staffDiscount);
  cashRegister.total -= (cashRegister.total * StaffMember.staffDiscount / 100);
  var outputBill = document.getElementById("totalOutput");
  outputBill.innerHTML = 'Your bill is '+cashRegister.total.toFixed(2)+ " using staff discount from " + StaffMember.staffName;
  console.log('Your bill is '+cashRegister.total.toFixed(2));
}
// Create a new method applyStaffDiscount here


//cashRegister.scan();
//cashRegister.scan('milk',1);
//cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object
// to applyStaffDiscount
//cashRegister.applyStaffDiscount(me);

// Show the total bill
var showBill = function(){

  var outputBill = document.getElementById("totalOutput");
  outputBill.innerHTML = 'Your bill is '+cashRegister.total.toFixed(2)
  console.log('Your bill is '+cashRegister.total.toFixed(2));
}
