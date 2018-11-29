
// game logic if there is a number from [1,2,3,4,5,6,6,7,8,9] write it twice
// in the same collumn and raw and box 1 it will be wrong 
// 

// // assaiment element in array [_,_,_, _,_,_, _,_,_
//                                _,_,_, _,_,_, _,_,_
//                                _,_,_, _,_,_, _,_,_
//                                _,_,_, _,_,_, _,_,_
//                                _,_,_, _,_,_, _,_,_
//                                _,_,_, _,_,_, _,_,_
//                                _,_,_, _,_,_, _,_,_
//                                _,_,_, _,_,_, _,_,_
//                                _,_,_, _,_,_, _,_,_]
// user complete the game with now mistake
// table are full and true the user win 
//table is false he can fix it 
// for each input is true !== red backgraund && row === true && cullomen == true && the box == true 
// input1 9 must be befor input2 1 in array 
// input3 3 must be After input2 1 in array 
// input4 4 must be after input3 3 in array 
// input5 2 must be after input4 4 in array 
// input6 7 must be after input5 2 in array 
// input7 5 must be after input6 7 in array 
// input8 8 must be After input7 5 in array 
// input9 6 must be After input8 8 in array
/*.......................................*/

// input1 2 must be befor input2 5 in array 
// input3 4 must be After input2 5 in array 
// input4 6 must be after input3 4 in array 
// input5 8 must be after input4 6 in array 
// input6 3 must be after input5 8 in array 
// input7 1 must be after input6 3 in array 
// input8 7 must be After input7 1 in array 
// input9 9 must be After input8 7 in array 

/*.......................................*/

// input1 6 must be befor input2 8 in array 
// input3 7 must be After input2 8 in array 
// input4 9 must be after input3 7 in array 
// input5 1 must be after input4 9 in array 
// input6 5 must be after input5 1 in array 
// input7 3 must be after input6 5 in array 
// input8 2 must be After input7 3 in array 
// input9 4 must be After input8 2 in array 

/*.......................................*/

// input1 4 must be befor input2 7 in array 
// input3 9 must be After input2 7 in array 
// input4 1 must be after input3 9 in array 
// input5 3 must be after input4 1 in array 
// input6 2 must be after input5 3 in array 
// input7 6 must be after input6 2 in array 
// input8 5 must be After input7 6 in array 
// input9 8 must be After input8 5 in array 

/*.......................................*/

// input1 1 must be befor input2 6 in array 
// input3 2 must be After input2 6 in array 
// input4 5 must be after input3 2 in array 
// input5 9 must be after input4 5 in array 
// input6 8 must be after input5 9 in array 
// input7 7 must be after input6 8 in array 
// input8 4 must be After input7 7 in array 
// input9 3 must be After input8 4 in array 

/*.......................................*/

// input1 5 must be befor input2 3 in array 
// input3 8 must be After input2 3 in array 
// input4 7 must be after input3 8 in array 
// input5 6 must be after input4 7 in array 
// input6 4 must be after input5 6 in array 
// input7 2 must be after input6 4 in array 
// input8 9 must be After input7 2 in array 
// input9 1 must be After input8 9 in array 
/*.......................................*/

// input1 7 must be befor input2 2 in array 
// input3 6 must be After input2 2 in array 
// input4 3 must be after input3 6 in array 
// input5 4 must be after input4 3 in array 
// input6 9 must be after input5 4 in array 
// input7 8 must be after input6 9 in array 
// input8 1 must be After input7 8 in array 
// input9 5 must be After input8 1 in array 
/*.......................................*/

// input1 3 must be befor input2 4 in array 
// input3 5 must be After input2 4 in array 
// input4 8 must be after input3 5 in array 
// input5 7 must be after input4 8 in array 
// input6 1 must be after input5 7 in array 
// input7 9 must be after input6 1 in array 
// input8 6 must be After input7 9 in array 
// input9 2 must be After input8 6 in array 

/*.......................................*/

// input1 8 must be befor input2 9 in array 
// input3 1 must be After input2 9 in array 
// input4 2 must be after input3 1 in array 
// input5 5 must be after input4 2 in array 
// input6 6 must be after input5 5 in array 
// input7 5 must be after input6 6 in array 
// input8 3 must be After input7 4 in array 
// input9 7 must be After input8 3 in array 

// [9,1,3 ,4,2,7, 5,8,6]
// [2,5,4 ,6,8,3, 1,7,9]
// [6,8,7 ,9,1,5, 3,2,4]

// [4,7,9 ,1,3,2, 6,5,8]
// [1,6,2 ,5,9,8, 7,4,3]
// [5,3,8 ,7,6,4, 2,9,1]

// [7,2,6 ,3,4,9, 8,1,5]
// [3,4,5 ,8,7,1, 9,6,2]
// [8,9,1 ,2,5,6, 4,3,7]


