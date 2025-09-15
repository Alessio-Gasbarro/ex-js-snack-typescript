let dato: unknown;
if (typeof dato === 'string') {
  console.log(dato.toUpperCase());
} else if (typeof dato === 'number') {
  console.log(dato * 2);
} else if (typeof dato === 'boolean') {
  console.log(dato ? 'Si' : 'No');
} else {
  console.log('Tipo non supportato');
}