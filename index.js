
//Atribui nome, pontos de vida, pontos de ataque e o pontos de defesa do personagem 
class Character {
    constructor(name, lifePoints, attackPoints, defensivePoints){
        this.name = name;
        this.lifePoints = lifePoints;
        this.attackPoints = attackPoints;
        this.defensivePoints = defensivePoints;
    }
 //Aqui calcula a diferença entre os pontos de ataque do personagem atual e a defesa do alvo
    hit(target) {
        const difference = this.attackPoints - target.defensivePoints;
        target.lifePoints -= difference; //Aqui diminui a diferença dos pontos de vida do alvo
        console.log(`${this.name} atacou ${target.name} e causou ${difference} pontos de dano.`)//Mostra a mensagem com o ataque e o dano causado 
    }

}
//Aqui o construtor da classe thief nao possui implementação própria, então ele herda o construtor da classe Character. Os atributos serão atribuidos pela classe pai.
class Thief extends Character {
    constructor(name, lifePoints, attackPoints, defensivePoints){
    super(name, lifePoints, attackPoints, defensivePoints);

    }

//O dano causado pelo Thief e dobro da diferença entre os pontos de ataque do personagem atual e a defesa do alvo
hit(target) {
    const difference = 2 * (this.attackPoints - target.defensivePoints);
    target.lifePoints -= difference;
    console.log (`${this.name} atacou ${target.name} e caousou ${difference} pontos de dano.`)
}

}

class Mage extends Character {
    constructor(name, lifePoints, attackPoints, defensivePoints, magicPoints) {
        super(name, lifePoints, attackPoints,defensivePoints);
        this.magicPoints = magicPoints;// atribui os pontos de magia do mage
    }
//Aqui o dano e causado considerando o ponto de ataque e magia do personagem atual e a defesa do alvo
    hit(target) {
        const difference = this.attackPoints + this.magicPoints - target.defensivePoints;
        target.lifePoints -= difference;
        console.log(`${this.name} atacou ${target.name} e causou ${difference} pontos de dano.`)
    }
    // Calcula os pontos de cura como o dobro dos pontos de magia do personagem atual, tambem adiciona os pontos de cura aos pontos de vida do alvo
    heal(target) {
        const healPoints = 2 * this.magicPoints;
        target.lifePoints += healPoints;
        console.log(`${this.name} curou ${target.name} e aumentou ${healPoints} pontos de vida.`)
    }
} 

class Warrior extends Character {
    constructor(name, lifePoints, attackPoints, defensivePoints, shieldPoints ){
        super(name, lifePoints, attackPoints,defensivePoints);
        this.shieldPoints = shieldPoints;// Define os pontos de escudo específicos do Warrior
        this.position = 'ataque'; //Começa na posição de ataque
    }

    hit(target) {
        if (this.position === 'ataque') {
            const defensivePoints = this.position === 'defesa' ? this.defensivePoints + this.shieldPoints : this. defensivePoints;//Calcula os pontos de defesa considerando a posição atual do Warrior (defesa ou ataque) e os pontos de escudo
            const difference = this.attackPoints - defensivePoints;//Aqui calcula o ataque com a defesa tendo em vista se o escudo esta ativado ou não
            target.lifePoints -= difference;
            console.log(`${this.name} atacou ${target.name} e causou ${difference} pontos de dano.`);
        }else{
            console.log(`${this.name} não pode atacar na posição de defesa.`)
        }

        }
        choosePosition() {
            this.position = this.position === 'ataque' ? 'defesa' : 'ataque';// Alterna entre as posições de ataque e defesa usando operador ternaário
            console.log(`${this.name} mudou para a posição de ${this.position}`)
        }
    }

   module.exports = {Character, Thief, Mage, Warrior};