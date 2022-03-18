import { ApiProperty } from '@nestjs/swagger';
import { Roles } from 'src/contexts/user/domain/entities/valueobjects/Role';

class RegisterUserDTO {
  @ApiProperty({ type: String, description: "User's name" })
  name!: string;

  @ApiProperty({ type: String, description: "User's surnames" })
  surnames!: string;

  @ApiProperty({ type: String, description: "User's mail" })
  mail!: string;

  @ApiProperty({ type: String, description: "User's passwd" })
  passwd!: string;

  @ApiProperty({
    enum: Roles,
    description: "User's role. Only Valid: CREATOR, STUDENT",
  })
  role!: string;
}

export default RegisterUserDTO;
