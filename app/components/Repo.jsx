import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa";

const fetchRepo = async (name) => {
  const res = await fetch(
    `https://api.github.com/repos/taifurislamashraf/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const repo = await res.json();
  return repo;
};

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);

  return (
    <>
      <h2 className="text-2xl font-semibold tracking-[1px] py-1">
        {repo.name}
      </h2>
      <p className="mb-5">{repo.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
