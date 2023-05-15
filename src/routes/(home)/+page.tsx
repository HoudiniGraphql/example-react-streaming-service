import { PendingValue, Link } from "$houdini";
import { PageProps } from "./$types";

export default function ({ ShowList }: PageProps) {
  return (
    <div className="flex flex-col gap-10">
      {ShowList.genres.edges.map(({ node: genre }, i) => (
        <div key={i} className="rounded-lg text-white pl-12">
          <h2 className="text-lg mb-4">
            {genre.name === PendingValue ? (
              <div className="pulsate h-5 w-14" />
            ) : (
              genre.name
            )}
          </h2>
          <div className="flex flex-row gap-1">
            {genre.shows.edges.map(({ node: show }, i) => {
              if (show.name === PendingValue) {
                return (
                  <Link
                    href="#"
                    className="pulsate"
                    style={{ width: 233, height: 130 }}
                    key={i}
                  >
                    <div className="pulsate" />
                  </Link>
                );
              }

              return (
                <Link
                  href={`/shows/${show.id}`}
                  className={""}
                  style={{ width: 233, height: 130 }}
                  key={show.name}
                >
                  <img src={show.billboard.source} />
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
