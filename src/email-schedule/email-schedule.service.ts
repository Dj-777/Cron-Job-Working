import { Injectable } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { EmailService } from 'src/email/email.service';
import EmailScheduleDto from './EmailDto/emailSchedule.dto';

@Injectable()
export class EmailScheduleService {
  constructor(
    private readonly emailService: EmailService,
    private readonly schedulerRegistry: SchedulerRegistry,
  ) {}
  @Cron(' 1 * * * *')
  scheduleEmail(emailscheduledto: EmailScheduleDto) {
    const job = new CronJob('', () => {
      this.emailService.sendMail({
        to: emailscheduledto.recipient,
        subject: emailscheduledto.subject,
        text: emailscheduledto.content,
      });
    });
    this.schedulerRegistry.addCronJob('', job);
    job.start();
    console.log(emailscheduledto.recipient);
    return `${emailscheduledto.recipient}`;
  }
}
