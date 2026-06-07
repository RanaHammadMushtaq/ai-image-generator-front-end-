import React from 'react'

const Footer = () => {
  return (
    <footer style={{
      background: '#f8fbff',
      borderTop: '1px solid rgba(15,23,42,0.06)',
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 32,
          height: 32,
          background: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 16,
        }}>
          ✨
        </div>
        <span style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 20,
          fontWeight: 700,
          background: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Imagify
        </span>
      </div>

      <div style={{
        width: '100%',
        maxWidth: 600,
        height: 1,
        background: 'rgba(15,23,42,0.06)',
      }} />

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 600,
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <p style={{ color: '#475569', fontSize: 13 }}>
          © 2024 Imagify. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: 16 }}>
          {['𝕏', 'in', 'f'].map((icon, i) => (
            <div key={i} style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'rgba(15,23,42,0.04)',
              border: '1px solid rgba(15,23,42,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 13,
              color: '#475569',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
              {icon}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer


