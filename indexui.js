$(document).on('ready', function(){
	function showLoad(){
		$.mobile.loading( 'show', {
			text: 'loading',
			textVisible: true,
			theme: 'z',
			html: ""
		});	
	}
	
	function stopLoad(){       
		$.mobile.loading( 'hide', {
			text: 'loading',
			textVisible: false,
			theme: 'z',
			html: ""
		});
		$.mobile.changePage('#page2');
    }
    
	$('#page2').on('pageshow' ,function(){
		showLoad();
		setTimeout(function(){
			stopLoad();
		}, 1000);
	});
	

	
	/*$(function() {
		$( "#dialog" ).dialog();
    });  */
	
	$('#login').click(function(){
		$('#box').dialog({
			title: 'Login',
			width: 500,
			height: 300,
			Draggable: false,
			resizable: false,
			modal: true,
			buttons: [
				{
					text: 'Close',
					click: function(){
						$(this).dialog('close');
					}
				}
			]
		});		
	});	
});	
	