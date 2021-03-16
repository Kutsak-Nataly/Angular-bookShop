import {BookModel} from '../models/BookModel';
import {CategoryModel} from '../models/CategoryModel';

export class TestData {

  static books: BookModel[] = [
    {
      idKey:140,
      name: 'Тайна домика на пляже',
      description: 'Однажды, распутывая собственную родословную, Аня озадачилась тем фактом.',
      price: 23,
      category: CategoryModel.det,
      createDate: new Date('2019-04-10'),
      isAvailable: 3,
      counted: 0
    },
    {
      idKey: 141,
      name: 'Царевич с плохим резюме',
      description: 'Однажды, распутывая собственную родословную, Аня озадачилась тем фактом.',
      price: 13,
      category: CategoryModel.det,
      createDate: new Date('2019-06-10'),
      isAvailable: 0,
      counted: 0
    },
    {
      idKey: 242,
      name: 'Две жизни',
      description: 'Однажды, распутывая собственную родословную, Аня озадачилась тем фактом.',
      price: 3,
      category: CategoryModel.roman,
      createDate: new Date('2020-06-02'),
      isAvailable: 5,
      counted: 0
    },
    {
      idKey: 243,
      name: 'О чудное мгновение',
      description: 'Однажды, распутывая собственную родословную, Аня озадачилась тем фактом.',
      price: 4,
      category: CategoryModel.poez,
      createDate: new Date('2019-06-10'),
      isAvailable: 0,
      counted: 0
    },
    {
      idKey: 244,
      name: 'Приключения Тома Сойера',
      description: 'Однажды, распутывая собственную родословную, Аня озадачилась тем фактом.',
      price: 20,
      category: CategoryModel.child,
      createDate: new Date('2019-06-10'),
      isAvailable: 10,
      counted: 0
    },
    {
      idKey: 245,
      name: 'Сила сильных',
      description: 'На этот раз тайна зародилась после обращение в агентство Дягтерева',
      price: 8,
      category: CategoryModel.fantasy,
      createDate: new Date('2019-09-16'),
      isAvailable: 10,
      counted: 0
    },
    {
      idKey: 246,
      name: 'Золотая империя',
      description: 'ород лишился своей магии. У власти тиран, который не может сдержать собственных демонов',
      price: 10,
      category: CategoryModel.other,
      createDate: new Date('2019-06-10'),
      isAvailable: 9,
      counted: 0
    },
    {
      idKey: 247,
      name: 'Дети капитана Гранта',
      description: 'Капитан Грант пустился в опасное плавание. Но его корабль терпит крушение',
      price: 30,
      category: CategoryModel.other,
      createDate: new Date('2019-06-10'),
      isAvailable: 19,
      counted: 0
    }
  ];
}
