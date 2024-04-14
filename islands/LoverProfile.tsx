import { FunctionComponent } from "preact";
import { Lover } from "../types.ts";

type Props = {
  lover: Lover;
};

const LoverProfile: FunctionComponent<Props> = ({ lover }) => {
  return (
    <div
      class="lover-profile"
      style={{
        backgroundImage: `url(${lover.photo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        color: "#fff", // Assuming a contrast for readability against typical backgrounds
      }}
    >
      <h2 class="lover-name">{lover.name}</h2>
      <p class="lover-age">Age: {lover.age}</p>
      <p class="lover-sex">Sex: {lover.sex}</p>
      <p class="lover-description">{lover.description}</p>
      <div class="lover-hobbies">
        <h3>Hobbies</h3>
        <ul>
          {lover.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}
        </ul>
      </div>
      <div class="lover-comments">
        <h3>Comments</h3>
        <ul>
          {lover.comments.map((comment, index) => <li key={index}>{comment}
          </li>)}
        </ul>
      </div>
    </div>
  );
};

export default LoverProfile;
