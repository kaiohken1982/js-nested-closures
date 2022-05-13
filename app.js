class App 
{
  constructor() {

  }

  bootstrap() {
    console.log('Bootstrapped!')

    const pippo = function(pippoArg) {
      console.log(pippoArg)
      return plutoArg => {
        console.log(plutoArg)
        return function(paperinoArg) {
          console.log(this)
          console.log(paperinoArg)
          return quiArg => {
            console.log(quiArg)
            return quoArg => {
              console.log(quoArg)
              return function(quaArg) {
                console.log(this)
                console.log(quaArg)
              }
            }
          }
        }
      }
    }

    // // es.1
    // pippo('pippo')('pluto')('paperino')('qui')('quo')('qua')

    // // es.2
    // pippo('pippo')('pluto')('paperino')('qui')('quo').bind(window).apply('', [window.document])

    // es.3
    pippo('pippo')('pluto').bind(window.document).apply('', [window])('qui')('quo')('qua')
  }
}

let app = new App()
app.bootstrap()