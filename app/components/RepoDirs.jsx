import Link from "next/link";

const fetchRepoContents = async (name) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(
    `https://api.github.com/repos/taifurislamashraf/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const contents = await res.json();
  return contents;
};

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir");

  return (
    <>
      <h3 className="text-xl font-semibold my-4">Directories</h3>
      <ul className="list-disc ml-10 text-blue-600 ">
        {dirs.map((dir) => (
          <li key={dir.path} className="underline">
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
