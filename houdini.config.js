/// <references types="houdini-react">

/** @type {import('houdini').ConfigFile} */
const config = {
  schemaPath: "./src/api/schema.graphql",

  scalars: {
    Cursor: {
      type: "string",
    },
  },

  plugins: {
    "houdini-react": {},
  },
};

export default config;
