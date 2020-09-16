class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep, beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.honk();
  }
}

const carInstance = new Car(4, 'green');
const vehicle = new Vehicle('orange');

console.log(carInstance.color, carInstance.wheels);
carInstance.startDrivingProcess();
