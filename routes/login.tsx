import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import LoginForm from "../islands/LoginForm.tsx";
import { getCookies } from "../lib.ts";

export const handler: Handlers = {
  POST: async (
    req: Request,
    ctx: FreshContext,
  ) => {
    const params = await req.formData();
    const { name, password } = Object.fromEntries(params) as {
      name: string;
      password: string;
    };

    const cookies = getCookies(req);
    const users = cookies.users ? JSON.parse(decodeURIComponent(cookies.users)) : {};

    if (users[name] === password) {
      const headers = new Headers();
      headers.append('Set-Cookie', `curr_user=${encodeURIComponent(name)}; HttpOnly; Path=/; SameSite=Strict`);
      headers.append('Location', '/');

      return new Response(null, {
        headers: headers,
        status: 303,
      });
    } else {
      return new Response("Invalid credentials", {
        status: 401
      });
    }
  },
};

const Page = () => {
  return <LoginForm />;
};

export default Page;
