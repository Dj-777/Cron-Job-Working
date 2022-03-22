import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class EmailService {
  private nodemalierTransport: Mail;
  constructor(private readonly configservice: ConfigService) {
    this.nodemalierTransport = createTransport({
      service: configservice.get('EMAIL_SERVICE'),
      auth: {
        user: configservice.get('EMAIL_USER'),
        pass: configservice.get('EMAIL_PASSWORD'),
      },
    });
  }
  sendMail(options: Mail.Options) {
    return this.nodemalierTransport.sendMail(options);
  }
}
