
let A = "V";
let B = "V";
let C = "F";


if ((A === "V" && B === "V") || (A !== B)) {
    console.log("Resultado da expressão a): V");
} else {
    console.log("Resultado da expressão a): F");
}

if ((A === "V" || B === "V") && (A === "V" && C === "V")) {
    console.log("Resultado da expressão b): V");
} else {
    console.log("Resultado da expressão b): F");
}


if (A === "V" || C === "V" && (B !== A && B !== "V")) {
    console.log("Resultado da expressão c): V");
} else {
    console.log("Resultado da expressão c): F");
}
