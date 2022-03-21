import Mail from './Mail';

describe('MailVO', () => {
  let mail: Mail;

  it('should return a valid Mail', () => {
    mail = Mail.fromString('test@test.com');
    expect(mail.value).toBe('test@test.com');
  });

  it('should return an instance of Error, Mail cannot be null', () => {
    try {
      Mail.fromString('');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it('should return an instance of Error', () => {
    try {
      Mail.fromString('adwadawdad@adawdada');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
