
export default function Home() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2 flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('/cacasa.png')"}}></div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-yellow-200 p-12">
        <h1 className="text-6xl text-black font-bold mb-4">Create the atmosphere of your dreams</h1>
        <p className="text-2xl text-black mb-8">Soundtracks Perfectly Tuned to Your Vision.</p>
        <button className="py-3 font-bold text-black border-b-4 border-yellow-500 hover:border-yellow-600 rounded">Get started</button>
      </div>
    </div>
  )
}

