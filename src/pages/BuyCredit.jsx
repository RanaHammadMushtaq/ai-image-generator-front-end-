import React, { useContext } from 'react'
import { plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'

const BuyCredit = () => {
  const { user, backendUrl, token, loadCreditsData, setShowLogin } = useContext(AppContext)

  const initPay = async (plan) => {
    if (!user) {
      setShowLogin(true)
      return
    }

    try {
      const { data } = await axios.post(
        backendUrl + '/api/user/pay-razor',
        { planId: plan.id },
        { headers: { token } }
      )

      if (data.success) {
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,
          amount: data.order.amount,
          currency: data.order.currency,
          name: 'Credits Purchase',
          description: `Purchase ${plan.credits} Credits`,
          order_id: data.order.id,
          receipt: data.order.receipt,
          handler: async (response) => {
            try {
              const { data: verifyData } = await axios.post(
                backendUrl + '/api/user/verify-razor',
                response,
                { headers: { token } }
              )
              if (verifyData.success) {
                loadCreditsData()
                alert('Credits added successfully!')
              }
            } catch (error) {
              alert(error.message)
            }
          }
        }
        const rzp = new window.Razorpay(options)
        rzp.open()
      }
    } catch (error) {
      alert(error.message)
    }
  }

  const planIcons = ['⚡', '🚀', '💎']
  const planColors = [
    'rgba(37,99,235,0.15)',
    'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(96,165,250,0.2))',
    'rgba(96,165,250,0.15)',
  ]

  return (
    <div style={{
      minHeight: '85vh',
      padding: '60px 24px',
      textAlign: 'center',
    }}>
      <p style={{ color: '#1d4ed8', fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
        Pricing Plans
      </p>
      <h1 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(30px, 4vw, 48px)',
        marginBottom: 16,
      }}>
        Choose Your Plan
      </h1>
      <p style={{ color: '#64748b', maxWidth: 500, margin: '0 auto 56px', fontSize: 15, lineHeight: 1.7 }}>
        Buy credits to generate images. More credits means more creations — pick the plan that fits your needs.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 24,
        maxWidth: 900,
        margin: '0 auto',
      }}>
        {plans.map((plan, i) => (
          <div key={i} style={{
            background: i === 1 ? '#f8fbff' : '#ffffff',
            border: i === 1 ? '1px solid rgba(37,99,235,0.4)' : '1px solid rgba(15,23,42,0.06)',
            borderRadius: 20,
            padding: '36px 28px',
            position: 'relative',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {/* Popular badge */}
            {i === 1 && (
              <div style={{
                position: 'absolute',
                top: -12,
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
                borderRadius: 50,
                padding: '4px 16px',
                fontSize: 12,
                fontWeight: 600,
                whiteSpace: 'nowrap',
              }}>
                Most Popular
              </div>
            )}

            {/* Icon */}
            <div style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              background: planColors[i],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              margin: '0 auto 20px',
            }}>
              {planIcons[i]}
            </div>

            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{plan.id}</h3>
            <p style={{ color: '#64748b', fontSize: 14, marginBottom: 20 }}>{plan.desc}</p>

            {/* Price */}
            <div style={{ marginBottom: 20 }}>
              <span style={{
                fontSize: 48,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>${plan.price}</span>
            </div>

            {/* Credits */}
            <div style={{
              background: 'rgba(37,99,235,0.1)',
              border: '1px solid rgba(37,99,235,0.2)',
              borderRadius: 50,
              padding: '8px 20px',
              display: 'inline-block',
              color: '#60a5fa',
              fontSize: 14,
              fontWeight: 600,
              marginBottom: 28,
            }}>
              {plan.credits} Image Credits
            </div>

            <br />

            <button
              onClick={() => initPay(plan)}
              style={{
                background: i === 1 ? 'linear-gradient(135deg, #1d4ed8, #60a5fa)' : 'rgba(15,23,42,0.04)',
                border: i === 1 ? 'none' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: 50,
                padding: '12px 36px',
                color: '#fff',
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Trust badges */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 32,
        marginTop: 56,
        flexWrap: 'wrap',
      }}>
        {[
          { icon: '🔒', text: 'Secure Payment' },
          { icon: '⚡', text: 'Instant Credits' },
          { icon: '🔄', text: 'No Expiry' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#475569', fontSize: 14 }}>
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit


