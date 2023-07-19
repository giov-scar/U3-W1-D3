abstract class Dipendente {
    constructor(
        public codredd:number,
        public redditoannuolordo:number,
        public tasseinps:number,
        public tasseirpef:number
    ) {}
     getUtileTasse():number{
        return (this.codredd * this.redditoannuolordo) / 100
    }
     getTasseInps():number{
        return (this.getUtileTasse() * this.tasseinps) / 100
    }
     getTasseIrpef():number{
        return (this.getUtileTasse() * this.tasseirpef) / 100
     }
     getRedditoAnnuoNetto():number{
        return this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef())
     }
    
}

class LavoratoreCod1 extends Dipendente {
    getUtileTasse(): number {
        return 300
    }
}

const lavoratore1 = new LavoratoreCod1(1,60000,25,20)
console.log('Reddito annuo netto lavoratore 1:', lavoratore1.getRedditoAnnuoNetto());
console.table(lavoratore1);

