import Surnames from './Surnames';

describe('Surnames VO', () => {
  let surnames: Surnames;

  it('should return a valid Name', () => {
    surnames = Surnames.fromString('Test Test2');

    expect(surnames.value).toBe('Test Test2');
  });

  it('should return an instance of Error, Surnames cannot be null', () => {
    try {
      Surnames.fromString('');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
