import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// When showing a component, you do not use curly braces
// Instead you use <Component />

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4> Warning! </h4>
          <p> Are you sure you want to do this? </p>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          timeAgo="Today at 4:36PM"
          content={faker.hacker.phrase()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          timeAgo="Today at 4:56PM"
          content={faker.hacker.phrase()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          timeAgo="Yesterday at 6:36AM"
          content={faker.hacker.phrase()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          timeAgo="Yesterday at 6:36AM"
          content={faker.hacker.phrase()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
