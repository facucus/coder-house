function showWords(text, callback, time = 1000) {
  const words = text.split(" ");
  let index = 0;
  
  const printWord = setInterval(() => {
    console.log(words[index]);
    index++;
    if(words.length === index) {
      clearInterval(printWord)
      callback(words.length)
    }
  }, time)

  
}

showWords("Hello world!",(res1) => {
  showWords("Ahora qué pasa?", (res2) => {
    showWords("último texto", (res3) => {
      const amountOfWords = res1 + res2 + res3;
      console.log("Proceso completo");
      console.log(`Cantidad de palabras totales ${amountOfWords}`)
    }, 300)
  }, 2000)
})