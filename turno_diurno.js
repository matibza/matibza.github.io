var color = "gray";
var espacios = 0;
dia = 0;
function cargar_2023_diurno() {
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
contar_vacios();
calcular_jornadas_diurno();
}

function calcular_jornadas_diurno() {
	var color = "green";
	var f_l = 1;
	
	dia = dia + espacios;

	for (var i = 2; i <= 505;) {
		
		var a = "a"  + i;
		var f = "f" + i;
		var a2 = document.getElementById(a).innerHTML;
		var f2 = document.getElementById(f);
		if (a2 != "----") {
			dia++;
		}
		if (f_l == 1) {
			color = "green";
		}
		if (f_l == 2) {
			color = "orange";
		}

			if (dia == 7) {
			dia = 0;
			f_l++;
			if (f_l == 3) {
				f_l = 1;
			}
		}	
		if (a2 != "----") {
			f2.style.backgroundColor = color;
		}
	i++;
	}
	for (var i = 2; i <= 505;) {
		var a = "a"  + i;
		var f = "f" + i;
		var a2 = document.getElementById(a).innerHTML;
		var f2 = document.getElementById(f);
		f2.style.backgroundColor = "gray";
	i = i + 7;
	}

color = "gray";
espacios = 0;
dia = 0;
}
function contar_vacios() {
	for (var i = 2; i <= 8;) {
			var a = "a"  + i;
			var a2 = document.getElementById(a).innerHTML;
			if (a2 == "----") {
					espacios++;
				}
	i++;
	}
}
