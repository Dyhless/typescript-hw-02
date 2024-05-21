/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// Приклад використання
const stringNumberPair: KeyValuePair<string, number> = {
  key: "age",
  value: 30,
};

const numberStringPair: KeyValuePair<number, string> = {
  key: 1,
  value: "one",
};
