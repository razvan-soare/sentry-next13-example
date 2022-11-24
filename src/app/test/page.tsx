"use client";
export default function Page() {
  return (
    <>
      <h1>Hello, Test page</h1>
      <button
        onClick={() => {
          throw new Error("From test");
        }}
      >
        Throw error
      </button>
    </>
  );
}
