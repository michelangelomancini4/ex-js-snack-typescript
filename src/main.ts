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

type Developer = Dipendente & {
  livelloEsperienza: 'Junior' | 'Mid' | 'Senior',
  linguaggi?: string[],
  certificazioni: string[]
}

type ProjectManager = Dipendente & {

  teamSize: number | null,
  budgetGestito?: number,
  stakeholderPrincipali: string[] | null
}

type Team = {
  nome: string,
  progettoAttuale: string | null,
  budget: number,
  membri: [ProjectManager, Developer, ...Developer[]]
}

// 🎯 BONUS
// Definiamo un nuovo type alias Team, che rappresenta un gruppo di lavoro all'interno dell'azienda:

// nome → Nome del team (stringa).
// progettoAttuale → Nome del progetto su cui lavora il team (può essere null se il team è in attesa di assegnazione).
// budget → Importo numerico del budget assegnato al team (sempre presente).
// membri → Una tuple in cui il primo elemento è sempre un Project Manager, seguito da uno o più Developers (
// almeno un developer obbligatorio).