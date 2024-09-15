import { Test, TestingModule } from '@nestjs/testing';
import { HttpException, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { AllExceptionsFilter } from './http-exception.filter';
describe('AllExceptionsFilter', () => {
  let filter: AllExceptionsFilter;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllExceptionsFilter],
    }).compile();
    filter = module.get<AllExceptionsFilter>(AllExceptionsFilter);
  });
  it('should catch an HttpException and format the response', () => {
    const exceptionResponse = { message: 'Custom error message' };
    const status = 400;
    const exception = new HttpException(exceptionResponse, status);
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    const mockRequest = { url: '/test' };
    const host: ArgumentsHost = {
      switchToHttp: () => ({
        getResponse: () => mockResponse,
        getRequest: () => mockRequest,
      }),
    } as unknown as ArgumentsHost;
    filter.catch(exception, host);
    expect(mockResponse.status).toHaveBeenCalledWith(status);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: exceptionResponse['message'] || 'error',
      error: true,
      data: null,
    });
  });
  it('should handle HttpException without a message and return default error message', () => {
    const exceptionResponse = {};
    const status = 400;
    const exception = new HttpException(exceptionResponse, status);
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    const mockRequest = { url: '/test' };
    const host: ArgumentsHost = {
      switchToHttp: () => ({
        getResponse: () => mockResponse,
        getRequest: () => mockRequest,
      }),
    } as unknown as ArgumentsHost;
    filter.catch(exception, host);
    expect(mockResponse.status).toHaveBeenCalledWith(status);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'error',
      error: true,
      data: null,
    });
  });
  it('should handle non-HttpException and return generic error response', () => {
    const exception = new Error('Unexpected error');
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    const mockRequest = { url: '/test' };
    const host: ArgumentsHost = {
      switchToHttp: () => ({
        getResponse: () => mockResponse,
        getRequest: () => mockRequest,
      }),
    } as unknown as ArgumentsHost;
    filter.catch(exception, host);
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Internal server error',
      error: true,
      data: null,
    });
  });
});
