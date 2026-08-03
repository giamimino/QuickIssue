import { Session } from "next-auth";
import { ApiErrorResponseType } from "./api";

declare namespace MeApi {
  namespace Me {
    type Response =
      | ApiErrorResponseType
      | {
          ok: true;
          payload: Session | null;
        };
  }
}
