import { CamelCasePipePipe } from './camel-case-pipe.pipe';

describe('CamelCasePipePipe', () => {
  it('create an instance', () => {
    const pipe = new CamelCasePipePipe();
    expect(pipe).toBeTruthy();
  });
});
