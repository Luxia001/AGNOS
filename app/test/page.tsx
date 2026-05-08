"use client";

import React from "react";

function TestPage() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p className="text-lg font-bold">Hello world</p>
      <p className="">env : {process.env.NEXT_PUBLIC_ENV_TEST}</p>
      <p className="text-md">Count: {count}</p>
      <button
        className="btn btn-soft btn-info"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default TestPage;
