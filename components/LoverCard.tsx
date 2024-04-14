import { FunctionComponent } from "preact";

const LoverCard: FunctionComponent<{ name: string; image: string }> = (
  { name, image },
) => {
  return (
    <a href={"/lover/" + name}>
      <div
        class="lover"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      </div>
      <h3 class="loverName">{name}</h3>
    </a>
  );
};

export default LoverCard;
