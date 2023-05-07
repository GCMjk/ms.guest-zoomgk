import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuestModule } from './guest/guest.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.development',
    }),
    MongooseModule.forRoot(
      process.env.URI_MONGODB,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    ),
    GuestModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
