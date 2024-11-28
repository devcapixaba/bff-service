import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UserService } from '../app/user.service';
import { randomUUID } from 'crypto';
import { NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @Query(() => User, { name: 'getUserById' })
  async getUserById(@Args('id') id: string): Promise<User> {
    try {
      return await this.userService.getUserById(id);
    } catch (error) {
      if (error.status === 404) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
    }
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserInput): Promise<User> {
    return this.userService.createUser(data);
  }
}
