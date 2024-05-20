/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
}

// Використовуємо generics для параметрів top і bottom, щоб вони були підмножиною AllType
function compare<T extends Pick<AllType, keyof AllType>, U extends Pick<AllType, keyof AllType>>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// Приклад використання функції
const topExample: Pick<AllType, 'name' | 'position' | 'color' | 'weight'> = {
  name: 'Example Name',
  position: 1,
  color: 'Red',
  weight: 70,
};

const bottomExample: Pick<AllType, 'name' | 'position' | 'color' | 'weight'> = {
  name: 'Another Name',
  position: 2,
  color: 'Blue',
  weight: 80,
};

const result = compare(topExample, bottomExample);
console.log(result);

export {};
