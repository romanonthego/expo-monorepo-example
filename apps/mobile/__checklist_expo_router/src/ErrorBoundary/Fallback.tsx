import { Text } from "../Text";
import { JSONTree } from "../JSONTree";

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

export function ErrorBoundaryFallback(props: ErrorFallbackProps) {
  return (
    <>
      <Text>error fallback</Text>
      <JSONTree
        data={
          {
            error: props.error,
            reportingResult: props.reportingResult,
            retriesCount: props.retriesCount,
          } as unknown as {}
        }
      />
    </>
  );
}
