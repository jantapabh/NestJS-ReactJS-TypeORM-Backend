import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      { id: '1', username: 'jan', password: 'testme' },
      { id: '2', username: 'fairee', password: 'testme' },
      { id: '3', username: 'som', password: 'testme' },
    ];
  }


  async findOne(username: string): Promise<User | undefined>{
      return this.users.find(user => user.username === username);
  }
}
