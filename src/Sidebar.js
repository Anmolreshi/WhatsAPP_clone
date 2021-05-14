import React, { useState, useEffect } from "react";
import SidebarChat from "./SidebarChat";
import { Avatar, IconButton } from "@material-ui/core";
import db from "./firebase";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";
function Sidebar() {
  const [rooms, setrooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setrooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar_headerright">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchcontainer">
          <SearchOutlined />
          <input placeholder="Search or Start new Chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addnewchat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}
export default Sidebar;
