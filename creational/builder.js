class Car {
  constructor(engine, fuelTank, seats) {
    this.engine = engine
    this.fuelTank = fuelTank
    this.seats = seats
  }

  printSpecs() {
    console.log(this.engine, this.fuelTank, this.seats)
  }
}

class CarBuilder {
  constructor() {
    this.engine = ""
    this.fuelTank = ""
    this.seats = 0
  }

  addSeats(number) {
    this.seats = number
    return this
  }

  addFuelTank(value) {
    this.fuelTank = value
    return this
  }

  addEngine(value) {
    this.engine = value
    return this
  }

  build() {
    return Car(this.engine, this.fuelTank, this.seats)
  }

}


let truck = new CarBuilder().addSeats(8).addEngine('v10').addFuelTank('20liters')

let sedan = new CarBuilder().addSeats(4).addEngine('v4').addFuelTank('10liters')


console.log('truck: ', truck)

console.log('sedan: ', sedan)

