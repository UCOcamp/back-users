import UserId from '../../src/contexts/user/domain/entities/valueobjects/UserId';

import { v4 as uuid } from 'uuid';

describe('UserId VO', () => {
  let id: UserId;

  it('should return a valid UserId', () => {
    id = UserId.fromString(uuid());

    const regex =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

    expect(regex.test(id.value)).toBe(true);
  });

  it('should return an instance of Error, UserId cannot be null', () => {
    try {
      UserId.fromString('');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it('should return an instance of Error, ID not valid', () => {
    try {
      UserId.fromString('hashashashashashasoawjdanj44648..134');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
