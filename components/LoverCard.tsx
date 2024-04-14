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
        <div class="loverName">{name}</div>
      </div>
    </a>
  );
};

export default LoverCard;
