import Link from "next/link";
import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa";

const fetchRepos = async () => {
  const res = await fetch(
    "https://api.github.com/users/taifurislamashraf/repos",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const repos = await res.json();
  return repos;
};

const Repos = async () => {
  const repos = await fetchRepos();
  return (
    <div className="md:px-10 sm:px-5 px-3">
      <h2 className="text-center mb-5 font-bold text-xl">Repositories</h2>
      <ul className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 text-slate-800">
        {repos?.map((repo) => (
          <li
            key={repo.id}
            className="bg-green-400 mb-5 p-3 shadow-md rounded-md hover:bg-neutral-200 transition-all min-h-fit"
          >
            <Link
              href={`/code/repos/${repo.name}`}
              className="flex flex-col justify-between space-y-5"
            >
              <div>
                <h3 className="text-lg font-semibold">Name: {repo.name}</h3>
                <p>
                  Description:{" "}
                  {repo.description
                    ? repo.description
                    : "This repositories has no description"}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <FaStar className="mr-2" /> {repo.stargazers_count}
                </span>
                <span className="flex">
                  <FaCodeBranch className="mr-2" /> {repo.forks_count}
                </span>
                <span className="flex">
                  <FaEye className="mr-2" /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repos;
