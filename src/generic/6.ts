/*
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// }

// function createOrUpdateUser(initialValues: Partial<User>): User {
//   // Оновлення користувача
//   const defaultUser: User = {
//     name: 'Dmytro',
//     surname: 'Medvediev',
//     email: '',
//     password: '',
//   };
//   return { ...defaultUser, ...initialValues };
// }

// const newUser = createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });

// export {};


//_____________________________2________________________________//

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(currentUser: User, initialValues: Partial<User>): User {
  return { ...currentUser, ...initialValues };
}

// Приклад існуючого користувача
const existingUser: User = {
  name: 'Dmytro',
  surname: 'Medvediev',
  email: 'old@mail.com',
  password: 'oldPassword',
};

// Оновлення лише email та password
const updatedUser = createOrUpdateUser(existingUser, { email: 'user@mail.com', password: 'password123' });

console.log(updatedUser);

export {};
