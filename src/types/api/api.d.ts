import { ERROR_TYPE } from "../generic";

export interface ApiErrorResponseType {
  ok: false;
  error: ERROR_TYPE;
}
