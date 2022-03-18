import { Prop, Schema } from '@nestjs/mongoose';
import { truncate } from 'fs/promises';
import IdentifiableEntitySchema from 'src/contexts/shared/data/IdentifiableEntitySchema';

@Schema({
  versionKey: false,
  timestamps: false,
  id: false,
  collection: 'users',
})
class UserSchema extends IdentifiableEntitySchema {
  @Prop({
    required: true,
  })
  readonly name!: string;

  @Prop({
    required: true,
  })
  readonly surnames!: string;

  @Prop({
    required: true,
  })
  @Prop({
    require: true,
  })
  readonly mail!: string;

  @Prop({
    required: true,
  })
  readonly passwd: string;

  @Prop({
    required: true,
  })
  readonly role: string;
}

export default UserSchema;
