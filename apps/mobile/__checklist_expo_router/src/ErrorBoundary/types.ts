// import { BoxProps } from "@youtoken/ui.primitives";
// import { CustomError } from "@youtoken/ui.errors";

export interface ErrorFallbackProps {
  /** error object */
  error: Error;
  /** fn to dismiss error */
  dismissError: () => void;
  /** optional result from reporting to sentry */
  reportingResult?: { eventId: string };
  /** current retry count: starts with 1 */
  retriesCount: number;
}
