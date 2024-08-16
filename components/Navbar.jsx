import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed bottom-5 bg-gradient-to-br from-[#4b4b4f] to-[#313034] rounded-full p-0.3 min-w-72 drop-shadow-xl">
      <div className="flex h-full w-full items-start bg-gradient-to-br from-[#2f2e33] to-[#2b2a2e] text-white rounded-full px-4 py-2 gap-3">
        
        <a href="/letters" className="font-semibold">
          <img src="/letter.svg" alt="letter" />
        </a>

        <a href="https://x.com/animeshryu" target='_blank' className="font-semibold">
          <img src="/x.svg" alt="twitter" />
        </a>
      </div>
    </div>

  )
}

export default Navbar