import Image from "next/image";
export default function Home() {
  return (
  <div className="relative h-screen">
  <img src="/cacasa.png " alt="Atmospheric setting" className="absolute inset-0 w-full h-full object-cover" />
  
    <div className="absolute inset-0 bg-black opacity-50"></div>
  
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-5xl font-bold text-white mb-4">Create the atmosphere of your dreams</h1>
      <button class="gradient-border-button">Get started</button>
    </div>
</div>

  )
}

