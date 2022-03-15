import { v4 as uuid } from 'uuid';

import User from './User';
import Mail from './valueobjects/Mail';
import Role from './valueobjects/Role';

describe('UserEntity', () => {
  let user: User;
  const mail = new Mail('test@test.com');
  const role = new Role('STUDENT');
  const id = uuid();

  it('should return all variables', () => {
    user = new User(id, 'Marc', 'Test', mail, 'passwd', role);

    expect(user.id).toBe(id);
    expect(user.name).toBe('Marc');
    expect(user.surnames).toBe('Test');
    expect(user.mail.value).toBe(mail.value);
    expect(user.passwd).toBe('passwd');
    expect(user.role.value).toBe(role.value);
  });

  it('should change name', () => {
    user = new User(id, 'Marc', 'Test', mail, 'passwd', role);

    user.name = 'Alex';

    expect(user.name).toBe('Alex');
  });

  it('should change surnames', () => {
    user = new User(id, 'Marc', 'Test', mail, 'passwd', role);

    user.surnames = 'Test Test';

    expect(user.surnames).toBe('Test Test');
  });

  it('should change mail', () => {
    user = new User(id, 'Marc', 'Test', mail, 'passwd', role);

    user.mail = new Mail('anewmail@gmail.com');

    expect(user.mail.value).toBe('anewmail@gmail.com');
  });

  it('should change role', () => {
    user = new User(id, 'Marc', 'Test', mail, 'passwd', role);

    user.role = new Role('CREATOR');

    expect(user.role.value).toBe('CREATOR');
  });

  it('should change passwd', () => {
    user = new User(id, 'Marc', 'Test', mail, 'passwd', role);

    user.passwd = 'newPasswd';

    expect(user.passwd).toBe('newPasswd');
  });
});