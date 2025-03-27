// const secureBooking=function(){
//     let pc=0;

//     return function(){
//         pc++;
//         console.log(` ${pc} passenger`);

//     };
// };

// const booker=secureBooking();

// booker();

// async function fetchuser(){
//     const res=await fetch('https://jsonplaceholder.typicode.com/users');
//     const data=await res.json();
//     console.log(data);
// }

// fetchuser();

// var person = {fname:"John", lname:"Doe", age:25};

// console.log(person);

// for (x in person) {
//   console.log(x);
//   console.log(person[x]);
// }

// var myjson=JSON.stringify(person);
// console.log(myjson);

//Any js obj can be Convert into the array using Object.values()
// var myArray = Object.values(person);
// console.log(myArray);


//Constructor Function or js obj constructor

// function People(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }

// let me=new People('sanyam','jain',25,"black");
// let father=new People('anil','jain', 49,"black")
// father.nation='INdia';
// console.log(me);
// console.log(father);
// console.log(People);
// People.prototype.nation='India';
// console.log(me);

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }

    show() {
      return this.present() + ', it is a ' + this.model;
    }
    
  }
  
  let myCar = new Model("Ford", "Mustang");
  console.log(myCar.carname);
  console.log(myCar.present());
  console.log(myCar.show());
  console.log(myCar.present());