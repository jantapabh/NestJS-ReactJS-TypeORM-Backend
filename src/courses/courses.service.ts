import { Inject, Injectable } from '@nestjs/common';
import Course from './course.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course) private courseRepository: Repository<Course>
  ) {}

  async findAll(): Promise<Course[]> {
    return this.courseRepository.find();
  }

  async create(createCourseDto: CreateCourseDto) {
    return this.courseRepository.save(createCourseDto);
  }
}
