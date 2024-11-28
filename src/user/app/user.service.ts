import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  private readonly baseUrl = 'http://example-ms-app-1:3000/users';

  async getUserById(id: string): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/${id}`),
    );
    return response.data;
  }

  async createUser(data: { name: string; email: string; password: string }): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.post(this.baseUrl, data),
    );
    return response.data;
  }
}
