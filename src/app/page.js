
export default function Home() {
  return (
  <div className="flex flex-col md:flex-row w-full h-screen">
    <div className="md:w-1/2 w-full h-1/2 md:h-full flex bg-cover bg-center" style={{backgroundImage: "url('/cacasa.png')"}}></div>
    <div className="md:w-1/2 w-full h-1/2 md:h-full flex flex-col md:justify-center bg-yellow-200 p-4 md:p-12">
      <h1 className="text-4xl md:text-6xl text-black font-bold mb-4">Create the atmosphere of your dreams</h1>
      <p className="text-xl md:text-2xl text-black mb-6 md:mb-8">Soundtracks Perfectly Tuned to Your Vision.</p>
      <div className='w-1/2'>
      <button className="px-3 py-1 md:px-6 py-1 md:py-3 font-bold text-black border-4 border-black border-yellow-500 hover:border-yellow-600 rounded">Get started</button>
      </div>
    </div>
  </div>

  )
}

