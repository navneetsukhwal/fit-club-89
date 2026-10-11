import { ArrowUpRight, Clock3, MapPin, Phone } from 'lucide-react';

const address =
  'NBCC Heights, OR, Pataudi Road, near Petal Apartments, Sector 89, Gurugram, Haryana 122505, India';
const phone = '07428522259';
const hours = [
  { days: 'Monday–Saturday', opening: '5:00 AM', closing: '10:00 PM' },
  { days: 'Sunday', opening: '9:00 AM', closing: '2:00 PM' },
];
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
const whatsappUrl =
  'https://wa.me/917428522259?text=Hi%20Fit%20Club%2089%2C%20I%20want%20to%20know%20about%20membership';

export function Redesign() {
  return (
    <section className="fit89-contact">
      <style>{`
        .fit89-contact {
          --fc-red: #ed343b;
          --fc-green: #1fb76a;
          min-height: 100vh;
          padding: clamp(54px, 8vw, 104px) 24px;
          color: #f5f3f0;
          background:
            radial-gradient(ellipse at 4% 9%, rgba(237, 52, 59, .10), transparent 34%),
            #111110;
          font-family: Manrope, 'Avenir Next', sans-serif;
          box-sizing: border-box;
        }
        .fit89-contact *, .fit89-contact *::before, .fit89-contact *::after { box-sizing: border-box; }
        .fc-shell { max-width: 1160px; margin: 0 auto; }
        .fc-kicker {
          display: flex; align-items: center; gap: 11px; margin: 0 0 18px;
          color: #f16b6f; font-size: 11px; font-weight: 800; letter-spacing: .19em; text-transform: uppercase;
        }
        .fc-kicker::before { content: ''; width: 25px; height: 2px; background: var(--fc-red); }
        .fc-heading {
          max-width: 720px; margin: 0; font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(54px, 8.4vw, 100px); font-weight: 400; letter-spacing: .015em;
          line-height: .88; text-transform: uppercase;
        }
        .fc-heading em { color: var(--fc-red); font-style: normal; }
        .fc-intro { margin: 20px 0 0; color: #aaa8a5; font-size: 15px; line-height: 1.7; }
        .fc-layout {
          display: grid; grid-template-columns: minmax(0, .91fr) minmax(360px, 1.09fr);
          gap: clamp(36px, 7vw, 88px); align-items: stretch; margin-top: 48px;
        }
        .fc-actions { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
        .fc-action {
          min-height: 84px; padding: 16px 18px; display: flex; align-items: center; justify-content: space-between; gap: 12px;
          color: #fff; text-decoration: none; border: 1px solid transparent; border-radius: 4px;
          transition: transform .18s ease, background .18s ease, border-color .18s ease;
        }
        .fc-action:hover { transform: translateY(-2px); }
        .fc-action:focus-visible, .fc-map-link:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }
        .fc-action-call { background: var(--fc-red); }
        .fc-action-call:hover { background: #d92830; }
        .fc-action-chat { background: var(--fc-green); }
        .fc-action-chat:hover { background: #149a56; }
        .fc-action-copy { display: flex; flex-direction: column; gap: 5px; }
        .fc-action-label { font-size: 15px; font-weight: 800; }
        .fc-action-note { color: rgba(255,255,255,.8); font-size: 11px; font-weight: 600; }
        .fc-action-icon { flex: 0 0 auto; }
        .fc-info { margin-top: 30px; border-top: 1px solid #343331; }
        .fc-info-row { display: grid; grid-template-columns: 22px 1fr; gap: 14px; padding: 19px 0; border-bottom: 1px solid #343331; }
        .fc-info-icon { margin-top: 2px; color: #f26064; }
        .fc-label { margin: 0 0 7px; color: #92908d; font-size: 10px; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }
        .fc-value { margin: 0; color: #efeeeb; font-size: 13px; line-height: 1.7; }
        .fc-map-card { min-height: 390px; overflow: hidden; position: relative; border: 1px solid #373634; background: #191918; }
        .fc-map-card iframe { display: block; width: 100%; height: 100%; min-height: 390px; border: 0; }
        .fc-map-caption {
          position: absolute; right: 14px; bottom: 14px; left: 14px; display: flex; justify-content: space-between;
          align-items: center; gap: 16px; padding: 15px 17px; background: rgba(17,17,16,.95); border: 1px solid #383735;
        }
        .fc-map-caption strong { display: block; margin-bottom: 4px; font-size: 13px; }
        .fc-map-caption span { color: #aaa8a5; font-size: 11px; }
        .fc-map-link { display: inline-flex; flex: 0 0 auto; align-items: center; gap: 7px; color: #ff6a6e; font-size: 10px; font-weight: 800; letter-spacing: .08em; text-decoration: none; text-transform: uppercase; }
        @media (max-width: 760px) {
          .fit89-contact { padding: 62px 18px; }
          .fc-layout { grid-template-columns: 1fr; gap: 30px; margin-top: 34px; }
          .fc-actions { grid-template-columns: 1fr; }
          .fc-action { min-height: 76px; }
          .fc-map-card, .fc-map-card iframe { min-height: 300px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .fc-action { transition: none; }
        }
      `}</style>
      <div className="fc-shell">
        <header>
          <p className="fc-kicker">Fit Club 89 · Sector 89, Gurugram</p>
          <h2 className="fc-heading">Your next move.<br /><em>Starts here.</em></h2>
          <p className="fc-intro">Membership questions or planning a visit? Reach us directly.</p>
        </header>

        <div className="fc-layout">
          <div>
            <div className="fc-actions" aria-label="Contact Fit Club 89">
              <a className="fc-action fc-action-call" href={`tel:${phone}`}>
                <span className="fc-action-copy"><span className="fc-action-label">Call Now</span><span className="fc-action-note">{phone}</span></span>
                <Phone className="fc-action-icon" size={21} strokeWidth={2.2} />
              </a>
              <a className="fc-action fc-action-chat" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <span className="fc-action-copy"><span className="fc-action-label">Chat on WhatsApp</span><span className="fc-action-note">Ask about membership</span></span>
                <svg className="fc-action-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20.1 11.7a8.1 8.1 0 0 1-12 7.1L3 20l1.3-5a8.1 8.1 0 1 1 15.8-3.3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M8.4 8.1c.2-.4.4-.4.7-.4h.4c.2 0 .3.1.4.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4 0 .6.5.9 1.3 1.7 2.2 2.2.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.3.6-.1.7-.5 1.3-1.1 1.6-.6.4-1.4.5-2.2.2-1.1-.3-2.5-1.1-3.8-2.5-1.1-1.2-1.8-2.6-2-3.7-.1-.7.2-1.4.6-1.7Z" fill="currentColor" />
                </svg>
              </a>
            </div>

            <div className="fc-info">
              <div className="fc-info-row">
                <MapPin className="fc-info-icon" size={18} />
                <div><p className="fc-label">Address</p><p className="fc-value">{address}</p></div>
              </div>
              <div className="fc-info-row">
                <Phone className="fc-info-icon" size={17} />
                <div><p className="fc-label">Phone</p><a className="fc-value" style={{ color: 'inherit', textDecoration: 'none' }} href={`tel:${phone}`}>{phone}</a></div>
              </div>
              <div className="fc-info-row">
                <Clock3 className="fc-info-icon" size={18} />
                <div>
                  <p className="fc-label">Hours</p>
                  <div className="fc-value" style={{ display: 'grid', gap: 4 }}>
                    {hours.map(({ days, opening, closing }) => (
                      <div key={days}>{days}<span style={{ color: '#aaa8a5' }}> · </span>{opening}–{closing}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fc-map-card">
            <iframe title="Map showing Fit Club 89 near Petal Apartments in Sector 89, Gurugram" src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div className="fc-map-caption">
              <div><strong>Find us in Sector 89</strong><span>NBCC Heights · near Petal Apartments</span></div>
              <a className="fc-map-link" href={mapsUrl} target="_blank" rel="noopener noreferrer">Open Maps <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
