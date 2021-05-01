import { Injectable, HttpException } from '@nestjs/common';

@Injectable()
export class AppService {
  getAnError(): string {
    throw new HttpException("Internal Server Error", 500)
  }
}
