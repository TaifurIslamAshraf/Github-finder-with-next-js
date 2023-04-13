"use client";

import PuffLoader from "react-spinners/PuffLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Loader() {
  return (
    <PuffLoader
      color={"#38d6ac"}
      loading={true}
      size={60}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Loader;
