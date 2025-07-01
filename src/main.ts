let apiData: unknown;

if (typeof apiData === 'string') {
  console.log(apiData.toUpperCase());

} else if (typeof apiData === 'number') {

  console.log(apiData * 2)

}
else if (typeof apiData === 'boolean') {

  console.log(apiData ? 'si' : 'no');
}
else {
  console.log('Tipo non supportato');


}




// 🎯 BONUS
// Se è null: stampa “Il dato è vuoto”
// Se è un array: stampa la sua lunghezza
// Se è una Promise: attendi che si risolva e stampa il valore del resolve.

