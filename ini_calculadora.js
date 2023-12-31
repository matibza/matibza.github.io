function iniciar_calculadora() {
var selector = document.getElementById("sel");
var anio = document.getElementById("tit").innerHTML;
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
	if (selector.value == "DIUR") {
		cargar_2023_diurno();
		alert("Diurno");
	}
	if (anio == "2024") {
		feriados2024();
	}
}

function feriados2024() {
var a = document.getElementById("a3");
var b = document.getElementById("a59");
var c = document.getElementById("a60");
var d = document.getElementById("a114");
var e = document.getElementById("a118");
var f = document.getElementById("a119");
var g = document.getElementById("a129");
var h = document.getElementById("a130");
var i = document.getElementById("a173");
var j = document.getElementById("a197");
var k = document.getElementById("a234");
var l = document.getElementById("a237");
var m = document.getElementById("a238");
var n = document.getElementById("a263");
var nn = document.getElementById("a316");
var o = document.getElementById("a392");
var p = document.getElementById("a393");
var q = document.getElementById("a444");
var r = document.getElementById("a471");
var s = document.getElementById("a488");
a.style.backgroundColor = "red";
b.style.backgroundColor = "red";
c.style.backgroundColor = "red";
d.style.backgroundColor = "red";
e.style.backgroundColor = "red";
f.style.backgroundColor = "red";
g.style.backgroundColor = "red";
h.style.backgroundColor = "red";
i.style.backgroundColor = "red";
j.style.backgroundColor = "red";
k.style.backgroundColor = "red";
l.style.backgroundColor = "red";
m.style.backgroundColor = "red";
n.style.backgroundColor = "red";
nn.style.backgroundColor = "red";
o.style.backgroundColor = "red";
p.style.backgroundColor = "red";
q.style.backgroundColor = "red";
r.style.backgroundColor = "red";
s.style.backgroundColor = "red";
}
