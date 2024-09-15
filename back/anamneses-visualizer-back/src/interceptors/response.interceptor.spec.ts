import { Test, TestingModule } from '@nestjs/testing';
import { ResponseInterceptor } from './response.interceptor';
import { ExecutionContext, CallHandler } from '@nestjs/common';
import { of } from 'rxjs';

describe('ResponseInterceptor', () => {
  let interceptor: ResponseInterceptor<any>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResponseInterceptor],
    }).compile();

    interceptor = module.get<ResponseInterceptor<any>>(ResponseInterceptor);
  });

  it('should transform the response', (done) => {
    const mockData = { some: 'data' };
    const context: ExecutionContext = {} as any;
    const next: CallHandler<any> = {
      handle: () => of(mockData),
    };

    interceptor.intercept(context, next).subscribe((result) => {
      expect(result).toEqual({
        message: 'success',
        error: false,
        data: mockData,
      });
      done();
    });
  });
});
