var i = 0;
var dia = 0;
var mes = 1;
var ac = "";
var inicio = 1;
var bi_bi = 28;
var oo = parseFloat(document.getElementById("tit").innerHTML);

function bisie() {
	var pepe = parseFloat(document.getElementById("tit").innerHTML);
	var an_bi = Number.isInteger(pepe / 4);

		if (an_bi == true) {
			bi_bi = 29;
				} else {
			bi_bi = 28;
		}
}
function enero() {
			bisie();
			rellenar();
}
function blanquear() {
		for (var i = 2; i < 506; i++) {
			ac= "a" + i
			
			document.getElementById(ac).innerHTML = "----";
				if (i == 506) {
					break
				}
		}
}

function recargar() {
	location.reload();
}
function rellenar() {
				blanquear();
				var repetidor = 0;

								
			for (var i = inicio; i <= 507;) {

				var ce = document.getElementById("a8").innerHTML;
				
						i++;
						dia++;
						ac = "a" + i;
						
						document.getElementById(ac).innerHTML = dia;							
							
							if (dia == 31) {
							dia = 0;
							
							//buscar inicio de mes febrero//
							if ((mes == 1) && (ce == 7)) {
								i = 46;
							}
							if ((mes == 1) && (ce == 6)) {
								i = 47;
							}
							if ((mes == 1) && (ce == 5)) {
								i = 48;
							}
							if ((mes == 1) && (ce == 4)) {
								i = 49;
							}
							if ((mes == 1) && (ce == 3)) {
								i = 43;
							}
							if ((mes == 1) && (ce == 2)) {
								i = 44;
							}
							if ((mes == 1) && (ce == 1)) {
								i = 45;
							}
							/////////////////////////////////
							//buscar inicio de mes abril//
							if ((mes == 3) && (ce == 7)) {
								i = 133;
								if (bi_bi == 29) {
									i = 127;
								}
							}
							if ((mes == 3) && (ce == 6)) {
								i = 127;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 3) && (ce == 5)) {
								i = 128;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 3) && (ce == 4)) {
								i = 129;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 3) && (ce == 3)) {
								i = 130;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 3) && (ce == 2)) {
								i = 131;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 3) && (ce == 1)) {
								i = 132;
								if (bi_bi == 29) {
									i++;
								}
							}
							/////////////////////////////////
							//buscar inicio de mes junio//
							if ((mes == 5) && (ce == 7)) {
								i = 215;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 5) && (ce == 6)) {
								i = 216;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 5) && (ce == 5)) {
								i = 217;
								if (bi_bi == 29) {
									i = 211;
								}
							}
							if ((mes == 5) && (ce == 4)) {
								i = 211;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 5) && (ce == 3)) {
								i = 212;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 5) && (ce == 2)) {
								i = 213;
								if (bi_bi == 29) {
									i = 214;
								}
							}
							if ((mes == 5) && (ce == 1)) {
								i = 214;
								if (bi_bi == 29) {
									i = 215;
								}
							}
							/////////////////////////////////
							//buscar inicio de mes agosto//
							if ((mes == 7) && (ce == 7)) {
								i = 297;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 7) && (ce == 6)) {
								i = 298;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 7) && (ce == 5)) {
								i = 299;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 7) && (ce == 4)) {
								i = 300;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 7) && (ce == 3)) {
								i = 301;
								if (bi_bi == 29) {
									i = 295;
								}
							}
							if ((mes == 7) && (ce == 2)) {
								i = 295;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 7) && (ce == 1)) {
								i = 296;
								if (bi_bi == 29) {
									i = 297;
								}
							}
							/////////////////////////////////
							//buscar inicio de mes septiembre//
							if ((mes == 8) && (ce == 7)) {
								i = 342;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 8) && (ce == 6)) {
								i = 343;
								if (bi_bi == 29) {
									i = 337;
								}
							}
							if ((mes == 8) && (ce == 5)) {
								i = 337;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 8) && (ce == 4)) {
								i = 338;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 8) && (ce == 3)) {
								i = 339;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 8) && (ce == 2)) {
								i = 340;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 8) && (ce == 1)) {
								i = 341;
								if (bi_bi == 29) {
									i = 342;
								}
							}
							/////////////////////////////////
							//buscar inicio de mes noviembre//
							if ((mes == 10) && (ce == 7)) {
								i = 424;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 10) && (ce == 6)) {
								i = 425;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 10) && (ce == 5)) {
								i = 426;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 10) && (ce == 4)) {
								i = 427;
								if (bi_bi == 29) {
									i = 421;
								}
							}
							if ((mes == 10) && (ce == 3)) {
								i = 421;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 10) && (ce == 2)) {
								i = 422;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 10) && (ce == 1)) {
								i = 423;
								if (bi_bi == 29) {
									i = 424;
								}
							}
							/////////////////////////////////
							
							mes++; 
							}

							if (((mes == 2) && (dia == 28) && (bi_bi == 28)) || ((mes == 2) && (dia == 29) && (bi_bi == 29))) {
							dia = 0;
							/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
							/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
							/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
							//buscar inicio de mes marzo//
							if ((mes == 2) && (ce == 7)) {
								i = 88;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 2) && (ce == 6)) {
								i = 89;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 2) && (ce == 5)) {
								i = 90;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 2) && (ce == 4)) {
								i = 91;
								if (bi_bi == 29) {
									i = 85;
								}
							}
							if ((mes == 2) && (ce == 3)) {
								i = 85;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 2) && (ce == 2)) {
								i = 86;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 2) && (ce == 1)) {
								i = 87;
								if (bi_bi == 29) {
									i++;
								}
							}
							/////////////////////////////////	
							/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
							/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
							/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
							/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
											
							mes++;						
							}
							
							if (((mes == 4) || (mes == 6) || (mes == 9) || (mes == 11)) && (dia == 30)) {
							dia = 0;
							//buscar inicio de mes mayo (usar mes 4)//
							if ((mes == 4) && (ce == 7)) {
								i = 170;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 4) && (ce == 6)) {
								i = 171;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 4) && (ce == 5)) {
								i = 172;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 4) && (ce == 4)) {
								i = 173;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 4) && (ce == 3)) {
								i = 174;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 4) && (ce == 2)) {
								i = 175;
								if (bi_bi == 29) {
									i = 169;
								}
							}
							if ((mes == 4) && (ce == 1)) {
								i = 169;
								if (bi_bi == 29) {
									i = 170;
								}
							}
							/////////////////////////////////
							//buscar inicio de mes julio//
							if ((mes == 6) && (ce == 7)) {
								i = 259;
								if (bi_bi == 29) {
									i = 253;;
								}
							}
							if ((mes == 6) && (ce == 6)) {
								i = 253;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 6) && (ce == 5)) {
								i = 254;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 6) && (ce == 4)) {
								i = 255;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 6) && (ce == 3)) {
								i = 256;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 6) && (ce == 2)) {
								i = 257;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 6) && (ce == 1)) {
								i = 258;
								if (bi_bi == 29) {
									i = 259;
								}
							}
							/////////////////////////////////
							//buscar inicio de mes octubre//
							if ((mes == 9) && (ce == 7)) {
								i = 379;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 9) && (ce == 6)) {
								i = 380;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 9) && (ce == 5)) {
								i = 381;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 9) && (ce == 4)) {
								i = 382;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 9) && (ce == 3)) {
								i = 383;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 9) && (ce == 2)) {
								i = 384;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 9) && (ce == 1)) {
								i = 385;
								if (bi_bi == 29) {
									i = 379;
								}
								
							}
							/////////////////////////////////
							//buscar inicio de mes diciembre//
							if ((mes == 11) && (ce == 7)) {
								i = 468;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 11) && (ce == 6)) {
								i = 469;
								if (bi_bi == 29) {
									i = 463;
								}
							}
							if ((mes == 11) && (ce == 5)) {
								i = 463;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 11) && (ce == 4)) {
								i = 464;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 11) && (ce == 3)) {
								i = 465;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 11) && (ce == 2)) {
								i = 466;
								if (bi_bi == 29) {
									i++;
								}
							}
							if ((mes == 11) && (ce == 1)) {
								i = 467;
								if (bi_bi == 29) {
									i = 468;
								}
							}
							/////////////////////////////////
							mes++;
							}


							if (mes == 13) {
								break
							}
											///////////////////////////////////////////////////
											///////////////////////////////////////////////////

			}
		dia = 0;
		mes = 1;
		ac = "";
		var oo = parseFloat(document.getElementById("tit").innerHTML);
		bi_bi = 28;

}

