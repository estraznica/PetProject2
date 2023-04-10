"use strict"

let shownPass=document.querySelector('.shown-password');
let hiddenPass=document.querySelector('.hidden-password');

let inputPass=document.querySelector('#password-input');

shownPass.onclick = function(){
    if (inputPass.getAttribute('type')=='password'){
        inputPass.setAttribute('type','text');
        hiddenPass.classList.toggle('hide');
        shownPass.classList.toggle('hide');
    }
    else {
        inputPass.setAttribute('type','password');
    }
}
hiddenPass.onclick = function(){
    if (inputPass.getAttribute('type')=='text'){
        inputPass.setAttribute('type','password');
        shownPass.classList.toggle('hide');
        hiddenPass.classList.toggle('hide');
    }
    else {
        inputPass.setAttribute('type','text');
    }
}

let lightTheme=document.querySelector('.day');
let darkTheme=document.querySelector('.night');

let ryanBarbie=document.querySelector('.ryan-barbie');
let ryanDrive=document.querySelector('.ryan-drive');

lightTheme.onclick = function(){
        darkTheme.classList.toggle('hide');
        lightTheme.classList.toggle('hide');

        
        ryanBarbie.classList.toggle('show-animation');
        ryanBarbie.classList.remove('hide-animation');
        
        ryanDrive.classList.toggle('hide-animation');
        ryanDrive.classList.remove('show-animation');
        
        
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');

        let svgShowPass = document.querySelector('#shown-password_dark');
        svgShowPass.innerHTML  ='<svg width="32px"  height="32px" id="shown-password" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="  M16,7C9.934,7,4.798,10.776,3,16c1.798,5.224,6.934,9,13,9s11.202-3.776,13-9C27.202,10.776,22.066,7,16,7z" fill="none" id="XMLID_10_" stroke="#FA1F91" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><circle cx="16" cy="16" fill="none" id="XMLID_12_" r="5" stroke="#FA1F91" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></svg>';
        let svgHidePass = document.querySelector('#hide-password_dark');
        svgHidePass.innerHTML  = '<svg  width="32px"  height="32px" id="hide-password"  viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="  M16,7C9.934,7,4.798,10.776,3,16c1.798,5.224,6.934,9,13,9s11.202-3.776,13-9C27.202,10.776,22.066,7,16,7z" fill="none" id="XMLID_13_" stroke="#FA1F91" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><circle cx="16" cy="16" fill="none" id="XMLID_14_" r="5"stroke="#FA1F91" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><line fill="none" id="XMLID_15_" stroke="#FA1F91" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="3" x2="29" y1="3" y2="29"/></svg>';

        let btn=document.querySelector('.btn');
            btn.classList.toggle('light-theme');
            btn.classList.toggle('dark-theme');
        let hiddenPassword=document.querySelector('.hidden-password');
            hiddenPassword.classList.toggle('light-theme');
            hiddenPassword.classList.toggle('dark-theme');
        let shownRassword=document.querySelector('.shown-password');
            shownRassword.classList.toggle('light-theme');
            shownRassword.classList.toggle('dark-theme');
        let passwdInput=document.querySelector('#password-input');
            passwdInput.classList.toggle('light-theme');
            passwdInput.classList.toggle('dark-theme');
        let email=document.querySelector('#email');
            email.classList.toggle('light-theme');
            email.classList.toggle('dark-theme');
        let wrapperForm=document.querySelector('.wrapper-form');
            wrapperForm.classList.toggle('light-theme');
            wrapperForm.classList.toggle('dark-theme');
        let wrapperTheme=document.querySelector('.wrapper-theme');
            wrapperTheme.classList.toggle('light-theme');
            wrapperTheme.classList.toggle('dark-theme');
        
}
darkTheme.onclick = function(){

        lightTheme.classList.toggle('hide');
        darkTheme.classList.toggle('hide');

        ryanBarbie.classList.toggle('hide-animation');
        ryanBarbie.classList.remove('show-animation');

        ryanDrive.classList.remove('hide');
        ryanDrive.classList.toggle('show-animation');
        ryanDrive.classList.remove('hide-animation');

        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');

        let svgShowPass = document.querySelector('#shown-password');
        svgShowPass.innerHTML  ='<svg width="32px"  height="32px" id="shown-password_dark" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="  M16,7C9.934,7,4.798,10.776,3,16c1.798,5.224,6.934,9,13,9s11.202-3.776,13-9C27.202,10.776,22.066,7,16,7z" fill="none" id="XMLID_10_" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><circle cx="16" cy="16" fill="none" id="XMLID_12_" r="5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></svg>';
        let svgHidePass = document.querySelector('#hide-password');
        svgHidePass.innerHTML  = '<svg  width="32px"  height="32px" id="hide-password_dark"  viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="  M16,7C9.934,7,4.798,10.776,3,16c1.798,5.224,6.934,9,13,9s11.202-3.776,13-9C27.202,10.776,22.066,7,16,7z" fill="none" id="XMLID_13_" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><circle cx="16" cy="16" fill="none" id="XMLID_14_" r="5"stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><line fill="none" id="XMLID_15_" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="3" x2="29" y1="3" y2="29"/></svg>';

        let btn=document.querySelector('.btn');
            btn.classList.toggle('dark-theme');
            btn.classList.toggle('light-theme');
        let hiddenPassword=document.querySelector('.hidden-password');
            hiddenPassword.classList.toggle('dark-theme');
            hiddenPassword.classList.toggle('light-theme');
        let shownRassword=document.querySelector('.shown-password');
            shownRassword.classList.toggle('dark-theme');
            shownRassword.classList.toggle('light-theme');
        let passwdInput=document.querySelector('#password-input');
            passwdInput.classList.toggle('dark-theme');
            passwdInput.classList.toggle('light-theme');
        let email=document.querySelector('#email');
            email.classList.toggle('dark-theme');
            email.classList.toggle('light-theme');
        let wrapperForm=document.querySelector('.wrapper-form');
            wrapperForm.classList.toggle('dark-theme');
            wrapperForm.classList.toggle('light-theme');
        let wrapperTheme=document.querySelector('.wrapper-theme');
            wrapperTheme.classList.toggle('dark-theme');
            wrapperTheme.classList.toggle('light-theme');
}
            


