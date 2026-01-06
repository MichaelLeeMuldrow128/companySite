import React, { useEffect, useState } from 'react'

const MouseAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateWindowSize()
    window.addEventListener('resize', updateWindowSize)

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', updateWindowSize)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Calculate parallax effect for background elements
  const width = windowSize.width || window.innerWidth || 1
  const height = windowSize.height || window.innerHeight || 1
  const parallaxX = (mousePosition.x / width - 0.5) * 30
  const parallaxY = (mousePosition.y / height - 0.5) * 30

  return (
    <>
      {/* Cursor glow effect */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isHovering ? 1 : 0,
        }}
      >
        <div
          className="w-8 h-8 rounded-full bg-white blur-xl"
          style={{
            boxShadow: '0 0 40px 20px rgba(255, 255, 255, 0.3)',
          }}
        />
      </div>

      {/* Parallax background elements */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          transform: `translate(${parallaxX * 0.5}px, ${parallaxY * 0.5}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      {/* Additional parallax layer with different speed */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-15"
        style={{
          transform: `translate(${parallaxX * 0.3}px, ${parallaxY * 0.3}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Floating particles that follow mouse */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(8)].map((_, i) => {
          const delay = i * 0.15
          const distance = 80 + i * 40
          const angle = (i * 45) * (Math.PI / 180)
          const size = 2 + (i % 3)
          
          return (
            <div
              key={i}
              className="absolute rounded-full blur-sm bg-white/30"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${mousePosition.x + Math.cos(angle) * distance}px`,
                top: `${mousePosition.y + Math.sin(angle) * distance}px`,
                transform: 'translate(-50%, -50%)',
                transition: `all ${0.25 + delay}s cubic-bezier(0.4, 0, 0.2, 1)`,
                opacity: isHovering ? 0.5 : 0,
                boxShadow: `0 0 ${size * 4}px rgba(255, 255, 255, 0.3)`,
              }}
            />
          )
        })}
      </div>

      {/* Interactive glow trail */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isHovering ? 0.4 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
      >
        <div
          className="w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </div>
    </>
  )
}

export default MouseAnimation

