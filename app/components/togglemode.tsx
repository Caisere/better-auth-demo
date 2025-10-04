'use client'

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ToggleMode() {
  const {theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  function handleToggleMode() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  
  if (!mounted) return null

  return (
    <button onClick={handleToggleMode}>
      {theme === "light" ?  <Moon /> : <SunMedium /> }
    </button>
  );
}

export default ToggleMode;