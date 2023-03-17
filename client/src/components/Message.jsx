
export default function Message({message, role}) {
  return (
    <div className={`flex w-full px-4 py-1 ${role === "sender" ? "justify-start" : "justify-end"}`}>
        <p className={`px-4 py-2 max-w-[40%] text-white rounded-3xl ${role === "sender" ? "bg-blue-600" : "bg-gray-600"}`}>{message}</p>
    </div>
  )
}
