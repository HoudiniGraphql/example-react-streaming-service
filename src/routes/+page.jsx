import { isPending } from "$houdini";

export default function ({ Session, ShowList }) {
  const { genres } = ShowList;

  return (
    <div className="flex flex-col gap-10">
      {genres.edges.map(({ node: genre }, i) => (
        <div key={i} className="rounded-lg text-white pl-12">
          <h2 className="text-lg mb-4">
            {isPending(genre.name) ? "loading..." : genre.name}
          </h2>
          <div className="flex flex-row gap-1">
            {genre.shows.edges.map(({ node: show }) => {
              const pending = isPending(show.name);

              return (
                <div
                  className={pending ? "pulsate" : ""}
                  style={{ width: 233, height: 130 }}
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