function nuevo_an() {
		dia = 0;
		mes = 1;
		ac = "";
		bi_bi = 28;




														/////////////////PARCHE DE UN ERROR///////////////////////////////
														var error = parseFloat(document.getElementById("tit").innerHTML);
														var error2 = Number.isInteger(error/28);
														if (error2 == true) {
														 inicio = inicio - 7;
														}
                                                        /////////////////PARCHE DE UN ERROR///////////////////////////////

			var oo = parseFloat(document.getElementById("tit").innerHTML);
			if (oo == 2099) {
				alert("Max 2100 we, tamo en 2023 =)")
			}
			if (oo < 2099) {
			document.getElementById("tit").innerHTML = oo + 1;
				if (inicio >= 7 ) {
					inicio = inicio - 7;
				}

			inicio = inicio + 1;
				if (Number.isInteger((oo) / 4)) {
					inicio = inicio + 1;
				} 
			enero();
			}
}
function menos_an() {
		dia = 0;
		mes = 1;
		ac = "";
		bi_bi = 28;
		wf = 0;
		wf2 = 0;

	var oo = parseFloat(document.getElementById("tit").innerHTML);
	document.getElementById("tit").innerHTML = oo - 1;
				if (Number.isInteger((oo - 1) / 4)) {
				inicio = inicio - 1;
			} 
	
	if (inicio >= 7 ) {
		inicio = inicio - 7;
	}

		inicio = inicio - 1;

if (inicio < 1) {
	inicio = inicio + 7;
}

enero();
}



