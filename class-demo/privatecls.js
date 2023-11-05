class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    get speedUS() {
        return this._speed * 1.6;
    }

    // get speed() {
    //     return this._speed;
    // }
    // set speed(speed) {
    //     this._speed = Number((this._speed + speed) / 1.6).toFixed(2);
    // }
    accelerate() {
        this.speed += 10;
        console.log(`🚀 ~ file: privatecls.js:16 ~${this.make} car ~ accelerate ~ ${this.speed}:`);
        return this;
    }

    brake() {
        this.speed -= 5;
        console.log(`🚀 ~ file: privatecls.js:22 ~ ${this.make} car ~ brake ~ ${this.speed}:`);
        return this;
    }
}
// speed given in kmph but stored in mph
const car = new Car('ferrari', 120);
car.accelerate().brake().accelerate().accelerate().brake().brake();

console.log('-'.repeat(40));

class EVCar extends Car {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
    chargeBattery(chargeTo) {
        this.#charge += chargeTo;
        console.log("🚀 ~ file: privatecls.js:41 ~ EVCar ~ chargeBattery ~ this.#charge:", this.#charge);
        return this;
    }

    accelerate() {
        super.accelerate();
        return this.chargeBattery(-1);
    }
    brake() {
        super.brake();
        return this.chargeBattery(-5);
    }
}

const evCar = new EVCar('Tesla', 140, 100);
evCar.accelerate().brake().accelerate().accelerate().brake().brake().chargeBattery(3).brake();