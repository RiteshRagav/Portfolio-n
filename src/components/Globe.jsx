import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";

const places = [
  {
    name: "SRM Institute of Science and Technology",
    lat: 12.8231,
    lng: 80.0452,
    color: "blue"
  },
  {
    name: "Pon Vidyashram Higher Sec School",
    lat: 13.0827,
    lng: 80.2707,
    color: "green"
  },
  // Add more locations as needed
];

export default function GlobeSection() {
  const globeEl = useRef();

  useEffect(() => {
    // Optional: auto-rotate the globe
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.7;
    }
  }, []);

  return (
    <div className="w-[400px] h-[400px]">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        pointsData={places}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointAltitude={0.06}
        pointRadius={0.15}
        pointLabel="name"
        backgroundColor="rgba(0,0,0,0)"
      />
    </div>
  );
}