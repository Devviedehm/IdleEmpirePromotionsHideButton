// ==UserScript==
// @name         Idle-Empire Promotions Hide Button
// @version      1.0
// @description  Add Show/Hide buttons on the Promotions page, as well as remember locally which ones were hidden before.
// @author       [Idle-Empire.com] Dehm
// @match        https://www.idle-empire.com/earn/promotions
// ==/UserScript==

window.addEventListener( "load", window_loaded );

function window_loaded(){
var u_hidden = localStorage.getItem( "userscript_hidden" );

var list = document.getElementsByClassName("m-portlet__head");

if( u_hidden == null || u_hidden.length!=list.length ){
	u_hidden = "";
	for( var i=0; i<list.length; i++ ){
		u_hidden += "0";
    }
	localStorage.setItem( "userscript_hidden", u_hidden );
}

for( var i=0; i<list.length; i++ ){
	var txt = "HIDE";
	if( u_hidden[i]=="1" ){
		txt = "SHOW";
		document.getElementsByClassName("m-portlet__body")[i].style.display = "none";
	}
	var btn = document.createElement( "button" );
	btn.className = "btn btn-primary";
	btn.style = "float:right";
	btn.innerText = txt;
	btn.u_num = i;
	btn.addEventListener( "click", showHide );
	var div = document.createElement( "div" );
	div.className = "m-portlet__head-caption";
	div.appendChild( btn );
	list[i].appendChild( div );
}

function showHide(){
	var i = this.u_num;
	if( u_hidden[i]=="0" ){
		this.innerText = "SHOW";
		document.getElementsByClassName("m-portlet__body")[i].style.display = "none";
		u_hidden = u_hidden.substr( 0, i ) + "1" + u_hidden.substr( i+1 );
	} else {
		this.innerText = "HIDE";
		document.getElementsByClassName("m-portlet__body")[i].style.display = "";
		u_hidden = u_hidden.substr( 0, i ) + "0" + u_hidden.substr( i+1 );
	}
	localStorage.setItem( "userscript_hidden", u_hidden );
}
}