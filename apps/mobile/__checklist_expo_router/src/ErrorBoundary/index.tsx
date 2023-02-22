import * as React from "react";
import { ErrorBoundaryFallback } from "./Fallback";
import { ReportError, defaultReportError, CaptureParams } from "./reportError";

export interface ErrorBoundaryProps {
  reportError?: ReportError;
  extraReportToSentry?: CaptureParams;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  reportingResult?: { eventId: string };
  retriesCount: number;
}

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
    retriesCount: 0,
    reportingResult: undefined,
  };

  static defaultProps: ErrorBoundaryProps = {
    // FallbackComponent: ErrorFallback,
    reportError: defaultReportError,
  };

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const { reportError, extraReportToSentry } = this.props;

    const reportingResult = reportError
      ? reportError(error, errorInfo, extraReportToSentry)
      : undefined;

    this.setState(({ retriesCount }) => ({
      reportingResult,
      retriesCount: retriesCount + 1,
    }));
  }

  dismissError = () => {
    this.setState({
      hasError: false,
      error: undefined,
      reportingResult: undefined,
    });
  };

  render() {
    const { children } = this.props;
    const { hasError, error, reportingResult, retriesCount } = this.state;

    if (hasError) {
      return (
        <ErrorBoundaryFallback
          error={error!}
          dismissError={this.dismissError}
          reportingResult={reportingResult}
          retriesCount={retriesCount}
        />
      );
    }

    return <>{children}</>;
  }
}
