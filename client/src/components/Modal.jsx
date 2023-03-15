import { useRef, useState } from "react";

export default function Modal({title, message, setTargetConnection}) {
    const [modalStatus, setModalStatus] = useState(true);

    const connectionRef = useRef();
    
    const targetConnection = ()=>{
        setTargetConnection(connectionRef.current.value);
        setModalStatus(false)
    }

  return (
    <div className={modalStatus ? `h-full w-full absolute flex items-center justify-center bg-white bg-opacity-30 backdrop-blur-md transition-all` : "hidden"}>
        <div className="h-62 w-[382px] p-8 flex items-center flex-col bg-white rounded-md gap-2 transition-all">
            <h1 className="font-bold text-xl text-blue-600">{title}</h1>
            <p className="text-sm text-gray-600">{message}</p>
            <div className="relative w-full flex items-center">
                <input ref={connectionRef} type="text" placeholder="Connection id" className="w-full h-12 p-2 rounded-md border-2 border-gray-200 outline-blue-500 ring-blue-500"/>
                <button onClick={targetConnection} className="absolute right-2 rounded-md px-2 py-2 text-sm bg-blue-600 text-white">Connect</button>
            </div>
        </div>
    </div>
  )
}
