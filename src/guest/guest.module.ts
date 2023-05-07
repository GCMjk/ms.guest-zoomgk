import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GuestController } from './guest.controller';
import { GuestService } from './guest.service';

import { GUEST } from '@common/models/models';
import { GuestSchema } from './schema/guest.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: GUEST.name,
        useFactory: () => GuestSchema
      }
    ])
  ],
  controllers: [GuestController],
  providers: [GuestService]
})
export class GuestModule {}
