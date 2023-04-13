import DirLoader from "@/app/components/DirLoader";
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";

const SingleRepo = ({ params: { name } }) => {
  return (
    <>
      <div className="bg-green-100 p-3 rounded-md">
        <Link
          href="/code/repos"
          className="bg-neutral-200 px-1 rounded-sm hover:bg-neutral-300 transition"
        >
          Back To Repositories
        </Link>
        <Repo name={name} />
      </div>
      <Suspense fallback={<DirLoader />}>
        <RepoDirs name={name} />
      </Suspense>
    </>
  );
};

export default SingleRepo;
