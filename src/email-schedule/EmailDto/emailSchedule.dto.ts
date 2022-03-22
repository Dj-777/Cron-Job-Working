import { IsString, IsNotEmpty, IsEmail } from '@nestjs/class-validator';

export class EmailScheduleDto {
  @IsEmail()
  recipient: string;

  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  //IsDateString()
  // date: string;
}

export default EmailScheduleDto;
