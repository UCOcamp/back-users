import { ValueObject } from '@aulasoftwarelibre/nestjs-eventstore';

interface Props {
  value: string;
}

class Mail extends ValueObject<Props> {
  public static fromString(value: string): Mail {
    if (value.length === 0) {
      throw new Error('Mail cannot be empty');
    }

    const regex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

    if (regex.test(value) == false) {
      throw new Error('This mail is not valid.');
    }

    return new Mail({ value });
  }

  get value() {
    return this.props.value;
  }
}

export default Mail;
