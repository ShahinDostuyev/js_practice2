//                              Task 1
/*
let student = {
  stack: ["HTML"],
  level: 1,
  improveLevel: function () {
    this.level++;
    if (this.level === 2) {
      this.stack.push("CSS");
    } else if (this.level === 3) {
      this.stack.push("JavaScript");
    } else if (this.level === 4) {
      this.stack.push("React");
    } else if (this.level === 4) {
        this.stack.push("NodeJS");
    }else{
        alert("The student has learned all technologies!")
    }
    console.log(this);
    return this;
  },
};
student.improveLevel()
student.improveLevel()
student.improveLevel()
student.improveLevel()
student.improveLevel()
*/

//                              Task 2
/*
const dog = {
  name: "Charlie",
  type: "Dog",
  makeSound() {
    return "Wow-Wo";
  },
};

const bird = {
  name: "Petya",
  type: "Sparrow",
  makeSound() {
    return "Cheek-chirp";
  },
};

function makeDomestic(isDomestic) {
  console.log(`${this.type} by name ${this.name} says ${this.makeSound()}`);
  const animalDomestic = {
    name: this.name,
    type: this.type,
    makeSound: this.makeSound,
    domestic : isDomestic
  };
  return animalDomestic;
}

const domesticDog = makeDomestic.bind(dog, true)();
const domesticBirdApply = makeDomestic.apply(bird, [true]);
const domesticBirdCall = makeDomestic.call(bird, true);

console.log(domesticDog);
console.log(domesticBirdApply);
console.log(domesticBirdCall);

*/

//                              Task 3
/*
const footballer = {
  fullName: "Cristiano Ronaldo",
  attack: () => {
    console.log(
      `${this.fullName} is now with the ball and starting to attack!`
    );
  },
  scoreGoal(sound) {
    console.log(`${this.fullName} scored a goal! Wow!`);
    this.celebrate(sound);
  },
  celebrate(sound) {
    console.log(sound);
  },
  goToSubstitution: function (newPlayer) {
    console.log(
      `${this.fullName} goes to replace. ${newPlayer} enters the field`
    );
  },
};

const attack = footballer.attack.bind(footballer);

const score = footballer.scoreGoal;
score.call(footballer, "Siiiiii");

const substitute = footballer.goToSubstitution;
substitute.apply(footballer, ["Paulo Dibala"]);

attack();
score("Siiiiii");
substitute("Paulo Dibala");
*/