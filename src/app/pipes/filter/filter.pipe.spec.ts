import { IDataPicsum } from 'src/app/interfaces/data.interface';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return data', () => {
    const data: Array<IDataPicsum> = [
      {
        id: '1',
        url: 'https://picsum.photos/200/300?random=1',
        text: 'Texto Random 1',
      },
      {
        id: '2',
        url: 'https://picsum.photos/200/300?random=2',
        text: 'Texto Random 2',
      },
    ];
    const pipe = new FilterPipe();
    expect(pipe.transform(data, '')).toHaveSize(2);
  });

  it('should filter the value 1', () => {
    const data: Array<IDataPicsum> = [
      {
        id: '1',
        url: 'https://picsum.photos/200/300?random=1',
        text: 'Texto Random 1',
      },
      {
        id: '2',
        url: 'https://picsum.photos/200/300?random=2',
        text: 'Texto Random 2',
      },
    ];
    const pipe = new FilterPipe();
    expect(pipe.transform(data, '1')).toHaveSize(1);
  });
});
