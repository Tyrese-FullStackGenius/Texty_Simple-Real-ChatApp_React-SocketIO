export default function Chat({targetConnection}) {
  return (
    <section className="relative w-full flex items-center justify-center flex-col">
        <header className="relative w-full flex items-center justify-center p-4 border-2 border-b-blue-100 ">
            <h1 className="font-bold text-xl">to: <span className="text-blue-600">"{targetConnection}"</span></h1>
        </header>

        <main className="relative h-[80%] w-full flex">
            <div></div>
            <div></div>
        </main>

        <footer className="relative w-full flex items-center justify-center p-4 gap-4 border-2 border-t-blue-100">
            <input type="text" placeholder="Your Message..." className="w-[70%] h-12 p-2 rounded-md border-2 border-gray-200 outline-blue-500 ring-blue-500"/>
            <button className="h-12  px-4 rounded-md text-sm bg-blue-600 text-white">Send</button>
        </footer>
    </section>
  )
}
