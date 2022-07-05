import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import "./style/App.css";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Darius"
          timeAgo="Today at 4"
          content="Hi"
          avatar={faker.image.animals()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Cosmina"
          timeAgo="Today at 5"
          content="Bye"
          avatar={faker.image.animals()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Nelu"
          timeAgo="Today at 6"
          content="Pa"
          avatar={faker.image.animals()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Serghio"
          timeAgo="Today at 7"
          content="Salut"
          avatar={faker.image.animals()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
