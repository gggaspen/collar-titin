"use client"

import { useEffect, useState } from "react"

export default function SmoothScrollIndicator() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const scrollToMusic = () => {
    if (isClient) {
      const element = document.getElementById("music")
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <div className="cursor-pointer animate-bounce" onClick={scrollToMusic}>
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-xs text-cyan-400 mt-2 text-center">Scroll</p>
      </div>
    </div>
  )
}
