import { FunctionComponent, JSX } from "preact";
import { useState } from "preact/hooks";


const LoginForm: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogOut = () => {
    fetch('/logout', {
      method: 'GET',
      credentials: 'include',
    })
    .then(() => {
      window.location.href = '/';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div class="formBody">
      <form
        class="formBox"
        action="/login"
        method="POST"
      >
        <h3>Log In</h3>
        <input
          onInput={(e) => setName(e.currentTarget.value)}
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />
        <br />
        <input
          onInput={(e) => setPassword(e.currentTarget.value)}
          type="text"
          id="password"
          name="password"
          placeholder="Passowrd"
        />
        <br />
        <button
            type="submit"
            class="trippyBackgroundAnimated"
        >
          Send
        </button>
        
      </form>
      <br />
      <button class="trippyBackgroundAnimated bottomButton" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default LoginForm;
