import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { CoursesService } from './courses/courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Course from './courses/course.entity';
import { CoursesModule } from './courses/courses.module';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import Review from './courses/review.entity';


//บอกว่า  module หลักมี controller อะไรบ้างและมี service  อะไรบ้าง
// import database 
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'test1',
      entities: [Course, Review],
      synchronize: true,
    }),

    CoursesModule,

    AuthModule,

    UsersModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
