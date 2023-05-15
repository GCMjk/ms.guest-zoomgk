import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GuestController } from './guest.controller';
import { GuestService } from './guest.service';

import { GUEST, USER } from '@common/models/models';
import { GuestSchema } from './schema/guest.schema';
import { UserSchema } from './schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: GUEST.name,
        useFactory: () => GuestSchema.plugin(require('mongoose-autopopulate'))
      },
      {
        name: USER.name,
        useFactory: () => UserSchema
      }
    ])
  ],
  controllers: [GuestController],
  providers: [GuestService]
})
export class GuestModule {}
