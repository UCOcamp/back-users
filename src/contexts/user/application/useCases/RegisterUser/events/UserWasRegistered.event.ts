class UserWasRegisteredEvent {
  constructor(private readonly _id: string) {}

  get id() {
    return this;
  }
}

export default UserWasRegisteredEvent;
