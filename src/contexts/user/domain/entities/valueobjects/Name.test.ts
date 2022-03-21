import Name from './Name';

describe('NameVO', () => {
  let name: Name;

  it('should return a valid Name', () => {
    name = Name.fromString('Marc');

    expect(name.value).toBe('Marc');
  });

  it('should return an instance of Error, Name cannot be null', () => {
    try {
      Name.fromString('');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
