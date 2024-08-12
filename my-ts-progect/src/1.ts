
//Завдання 1
const age: number = 50;
const username: string = 'Max';
const toggle: boolean = true;
const empty: null = null;
const callback = (a: number): number => {
    return 100 + a
};

//Завдання 2
let person: [string, number];
person = ['Max', 21];

//Завдання 3
//Створіть змінну, яка може містити або рядок, або число(union type) ?
//Також, оголосіть змінну, яка може містити лише одне з двох можливих 
//рядкових значень: 'enable' або 'disable'(literal type).
let unionType: string | number;
type literalType = 'enable' | 'disable';

//Завдання 4
function showMessage(message: string): void {
 console.log(message);
}

function calc(num1: number, num2: number):number {
 return num1 + num2;
}

function customError(): never {
 throw new Error('Error');
}


//Завдання 5
//Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek
//і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}


const isWeekend = (day:DayOfWeek): boolean => {
   return day === DayOfWeek.Saturday || DayOfWeek.Sunday;
};


//Завдання 6
//Створіть інтерфейс User для типізації об'єктів, які містять такі
//властивості.Зверніть увагу, що адреса є необов'язковою властивістю.

interface User  {
    name: string;
    age: number;
    email: string;
    address?: {
        city: string;
        country: string;
    };
};

const mango = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};


//Завдання 7
//Створіть новий тип даних, який підходить для цих двох об'єктів.

type Page = {
    title: string;
    likes: number;
    accounts: string[];
    status: 'close' | 'open';
    details?: {
        createAt: Date;
        updateAt: Date;
    };
};

const page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}
