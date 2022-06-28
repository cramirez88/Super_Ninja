class Ninja {
  constructor(name, health){
    this.name = name,
    this.health = health,
    this.speed = 3
    this.strength = 3
  }
  sayName(){
    console.log(`The ninja's name is ${this.name}`)
  }
  showStats(){
    console.log(`Name: ${this.name}... Strength: ${this.strength}... Speed: ${this.speed}... Health: ${this.health}`)
  }
  drinkShake(){
    this.health += 10
  }
}

const michaelAngelo = new Ninja('Michael Angelo', 10)
michaelAngelo.drinkShake()
console.log(michaelAngelo.showStats())