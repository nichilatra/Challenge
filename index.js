
class pista {
    constructor({ kilometros }) {
        this.kilometros = kilometros;
    }
}

const Silverstone = new pista({
    kilometros: 3,
});

const Monaco = new pista({
    kilometros: 3,
});

const Interlagos = new pista({
    kilometros: 3,
});

class carril {
    constructor(carrilPista) {
        this.carrilPista = carrilPista;
    }
}

const carril1 = new carril({
    carrilPista: "izquierdo",
    pista: {
        Interlagos,
    },
});

const carril2 = new carril({
    carrilPista: "central",
    pista: {
        Silverstone,
    },
});

const carril3 = new carril({
    carrilPista: "derecho",
    pista: {
        Monaco,
    },
});

class carro {
    constructor(referencia) {
        this.referencia = referencia;
    }
}

const Chevrolet = new carro({
    referencia: "spark GT",
    carril: {
        carril3,
    },
});

const Renault = new carro({
    referencia: "Logan",
    carril: {
        carril1,
    },
});

const Nissan = new carro({
    referencia: "sentra",
    carril: {
        carril2,
    },
});



class conductor {
    constructor(edad) {
        this.edad = edad;
    }
}

const JuanPabloMontoya = new conductor({
    edad: 37,
    carro: {
        Renault,
    },
});

const FernandoAlonso = new conductor({
    edad: 38,
    carro: {
        Chevrolet,
    },
});

const FelipeMassa = new conductor({
    edad: 38,
    carro: {
        Nissan,
    },
});

class jugador {
    constructor(nacionalidad) {
        this.nacionalidad = nacionalidad;

    }
}

const Joe = new jugador({
    nacionalidad: "Colombiano",
    conductor: {
        FernandoAlonso,
    },
});

const Pedro = new jugador({
    nacionalidad: "Ingles",
    conductor: {
        JuanPabloMontoya,
    },
});

const Lucas = new jugador({
    nacionalidad: "Frances",
    conductor: {
        FelipeMassa,
    },
});

class podio {
    constructor(ganador, segundo, tercero) {
        this.ganador = ganador,
            this.segundo = segundo,
            this.tercero = tercero
    }
}

class juego {
    constructor(dado, logica) {
        this.dado = dado,
            this.logica = logica
    }
}

var a = Math.random();
var z = a * 6;
var dado = Math.ceil(z);

var metro = 100;
console.log(dado * metro);



function ListaTiros(len) {
    let random = '';
    let numeroJugadores = ["Joe", "Pedro", "Lucas"];

    for (let i = 0; i < len; i++) {
        random += numeroJugadores.charAt(Math.floor(Math.random() * numeroJugadores.length));
        console.log("random en for: ", random);
    }
    console.log(random);
}

ListaTiros(3);

