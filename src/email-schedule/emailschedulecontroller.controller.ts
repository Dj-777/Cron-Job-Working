import { Body, Controller, Post } from '@nestjs/common';
import { EmailScheduleService } from './email-schedule.service';
import EmailScheduleDto from './EmailDto/emailSchedule.dto';

@Controller('emailschedulecontroller')
export class EmailschedulecontrollerController {
  constructor(private readonly Emailsheduleingservice: EmailScheduleService) {}
  @Post('schedule')
  //@UseGuards(JwtAuthGuard)
  async scheduleMail(@Body() emailschduledto: EmailScheduleDto) {
    this.Emailsheduleingservice.scheduleEmail(emailschduledto);
  }
}
