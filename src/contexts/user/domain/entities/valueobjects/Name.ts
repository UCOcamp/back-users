import { ValueObject } from '@aulasoftwarelibre/nestjs-eventstore';

interface Props {
  value: string;
}

class Name extends ValueObject<Props> {
  public static fromString(value: string): Name {
    if (value.length === 0) {
      throw new Error('Name cannot be null');
    }

    return new Name({ value });
  }

  get value() {
    return this.props.value;
  }
}

export default Name;
