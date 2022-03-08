class Empleado extends Persona {

    static contadorEmpleado = 0;

    constructor(sueldo) {
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }

    get idEmpleado() {
        return this._idEmpleado;
    }

    get sueldo() {
        return this._sueldo;
    }

    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }

    toString() {

        //se le da en el bombillo para convertirlo en un template string
        return `${super.toString()}  ${this._idEmpleado}  ${this._sueldo}`;
    }

}