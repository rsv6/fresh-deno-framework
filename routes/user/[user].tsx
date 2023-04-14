import { PageProps } from "$fresh/server.ts";

export default function User(props: PageProps) {
  const { user } = props.params;

  console.log(`User ${user}`);

  return <div>Seja bem vindo {user}</div>;
}
