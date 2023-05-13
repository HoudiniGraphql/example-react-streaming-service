import { isPending, Link } from "$houdini";
import React from "react";

export default function ({ ShowList }) {
  return (
    <div className="flex flex-col gap-10">
      {ShowList.genres.edges.map(({ node: genre }, i) => (
        <div key={i} className="rounded-lg text-white pl-12">
          <h2 className="text-lg mb-4">
            {isPending(genre.name) ? (
              <div className="pulsate h-5 w-14" />
            ) : (
              genre.name
            )}
          </h2>
          <div className="flex flex-row gap-1">
            {genre.shows.edges.map(({ node: show }, i) => {
              const pending = isPending(show.name);

              return (
                <Link
                  href={pending ? "#" : `/shows/${show.id}`}
                  className={pending ? "pulsate" : ""}
                  style={{ width: 233, height: 130 }}
                  key={pending ? i : show.name}
                >
                  {pending ? (
                    <div className="pulsate" />
                  ) : (
                    <img src={show.billboard.source} />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
