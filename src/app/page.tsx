"use client";
export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <button
        onClick={() => {
          throw new Error("From Main");
        }}
      >
        Throw error
      </button>
    </>
  );
}
