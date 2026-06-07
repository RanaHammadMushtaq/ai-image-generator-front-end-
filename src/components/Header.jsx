import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div style={{
      minHeight: '88vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '60px 24px',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg-surface)',
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)',
        top: '30%',
        right: '20%',
        pointerEvents: 'none',
      }} />

      {/* Badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: 'rgba(37,99,235,0.1)',
        border: '1px solid rgba(37,99,235,0.25)',
        borderRadius: 50,
        padding: '8px 18px',
        marginBottom: 32,
        fontSize: 13,
        color: '#60a5fa',
      }}>
        <span>🚀</span>
        <span>Best Text to Image Generator</span>
        <span>🚀</span>
      </div>

      {/* Heading */}
      <h1 style={{
        fontSize: 'clamp(40px, 6vw, 72px)',
        fontFamily: 'Playfair Display, serif',
        fontWeight: 700,
        lineHeight: 1.15,
        maxWidth: 800,
        marginBottom: 24,
      }}>
        Turn Text Into{' '}
        <span style={{
          background: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>Image</span>
        , In Seconds.
      </h1>

      {/* Subtext */}
      <p style={{
        color: '#64748b',
        fontSize: 18,
        maxWidth: 520,
        lineHeight: 1.7,
        marginBottom: 44,
      }}>
        Unleash your creativity with AI. Turn your imagination into visual art in seconds — just describe it, and watch the magic happen.
      </p>

      {/* CTA Button */}
      <button
        onClick={() => user ? navigate('/result') : setShowLogin(true)}
        style={{
          background: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
          border: 'none',
          borderRadius: 50,
          padding: '16px 44px',
          color: '#fff',
          fontSize: 17,
          fontWeight: 600,
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          boxShadow: '0 4px 30px rgba(37,99,235,0.35)',
          transition: 'all 0.2s',
          marginBottom: 56,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-3px)'
          e.currentTarget.style.boxShadow = '0 10px 50px rgba(37,99,235,0.5)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 4px 30px rgba(37,99,235,0.35)'
        }}
      >
        Generate Images ✨
      </button>

      {/* Sample Images Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: 12,
        maxWidth: 720,
        width: '100%',
      }}>
        {[
          { emoji: '🌋', label: 'Volcano at sunset' },
          { emoji: '🏙️', label: 'Cyberpunk city' },
          { emoji: '🧙', label: 'Fantasy wizard' },
          { emoji: '🌊', label: 'Ocean storm' },
          { emoji: '🦁', label: 'Lion portrait' },
       
        ].map((item, i) => (
          <div key={i} style={{
            aspectRatio: '1',
            borderRadius: 12,
            background: 'rgba(248,251,255,0.8)',
            border: '1px solid rgba(37,99,235,0.12)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
            fontSize: 24,
            color: '#0f172a',
            fontSize: i < 6 ? 28 : 22,
            transition: 'all 0.2s',
            cursor: 'pointer',
          }}>
            {item.emoji}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Header
/* comp*/

