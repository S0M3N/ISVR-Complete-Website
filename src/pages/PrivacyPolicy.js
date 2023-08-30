import React from "react";
import PrivacyTop from "../components/PrivacyTop";
import PrivacyList from "../components/PrivacyList";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto flex flex-col justify-start mt-4 min-h-[80vh]">
      <PrivacyTop />
      <PrivacyList />
    </div>
  );
}
