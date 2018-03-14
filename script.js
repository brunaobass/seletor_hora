$(function(){
	var campoHoraEscolha;
	$('input').bind('focus',function(){

		var pos = $(this).offset();
		var largura = $(this).width();

		$('.horaescolha').show();

		campoHoraEscolha = $(this);
	});
	
	$('input').bind('blur',function(){
		/*setTimeout(function(){
			$('.horaescolha').hide();
		},200)*/
		
	});

	$('.horaescolha option').on('click',function(){
		var hora = $(this).text();

		campoHoraEscolha.val(hora);
	});
});