class Ninja {
  constructor(name, health, speed =3, strength = 3){
    this.name = name,
    this.health = health,
    this.speed = speed
    this.strength = strength
  }
  sayName(){
    console.log(`The ninja's name is ${this.name}`)
  }
  showStats(){
    console.log(`Name: ${this.name}... Strength: ${this.strength}... Speed: ${this.speed}... Health: ${this.health}`)
  }
  drinkShake(){
    this.health += 10
    console.log(`Ninja is drinking his protein shake to start his recovery after a grueling session of training, health is now ${this.health}`)
  }
}


// Extending Ninja class to create sensei class

class Sensei extends Ninja {
  constructor(name, health, speed, strength, wisdom){
    super(name, health= 200, speed = 10, strength=10, wisdom = 10);
    this.wisdom = wisdom
  }
  speakWisdom(){
    this.drinkShake()
    console.log('When you have exhausted all possibilities, remember this - you have not')
  }
}

// const michaelAngelo = new Ninja('Michael Angelo', 10)
// michaelAngelo.drinkShake()
// console.log(michaelAngelo.showStats())

const chiefSensei = new Sensei('Christian Ramirez')
console.log(chiefSensei.speakWisdom())