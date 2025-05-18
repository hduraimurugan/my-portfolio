import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import useMobile from "@/hooks/use-mobile.js"

export default function SkillsFloating({ skills, setSelectedSkill }) {
  const containerRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const isMobile = useMobile()
  
  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[500px] md:h-[600px] bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(120,120,120,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Floating skills */}
      {dimensions.width > 0 && skills.map((skill, index) => (
        <FloatingSkill 
          key={skill.name}
          skill={skill}
          index={index}
          containerWidth={dimensions.width}
          containerHeight={dimensions.height}
          setSelectedSkill={setSelectedSkill}
        />
      ))}
      
      {isMobile && (
        <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-slate-400 bg-slate-900/80 py-2 px-4 mx-4 rounded-lg">
          Touch the floating skills to see details
        </div>
      )}
    </div>
  )
}

function FloatingSkill({ skill, index, containerWidth, containerHeight, setSelectedSkill }) {
  const [hover, setHover] = useState(false)
  
  // Extract hex color from the text color class
  const colorClass = skill.color
  const hexColor = colorClass.includes('orange') ? '#f97316' :
                  colorClass.includes('blue') ? '#3b82f6' :
                  colorClass.includes('yellow') ? '#facc15' :
                  colorClass.includes('cyan') ? '#22d3ee' :
                  colorClass.includes('purple') ? '#9333ea' :
                  colorClass.includes('teal') ? '#14b8a6' :
                  colorClass.includes('green') ? '#22c55e' :
                  colorClass.includes('red') ? '#ef4444' :
                  colorClass.includes('gray') ? '#6b7280' : '#ffffff'
  
  // Calculate random position and animation parameters
  const xPos = (index % 5) * (containerWidth / 5) + (containerWidth / 10)
  const yPos = Math.floor(index / 5) * (containerHeight / 4) + (containerHeight / 8)
  
  const xOffset = containerWidth * 0.1
  const yOffset = containerHeight * 0.1
  
  // Size based on skill level
  const size = 40 + (skill.skill / 10)
  
  return (
    <motion.div
      className="absolute"
      style={{
        left: xPos,
        top: yPos,
      }}
      animate={{
        x: [
          0, 
          Math.sin(index) * xOffset, 
          0, 
          Math.cos(index) * xOffset, 
          0
        ],
        y: [
          0, 
          Math.cos(index) * yOffset, 
          0, 
          Math.sin(index) * yOffset, 
          0
        ],
      }}
      transition={{
        duration: 10 + index % 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.2, zIndex: 10 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      onClick={() => setSelectedSkill(skill)}
    >
      <div 
        className="flex items-center justify-center rounded-full cursor-pointer transition-all duration-300"
        style={{ 
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: `${hexColor}20`, 
          boxShadow: hover ? `0 0 20px ${hexColor}80` : `0 0 10px ${hexColor}40`,
          border: `2px solid ${hexColor}` 
        }}
      >
        <skill.icon className="text-2xl" style={{ color: hexColor }} />
      </div>
      
      {hover && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-slate-800 text-white text-sm py-1 px-3 rounded whitespace-nowrap z-20"
        >
          <div className="font-medium">{skill.name}</div>
          <div className="text-xs text-slate-400">{skill.skill}% proficiency</div>
          <div className="text-xs text-slate-500">{skill.category}</div>
        </motion.div>
      )}
    </motion.div>
  )
}
