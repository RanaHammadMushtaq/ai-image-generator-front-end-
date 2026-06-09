import React from 'react'
/* rana hammad */
const Description = () => {
  return (
    <section style={{
      padding: '80px 24px',
      maxWidth: 1100,
      margin: '0 auto',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 60,
        alignItems: 'center',
      }}>
        {/* Image side */}
        <div style={{ position: 'relative' }}>
          <div style={{
            aspectRatio: '1',
            borderRadius: 24,
            background: 'linear-gradient(135deg, #f8fbff, #ffffff)',
            border: '1px solid rgba(15,23,42,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 80,
            position: 'relative',
            overflow: 'hidden',
          }}>
            🎨
            {/* Decorative corner glow */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 200,
              height: 200,
              background: 'radial-gradient(circle, rgba(37,99,235,0.15), transparent 70%)',
            }} />
          </div>
          {/* Floating badge */}
          <div style={{
            position: 'absolute',
            bottom: -16,
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#f8fbff',
            border: '1px solid rgba(37,99,235,0.3)',
            borderRadius: 50,
            padding: '8px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 13,
            color: '#60a5fa',
            whiteSpace: 'nowrap',
          }}>
            <span>✨</span> AI-Powered Generation
          </div>
        </div>

        {/* Text side */}
        <div>
          <p style={{ color: '#1d4ed8', fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
            About Imagify
          </p>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            lineHeight: 1.25,
            marginBottom: 20,
          }}>
            Create AI Images with One Click
          </h2>
          <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
            Introducing the AI-Powered Text to Image Generator, a revolutionary tool that transforms your textual descriptions into stunning visual artwork. Whether you're an artist, designer, marketer, or simply someone with a creative vision, our platform makes it easy to bring your ideas to life.
          </p>
          <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: 15 }}>
            Simply type a description, and watch as our advanced AI algorithms instantly generate a unique, high-quality image that matches your vision. From realistic landscapes to abstract art, the possibilities are endless.
          </p>

          <div style={{ display: 'flex', gap: 32, marginTop: 32 }}>
            {[
              { stat: '4M+', label: 'Images Generated' },
              { stat: '50K+', label: 'Happy Users' },
              { stat: '99.9%', label: 'Uptime' },
            ].map((item, i) => (
              <div key={i}>
                <p style={{
                  fontSize: 26,
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>{item.stat}</p>
                <p style={{ color: '#475569', fontSize: 13 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description


