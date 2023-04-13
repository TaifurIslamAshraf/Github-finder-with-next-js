"use client";

import PulseLoader from "react-spinners/PulseLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function DirLoader() {
  return (
    <div className="mt-5">
      <PulseLoader
        color={"#38d6ac"}
        loading={true}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p>Suspense loaders & delay 3s</p>
    </div>
  );
}

export default DirLoader;
