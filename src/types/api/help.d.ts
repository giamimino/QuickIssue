import { ERROR_TYPE } from "../generic";
import { HelpCenterCategoryType } from "../help-center";

declare namespace HelpApi {
  namespace Category {
    type Response =
      | {
          ok: false;
          error: ERROR_TYPE;
        }
      | {
          ok: true;
          categories: HelpCenterCategoryType[];
        };
  }
}
