class Calculos {
  private num1: number;
  private num2: number;
  private operation: string;
  
  constructor(num1: number, num2: number, operation: string) {
    this.num1 = num1;
    this.num2 = num2;
    this.operation = operation;
  }

  public resultado() {
    switch (this.operation) {
      case "suma":
        return this.num1 + this.num2;
      case "resta":
        return this.num1 - this.num2;
      case "dividir":
        return this.num1 / this.num2;
      case "multiplicar":
        return this.num1 * this.num2;
      default:
        return null;
    }
  }
}

export default Calculos;