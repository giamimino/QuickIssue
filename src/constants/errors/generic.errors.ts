const GENERIC_ERRORS = {
  GENERIC_ERROR: {
    title: "Unexpected Error",
    description: "Something went wrong. Please try again later.",
  },

  NETWORK_ERROR: {
    title: "Connection Error",
    description:
      "Couldn't connect to the server. Check your internet connection and try again.",
  },

  SERVER_ERROR: {
    title: "Server Error",
    description: "The server encountered an error. Please try again later.",
  },

  NOT_FOUND: {
    title: "Not Found",
    description: "The requested resource could not be found.",
  },

  FORBIDDEN: {
    title: "Access Denied",
    description: "You don't have permission to perform this action.",
  },

  UNAUTHORIZED: {
    title: "Authentication Required",
    description: "Please sign in and try again.",
  },

  VALIDATION_ERROR: {
    title: "Invalid Input",
    description: "Please review the highlighted fields and try again.",
  },

  CONFLICT: {
    title: "Conflict",
    description: "The resource has changed or already exists.",
  },

  RATE_LIMITED: {
    title: "Too Many Requests",
    description:
      "You're sending requests too quickly. Please wait a moment and try again.",
  },

  TIMEOUT: {
    title: "Request Timed Out",
    description: "The request took too long. Please try again.",
  },

  MAINTENANCE: {
    title: "Service Unavailable",
    description:
      "The service is temporarily unavailable. Please try again later.",
  },
} as const;

export default GENERIC_ERRORS;
