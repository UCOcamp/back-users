class Mail {
  private _value: string;

  constructor(value: string) {
    this.create(value);
  }

  get value() {
    return this._value;
  }

  private create(value: string) {
    const regex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

    if (regex.test(value) == false) {
      throw new Error('This mail is not valid.');
    }

    this._value = value;
  }
}

export default Mail;
