/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PageProps {
  title: string;
}

class Component<T> {
  public props: T;

  constructor(props: T) {
    this.props = props;
  }
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title); 
  }
}

export { };

