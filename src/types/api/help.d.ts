import { ERROR_TYPE } from "../generic";
import { HelpCenterArticleType, HelpCenterCategoryType } from "../help-center";
import { ApiErrorResponseType } from "./api";

declare namespace HelpApi {
  namespace Category {
    type Response =
      | ApiErrorResponseType
      | {
          ok: true;
          categories: HelpCenterCategoryType[];
        };
  }

  namespace Redirect {
    interface Request {
      category: string;
    }

    type Response =
      | ApiErrorResponseType
      | {
          ok: true;
          redirectPath: string;
        };
  }

  namespace Article {
    type Response =
      | ApiErrorResponseType
      | { ok: true; articles: HelpCenterArticleType[] };

    type NoContentResponse =
      | ApiErrorResponseType
      | {
          ok: true;
          articles: Pick<
            HelpCenterArticleType,
            "categoryId" | "title" | "slug" | "id"
          >[];
        };
  }
}
