function iniciar_calculadora() {
var selector = document.getElementById("sel");
	if (selector.value == "TB") {
		cargar_2023_b();
		alert("Cargando turno B");
	}
	if (selector.value == "TA") {
		alert("Cargando turno A");
		cargar_2023_a();
	}
	if (selector.value == "TC") {

		cargar_2023_c();
		alert("Cargando turno C");
	}
	if (selector.value == "TD") {
		cargar_2023_d();
		alert("Cargando turno D");
	}
}