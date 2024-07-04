resultado = calculadoraPartidas(83,12);
console.log(resultado)

function calculadoraPartidas(vitorias, derrotas){
    const saldo = vitorias - derrotas;
    let nível = " ";
    
    
    if (vitorias <= 10){
        nível = "Ferro"
        
    }else if (vitorias >= 11 && vitorias <= 20){
        nível = "Bronze"
        
    }else if (vitorias >= 21 && vitorias <= 50){
        nível = "Prata"
    
    }else if (vitorias >= 51 && vitorias <= 80){
        nível = "Ouro"
        
    }else if (vitorias >= 81 && vitorias <= 90){
        nível = "Platina"
        
    }else if (vitorias >= 91 && vitorias <= 100){
        nível = "Ascendente"
    
    }else if (vitorias >= 101){
        nível = "Imortal"
        
    }
     return `O Herói tem de saldo de ${saldo}.\nEstá no nível de ${nível}!`;
}

