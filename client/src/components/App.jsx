import { useState, useEffect } from 'react';
import { socket } from '../utils/socket';
import Chat from './Chat';
import Modal from './Modal';

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [targetConnection, setTargetConnection] = useState("");
  const [connectionId, setConnectionId] = useState("");

  console.log(connectionId);
  
  useEffect(() => {
    const onConnect = ()=>{
      setIsConnected(true);
      setConnectionId(socket.id);
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

  }, []);
  

  return (
    <div className="h-[80%] w-[500px] bg-slate-100 rounded-md flex relative overflow-hidden">
      <Chat targetConnection={targetConnection}/>
      <Modal title={"Connection setup"} message={"setup connection channel to start text."} connectionId={connectionId} setTargetConnection={setTargetConnection}/>
    </div>
  )
}

export default App
