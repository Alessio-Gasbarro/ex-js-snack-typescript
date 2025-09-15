//SNACK 1 + Bonus
let dato: unknown;
if (typeof dato === 'string') {
  console.log(dato.toUpperCase());
} else if (typeof dato === 'number') {
  console.log(dato * 2);
} else if (typeof dato === 'boolean') {
  console.log(dato ? 'Si' : 'No');
} else if (dato === null) {
  console.log("Il dato è vuoto");
} else if (dato instanceof Array) {
  console.log(dato.length);
} else if (dato instanceof Promise) {
  dato.then((msg) => console.log(msg))
} else {
  console.log('Tipo non supportato');
}

//SNACK 2 + Bonus
type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: 'm' | 'f',
  anniDiServizio: number[],
  readonly emailAziendale: string,
  contratto: 'indeterminato' | 'determinato' | 'freelance',
}

//Snack 3 + Bonus

type Developer = Dipendente & {
  livelloEsperienza: 'Junior' | 'Mid' | 'Senior',
  linguaggi?: string[],
  certificazioni: string[],
}

type ProjectManager = Dipendente & {
  teamSize: number | null,
  budgetGestito?: number,
  stakeholderPrincipali: string[]
}

type Team = {
  nome: string,
  progettoAttuale: string | null,
  budget: number,
  membri: [ProjectManager, Developer, ...Developer[]],
}