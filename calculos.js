"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculos = /** @class */ (function () {
    function Calculos(num1, num2, operation) {
        this.num1 = num1;
        this.num2 = num2;
        this.operation = operation;
    }
    Calculos.prototype.resultado = function () {
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
    };
    return Calculos;
}());
exports.default = Calculos;
