import React from "react";
import { certs } from "../data/certificates";
import { useParams } from "react-router-dom";

export default function Cert() {
  const { id } = useParams();
  const cert = certs.find((item) => item.id === id);

  if (!cert) {
    return <div>Certificate not found</div>;
  }

  return (
    <div className="min-h-[80vh] container mx-auto flex items-center justify-center">
      <div className="flex flex-col justify-center text-justify items-center mt-4">
        <h1 className="my-5 text-2xl font-extrabold text-center">
          Certificate is verified by ISVRX
        </h1>
        <h1 className="lg:text-3xl md:text-2xl text-center font-bold mb-6">
          This is certified to
        </h1>
        <h2 className="text-xl text-center font-semibold mb-8">{cert.name}</h2>
        <p className="text-center">
          for the role of <b className="font-extrabold text-lg">{cert.field}</b>{" "}
          at IndoplanetX Space Vault and Research Pvt. Ltd., and awarded{" "}
          <b className="text-xl">{cert.grade}</b> Grades,
        </p>
        <p className="text-center">
          From: <b>{cert.from}</b> to <b>{cert.to}</b>.
        </p>
        <p className="text-center">
          We wish {cert.attribute1} all the best for {cert.attribute2} future
          endeavors.{" "}
        </p>
      </div>
    </div>
  );
}
