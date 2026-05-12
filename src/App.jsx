const bats = [
  {
    name: 'PowerWillow Dominator',
    price: '₹4,999',
  },
  {
    name: 'Tournament Beast',
    price: '₹7,499',
  },
  {
    name: 'Street Blaster',
    price: '₹2,999',
  },
]

export default function App() {
  return (
    <div
      style={{
        background: '#000',
        color: 'white',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px',
          background:
            'linear-gradient(to bottom right, #000000, #111827)',
        }}
      >
        <div
          style={{
            color: '#3b82f6',
            fontWeight: 'bold',
            marginBottom: '20px',
            fontSize: '18px',
          }}
        >
          PREMIUM CRICKET BRAND
        </div>

        <h1
          style={{
            fontSize: '72px',
            fontWeight: '900',
            lineHeight: '1.1',
            maxWidth: '900px',
            marginBottom: '20px',
          }}
        >
          Unleash the Power of Every Shot
        </h1>

        <p
          style={{
            fontSize: '24px',
            color: '#cbd5e1',
            maxWidth: '700px',
            lineHeight: '1.6',
          }}
        >
          Premium cricket bats crafted for Indian players who play to dominate.
        </p>

        <div
          style={{
            marginTop: '40px',
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <button
            style={{
              background: '#2563eb',
              color: 'white',
              border: 'none',
              padding: '18px 35px',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Shop Now
          </button>

          <button
            style={{
              background: 'transparent',
              color: 'white',
              border: '1px solid #22c55e',
              padding: '18px 35px',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            WhatsApp Order
          </button>
        </div>
      </section>

      <section
        style={{
          padding: '80px 40px',
        }}
      >
        <h2
          style={{
            fontSize: '48px',
            marginBottom: '40px',
            fontWeight: 'bold',
          }}
        >
          Featured Bats
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
            gap: '30px',
          }}
        >
          {bats.map((bat, index) => (
            <div
              key={index}
              style={{
                background: '#111827',
                padding: '30px',
                borderRadius: '20px',
                border: '1px solid #1f2937',
              }}
            >
              <div
                style={{
                  height: '220px',
                  background: '#1e293b',
                  borderRadius: '15px',
                  marginBottom: '20px',
                }}
              ></div>

              <h3
                style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                }}
              >
                {bat.name}
              </h3>

              <p
                style={{
                  marginTop: '10px',
                  color: '#94a3b8',
                }}
              >
                Premium power performance cricket bat.
              </p>

              <div
                style={{
                  marginTop: '20px',
                  fontSize: '32px',
                  fontWeight: 'bold',
                }}
              >
                {bat.price}
              </div>

              <button
                style={{
                  marginTop: '20px',
                  width: '100%',
                  padding: '15px',
                  background: '#2563eb',
                  border: 'none',
                  borderRadius: '10px',
                  color: 'white',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}