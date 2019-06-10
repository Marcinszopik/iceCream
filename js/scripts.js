$(document).ready(function(){
  var iceCreams = ['mint', 'vanilla', 'chocolate'];
  iceCreams.forEach(function(iceCream){
    // $("." + iceCream).append("<li>" + iceCream +"</li>");
    // console.log
    $(".iceCream").append("<li>" + iceCream + "</li>");
  });

  $('.form').submit(function(event){

    var groceryItems = [$("#grocery1").val(), $('#grocery2').val(), $('#grocery3').val()];
    var groceryList = groceryItems.map(function(groceryItems){
      return groceryItems.toUpperCase();
    });
    alert(groceryList)

    // function myFunction() {
    //   var text = document.getElementById("demo").innerHTML;
    //   document.getElementById("demo").innerHTML = text.toUpperCase();
    // }

    //   alert(groceryItems);
    //   console.log('groceryList');
    event.preventDefault();
    // });


  });
});
