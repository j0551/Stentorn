

 var tableChild =[];
 let data={};
 window.onload = function () {

  var children = document.getElementById("stencontainer").children;
  console.log(children.length)


};

$(function() {
    $(".sten").draggable();
  });
  

  $(function() {
  $( "body" ).droppable({

    tolerance: 'touch',

    drop: function() {
      $('body').mouseup(function(e){
      var offset = $(this).offset();
      let x = e.clientX - offset.left;
      let y = e.clientY - offset.top;
      $('#x_axis').html(x);
      $('#y_axis').html(y);
      data = {
             "x" : x,
             "y" : y
          }
        });
        var children = document.getElementById("stencontainer").children;

        for (var i = 0; i < children.length; i++) {
          tableChild = children[i];
          console.log(tableChild.offsetLeft, children)
        }

        // console.log(data);

        
        $(this)
        .addClass( "color" )
}

}
);
});




// $(document).ready(function() {
//   $('body').click(function(e) {
//    var offset = $(this).offset();
//    let x = e.clientX - offset.left;
//    let y = e.clientY - offset.top;
//    $('#x_axis').html(x);
//    $('#y_axis').html(y);
//    let data = {
//           "x" : x,
//           "y" : y
//        }
//        console.log(e);
//       //  console.log("i den har funktionen kan vi sanda coordinater till databas"+ data)
// //         data = JSON.stringify(data);
// //    $.ajax({
// //        type: 'POST',
// //        url: "/reg_click/",
// //        contentType: 'application/json',
// //        data: data,
// //        cache: false,
// //        success: function (result) { console.log(result); }
// //  });
//   });
//  });