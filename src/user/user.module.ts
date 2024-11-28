import { Module } from '@nestjs/common';
import { UserService } from './app/user.service';
import { UserResolver } from './adapters/user.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    providers: [UserService, UserResolver, HttpModule],
})
export class UserModule { }
