import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";

type Props = {
  filterName: Signal<string>;
  filterAge: Signal<string>;
  filterSex: Signal<string>;
  filterHobby: Signal<string>;
};

const Filters: FunctionComponent<Props> = ({ filterName, filterAge, filterSex, filterHobby }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
      }}
    >
      <h3>Filter:</h3>
      <input
        type="text"
        id="filterName"
        name="filterName"
        placeholder="Name"
        style={{ padding: "8px", fontSize: "16px", width: "150px" }}
        onInput={(e) => filterName.value = e.currentTarget.value}
      />
      <input
        type="text"
        id="filterAge"
        name="filterAge"
        placeholder="Age"
        style={{ padding: "8px", fontSize: "16px", width: "150px" }}
        onInput={(e) => filterAge.value = e.currentTarget.value}
      />
      <input
        type="text"
        id="filterSex"
        name="filterSex"
        placeholder="Sex"
        style={{ padding: "8px", fontSize: "16px", width: "150px" }}
        onInput={(e) => filterSex.value = e.currentTarget.value}
      />
      <input
        type="text"
        id="filterHobby"
        name="filterHobby"
        placeholder="Hobby"
        style={{ padding: "8px", fontSize: "16px", width: "150px" }}
        onInput={(e) => filterHobby.value = e.currentTarget.value}
      />
    </div>
  );
};

export default Filters;
