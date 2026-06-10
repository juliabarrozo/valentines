export default function Timeline({ marcos }) {
  return (
    <div style={{ padding: '40px 20px', background: '#fff' }}>
      <h2 style={{ textAlign: 'center' }}>Nossa História ⏰</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {marcos.map((marco, index) => (
          <div key={index} style={{ borderLeft: '4px solid #ff4d6d', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: '-14px', top: '0', background: '#fff', fontSize: '20px' }}>
              {marco.emoji}
            </span>
            <small style={{ color: '#ff4d6d', fontWeight: 'bold' }}>{marco.date}</small>
            <h3>{marco.title}</h3>
            <p style={{ color: '#555' }}>{marco.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}