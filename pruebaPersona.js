// Creacion de la clase

class Persona {

    static contadorPersona = 0;

    constructor(nombre, apellido, edad) {

        this._idpersona = ++Persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;

    }

    get idpersona() {
        return this._idpersona;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido;
    }

    get edad() {
        return this._edad = edad;
    }

    set edad(edad) {
        this._edad = edad;
    }

    toString() {
        return `${this._idpersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}

class Empleado extends Persona {

    static contadorEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad)
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

class Cliente extends Persona {

    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro) {

        // con super agregamos de la clase padre Persona
        super(nombre, apellido, edad)
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.contadorCliente;


    }

    get idCliente() {
        return this._idCliente;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }

    toString() {
        return `${super.toString()} ${this._idCliente}  ${this._fechaRegistro}`
    }
}

let persona1 = new Persona('Juan', 'Perez', '26');
console.log(persona1.toString());
let persona2 = new Persona('Daniel', 'Ortega', '28');
console.log(persona2.toString())

let empleado1 = new Empleado('Carla', 'Gomez', '34', '23444');
console.log(empleado1.toString());

// el formato Date ya trae consigo la fecha de la creacion.
let Cliente1 = new Cliente('David', 'Oliv', '30', new Date());
console.log(Cliente1.toString());