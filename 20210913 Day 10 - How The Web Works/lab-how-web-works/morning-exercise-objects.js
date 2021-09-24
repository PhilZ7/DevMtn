// MORNING EXERCISE //

// Create a class that creates company employees. Add any properties you think a standard employee would have.
// Add at least one method to this class (it can console informationor update property values)
// Make a couple of employee objects and consolet log them
// Also, try calling the method you created on an employee
// Create a class for a Manager that has all the same properties and methods of an employee, but also has a property called 'underlings' that holds an array of strings (employee names)
// On this class, add two methods:
// One that adds a new employee name to the array
// One that removes an employee from the array based on an incoming index values
// Make a couple manager objects and try calling some of the methods you made
// Bonus (if enough time): instead of adding an employee string to the array, refactor your code to accept an employee object with the following two properties: id & name
// Then, update your method that removes employees to search by id value, rather than index value
// Hint: the array method 'findIndex' may be of use

class Employee {
    constructor(empName, empAge, empExp) {
    this.name = empName;
    this.age = empAge;
    this.exp = empExp;
    this.morale = 'sad';  
    }
    showMorale(moraleString) {
      this.morale = moraleString;
    }
  }
  let employee1 = new Employee("Joe", 43, 3);
  employee1.showMorale('joyful');
  console.log(employee1)
  
  let employee2 = new Employee("Sue", 25, 2);
  employee1.showMorale('sad');
  console.log(employee2)
  
  
  class Manager {
    constructor(empName, empAge, empExp, underlings) {
    this.name = empName;
    this.age = empAge;
    this.exp = empExp;
    this.underlings = [];
    }
    showMorale(moraleString) {
      this.morale = moraleString;
      console.log(moraleString);
    }
    addEmployee(){
      underlings.push();
    }
    // removeEmployee() {
    //   underlings.shift();
  }
  
  let manager1 = new Manager("Jerry", 35, 10);
  console.log(manager1);
  manager1.addEmployee("NewPerson");
  