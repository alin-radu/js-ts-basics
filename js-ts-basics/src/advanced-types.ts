type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type Guest = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type UnknownEmployee = Admin | Employee | Guest;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);

  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }

  if ('startDate' in emp) {
    console.log('Start Date:' + emp.startDate);
  }
}

printEmployeeInfo(e1);

//

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

const r1 = add(1, 2);

// discriminated unions

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }

  console.log('Moving at speed: ' + speed);
}

const animal1 = moveAnimal({ type: 'bird', flyingSpeed: 15 });

moveAnimal({ type: 'horse', runningSpeed: 15 });

type test = string | number;

const a: test = true ? 'a' : 1;

if (typeof a === 'string') {
  a.toLocaleLowerCase();
}

// index properties

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital letter',
};

// optional chaining

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
};

const user1 = fetchedUserData?.name;