/////////////////////*enero*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function turno_b() {
var color = "blue";
var comienzo = 17;
var prin1 = document.getElementById("a2").innerHTML;
var prin2 = document.getElementById("a3").innerHTML;
var prin3 = document.getElementById("a4").innerHTML;										///////////////////////////////////////////////////////////
var prin4 = document.getElementById("a5").innerHTML;										///////////////////////////////////////////////////////////
var prin5 = document.getElementById("a6").innerHTML;										///////////////////////////////////////////////////////////
var prin6 = document.getElementById("a7").innerHTML;										//////////////////                       //////////////////
var fin1 = document.getElementById("a32").innerHTML;										//////////////////    (((TURNO B)))      //////////////////
var fin2 = document.getElementById("a33").innerHTML;										//////////////////                       //////////////////
var fin3 = document.getElementById("a34").innerHTML;										///////////////////////////////////////////////////////////
var fin4 = document.getElementById("a35").innerHTML;										///////////////////////////////////////////////////////////
var fin5 = document.getElementById("a36").innerHTML;										///////////////////////////////////////////////////////////
var fin6 = document.getElementById("a37").innerHTML;
var fin7 = document.getElementById("a38").innerHTML;
var fin8 = document.getElementById("a39").innerHTML;
var fin9 = document.getElementById("a40").innerHTML;
var fin10 = document.getElementById("a41").innerHTML;
var fin11 = document.getElementById("a42").innerHTML;
var fin12 = document.getElementById("a43").innerHTML;


if (prin6 == "----") {
	document.getElementById("f7").style.backgroundColor = "gray";
} else {
	document.getElementById("f7").style.backgroundColor = "red";
}
if (prin5 == "----") {
	document.getElementById("f6").style.backgroundColor = "gray";
}
if (prin4 == "----") {
	document.getElementById("f5").style.backgroundColor = "gray";
}
if (prin3 == "----") {
	document.getElementById("f4").style.backgroundColor = "gray";
} else {
	document.getElementById("f4").style.backgroundColor = "orange";
}
if (prin2 == "----") {
	document.getElementById("f3").style.backgroundColor = "gray";
} else {
	document.getElementById("f3").style.backgroundColor = "orange";
}
if (prin1 == "----") {
	document.getElementById("f2").style.backgroundColor = "gray";
} else {
	document.getElementById("f2").style.backgroundColor = "orange";
}

if (fin2 == "----") {
	document.getElementById("f33").style.backgroundColor = "gray";
} 
if (fin3 == "----") {
	document.getElementById("f34").style.backgroundColor = "gray";
} 
if (fin4 == "----") {
	document.getElementById("f35").style.backgroundColor = "gray";
} 
if (fin5 == "----") {
	document.getElementById("f36").style.backgroundColor = "gray";
} 
if (fin6 == "----") {
	document.getElementById("f37").style.backgroundColor = "gray";
} 
if (fin7 == "----") {
	document.getElementById("f38").style.backgroundColor = "gray";
} 

		for (var h = 0; h < 27;) {
			if (((fin1 == "31") && (h > 12)) || ((fin2 == "31") && (h > 12)) || ((fin3 == "31") && (h > 12)) || ((fin4 == "31") && (h > 13)) || ((fin5 == "31") && (h > 14)) || ((fin6 == "31") && (h > 15)) || ((fin7 == "31") && (h > 16))) {
				h = 28; //ANULA EL FOR H//
			}		
				h++;
			pp = "f" + comienzo;
				var base = document.getElementById(pp);
				base.style.backgroundColor = color;
						
						comienzo++;
						if (pp == "f13") {
							comienzo = comienzo + 3;
							color = "blue";
						}
						if (pp == "f23") {
							comienzo = comienzo + 2;
							color = "orange";
						}
						if (pp == "f32") {
							comienzo = comienzo + 2;
							color = "red";
						}
		}														
		
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function brillo() {
	var tabla = document.getElementById("tb");
	bri++;
	if (bri == 1) {
		tabla.style.opacity = "60%";
	}
	if (bri == 2) {
		tabla.style.opacity = "70%";
	}
	if (bri == 3) {
		tabla.style.opacity = "80%";
	}
	if (bri == 4) {
		tabla.style.opacity = "90%";
	}
	if (bri == 5) {
		bri = 0;
		tabla.style.opacity = "50%";
	}
}