import { Link } from "$houdini";

import { PageProps } from "./$types";

export default function ({ Session, ShowInfo }: PageProps) {
  return (
    <main className="flex-col relative">
      <nav
        className="flex flex-row h-12 justify-between items-center pr-10 py-10 sticky top-0 z-10"
        style={{
          backgroundImage:
            "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)",
        }}
      >
        <Link
          href="/"
          style={{ color: "white" }}
          className="ml-10 cursor-pointer"
        >
          Back
        </Link>
        <img
          src={Session.viewer?.profile?.source}
          height={50}
          width={50}
          className="rounded shadow-lg"
        />
      </nav>

      <aside
        className="billboard text-white absolute top-0 z-0"
        style={{
          backgroundImage: `url(${ShowInfo.show?.billboard.source})`,
        }}
      >
        <div className="absolute bottom-28 z-20 text-white pl-12 pb-10">
          <h1 className="text-2xl mb-4 text">{ShowInfo.show?.name} </h1>
          <span style={{ color: "#46d369" }} className="text-lg">
            98% match
          </span>
          <h2 className="text-l max-w-lg text mb-4">
            {ShowInfo.show?.description}
          </h2>
        </div>
        <div className="billboard-shade z-0" />
        <div className="billboard-bottom-vignette" />
      </aside>
    </main>
  );
}
