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
  }
}

const michaelAngelo = new Ninja('Michael Angelo', 10)
michaelAngelo.drinkShake()
console.log(michaelAngelo.showStats())