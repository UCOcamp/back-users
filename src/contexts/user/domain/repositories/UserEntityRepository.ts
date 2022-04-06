import { Nullable } from '../../../shared/domain/Nullable';
import User from '../entities/User';

interface UserEntityRepository {
  getOneByMail(mail: string): Promise<Nullable<User>>;
  getAll(): Promise<User[]>;
  saveOne(user: User): Promise<void>;
  updateOne(user: User): Promise<void>;
  deleteOne(user: User): Promise<void>;
}

export default UserEntityRepository;
