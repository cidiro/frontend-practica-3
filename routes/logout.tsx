// logout.tsx
import { FreshContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: (
    req: Request,
    ctx: FreshContext,
  ) => {
    const headers = new Headers();
    headers.append(
      "Set-Cookie",
      `curr_user=; HttpOnly; Path=/; SameSite=Strict`,
    );
    headers.append("Location", "/");

    return new Response(null, {
      headers: headers,
      status: 303,
    });
  },
};
