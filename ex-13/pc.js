/*
* * OOP/POO
* Paradigma Orientado a Objetos
* class = clase -> fabrica
* constructor = constructor -> la maquina de una fabrica
* this = Object
*/

class PikaPc {
    constructor(pcCase,price, ram, cpu, gpu, storage, motherboard, psu ){
        this.pcCase=pcCase;
        this.price=price;
        this.ram=ram;
        this.cpu=cpu;
        this.gpu=gpu;
        this.storage=storage;
        this.motherboard=motherboard;
        this.psu=psu;

        this.info=`
        Gabinete: ${this.pcCase} precio: ${this.price}
        Caracteristicas:
        Motherboard: ${this.motherboard} Memoria Ram: ${this.ram}
        GPU: ${this.gpu} CPU: ${this.cpu} Storage: ${this.storage}
        Fuente de poder: ${this.psu}
        `
    } 

    showInfo() {
        console.log(this.info)
    }
}

const greatPC = new PikaPc('Aerocool Hive', 100000, '64GB', 'i9 14900', 'RTX 5090', 'Asus Pro', 'S11 Pro 1TB NVME', 'Core Reactor II 750W' )

greatPC.showInfo()