$(document).ready(function() {

 /// player info:

 $('.submit').on('click',function(){
    console.log('click!');
    var playerInput =$('.plInput').val();
    setPlay(playerInput)

})
function setPlay(name){
    console.log('setting player', name);
    window.localStorage.setItem('currentPlayer',name)
    renderPlayer();
} 

function renderPlayer(){
    console.log('rendering');
    var player = window.localStorage.getItem('currentPlayer');
    var playerTag = $('<p/>').text(player);
    $('.inf').empty()
    $('.inf').append(playerTag)
    $('.massege').append(playerTag)
}
 renderPlayer();
 //.....................................//

    // Game solve value: 
    $('#solve').click(function(){
            $('#input1').val('1')
            && $('#input2').val('3') && $('#input3').val('2')
            && $('#input4').val('8') && $('#input5').val('6') && $('#input6').val('5') && $('#input7').val('6')
            && $('#input8').val('3') && $('#input9').val('1') && $('#input10').val('7') && $('#input11').val('6') 
            && $('#input12').val('8') && $('#input13').val('1') && $('#input14').val('5') && $('#input15').val('3')
            && $('#input16').val('4') && $('#input17').val('7') && $('#input18').val('9') && $('#input19').val('1') 
            && $('#input20').val('2') && $('#input21').val('6') && $('#input22').val('5') && $('#input23').val('1')
            && $('#input24').val('2') && $('#input25').val('5') && $('#input26').val('9') && $('#input27').val('7')
            && $('#input28').val('3') && $('#input29').val('3') && $('#input30').val('8') && $('#input31').val('6')
            && $('#input32').val('2') && $('#input33').val('9') && $('#input34').val('1') && $('#input35').val('7')
            && $('#input36').val('6') && $('#input37').val('3') && $('#input38').val('4') && $('#input39').val('8')
            && $('#input40').val('5') && $('#input41').val('5') && $('#input42').val('8') && $('#input43').val('1')
            && $('#input44').val('9') && $('#input45').val('6') && $('#input46').val('8') && $('#input47').val('9')
            && $('#input48').val('2') && $('#input49').val('5') && $('#input50').val('6') && $('#input51').val('3') 
                   && $('#input52').val('7')
    })
/// array arenge 

var resultMessage = document.querySelector('.win');

var inputArr = [];

function checkInputt(){
for (var i = 1; i <= 52; i++){
    inputArr[i-1] = $('#input'+i).val();
    
}
}
var allinput = $('.allinput')
var counter = 0;
// $('allinput') = 
console.log(allinput[5])
var solveArray =[1,3,2,8,6,5,6,3,1,7,6,8,1,5,3,4,7,9,1,2,6,5,1,2,5,9,7,3,3,8,6,2,9,1,7,6,3,4,8,5,5,8,1,9,6,8,9,2,5,6,3,7]
//console.log(solveArray.length);

$("#check").click(function() {
    checkInputt();
    // for (var i = 0; i < inputArr.length; i++){
    //     console.log(`index${i} = ${inputArr[i]} == ${solveArray[i]}`);
    // }
    //console.log(solveArray[i] === inputArr[i]);
for( var i =0; i< allinput.length; i++){
    //console.log(inputArr[i]);
     if ( solveArray[i] == inputArr[i] ){
         //alert ('you win!')
        counter++;
     } else {
        $(allinput[i]).css({
            'border': '2px solid red',});
     }
    //  console.log($(allinput[i]).html());
 }  
 console.log(counter);   
 if (counter == 52 && true ){
    //  alert ("you win ")
    name = window.localStorage.getItem('currentPlayer')
    var $subTitle = $('<h2/>').addClass('massege animated infinite jello').text('congratulations you win ' + name );

    $('.win').append($subTitle);
  
 } else{
    name = window.localStorage.getItem('currentPlayer')
    var $subTitle = $('<h2/>').addClass('massege animated infinite jello').text('Try again ' + name );

    $('.win').append($subTitle);
 }
 });

var pad = function(n) { return (''+n).length<4?pad('0'+n):n; };

jQuery.fn.timer = function() {
    var t = this, i = 0;
    setInterval(function() {
        t.text(pad(i++));
    }, 1000);
};
                
$('#timer').timer();


jQuery(function($){
    var $dateStr=$('#countdown').data('until'); //returned from mysql timestamp/datetime field
    var $type = 'until';
    if( !$dateStr || $dateStr.length < 0 ) {
        $dateStr=$('#countdown').data('since'); //returned from mysql timestamp/datetime field
        $type = 'since';
    }
    var a=$dateStr.split(" ");
    var d=a[0].split("-");
    var t=a[1].split(":");
    var counto = new Date(d[0],(d[1]-1),d[2],t[0],t[1],t[2]);
    if( $type == 'until' ) {
        $('#countdown').countdown({until: counto});    
    } else {
        $('#countdown').countdown({since: counto});    
    }
})






                
// ......................Styling ...........................//
if (screen.width < 500) {
  
    $("body").addClass("nohover");
    $("td, th")
      .attr("tabindex", "1")
      .on("touchstart", function() {
        $(this).focus();
      });
    
  }

// ..............play again and clear board................//
        $('#playAgain').click(function() {
            location.reload();
        });
})


