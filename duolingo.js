// ==UserScript==
// @name         My Fancy New Userscript
// @namespace    http://poloniculmov.com
// @version      0.1
// @description  Hides golden courses.
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @author       Poloniculmov
// @match        https://www.duolingo.com/
// @grant        none
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function()
{    
    $('.gold').parent().parent().hide();
    $('.row-shortcut').hide();   
});
