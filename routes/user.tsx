// user.tsx
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "../lib.ts";

interface Props {
  username?: string;
  password?: string;
}

export const handler: Handlers<Props> = {
  GET: async (req: Request, ctx: FreshContext<unknown, Props>) => {
    const cookies = getCookies(req);
    const users = cookies.users ? JSON.parse(decodeURIComponent(cookies.users)) : {};
    const username = cookies.curr_user;

    if (username && username !== "") {
      return ctx.render({ username, password: users[username]});
    } else {
      return ctx.render({});
    }
  },
};

const Page = (props: PageProps<Props>) => {
  const { username, password } = props.data || {};

  return (
    <div>
      {username ? (
        <>
          <h3>Welcome, {username}!</h3>
          <h3>Your password is: {password}</h3>
        </>
      ) : (
        <h3>No user is currently logged in.</h3>
      )}
    </div>
  );
};

export default Page;
