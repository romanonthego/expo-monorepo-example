import { useState } from "react";
import { CheckListScreen, ErrorBoundary } from "../../src";

const array = new Uint32Array(1);

function ThrowingComponent() {
  const [id, setId] = useState(crypto.getRandomValues(array));

  throw new Error(`Testing error with id='${id}'`);

  return null;
}

export default function SentryScreen() {
  return (
    <CheckListScreen checkId="SENTRY" useScroll>
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>
    </CheckListScreen>
  );
}
