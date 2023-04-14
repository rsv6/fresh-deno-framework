// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/api/joke.ts";
import * as $uuid from "./routes/api/random-uuid.ts";
import * as $products from "./routes/api/products.ts";

import * as $2 from "./routes/index.tsx";
import * as $$0 from "./islands/Counter.tsx";

import * as $about from "./routes/about/index.tsx";

import * as $users from "./routes/user/index.tsx";
import * as $user from "./routes/user/[user].tsx";

import * as $github from "./routes/github/[username].tsx";

const manifest = {
  routes: {
    "./routes/api/joke.ts": $1,
    "./routes/api/random-uuid.ts": $uuid,
    "./routes/api/products.ts": $products,

    "./routes/[name].tsx": $0,
    "./routes/index.tsx": $2,
    "./routes/about/index.tsx": $about,

    "./routes/user/index.tsx": $users,
    "./routes/user/[user].tsx": $user,

    "./routes/github/[username].tsx": $github,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
