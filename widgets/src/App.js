import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front ent javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorie JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setshowDropdown] = useState(true);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <button onClick={() => setshowDropdown(!showDropdown)}>
          Show Dropdown
        </button>
        {showDropdown ? (
          <Dropdown
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
            label="Select a color"
          />
        ) : null}
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
