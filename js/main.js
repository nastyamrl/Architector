/*"use strict"
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit' , formsend);

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);
    }

function formValidate(form) {
    let arror = 0;
    let formReq = document.querySelectorAll('req');
    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError (input);

        if(input.classList.contsins("email")) {
            if(emailTest(input)) {
                formAddError(input);
                error++;
            }
        } else if(input.getAttribute("type") ==="checkbox" && input.checked ===false){
            formAddError(input);
                error++;
        } else {
            if(input.value === '') {
                formAddError(input);
                error++
            }
        }

    }
}
function formAddError(input) {
    input.parentElement.classList.add('arror');
    input.classList.add('arror');
}
function formRemoveError(input) {
    input.parentElement.classList.remove('arror');
    input.classList.remove('arror');
}
function emailTest (input) {
    return !/^\w+([\.-]?\w+)*@\w+([\/-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

});*/

$(function () {
	$('.menu-open').click(function () {
		$('.list').toggleClass('show-menu')
	})
});