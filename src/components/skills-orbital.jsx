import { useRef, useState, useEffect } from "react"
import { motion, useAnimationControls } from "framer-motion"
import useMobile from "@/hooks/use-mobile.js"

export default function SkillsOrbital({ skills, setSelectedSkill }) {
  const containerRef = useRef(null)
  const [centerX, setCenterX] = useState(0)
  const [centerY, setCenterY] = useState(0)
  const isMobile = useMobile()
  
  // Update center position on resize
  useEffect(() => {
    const updateCenter = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setCenterX(rect.width / 2)
        setCenterY(rect.height / 2)
      }
    }
    
    updateCenter()
    window.addEventListener('resize', updateCenter)
    return () => window.removeEventListener('resize', updateCenter)
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[500px] md:h-[600px] bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden"
    >
      {/* Center point */}
      <div className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-emerald-500 -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg shadow-emerald-500/50"></div>
      
      {/* Orbital rings */}
      <div className="absolute left-1/2 top-1/2 w-[200px] h-[200px] border border-slate-700/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute left-1/2 top-1/2 w-[300px] h-[300px] border border-slate-700/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute left-1/2 top-1/2 w-[400px] h-[400px] border border-slate-700/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Skills in orbits */}
      {skills.map((skill, index) => (
        <OrbitalSkill 
          key={skill.name}
          skill={skill}
          index={index}
          totalSkills={skills.length}
          centerX={centerX}
          centerY={centerY}
          setSelectedSkill={setSelectedSkill}
        />
      ))}
      
      {isMobile && (
        <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-slate-400 bg-slate-900/80 py-2 px-4 mx-4 rounded-lg">
          Touch the skill icons to see details
        </div>
      )}
    </div>
  )
}

function OrbitalSkill({ skill, index, totalSkills, centerX, centerY, setSelectedSkill }) {
  const controls = useAnimationControls()
  const [hover, setHover] = useState(false)
  
  // Calculate orbit radius based on index
  const orbitIndex = index % 3
  const orbitRadius = 100 + orbitIndex * 50
  
  // Calculate position in orbit
  const angle = (index * (360 / Math.ceil(totalSkills / 3))) * (Math.PI / 180)
  const speed = 20 + (orbitIndex * 5) // Different speeds for different orbits
  
  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        duration: speed,
        ease: "linear",
        repeat: Infinity
      }
    })
  }, [controls, speed])
  
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
  
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ width: orbitRadius * 2, height: orbitRadius * 2 }}
      animate={controls}
    >
      <motion.div
        className="absolute"
        style={{
          left: orbitRadius + Math.cos(angle) * orbitRadius,
          top: orbitRadius + Math.sin(angle) * orbitRadius,
          transform: 'translate(-50%, -50%)'
        }}
        whileHover={{ scale: 1.2 }}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        onClick={() => setSelectedSkill(skill)}
      >
        <div 
          className={`flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-all duration-300 ${hover ? 'shadow-lg' : ''}`}
          style={{ 
            backgroundColor: `${hexColor}20`, 
            boxShadow: hover ? `0 0 15px ${hexColor}80` : 'none',
            border: `2px solid ${hexColor}` 
          }}
        >
          <skill.icon className="text-2xl" style={{ color: hexColor }} />
        </div>
        
        {hover && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-slate-800 text-white text-sm py-1 px-3 rounded whitespace-nowrap z-20">
            <div className="font-medium">{skill.name}</div>
            <div className="text-xs text-slate-400">{skill.skill}% proficiency</div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
