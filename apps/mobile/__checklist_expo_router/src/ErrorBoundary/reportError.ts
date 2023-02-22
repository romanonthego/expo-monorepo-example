import * as Sentry from "sentry-expo";

export type CaptureParams = {
  /** custom component sentry tag, use if component did throw error (cell or ErrorBoundary) */
  component?: string;
  /** any extra info available */
  extra?: Record<string, any>;
  /** any extra tag available */
  tags?: Record<string, any>;
};

export type ReportError = (
  error: Error,
  errorInfo: React.ErrorInfo,
  captureParams?: CaptureParams
) => { eventId: string };

export const defaultReportError: ReportError = (
  error,
  { componentStack },
  { component, extra, tags } = { extra: {} }
) => {
  console.log(
    JSON.stringify({
      error,
      componentStack,
      component,
      extra,
      tags,
    })
  );

  return { eventId: Sentry.Native.captureException(error) };
};
