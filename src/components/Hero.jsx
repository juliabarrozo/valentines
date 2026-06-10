import { useState, useEffect } from 'react'
import { HERO, PHOTOS } from '../../config.js'

function daysTogether() {
  const start = new Date(HERO.startDate)
  const now = new Date()
  return Math.floor((now - start) / (1000 * 60 * 60 * 24))
}

const NAV_ITEMS = [
  { label: 'Quiz', href: 'quiz' },
  { label: 'Nossa história', href: 'timeline' },
  { label: 'Memórias', href: 'galeria' },
  { label: 'Nossa trilha sonora', href: 'playlist' },
  { label: 'Razões', href: 'razoes' },
  { label: 'Declaração', href: 'carta' },
]

export default function Hero() {
  const [days, setDays] = useState(0)

  useEffect(() => {
    setDays(daysTogether())
  }, [])

  const coverPhoto = PHOTOS.find(p => p.src)

  return (
    <section className="hero">
      {/* Injetando o CSS diretamente aqui dentro para evitar erros de importação */}
      <style>{`
        :root {
          --rose: #c0607a;
          --rose-md: rgba(192, 96, 122, 0.2);
          --dark: #2d2327;
          --muted: #7d6f74;
          --border: #ebdce2;
          --sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          --serif: Georgia, Cambria, serif;
        }
        .hero {
          background: linear-gradient(160deg, #fceef3 0%, #f5e6f0 50%, #ede8f5 100%);
          padding-bottom: 64px;
          border-bottom: 1px solid var(--border);
          font-family: var(--sans);
        }
        .nav {
          display: flex;
          justify-content: center;
          gap: 8px;
          padding: 20px 24px 0;
          flex-wrap: wrap;
        }
        .navLink {
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          text-decoration: none;
          padding: 6px 14px;
          border-radius: 20px;
          transition: background 0.15s, color 0.15s;
        }
        .navLink:hover {
          background: rgba(192,96,122,0.1);
          color: var(--rose);
        }
        .inner {
          max-width: 560px;
          margin: 0 auto;
          padding: 40px 24px 0;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .photoRing {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 3px solid #fff;
          box-shadow: 0 0 0 2px var(--rose-md), 0 8px 32px rgba(192,96,122,0.15);
          overflow: hidden;
          margin-bottom: 28px;
        }
        .coverImg {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .photoPlaceholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #f0d0e0 0%, #ddd0ef 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          color: var(--rose);
        }
        .tag {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--rose);
          background: rgba(255,255,255,0.7);
          padding: 5px 18px;
          border-radius: 20px;
          border: 1px solid var(--rose-md);
          margin-bottom: 20px;
        }
        .title {
          font-family: var(--serif);
          font-size: clamp(40px, 8vw, 60px);
          font-weight: 300;
          font-style: italic;
          color: var(--dark);
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .subtitle {
          font-size: 15px;
          color: var(--muted);
          font-weight: 300;
          line-height: 1.7;
          margin-bottom: 28px;
          max-width: 380px;
        }
        .counter {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 36px;
          gap: 2px;
        }
        .counterNum {
          font-family: var(--serif);
          font-size: 52px;
          font-weight: 300;
          color: var(--rose);
          line-height: 1;
        }
        .counterLabel {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .ctaGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          width: 100%;
          max-width: 420px;
          margin-bottom: 12px;
        }
        .ctaCard {
          background: rgba(255,255,255,0.8);
          border: 1px solid var(--rose-md);
          border-radius: 12px;
          padding: 14px 12px;
          font-size: 13px;
          font-weight: 400;
          color: var(--dark);
          text-decoration: none;
          text-align: center;
          transition: background 0.15s, transform 0.1s;
        }
        .ctaCard:hover {
          background: #fff;
          transform: translateY(-2px);
        }
        .ctaPrimary {
          display: block;
          width: 100%;
          max-width: 420px;
          background: var(--rose);
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 16px;
          font-family: var(--serif);
          font-size: 20px;
          font-style: italic;
          font-weight: 300;
          text-decoration: none;
          text-align: center;
          cursor: pointer;
          transition: background 0.15s, transform 0.1s;
        }
        .ctaPrimary:hover {
          background: #a8506a;
          transform: translateY(-1px);
        }
      `}</style>

      <nav className="nav">
        {NAV_ITEMS.map(item => (
          <a key={item.href} href={`#${item.href}`} className="navLink">{item.label}</a>
        ))}
      </nav>

      <div className="inner">
        <div className="photoRing">
          {coverPhoto?.src
            ? <img src={coverPhoto.src} alt="Nós dois" className="coverImg" />
            : <div className="photoPlaceholder">♡</div>
          }
        </div>

        <span className="tag">{HERO.tag}</span>

        <h1 className="title">
          {HERO.title.split('\n').map((line, i) => (
            <span key={i}>{i > 0 && <br />}{line}</span>
          ))}
        </h1>

        <p className="subtitle">{HERO.subtitle}</p>

        <div className="counter">
          <span className="counterNum">{days.toLocaleString('pt-BR')}</span>
          <span className="counterLabel">dias juntos</span>
        </div>

        <div className="ctaGrid">
          {NAV_ITEMS.map(item => (
            <a key={item.href} href={`#${item.href}`} className="ctaCard">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#carta" className="ctaPrimary">
          Ler cartinha ♡
        </a>
      </div>
    </section>
  )
}