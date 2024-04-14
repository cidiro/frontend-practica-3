import { Fragment } from "preact/jsx-runtime";
import { getLovers } from "../lib.ts";
import LoverCard from "../components/LoverCard.tsx";
import { Lover } from "../types.ts";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Filters from "../components/Filters.tsx";
import { useSignal } from "@preact/signals";
import { FunctionComponent } from "preact";

type Props = {
  lovers: Lover[];
};

// export const handler: Handlers = {
//   GET: async (
//     _req: Request,
//     ctx: FreshContext<unknown, { pageData: Lover[] }>,
//   ) => {
//     try {
//       const pageData = await getLovers();
//       return ctx.render({ pageData });
//     } catch(e) {
//       console.error(e);
//       return new Response("Error", { status: 500 });
//     }
//   },
// };

const LoversHome: FunctionComponent<Props> = ({ lovers }) => {
  const filterName = useSignal<string>("");
  const filterAge = useSignal<string>("");
  const filterSex = useSignal<string>("");
  const filterHobby = useSignal<string>("");

  const filteredLovers = lovers.filter(lover => 
    (lover.name.includes(filterName.value) || filterName.value === "") &&
    (lover.age.toString().includes(filterAge.value) || filterAge.value === "") &&
    (lover.sex.includes(filterSex.value) || filterSex.value === "") &&
    (lover.hobbies && lover.hobbies.some(hobby => hobby.includes(filterHobby.value)))
  );
  
  const partLength = filteredLovers.length / 3;
  const firstPart = filteredLovers.slice(0, partLength);
  const secondPart = filteredLovers.slice(partLength, partLength * 2);
  const thirdPart = filteredLovers.slice(partLength * 2);

  return (
    <Fragment>
      <div class={`titleSection lovers`}>
          <h1 class="modernist">Lovers</h1>
      </div>
      <Filters
        filterName={filterName}
        filterAge={filterAge}
        filterSex={filterSex}
        filterHobby={filterHobby}
      />
      <div class="columns">
        <div class="column column-reverse">
          {secondPart.map((lover) => (
            <LoverCard
              name={(lover as Lover).name}
              image={(lover as Lover).photo}
              key={lover._id}
            />
          ))}
        </div>
        <div class="column">
          {firstPart.map((lover) => (
            <LoverCard
              name={(lover as Lover).name}
              image={(lover as Lover).photo}
              key={lover._id}
            />
          ))}
        </div>
        <div class="column column-reverse">
          {thirdPart.map((lover) => (
            <LoverCard
              name={(lover as Lover).name}
              image={(lover as Lover).photo}
              key={lover._id}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default LoversHome;
