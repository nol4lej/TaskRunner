import * as scripts from "./scripts";

const arg = process.argv[2]

if (!arg) {
    console.error('[X] Debes pasar el nombre de una clase o función a ejecutar.');
    process.exit(1);
}

const SelectedClass = (scripts as Record<string, any>)[arg];

if (!SelectedClass) {
    console.error(`[X] No se encontró una clase o función llamada "${arg}".`);
    process.exit(1);
}

if (typeof SelectedClass === 'function') {
    const instancia = new SelectedClass();
    if (typeof instancia.run === 'function') {
        instancia.run();
    } else {
        console.error(`[X] La clase "${arg}" no tiene un método "run".`);
    }
} else {
    console.error(`[X] "${arg}" no es una función o clase válida.`);
}