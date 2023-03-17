import { useEffect, useRef, useState } from "react"
import { socket } from "../utils/socket";
import Message from "./Message";

export default function Chat({targetConnection}) {
  // const [role, setRole] = useState("sender");
  const [messages, setMessages] = useState([]);

  const messageRef = useRef();
  console.log(messages)

  const displayMessage = ()=>{
    if(messageRef.current.value){
      socket.emit("send", messageRef.current.value, targetConnection);
      setMessages([...messages, {message: messageRef.current.value, author:"sender"}]);
      messageRef.current.value = "";
    }
  }

  useEffect(()=>{
    const receiveMessage = (message)=>{
      setMessages([...messages, {message, author: "receiver"}])
    }

    socket.on("receive", receiveMessage);

    return ()=>{
      socket.off("receive", receiveMessage);
    }
  },)


  return (
    <section className="relative h-full w-full flex items-center justify-center flex-col bg-white">
        <header className="relative w-full flex items-center justify-center p-4 border-2 border-b-blue-100 ">
            <h1 className="font-bold text-xl">To: <span className="text-blue-600">"{targetConnection}"</span></h1>
        </header>

        <main className="relative h-[80%] max-h-[80%] w-full flex flex-col gap-3 overflow-y-scroll">
          {messages.map((msg, i) => <Message key={i} message={msg.message} role={msg.author}/>)}
        </main>

        <footer className="relative w-full flex items-center justify-center p-4 gap-4 border-2 border-t-blue-100">
            <input onKeyDown={e=> e.key === "Enter" ? displayMessage(): null} ref={messageRef} type="text" placeholder="Your Message..." className="w-[70%] h-12 p-2 rounded-md border-2 border-gray-200 outline-blue-500 ring-blue-500"/>
            <button onClick={displayMessage} className="h-12  px-4 rounded-md text-sm bg-blue-600 text-white">Send</button>
        </footer>
    </section>
  )
}
