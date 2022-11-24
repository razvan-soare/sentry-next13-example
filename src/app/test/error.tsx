"use client";
import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const reportSentry = async (error: Error) => {
    console.log("🚀🚀🚀 ~ reportSentry ~ error", error);
    await Sentry.captureException(error);
  };
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("TEST LEVEL ERROR", error);
    reportSentry(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong in test!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
