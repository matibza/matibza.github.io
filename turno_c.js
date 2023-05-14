var francos = 1;
var color = "gray";
var jornal = 1;
var reset = 0;
//////////////////////////////////
//contar_espacios/////////////////
var enero_febrero = 0;			//
var febrero_marzo = 0;			//
var marzo_abril = 0;			//
var abril_mayo = 0;				//
var mayo_junio = 0;				//
var junio_julio = 0;			//
var julio_agosto = 0;			//
var agosto_septiembre = 0;		//
var septiembre_octubre = 0;		//
var octubre_noviembre = 0;		//
var noviembre_diciembre = 0;	//
//contar espacios/////////////////
//////////////////////////////////

function cargar_2023_c() {
var f = 1;
	
	for (var i = 2; i < 505;) {
		var g = "f" + i;
		var h = "a" + i;
		var base = document.getElementById(g);
		var celda = document.getElementById(h).innerHTML;

		base.style.backgroundColor = color;
	i++;
	}
blanquear_espacios();
contar_espacios();
calcular_jornadas_c();
}

function calcular_jornadas_c() {
	var bbb = parseFloat(document.getElementById("tit").innerHTML);	
	var bbb2 = Number.isInteger(bbb / 4);
	var color = "black";
	var dia = 0;
	var f_l = 1;
	
	for (var i = 14; i <= 505;) {
		var a = "a"  + i;
		var f = "f" + i;
		var a2 = document.getElementById(a).innerHTML;
		var f2 = document.getElementById(f);


		if (f_l == 1) {
			color = "green";
		}
		if (f_l == 2) {
			color = "black";
		}
		if (f_l == 3) {
			color = "orange";
		}

																				
			if (a2 != "----") {
				f2.style.backgroundColor = color;
				dia++;
				if ((document.getElementById("a7").innerHTML == "----") && (dia == 6) && (i < 18)) {
					dia = 7;
				}
			}
				if (dia == 7) {
					i = i + 2;
						if (f_l == 1) {
							i++;
						}
						if (f_l == 3) {
							f_l = 0;

						}
						dia = 0;
						f_l++;
				}
								//enero_febrero con ----//
								if ((a2 == "----") && (i < 43) && (i > 30)) {
									i = i + enero_febrero - 1;
								}

				if ((a2 == "----") && ((i < 85) && (i > 71))) {
					i = i + febrero_marzo - 1;
				}
				if ((a2 == "----") && (i < 127) && (i > 115)) {
					i = i + marzo_abril - 1;
				}
				if ((a2 == "----") && (i < 169) && (i > 152)) {
					i = i + abril_mayo - 1;
				}
				if ((a2 == "----") && (i < 211) && (i > 199)) {
					i = i + mayo_junio - 1;
				}
				if ((a2 == "----") && (i < 253) && (i > 241)) {
					i = i + junio_julio - 1;
				}
				if ((a2 == "----") && (i < 295) && (i > 284)) {
					i = i + julio_agosto - 1;
				}
				if ((a2 == "----") && (i < 337) && (i > 326)) {
					i = i + agosto_septiembre - 1;
				}
				if ((a2 == "----") && (i < 379) && (i > 367)) {
					i = i + septiembre_octubre - 1;
				}
				if ((a2 == "----") && (i < 421) && (i > 409)) {
					i = i + octubre_noviembre - 1;
				}
				if ((a2 == "----") && (i < 463) && (i > 451)) {
					i = i + noviembre_diciembre - 1;
				}
	i++;
	}
				///modificar estos valores///

				var p2 = document.getElementById("a2").innerHTML;
				
					for (var i = 5; i <= 11;) {
						var t = "f" + i;
						var a = "a" + i;
						var t2 = document.getElementById(a).innerHTML;
								if (t2 == "----") {
									document.getElementById(t).style.backgroundColor = "gray";
								} else {
									document.getElementById(t).style.backgroundColor = "orange";
								}
						i++;
					}
					
						if (p2 == "----") {
							document.getElementById("f2").style.backgroundColor = "gray";
						} else {
							document.getElementById("f2").style.backgroundColor = "black";
						}
						
enero_febrero = 0;			
febrero_marzo = 0;			
marzo_abril = 0;			
abril_mayo = 0;				
mayo_junio = 0;				
junio_julio = 0;			
julio_agosto = 0;			
agosto_septiembre = 0;		
septiembre_octubre = 0;		
octubre_noviembre = 0;		
noviembre_diciembre = 0;
}
