class UserWasRegisteredEvent {
  constructor(private readonly _id: string) {}

  get id() {
    return this._id;
  }
}

export default UserWasRegisteredEvent;
