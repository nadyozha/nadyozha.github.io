$('#btn-rose').click(function(){
$('#btn-rose').addClass('actives-rose');
$('#btn-yellow').removeClass('actives-yellow');
$('#btn-green').removeClass('actives-green');
$('#thert-color-bg').addClass('thert-rose');
$('#thert-color-bg').removeClass('thert-yellow');
$('#thert-color-bg').removeClass('thert-green');
});


$('#btn-yellow').click(function(){
$('#btn-yellow').addClass('actives-yellow');
$('#btn-rose').removeClass('actives-rose');
$('#btn-green').removeClass('actives-green');
$('#thert-color-bg').addClass('thert-yellow');
$('#thert-color-bg').removeClass('thert-rose');
$('#thert-color-bg').removeClass('thert-green');
});

$('#btn-green').click(function(){
$('#btn-green').addClass('actives-green');
$('#btn-yellow').removeClass('actives-yellow');
$('#btn-rose').removeClass('actives-rose');
$('#thert-color-bg').addClass('thert-green');
$('#thert-color-bg').removeClass('thert-yellow');
$('#thert-color-bg').removeClass('thert-rose');
});