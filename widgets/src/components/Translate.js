import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Italian",
    value: "it",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguege] = useState(options[0]);
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div>
      <div className="ui segment">
        <div className="ui form">
          <div className="field">
            <label>Enter text</label>
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
        </div>
        <Dropdown
          label="Select a language"
          selected={language}
          options={options}
          onSelectedChange={setLanguege}
        />
        <hr />
        <h4 className="ui header">Translated text:</h4>
        <Convert text={text} language={language} />
      </div>
    </div>
  );
};
export default Translate;
