// ==UserScript==
// @name         My Fancy New Userscript
// @namespace    http://poloniculmov.com
// @version      0.1
// @description  enter something useful
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @author       You
// @match        https://www.duolingo.com/
// @grant        none
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    $('.gold').parent().parent().hide();
    $('.row-shortcut').hide();   
});

var element = document.querySelector('body');
observer.observe(element, {
    childList: true,
    characterData: true,
    attributes: true,
});

$('.gold').parent().parent().hide();
$('.row-shortcut').hide();   

