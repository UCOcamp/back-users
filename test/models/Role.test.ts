import Role from '../../src/contexts/user/domain/entities/valueobjects/Role';

describe('RoleVO', () => {
  let role: Role;

  it('should return CREATOR role', () => {
    role = new Role('CREATOR');

    expect(role.value).toBe('CREATOR');
  });

  it('should return STUDENT role', () => {
    role = new Role('STUDENT');

    expect(role.value).toBe('STUDENT');
  });

  it('should return an Instance of Error', () => {
    try {
      new Role('TEST');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
