//Завдання 1
//Типізуйте асинхронну функцію fetchData, яка приймає URL ресурсу
// та повертає об'єкт з даними.
//Використовуйте Generics для типізації повернутих даних.
import axios from 'axios';

async function fetchData<T>(url: string): Promise<any> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

//Завдання 2
//У вас є тип AllType. Існує функція compare, яка приймає два об'єкти.
//Ці об'єкти містять поля AllType. Ваше завдання – використовувати Pick
//та generics для вказівки, що поля цих параметрів належать AllType.
//Функція compare повинна повертати AllType.

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare(
    top: Pick<AllType, 'name' | 'color'>,
    bottom: Pick<AllType, 'position' | 'weight'>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

//Завдання 3
//У вас є функція merge, яка поєднує два об'єкти. 
//Використовуйте generics, щоб вказати, що ці об'єкти можуть 
//бути будь - якого типу.
function merge<T extends object, O extends object>(objA: T, objB: O) {
  return Object.assign(objA, objB);
}

//Завдання 4
//Ви маєте форму реєстрації користувачів. Іноді потрібно попередньо 
//заповнити форму даними користувача для оновлення його профілю.
//Однак вам не завжди потрібно заповнити всі поля.Наприклад, користувач 
//може хотіти оновити лише свій email та пароль, залишивши ім'я та 
//прізвище без змін.
//Використовуючи утиліту Partial та generics, виправте тип параметра 
//функції так, щоб уникнути помилок типізації.
type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>) {
    // Оновлення користувача
    return { ...initialValues };
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});

//Завдання 5
//У вас є перелік UserRole, який використовується для класифікації
//користувачів у вашому додатку.Ви хочете створити об'єкт RoleDescription,
// який зіставлятиме кожну роль користувача з її описом.
export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Замініть наступний код на версію за допомогою Record
type UserRoleDescription = Record<UserRole, string>;

const RoleDescription = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};

//Завдання 6
//У вас є тип Form, який містить інформацію про форму, включаючи поле
//errors.Ви хочете створити новий тип Params, який включає всі поля з
//Form, крім errors.
type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так, 
// щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, 'errors'>;