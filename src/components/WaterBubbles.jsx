// WaterBubbles.jsx - Interactive water bubble animation
import React, { useEffect, useState, useRef } from 'react';

const WaterBubbles = () => {
  const [bubbles, setBubbles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const bubbleIdRef = useRef(0);

  // Create bubble at mouse position
  const createBubble = (x, y) => {
    // Create fewer bubbles and check if cursor is over clickable elements
    const bubbleCount = Math.random() > 0.8 ? 2 : 1; // Reduced from 4,3,2 to 2,1
    
    for (let i = 0; i < bubbleCount; i++) {
      const newBubble = {
        id: bubbleIdRef.current++,
        x: x + (Math.random() - 0.5) * 40, // Spread bubbles around cursor
        y: y + (Math.random() - 0.5) * 40,
        size: Math.random() * 25 + 10, // Reduced size from 35+15 to 25+10
        opacity: Math.random() * 0.6 + 0.2, // Reduced opacity from 0.8 to 0.6
        speedX: (Math.random() - 0.5) * 2, // Reduced speed
        speedY: -Math.random() * 3 - 1, // Reduced upward movement
        life: 100, // Reduced lifespan from 120 to 100
        color: Math.random() > 0.6 ? 'rgba(59, 130, 246, 0.5)' : 
               Math.random() > 0.3 ? 'rgba(139, 92, 246, 0.5)' : 'rgba(16, 185, 129, 0.4)', // Reduced opacity
      };
      
      setBubbles(prev => [...prev.slice(-25), newBubble]); // Reduced from 50 to 25 bubbles
    }
  };

  // Check if element is clickable or interactive
  const isClickableElement = (element) => {
    if (!element) return false;
    
    const clickableTags = ['BUTTON', 'A', 'INPUT', 'TEXTAREA', 'SELECT', 'LABEL'];
    const clickableRoles = ['button', 'link', 'tab', 'menuitem'];
    const clickableClasses = ['cursor-pointer', 'hover:', 'clickable'];
    
    // Check tag name
    if (clickableTags.includes(element.tagName)) return true;
    
    // Check role attribute
    if (element.getAttribute('role') && clickableRoles.includes(element.getAttribute('role'))) return true;
    
    // Check if element has click handlers
    if (element.onclick || element.getAttribute('onclick')) return true;
    
    // Check class names for clickable indicators
    const className = element.className || '';
    if (clickableClasses.some(cls => className.includes(cls))) return true;
    
    // Check if element has cursor pointer style
    const computedStyle = window.getComputedStyle(element);
    if (computedStyle.cursor === 'pointer') return true;
    
    // Check parent elements (up to 3 levels)
    let parent = element.parentElement;
    let level = 0;
    while (parent && level < 3) {
      if (clickableTags.includes(parent.tagName)) return true;
      if (parent.className && clickableClasses.some(cls => parent.className.includes(cls))) return true;
      if (window.getComputedStyle(parent).cursor === 'pointer') return true;
      parent = parent.parentElement;
      level++;
    }
    
    return false;
  };

  // Handle mouse movement
  useEffect(() => {
    let animationId;
    let lastBubbleTime = 0;

    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if mouse is over clickable element
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      if (isClickableElement(elementUnderCursor)) {
        return; // Don't create bubbles over clickable elements
      }
      
      // Create bubble every 80ms when mouse moves (increased from 30ms to reduce quantity)
      if (currentTime - lastBubbleTime > 80) {
        createBubble(e.clientX, e.clientY);
        lastBubbleTime = currentTime;
      }
    };

    // Animate bubbles
    const animateBubbles = () => {
      setBubbles(prev => 
        prev
          .map(bubble => ({
            ...bubble,
            x: bubble.x + bubble.speedX,
            y: bubble.y + bubble.speedY,
            life: bubble.life - 1,
            opacity: bubble.opacity * (bubble.life / 80), // Adjusted fade calculation
            size: bubble.size + 0.1, // Reduced growth rate
          }))
          .filter(bubble => bubble.life > 0 && bubble.y > -100) // Remove dead/off-screen bubbles
      );
      
      animationId = requestAnimationFrame(animateBubbles);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationId = requestAnimationFrame(animateBubbles);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: bubble.x - bubble.size / 2,
            top: bubble.y - bubble.size / 2,
            width: bubble.size,
            height: bubble.size,
            background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6), ${bubble.color})`,
            opacity: bubble.opacity,
            boxShadow: `0 0 ${bubble.size / 3}px ${bubble.color}`, // Reduced glow
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(1px)',
            transform: `scale(${Math.sin(Date.now() * 0.01 + bubble.id) * 0.05 + 1})`, // Reduced breathing effect
          }}
        />
      ))}
      
      {/* Cursor follower bubble - smaller and more subtle */}
      <div
        className="absolute rounded-full pointer-events-none transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 10, // Reduced from 15
          top: mousePosition.y - 10,  // Reduced from 15
          width: 20, // Reduced from 30
          height: 20, // Reduced from 30
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), rgba(59, 130, 246, 0.2))',
          border: '1px solid rgba(59, 130, 246, 0.3)', // Reduced from 2px
          boxShadow: '0 0 15px rgba(59, 130, 246, 0.2)', // Reduced glow
          backdropFilter: 'blur(1px)',
        }}
      />
    </div>
  );
};

export default WaterBubbles;