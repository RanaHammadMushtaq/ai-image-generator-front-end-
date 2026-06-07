import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 40px',
      background: 'rgba(248,251,255,0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(15,23,42,0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      {/* Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: 36,
          height: 36,
          background: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
        }}>✨</div>
        <span style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 22,
          fontWeight: 700,
          background: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>Imagify</span>
      </Link>

      {/* Right Side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {user ? (
          <>
            {/* Credits Badge */}
            <button
              onClick={() => navigate('/buy')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(37,99,235,0.15)',
                border: '1px solid rgba(37,99,235,0.3)',
                borderRadius: 50,
                padding: '8px 16px',
                color: '#60a5fa',
                fontSize: 14,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <span>⚡</span>
              <span>Credits: {credit}</span>
            </button>

            {/* User Avatar Dropdown */}
            <div style={{ position: 'relative' }} className="user-menu">
              <div style={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                cursor: 'pointer',
                fontWeight: 700,
              }}>
                {user.name ? user.name[0].toUpperCase() : 'U'}
              </div>

              <div style={{
                position: 'absolute',
                right: 0,
                top: '120%',
                background: '#f8fbff',
                border: '1px solid rgba(15,23,42,0.08)',
                borderRadius: 12,
                padding: '8px',
                minWidth: 160,
                display: 'none',
                flexDirection: 'column',
                gap: 4,
              }} className="dropdown">
                <button
                  onClick={() => navigate('/buy')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#64748b',
                    padding: '8px 12px',
                    borderRadius: 8,
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: 14,
                  }}
                >💳 Buy Credits</button>
                <button
                  onClick={logout}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#60a5fa',
                    padding: '8px 12px',
                    borderRadius: 8,
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: 14,
                  }}
                >🚪 Logout</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to="/buy" style={{ color: '#64748b', fontSize: 15, transition: 'color 0.2s' }}>
              Pricing
            </Link>
            <button
              onClick={() => setShowLogin(true)}
              style={{
                background: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
                border: 'none',
                borderRadius: 50,
                padding: '10px 24px',
                color: '#fff',
                fontSize: 15,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
            >
              Login
            </button>
          </>
        )}
      </div>

      <style>{`
        .user-menu:hover .dropdown {
          display: flex !important;
        }
        nav a:hover {
          color: #1d4ed8 !important;
        }
      `}</style>
    </nav>
  )
}

export default Navbar


