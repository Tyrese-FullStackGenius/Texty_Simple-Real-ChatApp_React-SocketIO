import { useState, useEffect } from 'react';
import { socket } from '../utils/socket';
import Chat from './Chat';
import Modal from './Modal';

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [targetConnection, setTargetConnection] = useState("");

  
  useEffect(() => {
    const onConnect = ()=>{
      setIsConnected(true);
      console.log(targetConnection);
      console.log("socket id:", socket.id);
    }

    const onDisconnect = ()=>{
      setIsConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    
    return ()=>{
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    }

  }, [])
  

  return (
    <div className="min-h-[80%] min-w-[500px] bg-slate-100 rounded-md flex relative overflow-hidden">
      <Modal title={"Connection setup"} message={"setup connetion channel to chat."} setTargetConnection={setTargetConnection}/>
      <Chat targetConnection={targetConnection}/>
    </div>
  )
}

export default App
