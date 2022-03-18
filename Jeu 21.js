const prompt = require("prompt-sync")()

let jeux21 = function(){
    let bot = "Croupier";
    let joueurScore = [];
    let botScore = [];

    let a = 0;
    while(true){
        let choix = prompt("Taper 1 pour lancer le jeux : ");
            if(choix == 1){
                for(let i = 0; i<2; i++){
                    chiffreHasard(joueurScore,botScore);
                }
                let d = 0;
                while(true){
                    console.log(`${joueurScore} \n${botScore}`)
                    if((joueurScore.reduce((a,b)=>a+b) == 21 && botScore.reduce((a,b)=>a+b) != 21) || (joueurScore.reduce((a,b)=>a+b) < 21 && botScore.reduce((a,b)=>a+b) > 21)) {
                        return `Vous avez gagné`
                    }else if((botScore.reduce((a,b)=>a+b) == 21 && joueurScore.reduce((a,b)=>a+b) != 21) || (botScore.reduce((a,b)=>a+b) < 21 && joueurScore.reduce((a,b)=>a+b) > 21)){
                        return `${bot} a gagné`
                    }else if(joueurScore.reduce((a,b)=>a+b) > 21 && botScore.reduce((a,b)=>a+b) > 21){
                        return `égalité`
                    }
                    else{
                        let choix2 = prompt("Taper 1 pour continue ou 2 pour stop : ");
                        if(choix2 == 1){
                            chiffreHasard(joueurScore,botScore);
                        }else if(choix2 == 2){
                            if(botScore.reduce((a,b)=> a+b) < 17){
                                let t = 0;
                                while(botScore.reduce((a,b)=> a+b) < 17){
                                    let a = 0;
                                    while(true){
                                        let hasardChiffre2 = Math.floor(Math.random()*13)+1
                                        if(botScore.includes(hasardChiffre2) == false){
                                            botScore.push(hasardChiffre2);
                                            break;
                                        }a++;;
                                    }t++;
                                }
                                
                            }else{
                                if(botScore.reduce((a,b)=>a+b)>joueurScore.reduce((a,b)=>a+b) && botScore.reduce((a,b)=>a+b)<= 21){
                                    console.log(`${joueurScore} \n${botScore}`)
                                    return `${bot} a gagné`
                                }else if(botScore.reduce((a,b)=>a+b) == joueurScore.reduce((a,b)=>a+b) && botScore.reduce((a,b)=>a+b) <= 21){
                                    console.log(`${joueurScore} \n${botScore}`)
                                    return `égalité`
                                }else{
                                    console.log(`${joueurScore} \n${botScore}`)
                                    return `vous avez gagné`
                                }
                            }
                    }d++;
                }
            }
        }else{
            console.log("Verifiez votre choix");
            a++;
        }
    }
}

let chiffreHasard = function(joueurScore,botScore){
    let a = 0;
    while(true){
        let hasardChiffre1 = Math.floor(Math.random()*13)+1
        if(joueurScore.includes(hasardChiffre1) == false){
            joueurScore.push(hasardChiffre1);
            break;
        }a++;
    }
    let b = 0;
    while(true){
        let hasardChiffre2 = Math.floor(Math.random()*13)+1
        if(botScore.includes(hasardChiffre2) == false){
            botScore.push(hasardChiffre2);
            break;
        }b++;
    }
    return `${joueurScore} \n ${botScore}`
}
console.log(jeux21());
