//botones
const btnAIngreso = document.getElementById("AceptarIngreso");
const btnAretiro = document.getElementById("AceptarRetiro");
const btnAvance = document.getElementById("Avance");

//variables
let IngresoD = "";
let RetiroD = "";
let AvanceDinero = "";
let Movimientos = [];

//Ingreso de dinero

let Ingreso = () => {
  if ((IngresoD = parseInt(DineroIngresados.value))) {
    document.getElementById("Dinero").innerHTML = IngresoD;

    document.getElementById("Saldo").innerHTML = IngresoD;

    Movimientos.push(IngresoD);

    document.getElementById("MovimientoDinero").innerHTML = Movimientos;

    DineroIngresados.value = "";
  } else {
    alert("Verifique los datos ");
  }
};

//Retiro de dinero

let Retiro = () => {
  if ((RetiroD = parseInt(RetiroDinero.value))) {
    document.getElementById("DineroI").innerHTML = RetiroD;
    document.getElementById("Saldo").innerHTML = RetiroD;
    Movimientos.push(-RetiroD);
    document.getElementById("MovimientoDinero").innerHTML = Movimientos;
    RetiroDinero.value = "";
  } else {
    alert("Verifique los datos");
  }
};

//Botones};

btnAretiro.onclick = function () {
  Retiro();
};
btnAIngreso.onclick = function () {
  Ingreso();
};
