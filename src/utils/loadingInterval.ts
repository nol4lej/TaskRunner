/**
 * Starts an interval that writes three dots ("...") to the standard output every 500 milliseconds,
 * simulating a loading animation. No line breaks are added.
 * 
 * @constant {NodeJS.timeout} loadingInterval -  The interval ID that can be used to clear the animation later.
 */
export function loadingInterval() {
    let count = 0;
    return setInterval(() => {
        count++;

        const dots = '.'.repeat(count);

        process.stdout.clearLine(0); // Limpia la línea actual
        process.stdout.cursorTo(0); // // Mueve el cursor al inicio
        process.stdout.write(dots); // // Escribe los puntos

        if (count === 5) {
            count = 0;
        }
    }, 500)
}