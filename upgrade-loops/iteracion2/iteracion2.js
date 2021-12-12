// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados
// y añade la propiedad isApproved a true o false en consecuencia.
// Una vez lo tengas compruébalo con un console.log.
const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

alumns.forEach(alumn => {
    alumn['isApproved'] = false;
    let numTrimestres = 0;
    if (alumn.T1) {
        numTrimestres++;        
    }
    if (alumn.T2) {
        numTrimestres++;        
    }
    if (alumn.T3) {
        numTrimestres++;        
    }
    if (numTrimestres >=2) {
        alumn['isApproved'] = true;
    }
    console.log(alumn.name + (alumn['isApproved']? " está aprobado":" está suspenso"));
});