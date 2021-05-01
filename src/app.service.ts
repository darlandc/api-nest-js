import { Injectable, HttpException } from '@nestjs/common';

@Injectable()
export class AppService {
  getAnError(): string {
    throw new HttpException({
      status: 500,
    }, 500)
  }
}
