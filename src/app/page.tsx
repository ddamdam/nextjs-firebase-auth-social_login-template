'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  const handleGoToApp = () => {
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center">
      <Button 
        onClick={handleGoToApp} 
        className="bg-orange-600 text-white hover:bg-orange-700 text-lg py-2 px-6 transition-colors duration-300"
      >
        Go to App
      </Button>
    </div>
  )
}