/*************Preloader*************/
$(window).on('load', function(){
    $('status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/******Modals********/
//modal-contents
//overlay
var overlay = document.getElementById('my-overlay');
//modals
var langModal = document.getElementById('lang-modal');
var formModal = document.getElementById('form-modal');
//closebtn
var closeLangModal = document.getElementById('close-lang-modal');
var closeFormModal = document.getElementById('close-form-modal');
//buttons

var langBtn = document.getElementById('lang-btn');
var logInBtn = document.getElementById('log-in-btn');
//modal js

//language-modal
langBtn.onclick = function(){

    overlay.style.display = 'block';
    langModal.style.display = 'block';

}

closeLangModal.onclick = function(){

    overlay.style.display = "none";
    langModal.style.display = 'none';

}
//form-modal
logInBtn.onclick = function(){
    overlay.style.display = 'block';
    formModal.style.display = 'block';
}
closeFormModal.onclick = function(){
    overlay.style.display = 'none';
    formModal.style.display = 'none';
}