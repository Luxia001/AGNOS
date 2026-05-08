"use client";

import React from "react";

function TestPage() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p className="text-lg font-bold">Hello world</p>
      <p className="text-md">Count: {count}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default TestPage;
