import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { fixBadLover, getLover } from "../../lib.ts";
import LoverProfile from "../../islands/LoverProfile.tsx";
import { Lover } from "../../types.ts";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Lover>) => {
    const { name } = ctx.params;
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
  },
};

const Page = (props: PageProps<Lover>) => {
  const lover = props.data;
  return (
    <LoverProfile lover={lover} />
  );
};

export default Page;
