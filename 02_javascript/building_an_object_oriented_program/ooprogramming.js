// Task 1: Code a Person class
class Person{
    constructor() {
        this.name = "Tom";
        this.age = 20;
        this.energy = 100;
    }

    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}


// Task 2: Code a Worker class
class Worker extends Person{
    constructor() {
        super();
        this.xp = 0;
        this.hourlyWage = 10;
    }
    goToWork() {
        this.xp += 10;
    }

}
// Task 3: Code an intern object, run methods
function intern() {
    var worker = new Worker();
    worker.name = "Bob";
    worker.age = 21;
    worker.energy = 110;
    worker.xp = 0;
    worker.hourlyWage = 10;
    worker.goToWork();
    return worker;
}

// Task 4: Code a manager object, methods
function manager() {
    var worker = new Worker();
    worker.name = "Aice";
    worker.age = 30;
    worker.energy = 120;
    worker.xp = 100;
    worker.hourlyWage = 30;
    worker.doSomethingFun();
    return worker;
}