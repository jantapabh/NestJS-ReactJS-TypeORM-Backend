import { Inject, Injectable } from '@nestjs/common';
import { Course} from './interfaces/course.interface'


@Injectable()
export class CoursesService {

  async findAll(): Promise<Course[]> {
        return [
          { id: 100, number: '240365', title: 'Math II' },
          { id: 101, number: '240366', title: 'Math III' },
          { id: 102, number: '240367', title: 'Math Com' },
        ];
      }
}