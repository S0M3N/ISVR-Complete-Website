import React from "react";

export default function Topbar() {
  return (
    <div className="flex flex-col items-center justify-center py-2 bg-blue-400">
      <p className="lg:text-base text-sm">
        New Dehradun office opening soon{" "}
        <span className="text-green-900">(September 4th, 2023)</span> ...
      </p>
    </div>
  );
}
