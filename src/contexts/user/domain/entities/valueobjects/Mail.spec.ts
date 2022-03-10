import { Test } from '@nestjs/testing';
import Mail from './Mail';

describe('MailVO', () => {
  let mail: Mail;

  it('should return a valid Mail', () => {
    mail = new Mail('test@test.com');
    expect(mail.value).toBe('test@test.com');
  });

  it('should return a instance of Error', () => {
    try {
      new Mail('ThisShouldBeAnError')
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
