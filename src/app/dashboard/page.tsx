'use client';

import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <Image
            src="/images/damian.png"
            alt="Damian's profile picture"
            width={120}
            height={120}
            className="rounded-full mx-auto"
          />
        </div>
        <h1 className="text-2xl font-bold mb-4">Hi! I'm Damian 👋</h1>
        <p className="mb-6">
        It's not exactly a masterpiece, but I hope someone finds it useful for amateur projects and personal use, making their life a little easier.
        </p>
        <p className="mb-6">
          Check out my GitHub for more projects: <a href="https://github.com/ddamdam" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://github.com/ddamdam</a>
        </p>
        <div className="flex justify-center">
          <a href="https://www.buymeacoffee.com/damiand" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=damiand&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff" 
              alt="Buy me a coffee"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
