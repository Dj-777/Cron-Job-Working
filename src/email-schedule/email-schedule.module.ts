import { Module } from '@nestjs/common';
import { EmailModule } from 'src/email/email.module';
import { EmailScheduleService } from './email-schedule.service';
import { EmailschedulecontrollerController } from './emailschedulecontroller.controller';

@Module({
  imports: [EmailModule],
  providers: [EmailScheduleService],
  controllers: [EmailschedulecontrollerController],
})
export class EmailScheduleModule {}
