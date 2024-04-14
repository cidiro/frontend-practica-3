import { IS_BROWSER } from "$fresh/runtime.ts";
import { FunctionComponent } from "preact";

const HiButton: FunctionComponent<
  { type?: string; children?: any }
> = (
  { type, children },
) => {
  const audio = IS_BROWSER ? new Audio("./hihihi.mp3") : null;
  return (
    <button
      class="trippyBackgroundAnimated"
      type={type}
      onClick={(e) => {
        e.preventDefault();
        if (audio && audio.paused) {
          audio.play();
        } else if (audio) {
          audio.pause();
        }
      }}
    >
      {children}
    </button>
  );
};

export default HiButton;
