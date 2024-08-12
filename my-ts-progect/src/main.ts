import './style.css'

//function add(num1: number, num2: number) {
//  return num1 + num2;
//}

//console.log(add(1, 2));

//  Task 1 Basic Types in TypeScript
//type Order = {
//  orderId: number;
//  customerName: string;
//  isDelivered: boolean;
//};

//function formatOrder(order: Order): string {
//  return 'Order ${order.orderId}: ${order.custumerName} - ${order.isDelivered ? 'Delivered' : 'Pending'}';
//}

//const order1 = {
//  orderId: 101,
//  customerName: 'John Doe',
//  isDelivered: false;
//}
//  console.log(formatOrder(order1));

//let isDone: boolean = false;

//const name: string = 'Bob';
//const lastName: string = 'Jonson';
//const age: number = 12;
//const isHappy: boolean = true;
//const budget: null = null;
//const status: undefined = undefined;

//type userProfile = {
//  username: string;
//  age: number;
//  isActive: boolean;
//}

//function displayUserProfile (user:userProfile) {
//  return `Username is ${user.username} he is ${user.age} years old and he is ${user.isActive}`;
//}

//const user = {
//  username: 'Bob',
//  age: 12,
//  isActive: true,
//}
 
//console.log(displayUserProfile(user))

//function logName(name: string) {
//  return `${name}`
//}

//function calcTotal(arr:number[]) {
//  return arr.reduce((acc, el) => acc + el, 0)
//}

//const numberArr = [10, 20, 30, 40];
//console.log(calcTotal(numberArr));

//type User = {
//  name: string;
//  age: number;
//}

//function calcTotal(arr: User[]) {
 
//}

//const users = [
//  { name: 'Bob', age: 12 },
//  { name: 'Alise', age: 14 },
//  { name: 'Norma', age: 13 }
//];

//console.log(calcTotal(users));

//function logDetails(value: any) {
//  console.log(`Value: ${value}. Type of value: ${typeof value}`);
//}

//Literal
//function lightShower(color: 'green' | 'yellow' | 'red') {
//  if (color === 'green') {
//    console.log('go')
//  }
//  else if (color === 'yellow') {
//    console.log('ready')
//  }
//  else if (color === 'red') {//
//   console.log('stop');
//  }
//}
//lightShower('yellow')

interface User  {
  name: string;
  age: number;
  sayHello(): string;
  sayBye(): void;
  showAge(age: number): string;
}

const user: User = {
  name: 'Bob',
  age: 12,
  sayHello() {
    return 'Hello'
  },
  sayBye() {
    console.log('Bye')
  },
  showAge(userAge: number) {
    return `My age is ${userAge}`
  }
}