import React from "react";

export default function SpaceTour() {
  return (
    <div className="container mx-auto flex lg:flex-row flex-col text-justify mb-4">
      <div className="lg:w-[70%] p-3 w-full">
        <h2 className="text-2xl mb-2 font-semibold">
          Space <span className="text-green-500">Tourism</span>
        </h2>
        <p className="text-justify">
          IndoPlanetX Space Vault and Research (ISVR) is a pioneering
          organization deeply engaged in space exploration and research. ISVR's
          primary mission is to establish a space vault for preserving valuable
          knowledge and resources while conducting groundbreaking cosmic
          research.
          <br /> Additionally, ISVR is actively working towards offering
          affordable and unique space tourism experiences, enabling a wider
          audience to witness breathtaking Earth views and experience moments of
          weightlessness. With competitive pricing and a commitment to reducing
          wait times between ticket purchase and launch, ISVR stands out in the
          space tourism sector. Their multifaceted approach underscores their
          significant contributions to advancing human understanding of space.
        </p>
      </div>
      <div className="lg:w-[30%] p-3 w-full flex items-center justify-center">
        <div className="min-w-[90%] min-h-[80%] border p-4 flex flex-col rounded-lg">
          <ul>
            <li>
              <b>1. Affordability:</b> Affordable space travel option.
            </li>
            <li>
              <b>2. Competitive Pricing:</b> 9 times cheaper than competitors.
            </li>
            <li>
              <b>3. Breathtaking Views:</b> Spectacular Earth views.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
