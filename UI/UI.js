var RPJE_UI_MODAL = null;
var RPJE_UI_MODAL_BTN = null;
var RPJE_UI_MODAL_SPAN = null;

var RPJE_UI_MODAL_TCHAT = null;
var RPJE_UI_MODAL_BTN_TCHAT = null;
var RPJE_UI_MODAL_SPAN_TCHAT = null;

function LoadUI_Events()
{
	var RPJE_UI_MODAL = document.getElementById('myModal');
	var RPJE_UI_MODAL_BTN = document.getElementById("ButtonNetwork");
	var RPJE_UI_MODAL_SPAN = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	RPJE_UI_MODAL_BTN.onclick = function() {
	    RPJE_UI_MODAL.style.display = "block";
	}

	// When the user clicks on <RPJE_UI_MODAL_SPAN> (x), close the modal
	RPJE_UI_MODAL_SPAN.onclick = function() {
	    RPJE_UI_MODAL.style.display = "none";
	}


	//###########################

	var RPJE_UI_MODAL_TCHAT = document.getElementById('myModal_TCHAT');
	var RPJE_UI_MODAL_BTN_TCHAT = document.getElementById("Button_TCHAT");
	var RPJE_UI_MODAL_SPAN_TCHAT = document.getElementsByClassName("close_TCHAT")[0];

	// When the user clicks the button, open the modal 
	RPJE_UI_MODAL_BTN_TCHAT.onclick = function() {
	    RPJE_UI_MODAL_TCHAT.style.display = "block";
	}

	// When the user clicks on <RPJE_UI_MODAL_SPAN> (x), close the modal
	RPJE_UI_MODAL_SPAN_TCHAT.onclick = function() {
	    RPJE_UI_MODAL_TCHAT.style.display = "none";
	}
}
	