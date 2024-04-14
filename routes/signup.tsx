import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import SignUpForm from "../islands/SignUpForm.tsx";
import { getCookies, loverExists, fixBadLover, addLover } from "../lib.ts";

export const handler: Handlers = {
  POST: async (
    req: Request,
    ctx: FreshContext,
  ) => {
    const params = await req.formData();
    const { name, password, age, sex, description, hobbies, photo } = Object.fromEntries(params) as {
      name: string;
      password: string;
      age: string;
      sex: string;
      description: string;
      hobbies: string;
      photo: string;
    };
    
    if (await loverExists(name)) {
      return new Response("User already exists", {
        status: 400
      });
    }

    const lover = fixBadLover({
      _id: "",
      name,
      age,
      sex,
      description,
      hobbies,
      photo,
      comments: [],
    });

    await addLover(lover, password);

    const cookies = getCookies(req);
    const users = cookies.users ? JSON.parse(decodeURIComponent(cookies.users)) : {};
    users[name] = password;

    const headers = new Headers();
    headers.append(
      'Set-Cookie', 
      `users=${encodeURIComponent(JSON.stringify(users))}; HttpOnly; Path=/; SameSite=Strict`
    );
    headers.append('Location', '/confirmation');


    return new Response(null, {
      headers: headers,
      status: 303
    });
  },
};

const Page = () => {
  return <SignUpForm />;
};

export default Page;
