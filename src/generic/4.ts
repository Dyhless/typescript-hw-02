/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

// Визначаємо інтерфейс для props, який використовується в Page
interface PageProps {
  title: string;
  // Інші властивості, якщо необхідно
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
