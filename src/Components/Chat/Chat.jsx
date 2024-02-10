import React, { useState } from "react";
import ChatSideBar from "./ChatSideBar";
import ChatsLeft from "./ChatsLeft";

const Chat = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const toggleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <>
      <div className="flex justify-center align-center" >
        <section className="flex flex-col lg:flex-row w-[80vw] h-[80vh]"  >
          <ChatSideBar openSideBar={openSideBar} />
          <section className="w-full md:float-end flex flex-col ">
            <ChatsLeft toggleSideBar={toggleSideBar} openSideBar={openSideBar} />
          </section>
        </section>
      </div>
    </>
  );
};

export default Chat;