import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
  const avatars = ['👨‍💼', '👨‍💻', '📰']

  return (
    <section style={{
      padding: '80px 24px',
      textAlign: 'center',
      maxWidth: 1100,
      margin: '0 auto',
    }}>
      <p style={{ color: '#1d4ed8', fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
       <h2>Customers  Testimonials</h2>
      </p>
      <h2 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(28px, 4vw, 44px)',
        marginBottom: 16,
      }}>
       
      </h2>
      <p style={{ color: '#64748b', maxWidth: 480, margin: '0 auto 56px' }}>
        What our users are saying 
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 24,
      }}>
        {testimonialsData.map((testimonial, i) => (
          <div key={i} style={{
            background: '#ffffff',
            border: '1px solid rgba(15,23,42,0.06)',
            borderRadius: 20,
            padding: '28px',
            textAlign: 'left',
            transition: 'border-color 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(15,23,42,0.06)'}
          >
            {/* Stars */}
            <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
              {Array.from({ length: testimonial.stars }).map((_, si) => (
                <span key={si} style={{ color: '#fbbf24', fontSize: 16 }}>★</span>
              ))}
              {Array.from({ length: 5 - testimonial.stars }).map((_, si) => (
                <span key={si} style={{ color: '#2a2a38', fontSize: 16 }}>★</span>
              ))}
            </div>

            {/* Quote */}
            <p style={{
              color: '#c8c8d8',
              lineHeight: 1.75,
              fontSize: 14,
              marginBottom: 24,
              fontStyle: 'italic',
            }}>
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 42,
                height: 42,
                borderRadius: '50%',
                background: `linear-gradient(135deg, hsl(${240 + i * 40}, 70%, 35%), hsl(${280 + i * 40}, 70%, 35%))`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
              }}>
                {avatars[i]}
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: 14 }}>{testimonial.name}</p>
                <p style={{ color: '#475569', fontSize: 12 }}>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials


