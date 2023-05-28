import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import CustomHeader from './../headers/CustomHeaders';
import StanderedMessageForm from './../customMessageForms/standeredMessageForm/StanderedMessageForm';
import Ai from "../customMessageForms/Ai";

const Chat = () => {
    const chatProps=useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        'testuser',
        "1234"
    )
  return <div style={{flexBasis:"100%"}} >
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow 
        {...chatProps}
        style={{height:"100vh",}}
        renderChatHeader={(chat)=><CustomHeader chat={chat}/>}
        renderMessageForm={(props)=>{
          if(chatProps.chat?.title.startsWith('AiChat_')){
            return <Ai props={props}  activeChat={chatProps.chat} />
          }
          return <StanderedMessageForm props={props} activeChat={chatProps.chat} />
        }}
    />
  </div>;
};

export default Chat;
