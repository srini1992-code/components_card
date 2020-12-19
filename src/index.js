import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div
      className="ui container comments"
      style={{ backgroundColor: "#20bf5555", borderRadius: "10px" }}
    >
      <h1 classname="text">Card1</h1>
      <ApprovalCard>
        <div>
          <h4>Warning!!!</h4>
          Are you sure want to do this???
        </div>
      </ApprovalCard>
      <h1 classname="text">Card2</h1>

      <ApprovalCard>
        <CommentDetail
          src="https://source.unsplash.com/random"
          author="jeniee"
          timeAgo="4:45pm"
          text="Well written blog!!congos!!!"
        />
      </ApprovalCard>
      <h1 classname="text">Card3</h1>
      <ApprovalCard>
        <CommentDetail
          src="https://source.unsplash.com/random/architecture"
          author="matt"
          timeAgo="4:45pm"
          text="Nice Blog post"
        />
      </ApprovalCard>
      <h1 classname="text">Card4</h1>
      <ApprovalCard>
        <CommentDetail
          src="https://source.unsplash.com/random/rivers"
          author="shreya"
          timeAgo="4:45pm"
          text="Nice Blog post u wrote very well"
        />
      </ApprovalCard>
      <h1 classname="text">Card5</h1>
      <ApprovalCard />
      <h1 classname="text">Card5</h1>
      <CommentDetail />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
