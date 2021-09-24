/// 20210910 - Morning examples /// 

const person1 = {
    firstName: 'Chanandler',
    lastName: 'Bong',
    age: 34,
  }
  
  console.log(person1['age'] + 30);
  
  let ourTargetProperty = 'age';
  console.log(person1[ourTargetProperty]);
  
  // -- // -- // -- // -- //
  
  const person2 = {
    firstName: 'Sally',
    lastName: 'Struthers',
    age: 25,
    faveColor: ['Grey', 'Red'],
  }
  
  console.log(person1.firstName, "loves", person2.firstName);
  // or 
  console.log(`${person1.firstName} loves ${person2.firstName}`);
  
  console.log('// -- // -- // -- // -- // // -- // -- // -- // -- //')
  
  // Looping through objects
  
  // for (let banana in person2) {
  //   console.log(typeof banana);
  //   console.log(banana);
  // }
  
  for (let key in person2) {
    // console.log(person2);
    console.log(person2[key]);
  }
  
  person2.age += 20;
  console.log(person2.faveColor);
  console.log(person2.age);
  console.log(`But really likes ${person2.faveColor[1]}`);
  
  console.log('// -- // -- // -- // -- // CLASSES // -- // -- // -- // -- //')
  
  class Animal {
    constructor(animalType, animalColor) {
      this.type = animalType;
      this.color = animalColor;
      this.mood = 'happy';
      this.moodUpdateCount = 0;
    }
  
    updateMood(moodString) {
      this.mood = moodString;
      this.moodUpdateCount += 1;
    }
  }
  
  const zebra = new Animal('zebra', 'black and white');
  console.log(zebra);
  
  const parrot = new Animal('parrot', 'red, blue, yellow');
  
  parrot.updateMood('feisty');
  console.log(parrot);
  
  
  