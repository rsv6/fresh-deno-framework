import { Handlers } from "$fresh/server.ts";

// Set Header of the route /about:
export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

// Set route /about:
export default function About() {
  return (
    <main>
      <h1>About</h1>
      <div>This is the about page.</div>;
    </main>
  );
}
