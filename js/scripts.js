$(document).ready(function(){
  // var iceCreams = ['mint', 'vanilla', 'chocolate'];
  // iceCreams.forEach(function(iceCream){
  //   // $("." + iceCream).append("<li>" + iceCream +"</li>");
  //   // console.log
  //   $(".iceCream").append("<li>" + iceCream + "</li>");
  // });
  //
  // $('.form').submit(function(event){
  //
  //   var groceryItems = [$("#grocery1").val(), $('#grocery2').val(), $('#grocery3').val()];
  //   var groceryList = groceryItems.map(function(groceryItems){
  //     return groceryItems.toUpperCase();
  //
  //   });
  //
  //   groceryList.sort();
  //   alert(groceryList);
  //
  //
  //   //   alert(groceryItems);
  //   //   console.log('groceryList');
  //   event.preventDefault();
  //   // });
  //
  //
  // });

  $('.form2').submit(function(event){

    var str = $('#wordPlay').val();
    var splits = str.split(' ');
    console.log(splits);
    // var string = 'wordPlay.';
    // var splits = string.split(' ',3);
    // console.log(splits)
    // var splits = string.split(' ');
    // console.log(splits)
    alert(splits);
    event.preventDefault();
  });

});
