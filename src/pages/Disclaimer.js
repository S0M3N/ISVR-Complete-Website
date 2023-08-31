import React from "react";
import DisclaimerLink from "../components/DisclaimerLink";
import DisclaimerTop from "../components/DisclaimerTop";

export default function Disclaimer() {
  return (
    <div className="container mx-auto flex flex-col justify-start mt-4 min-h-[80vh]">
      <DisclaimerTop />
      <DisclaimerLink />
    </div>
  );
}
