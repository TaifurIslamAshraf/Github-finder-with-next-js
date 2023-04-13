import Loaders from "./components/Loaders";

const Loading = () => {
  return (
    <div className="loder">
      <Loaders />
      <p className="text-sm">
        note: Deliberately gave Api call delay to show loading animation.
      </p>
    </div>
  );
};

export default Loading;
