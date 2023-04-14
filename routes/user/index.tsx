import { Head } from "$fresh/runtime.ts";

export default function Users() {
  return (
    <>
      <Head>
        <title>Fresh App - Users</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. <strong>Page User Index</strong>{" "}
          Try updating this message in the ./routes/user/users.tsx file, and
          refresh.
        </p>
      </div>
    </>
  );
}
