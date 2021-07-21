import Calculos from "./calculos";

const operacion = (num1: number, num2: number, op: string):Promise<number|null> => {
  return  new Promise((resolve, reject) => {
    const calculos = new Calculos(num1, num2, op);
    const res = calculos.resultado();
    if(res) {
      resolve(calculos.resultado())
    } else {
      reject("Bad request")
    }
    
  })
}

const operaciones = async (ops: [number, number, string][]) => {
  ops.forEach(async (op: [number, number, string]) => {
    try {
      const res = await operacion(...op);
      console.log(res)
    } catch (error) {
      console.log(error)
    }

  })
  
}

operaciones([
    [2,2,"suma"],
    [4,2,"dividir"],
    [5,7,"multiplicar"],
    [6,1,"resta"],
    [6,1,"algo"]
  ]
)