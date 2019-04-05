//Executes when gage loads and it's ready to view

var step=0;
var titles=[
  'Fold Diagonally',
  'Fold Downward',
  'Fold Corners Towards to Center',
  'Unfold Both',
  'Fold Towards to Top (LEFT)',
  'Fold Towards to Top (RIGHT)',
  'Tuck into the Pocket (BOTH CORNER)',
  'Decorate',
  'Done',
];

$('body').css('background','#FFB41F');

$(function(){
  $("#stepinfo,section,footer,.prev,#final").hide();
});

$('.start').on('click',function(){
  //do stuff when the button is clicker
  $('.intro,.material,.needs,.start').hide();
  $('footer,#stepinfo').show();
  step=1;
  $('#step'+step).show();
  //f(x)=x+2
  //Set the title for our current step
  $('#stepinfo').text('Step '+step+': '+titles[step-1]);
});

$('.next').on('click',function(){
    $('#step'+step).hide();
    step++;
  //make the change only if we are under our number of steps
  if(step == 2){
    $('.prev').show();
  }
  if(step ==9){
    $('.next').hide();
    $('#final').show().html('<strong>Start Again?<strong>');
  }
  if(step <=9){
    $('#step'+step).show();
    $('#stepinfo').text('Step '+step+': '+titles[step-1]);
  }
  else{
    step--;
    $('#step'+step).show();
    $('.next').hide();
  }
});

$('.prev').on('click',function(){
    $('#step'+step).hide();
    step--;
  //make the change only if we are under our number of steps
  if(step == 1){
    $('.prev').hide();
  }
  else{
    $('.next').show();
  }
  if(step >=1){
    $('#step'+step).show();
    $('#stepinfo').text('Step '+step+': '+titles[step-1]);
  }
  else{
    step--;
    $('#step'+step).show();
  }
});
