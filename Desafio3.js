class heroi {
    constructor(heroiTipo, nome, idade){
       this.heroiTipo = heroiTipo
       this.nome = nome
       this.idade = idade
       
    }
 
 
    atacar() {
      let ataque = "";
         switch (this.heroiTipo) {
             case "mago":
                 ataque = "usou magia";
                 break;
             case "guerreiro":
                 ataque = "usou espada";
                 break;
             case "monge":
                 ataque = "usou artes marciais";
                 break;
             case "ninja":
                 ataque = "usou shuriken";
                 break;
             default:
                 ataque = "usou um ataque desconhecido";
         }
 
         console.log(`O ${this.heroiTipo} atacou usando ${ataque}.`);
     }
 }
 
 let heroi1 = new heroi( "guerreiro", "Luiz", 19);
 let heroi2 = new heroi( "mago", "Lucas", 15);
 let heroi3 = new heroi( "monge", "Marcos", 25);
 let heroi4 = new heroi( "ninja", "Gabriel", 28);
 
 heroi1.atacar();
 heroi2.atacar();
 heroi3.atacar();
 heroi4.atacar();