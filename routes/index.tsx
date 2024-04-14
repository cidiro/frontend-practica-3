import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import LoversHome from "../islands/LoversHome.tsx";
import { BadLover, Lover } from "../types.ts";
import { getLovers, fixBadLover } from "../lib.ts";

export const handler: Handlers = {
  GET: async (
    _req: Request,
    ctx: FreshContext<unknown, { pageData: Lover[] }>,
  ) => {
    try {
      const pageData = await getLovers();
      const correctedData = pageData.map(lover => fixBadLover(lover as BadLover));

      return ctx.render({ pageData: correctedData });
    } catch(e) {
      console.error(e);
      return new Response("Error", { status: 500 });
    }
  },
};

const Home = (props: PageProps<{ pageData: Lover[] }>) => {
  return <LoversHome lovers={props.data.pageData} />;
};

export default Home;
