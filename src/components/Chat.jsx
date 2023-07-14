import React, { useContext } from "react";
import Cam from "../images/video-call.png";
import Add from "../images/new-user.png";
import More from "../images/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chat-info">
      {/* {data.user?.photoURL} */}
        <span><img style={{height:"50px",width:"50px",borderRadius:"50%",objectFit:"cover",outline:"none"}} src={data.user?.photoURL} alt=""/></span>
        <span style={{paddingLeft:"10px"}}>{data.user?.displayName}</span>
        <div className="chat-icons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
