import { ValueObject } from '@aulasoftwarelibre/nestjs-eventstore';

interface Props {
  value: string;
}

class Surnames extends ValueObject<Props> {
  public static fromString(value: string): Surnames {
    if (value.length === 0) {
      throw new Error('Surnames cannot be null.');
    }

    return new Surnames({ value });
  }

  get value() {
    return this.props.value;
  }
}

export default Surnames;
