import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./images/pic1.jpeg";
import profile2 from "./images/pic2.jpeg";
import profile3 from "./images/pic3.jpeg";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

const App = () => {
  const t1 = new Date(2023, 6, 28, 13, 25, 0, 6);
  const t1Date = [
    t1.getDay(),
    "/",
    t1.getMonth(),
    "/",
    t1.getFullYear(),
    " ",
    t1.getHours(),
    ":",
    t1.getMinutes(),
  ];
  const t2 = new Date(2023, 6, 28, 14, 58, 2, 5);
  const t2Date = [
    t2.getDay(),
    "/",
    t2.getMonth(),
    "/",
    t2.getFullYear(),
    " ",
    t2.getHours(),
    ":",
    t2.getMinutes(),
  ];
  const t3 = new Date(2023, 6, 28, 19, 14, 4, 8);
  const t3Date = [
    t3.getDay(),
    "/",
    t3.getMonth(),
    "/",
    t3.getFullYear(),
    " ",
    t3.getHours(),
    ":",
    t3.getMinutes(),
  ];
  const a = window.prompt("Ce zice Vlad");
  const b = window.prompt("Ce zice Theo");
  const c = window.prompt("Ce zice Radu");
  return (
    <div className="ui comments">
      <UserCard>
        <div>Salut mi l sugi cu branza</div>
      </UserCard>
      <UserCard>
        <SingleComment name="Vlad" date={t1Date} text={a} picture={profile1} />
      </UserCard>
      <UserCard>
        <SingleComment name="Theo" date={t2Date} text={b} picture={profile2} />
      </UserCard>
      <UserCard>
        <SingleComment name="Radu" date={t3Date} text={c} picture={profile3} />
      </UserCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
