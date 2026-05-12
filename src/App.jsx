export default function App() {
  const bats = [
    {
      name: 'PowerWillow Dominator',
      price: '₹4,999',
      image:
        'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Tournament Beast',
      price: '₹7,499',
      image:
        'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Street Blaster',
      price: '₹2,999',
      image:
        'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
          background: #000;
          color: white;
        }

        .hero {
          min-height: 100vh;
          background:
            linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),
            url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1600&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          padding: 80px;
        }

        .hero-content {
          max-width: 800px;
        }

        .badge {
          display: inline-block;
          background: rgba(37,99,235,0.15);
          border: 1px solid rgba(96,165,250,0.4);
          color: #60a5fa;
          padding: 12px 24px;
          border-radius: 999px;
          font-weight: bold;
          margin-bottom: 30px;
        }

        .title {
          font-size: 72px;
          line-height: 1.1;
          font-weight: 900;
          margin-bottom: 25px;
        }

        .blue {
          color: #60a5fa;
        }

        .subtitle {
          font-size: 24px;
          color: #d1d5db;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        .buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 18px 34px;
          border-radius: 14px;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s ease;
          border: none;
        }

        .btn-blue {
          background: #2563eb;
          color: white;
          box-shadow: 0 10px 30px rgba(37,99,235,0.4);
        }

        .btn-blue:hover {
          transform: translateY(-3px);
          background: #3b82f6;
        }

        .btn-green {
          background: rgba(34,197,94,0.1);
          border: 1px solid #22c55e;
          color: white;
        }

        .btn-green:hover {
          transform: translateY(-3px);
          background: rgba(34,197,94,0.2);
        }

        .section {
          padding: 100px 60px;
          background: linear-gradient(to bottom, #000, #111827);
        }

        .section-title {
          text-align: center;
          font-size: 54px;
          margin-bottom: 60px;
          font-weight: 900;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1300px;
          margin: auto;
        }

        .card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          overflow: hidden;
          transition: 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .card:hover {
          transform: translateY(-10px);
        }

        .card img {
          width: 100%;
          height: 320px;
          object-fit: cover;
        }

        .card-content {
          padding: 28px;
        }

        .tag {
          display: inline-block;
          background: #2563eb;
          padding: 10px 18px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 18px;
        }

        .card-title {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 15px;
        }

        .card-text {
          color: #9ca3af;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .stars {
          color: #facc15;
          margin-bottom: 25px;
          font-size: 20px;
        }

        .price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .price {
          font-size: 42px;
          font-weight: 900;
        }

        .buy-btn {
          background: #2563eb;
          color: white;
          border: none;
          padding: 14px 24px;
          border-radius: 12px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .buy-btn:hover {
          background: #3b82f6;
        }

        @media(max-width: 768px) {
          .hero {
            padding: 40px 24px;
          }

          .title {
            font-size: 46px;
          }

          .subtitle {
            font-size: 18px;
          }

          .section {
            padding: 80px 24px;
          }

          .section-title {
            font-size: 40px;
          }
        }
      `}</style>

      <div>
        <section className="hero">
          <div className="hero-content">
            <div className="badge">PREMIUM CRICKET BRAND</div>

            <h1 className="title">
              Unleash the <span className="blue">Power</span> of Every Shot
            </h1>

            <p className="subtitle">
              Premium cricket bats crafted for Indian players who play to dominate.
            </p>

            <div className="buttons">
              <button className="btn btn-blue">Shop Now</button>
              <button className="btn btn-green">WhatsApp Order</button>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Featured Bats</h2>

          <div className="grid">
            {bats.map((bat, index) => (
              <div className="card" key={index}>
                <img src={bat.image} alt={bat.name} />

                <div className="card-content">
                  <div className="tag">Best Seller</div>

                  <h3 className="card-title">{bat.name}</h3>

                  <p className="card-text">
                    Premium power performance cricket bat built for Indian pitches.
                  </p>

                  <div className="stars">★★★★★</div>

                  <div className="price-row">
                    <div className="price">{bat.price}</div>

                    <button className="buy-btn">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}