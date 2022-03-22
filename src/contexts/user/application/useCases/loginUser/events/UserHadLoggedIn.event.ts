class UserHadLoggedInEvent {
  constructor(private readonly _id: string) {}

  get id() {
    return this._id;
  }
}

export default UserHadLoggedInEvent;
