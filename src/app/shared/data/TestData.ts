import {BookModel} from '../../models/BookModel';
import {CategoryModel} from '../../models/CategoryModel';

export class TestData {

  static books: BookModel[] = [
    {
      name: 'Тайна домика на пляже',
      description: 'Однажды, распутывая собственную родословную, Аня озадачилась тем фактом.',
      price: 23,
      category: CategoryModel.det,
      createDate: new Date('2019-04-10'),
      isAvailable: true
    },
    {
      name: 'Темные предки светлой детки',
      description: 'Однажды, распутывая собственную родословную, Аня озадачилась тем фактом.',
      price: 13,
      category: CategoryModel.history,
      createDate: new Date('2019-06-10'),
      isAvailable: false
    },
    {
      name: 'Романтические прозы',
      description: 'Однажды, распутывая собственную родословную, Аня озадачилась тем фактом.',
      price: 43,
      category: CategoryModel.roman,
      createDate: new Date('2019-06-10'),
      isAvailable: true
    },
    {
      name: 'О чудное мгновение',
      description: 'Однажды, распутывая собственную родословную, Аня озадачилась тем фактом.',
      price: 64,
      category: CategoryModel.poez,
      createDate: new Date('2019-06-10'),
      isAvailable: false
    },
    {
      name: 'Детский мир',
      description: 'Однажды, распутывая собственную родословную, Аня озадачилась тем фактом.',
      price: 23,
      category: CategoryModel.child,
      createDate: new Date('2019-06-10'),
      isAvailable: true
    },
    {
      name: 'Фантастический мир',
      description: 'На этот раз тайна зародилась после обращение в агентство Дягтерева',
      price: 8,
      category: CategoryModel.fantasy,
      createDate: new Date('2019-06-10'),
      isAvailable: true
    },
    {
      name: 'Сетка модульная',
      description: 'На этот раз тайна зародилась после',
      price: 41,
      category: CategoryModel.other,
      createDate: new Date('2019-06-10'),
      isAvailable: true
    }
  ];
}
