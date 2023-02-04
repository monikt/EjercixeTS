import { IOElectrodomestico } from './IOElectrodomestico';
export class Electrodomestico implements IOElectrodomestico{   
protected precioBase:number;
protected color:string;
protected consumoEnergetico:string;
protected peso:number;

	constructor();
    constructor(precioBase:number, peso:number);
    constructor(precioBase:number,color:string,consumoEnergetico:string,peso:number);
    constructor(...args: any[]) { 

        this.color = this.constantes.color;
        this.consumoEnergetico = this.constantes.consumoEnergetico;
        this.precioBase = this.constantes.precioBase;
        this.peso = this.constantes.peso;

        if (args.length ==2) {

            this.precioBase = args[0];
            this.peso = args[1];
           
        }


        if (args.length ==4) {

            this.precioBase = args[0];
            this.color = args[1];
            this.consumoEnergetico = args[2];
            this.peso = args[3];
        }
     }


     readonly constantes = {
        color: 'blanco',
        consumoEnergetico: 'F',
        precioBase: 100,
        peso: 5
    };

    readonly colors: Array<String > =["blanco","negro","rojo","azul","gris"];
    readonly letras: Array<String > =["A","B","C","D","D","F"];

    readonly listadoPreciosxLetra  = new Map<string, number>([
        ["A", 100],
        ["B", 80],
        ["C", 60],
        ["D", 50],
        ["E", 30],
        ["F", 10],
    ]);

     comprobarCosumoEnergetico(letra: string) {
        let consumoEnergeticoV = this.letras.find(L => L == letra.toUpperCase())?.valueOf();
        if (consumoEnergeticoV != undefined) {
            this.consumoEnergetico =  consumoEnergeticoV;
        }else{
            this.consumoEnergetico = this.constantes.consumoEnergetico;
        }
    }
    comprobarColor(color: string) {
       
     let colorfind = this.colors.find(c => c == color.toLowerCase())?.valueOf();
     if(colorfind != undefined)
        this.color = colorfind;
     else 
        this.color = this.constantes.color;

    }

    PrecioPorPeso ():number  {

        let peso = this.peso;
        
        if (peso >=0 && peso <= 19 ) {
            return 10;
        }

        if (peso >=20 && peso <= 49 ) {
            return 50;
        }


        if (peso >=20 && peso <= 49 ) {
            return 50;
        }

        if (peso >=50 && peso <= 79 ) {
            return 80;
        }

        if (peso >80 ) {
            return 100;
        }

        return 0;

    };  


     precioFinal():number {

       let precioxconsumoEnergetico = this.listadoPreciosxLetra.get(this.consumoEnergetico) ;
       if (precioxconsumoEnergetico == undefined) 
           return this.constantes.precioBase;

       let precioxPeso = this.PrecioPorPeso();
       return ( this.precioBase + precioxconsumoEnergetico + precioxPeso);

    }

    /**
     * Getter $precioBase
     * @return {number}
     */
	public get $precioBase(): number {
		return this.precioBase;
	}
    /**
     * Getter $color
     * @return {string}
     */
	public get $color(): string {
		return this.color;
	}

    /**
     * Getter $consumoEnergetico
     * @return {string}
     */
	public get $consumoEnergetico(): string {
		return this.consumoEnergetico;
	}

    
    /**
     * Getter $peso
     * @return {number}
     */
	public get $peso(): number {
		return this.peso;
	}

}