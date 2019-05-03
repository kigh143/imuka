import { StringArrayPipe } from './string-array.pipe';

describe('StringArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new StringArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
