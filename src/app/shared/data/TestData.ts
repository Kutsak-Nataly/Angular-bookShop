import {BookModel} from '../../models/BookModel';
import {CategoryModel} from '../../models/CategoryModel';

export class TestData {

  static books: BookModel[] = [
    {
      idbook:0,
      name: 'Тайна домика на пляже',
      description: 'Однажды, распутывая собственную родословную, Аня озадачилась тем фактом.',
      price: 23,
      category: CategoryModel.det,
      createDate: new Date('2019-04-10'),
      isAvailable: true
    },
    {
      idbook: 1,
      name: 'Темные предки светлой детки',
      description: 'Однажды, распутывая собственную родословную, Аня озадачилась тем фактом.',
      price: 13,
      category: CategoryModel.history,
      createDate: new Date('2019-06-10'),
      isAvailable: false
    },
    {
      idbook: 2,
      name: 'Романтические прозы',
      description: 'Однажды, распутывая собственную родословную, Аня озадачилась тем фактом.',
      price: 43,
      category: CategoryModel.roman,
      createDate: new Date('2019-06-10'),
      isAvailable: true
    },
    {
      idbook: 3,
      name: 'О чудное мгновение',
      description: 'Однажды, распутывая собственную родословную, Аня озадачилась тем фактом.',
      price: 64,
      category: CategoryModel.poez,
      createDate: new Date('2019-06-10'),
      isAvailable: false
    },
    {
      idbook: 4,
      name: 'Детский мир',
      description: 'Однажды, распутывая собственную родословную, Аня озадачилась тем фактом.',
      price: 23,
      category: CategoryModel.child,
      createDate: new Date('2019-06-10'),
      isAvailable: true
    },
    {
      idbook: 5,
      name: 'Фантастический мир',
      description: 'На этот раз тайна зародилась после обращение в агентство Дягтерева',
      price: 8,
      category: CategoryModel.fantasy,
      createDate: new Date('2019-06-10'),
      isAvailable: true
    },
    {
      idbook: 6,
      name: 'Сетка модульная',
      description: 'На этот раз тайна зародилась после',
      price: 41,
      category: CategoryModel.other,
      createDate: new Date('2019-06-10'),
      isAvailable: true
    }
  ];
}
