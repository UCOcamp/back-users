import User from '../entities/User';

interface UserEntityRepository {
  getOne(id: string): Promise<User>;
  getAll(): Promise<User[]>;
  saveOne(user: User): Promise<void>;
  updateOne(user: User): Promise<void>;
  deleteOne(user: User): Promise<void>;
}

export default UserEntityRepository;
