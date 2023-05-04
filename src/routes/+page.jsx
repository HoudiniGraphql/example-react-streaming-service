import { isPending } from "$houdini";
import React from "react";

export default function ({ ShowList }) {
  const { genres } = ShowList;

  const [state, setState] = React.useState(0);

  return (
    <div className="flex flex-col gap-10">
      {genres.edges.map(({ node: genre }, i) => (
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
                <div
                  className={pending ? "pulsate" : ""}
                  style={{ width: 233, height: 130 }}
                  key={pending ? i : show.name}
                >
                  {pending ? (
                    <div className="pulsate" />
                  ) : (
                    <img src={show.billboard.source} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
