let nome = "Louis"
let experienciaXP = 2578
let tituloXP = " "

console.log("XP: " + experienciaXP)

if (experienciaXP <= 1000){
    tituloXP = "Ferro"
    
}else if (experienciaXP >= 1001 && experienciaXP <= 2000){
    tituloXP = "Bronze"
    
}else if (experienciaXP >= 2001 && experienciaXP <= 5000){
    tituloXP = "Prata"

}else if (experienciaXP >= 5001 && experienciaXP <= 7000){
    tituloXP = "Ouro"
    
}else if (experienciaXP >= 7001 && experienciaXP <= 8000){
    tituloXP = "Platina"
    
}else if (experienciaXP >= 8001 && experienciaXP <= 9000){
    tituloXP = "Ascendente"

}else if (experienciaXP >= 9001 && experienciaXP <= 10000){
    tituloXP = "Imortal"
    
}else if (experienciaXP >= 10001){
    tituloXP = "Radiante"
    
}

console.log("O Herói de nome " + nome + " está no nível de " + tituloXP + "!")