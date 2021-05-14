import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "./firebase";
function SidebarChat({ id, name, addnewchat }) {
  const [seed, setseed] = useState("");
  const [messages, setMessages] = useState("");
  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);
  useEffect(() => {
    setseed(Math.floor(Math.random() * 5000));
  }, []);
  const createchat = () => {
    const roomname = prompt("please Enter Name for Chat room");
    if (name) {
      //do something in databse
      db.collection("rooms").add({
        name: roomname
      });
    }
  };
  return !addnewchat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarchat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarchat_info">
          <h2>{name}</h2>
          <p>{messages[0]?.messages}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createchat} className="sidebarchat">
      <h2>Add new Chat</h2>
    </div>
  );
}
export default SidebarChat;
