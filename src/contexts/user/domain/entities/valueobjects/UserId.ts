import { ValueObject } from '@aulasoftwarelibre/nestjs-eventstore';

interface Props {
  value: string;
}

class UserId extends ValueObject<Props> {
  public static fromString(id: string): UserId {
    if (id.length === 0) {
      throw new Error('UserId cannot be null.');
    }

    const regex =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

    if (regex.test(id) === false) {
      throw new Error('This ID is not an UUID');
    }

    return new UserId({ value: id });
  }

  get value() {
    return this.props.value;
  }
}

export default UserId;
