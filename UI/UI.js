var RPJE_UI_MODAL = null;
var RPJE_UI_MODAL_BTN = null;
var RPJE_UI_MODAL_SPAN = null;

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

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == RPJE_UI_MODAL) {
	        RPJE_UI_MODAL.style.display = "none";
	    }
	}
}
	