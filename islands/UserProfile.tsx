import { FunctionComponent } from "preact";
import { Lover } from "../types.ts";

type Props = {
  lover: Lover;
};

const UserProfile: FunctionComponent<Props> = ({ lover }) => {
  return (
    <div style={{ display: 'flex', marginTop: '80px' }}>
      <div
        class="lover-profile"
        style={{
          backgroundImage: `url(${lover.photo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px",
          color: "#fff",
          minWidth: "300px",
        }}
      >
      </div>
      <div style={{ marginLeft: "20px" }}>
        <h2 class="lover-name">{lover.name}</h2>
        <p class="lover-age"><strong>Age</strong>: {lover.age}</p>
        <p class="lover-sex"><strong>Sex</strong>: {lover.sex}</p>
        <p class="lover-description"><strong>Description</strong>: {lover.description}</p>
        <div class="lover-hobbies">
          <h3><strong>Hobbies</strong></h3>
          <ul>
            {lover.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}
          </ul>
        </div>
        <div class="lover-comments">
          <h3><strong>Comments</strong></h3>
          <ul>
            {lover.comments.map((comment, index) => (
              <li key={index}>
                <ul>
                  <li>User: {comment.user}</li>
                  <li>Message: {comment.message}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
