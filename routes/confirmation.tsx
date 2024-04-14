import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
    GET: (req: Request, ctx: FreshContext<unknown, { confirmation: boolean }>) => {
      return ctx.render({ confirmation: true });
    },
  };
  
  const Page = (props: PageProps<{ confirmation: boolean }>) => {
    const confirmation = props.data ? props.data.confirmation : false;
    return (
      <div>
        {confirmation && (
          <h1>Sign Up Successful!</h1>
        )}
        {!confirmation && (
          <h1>Something went wrong, please try again.</h1>
        )}
      </div>
    );
  };
  
  export default Page;
  