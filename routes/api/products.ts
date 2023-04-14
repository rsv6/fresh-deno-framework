import { HandlerContext } from "$fresh/server.ts";

const products = [
  {
    id: 1,
    name: "Laptop DELL",
    description: "Laptop DELL",
    price: 4520.55,
  },
  {
    id: 2,
    name: "Desktop Lenovo",
    description: "Desktop Lenovo",
    price: 5520.55,
  },
  {
    id: 3,
    name: "Laptop SAMSUNG",
    description: "Laptop SAMSUNG",
    price: 3920.55,
  },
  {
    id: 4,
    name: "Cell Phone SAMSUNG",
    description: "Cell Phone SAMSUNG",
    price: 3520.55,
  },
];

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  console.log("Params: ", _ctx.params);

  return Response.json(products, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
