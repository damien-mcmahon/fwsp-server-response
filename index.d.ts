// Type definitions for FWSP Server Response
// Project: FWSP Server Response
// Definitions by: Damien McMahon https://macoto.co.uk

import { ServerResponse as NodeServerResponse } from 'http';

export enum HttpCode {
  HTTP_OK = 200,
  HTTP_CREATED = 201,
  HTTP_MOVED_PERMANENTLY = 301,
  HTTP_BAD_REQUEST = 400,
  HTTP_UNAUTHORIZED = 401,
  HTTP_PAYMENT_REQUIRED = 402,
  HTTP_NOT_FOUND = 404,
  HTTP_METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  HTTP_CONFLICT = 409,
  HTTP_TOO_LARGE = 413,
  HTTP_TOO_MANY_REQUEST = 429,
  HTTP_SERVER_ERROR = 500,
  HTTP_METHOD_NOT_IMPLEMENTED = 501,
  HTTP_CONNECTION_REFUSED = 502,
  HTTP_SERVICE_UNAVAILABLE = 503,
}

export interface Response {
  statusCode: HttpCode;
  statusMessage: string;
  statusDescription: string;
  result: any;
}

declare class ServerResponse {

  constructor();

  setTestMode(): void;
  enableCORS(state: boolean): void;
  createResponseObject(httpCode: HttpCode, resultPayload: any): Response; 
  sendResponse(code: HttpCode, res: NodeServerResponse, data: any): NodeServerResponse | void;

  sendOk(res: NodeServerResponse, data?: any): NodeServerResponse | void;
  sendCreated(res: NodeServerResponse, data?: any): NodeServerResponse | void;
  sendMovedPermanently(res: NodeServerResponse, data?: any): NodeServerResponse | void;
  sendInvalidRequest(res: NodeServerResponse, data?: any): NodeServerResponse | void;
  sendInvalidUserCredentials(res: NodeServerResponse, data?: any): NodeServerResponse | void;
  sendPaymentRequired(res: NodeServerResponse, data?: any): NodeServerResponse | void;
  sendNotFound(res: NodeServerResponse, data?: any): NodeServerResponse | void;
  sendInvalidSession(res: NodeServerResponse, data?: any): NodeServerResponse | void;
  sendRequestFailed(res: NodeServerResponse, data?: any): NodeServerResponse | void;
  sendDataConflict(res: NodeServerResponse, data?: any): NodeServerResponse | void;
  sendTooLarge(res: NodeServerResponse, data?: any): NodeServerResponse | void;
  sendTooManyRequests(res: NodeServerResponse, data?: any): NodeServerResponse | void;
  sendServerError(res: NodeServerResponse, data?: any): NodeServerResponse | void;
  sendInternalError(res: NodeServerResponse, data?: any): NodeServerResponse | void;
  sendMethodNotImplemented(res: NodeServerResponse, data?: any): NodeServerResponse | void;
  sendUnavailableError(res: NodeServerResponse, data?: any): NodeServerResponse | void;
  sendUnavailableError(res: NodeServerResponse, data?: any): NodeServerResponse | void;
}

export default ServerResponse;
