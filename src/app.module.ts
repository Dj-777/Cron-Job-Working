import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmailModule } from './email/email.module';
import * as Joi from '@hapi/joi';
import { ScheduleModule } from '@nestjs/schedule';
import { EmailScheduleModule } from './email-schedule/email-schedule.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        EMAIL_SERVICE: Joi.string().required(),
        EMAIL_USER: Joi.string().required(),
        EMAIL_PASSWORD: Joi.string().required(),
      }),
    }),
    EmailModule,
    EmailScheduleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
