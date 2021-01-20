import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Course from './entities/course.entity';


//บอกว่า  module หลักมี controller อะไรบ้างและมี service  อะไรบ้าง
// import database 
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'test1',
      entities: [Course],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Course])

  ],
  controllers: [AppController, CoursesController],
  providers: [AppService, CoursesService],
})
export class AppModule {}
