import { PageProps } from "$fresh/server.ts";
import CustomHeader from "../islands/CustomHeader.tsx";

const Layout = (props: PageProps) => {
  const Component = props.Component;
  return (
    <div class="columnBody">
      <CustomHeader
        links={[
          { href: "/", text: "Home" },
          { href: "/login", text: "Log In" },
          { href: "/signup", text: "Sign Up" },
          { href: "/user", text: "Account" },
        ]}
      />
      <Component />
    </div>
  );
};

export default Layout;  
