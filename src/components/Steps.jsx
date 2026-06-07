import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  const icons = ['✨', '⚡', '💡']

  return (
    <section style={{ padding: '80px 24px', textAlign: 'center', maxWidth: 1000, margin: '0 auto' }}>
      <p style={{ color: '#1d4ed8', fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
        How It Works
      </p>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 16 }}>
        How to Get Started?
      </h2>
      <p style={{ color: '#64748b', maxWidth: 480, margin: '0 auto 56px' }}>
        Transform your words into stunning visuals in just three simple steps.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
        {stepsData.map((step, i) => (
          <div
            key={i}
            style={{
              background: '#ffffff',
              border: '1px solid rgba(15,23,42,0.06)',
              borderRadius: 20,
              padding: '32px 28px',
              position: 'relative',
              transition: 'border-color 0.3s, transform 0.2s',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: 'rgba(37,99,235,0.15)',
                border: '1px solid rgba(37,99,235,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 12,
                color: '#60a5fa',
                fontWeight: 700,
              }}
            >
              {i + 1}
            </div>

            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: 'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(96,165,250,0.2))',
                border: '1px solid rgba(37,99,235,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 26,
                marginBottom: 20,
              }}
            >
              {icons[i]}
            </div>

            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>{step.title}</h3>
            <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7 }}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Steps


