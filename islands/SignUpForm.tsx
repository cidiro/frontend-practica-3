import { FunctionComponent, JSX } from "preact";
import { useState } from "preact/hooks";


const SignUpForm: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [hobbies, setHobbies] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");

  return (
    <div class="formBody">
      <form
        class="formBox"
        action="/signup"
        method="POST"
      >
        <h3>Sign Up</h3>
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
          placeholder="Password"
        />
        <input
          onInput={(e) => setAge(e.currentTarget.value)}
          type="text"
          id="age"
          name="age"
          placeholder="Age"
        />
        <input
          onInput={(e) => setSex(e.currentTarget.value)}
          type="text"
          id="sex"
          name="sex"
          placeholder="Sex"
        />
        <input
          onInput={(e) => setDescription(e.currentTarget.value)}
          type="text"
          id="description"
          name="description"
          placeholder="Description"
        />
        <input
          onInput={(e) => setHobbies(e.currentTarget.value)}
          type="text"
          id="hobbies"
          name="hobbies"
          placeholder="Hobbies (separated by semicolons)"
        />
        <input
          onInput={(e) => setPhoto(e.currentTarget.value)}
          type="text"
          id="photo"
          name="photo"
          placeholder="Photo URL"
        />
        <br />
        <button
            type="submit"
            class="trippyBackgroundAnimated"
        >
          Send
        </button>
        
      </form>
    </div>
  );
};

export default SignUpForm;
