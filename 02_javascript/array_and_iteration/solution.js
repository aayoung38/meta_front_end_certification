// Task 1
function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
    for (item of dairy) {
        console.log(item);
    }
}
// Task 2
function birdCan() {
    const animal = {
        canJump: true
    };

    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;

    for( key of Object.keys(bird) ) {
        console.log(key, ": ", bird[key]);
    }
}
// Task 3
function animalCan() {
    const animal = {
        canJump: true
    };

    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;


    for( key in bird ) {
        console.log(key, ": ", bird[key]);
    }
}
logDairy();
birdCan();
animalCan();