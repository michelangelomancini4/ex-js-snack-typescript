let apiData: unknown;

if (typeof apiData === 'string') {
  console.log(apiData.toUpperCase());

} else if (typeof apiData === 'number') {

  console.log(apiData * 2)

}
else if (typeof apiData === 'boolean') {

  console.log(apiData ? 'si' : 'no');
}
else if (apiData === null) {
  console.log("Il dato è vuoto");
}
else if (Array.isArray(apiData)) {
  console.log(apiData.length);

}
else {
  console.log('Tipo non supportato');

}

// 🏆 Snack 2
// Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:

// nome → stringa
// cognome → stringa
// annoNascita → numero
// sesso → Può essere solo "m" o "f".
// anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])

type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: 'm' | 'f',
  anniDiServizio: number[],
  readonly emailAziendale: string,
  contratto: 'indeterminato' | 'determinato' | 'freelance'
}

// 🎯 BONUS
// Il type alias Dipendente, ha anche i seguenti dati:

// emailAziendale → Email assegnata al dipendente (non si può modificare)
// contratto → Specifica il tipo di contratto del dipendente, con valori limitati a “indeterminato”, “determinato” o “freelance”.
