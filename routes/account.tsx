// user.tsx
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { getCookies, getLover, fixBadLover } from "../lib.ts";
import UserProfile from "../islands/UserProfile.tsx";
import { Lover } from "../types.ts";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Lover>) => {
    const cookies = getCookies(req);
    const name = cookies.curr_user;

    if (name) {
      try {
        const lover = await getLover(name);
        if (!lover) {
          return new Response("Lover not found", { status: 404 });
        }
  
        return ctx.render(fixBadLover(lover));
      } catch (error) {
        console.error(error);
        return new Response("Error: Lover not found", { status: 500 });
      }
    } else {
      return ctx.render(undefined);
    }
  },
};

const Page = (props: PageProps<Lover | undefined>) => {
  const lover = props.data;
  return (
    <div>
      {lover ? (
        <UserProfile lover={lover} />
      ) : (
        <h3>No user is currently logged in.</h3>
      )}
    </div>
  );
};

export default Page;
