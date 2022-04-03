export class CalculaEdad {

    edadUno:number = 0;
    edadDos:number = 0;
    promedio:number = 0;
    suma:number = 0;

    calcularSuma()
    {
        this.suma= this.edadUno + this.edadDos;
    }

    calcularPromedio()
    {
        this.promedio= this.suma / 2;
    }
}
