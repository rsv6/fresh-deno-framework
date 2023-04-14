import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const uuid = crypto.randomUUID();

    // const resp = await ctx.render();
    // resp.headers.set("Conten-Type", "Application/json");
    console.log(ctx);
    // console.log(req);

    return Response.json({ token: uuid });
    // , {
    //   headers: { "Conten-Type": "Application/json" },
    // });

    // return new Response(JSON.stringify(uuid), {
    //   headers: { "Conten-Type": "Application/json" },
    // });
  },
};
