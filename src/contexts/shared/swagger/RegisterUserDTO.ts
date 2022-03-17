import { ApiProperty } from '@nestjs/swagger';

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
    type: String,
    description: "User's role. VALID: CREATOR, STUDENT",
  })
  role!: string;
}

export default RegisterUserDTO;
