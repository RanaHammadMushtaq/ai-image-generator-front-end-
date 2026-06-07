import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const Result = () => {
  const [image, setImage] = useState(null)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  const { generateImage } = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (input) {
      const image = await generateImage(input)
      if (image) {
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)
  }

  return (
    <div style={{
      minHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
    }}>
      <div style={{ maxWidth: 600, width: '100%', textAlign: 'center' }}>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(28px, 4vw, 42px)',
          marginBottom: 12,
        }}>
          Generate Your Image ✨
        </h1>
        <p style={{ color: '#64748b', marginBottom: 40, fontSize: 15 }}>
          Describe what you want to see and let AI create it for you.
        </p>

        {/* Image Preview */}
        <div style={{
          width: '100%',
          maxWidth: 480,
          margin: '0 auto 32px',
          aspectRatio: '1',
          borderRadius: 20,
          overflow: 'hidden',
          background: '#ffffff',
          border: '1px solid rgba(15,23,42,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          {loading ? (
            <div style={{ textAlign: 'center' }}>
              {/* Loading animation */}
              <div style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                border: '3px solid rgba(37,99,235,0.2)',
                borderTopColor: '#1d4ed8',
                animation: 'spin 0.8s linear infinite',
                margin: '0 auto 16px',
              }} />
              <p style={{ color: '#64748b', fontSize: 14 }}>Generating your image...</p>
              <p style={{ color: '#475569', fontSize: 12, marginTop: 6 }}>This may take a few seconds</p>
            </div>
          ) : image ? (
            <img
              src={image}
              alt="Generated"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 60, marginBottom: 16 }}>🖼️</div>
              <p style={{ color: '#64748b', fontSize: 15 }}>Your generated image</p>
              <p style={{ color: '#475569', fontSize: 13, marginTop: 6 }}>will appear here</p>
            </div>
          )}
        </div>

        {/* Prompt Input or Download Button */}
        {!isImageLoaded ? (
          <form onSubmit={onSubmitHandler} style={{ width: '100%' }}>
            <div style={{
              display: 'flex',
              gap: 12,
              background: '#ffffff',
              border: '1px solid rgba(15,23,42,0.08)',
              borderRadius: 50,
              padding: '6px 6px 6px 20px',
            }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Describe what you want to generate..."
                type="text"
                style={{
                  flex: 1,
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  fontSize: 15,
                }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
                  border: 'none',
                  borderRadius: 50,
                  padding: '12px 28px',
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1,
                  whiteSpace: 'nowrap',
                }}
              >
                {loading ? 'Generating...' : 'Generate'}
              </button>
            </div>
          </form>
        ) : (
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button
              onClick={() => { setIsImageLoaded(false); setImage(null); setInput('') }}
              style={{
                background: 'rgba(15,23,42,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 50,
                padding: '12px 28px',
                color: '#fff',
                fontSize: 15,
                cursor: 'pointer',
              }}
            >
              Generate Another
            </button>
            <a
              href={image}
              download="imagify-generated.png"
              style={{
                background: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
                border: 'none',
                borderRadius: 50,
                padding: '12px 28px',
                color: '#fff',
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Download Image
            </a>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default Result


