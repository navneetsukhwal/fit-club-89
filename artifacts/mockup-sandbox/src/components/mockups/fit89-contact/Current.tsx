import './_group.css';
import { ArrowRight, Instagram, MapPin, Phone } from 'lucide-react';

const business = {
  name: 'Fit Club 89',
  phone: '07428522259',
  address: 'NBCC Heights, OR, Pataudi Road, near Petal Apartments, Sector 89, Gurugram, Haryana 122505, India',
  instagramHandle: '@fitclub_89',
  instagramUrl: 'https://www.instagram.com/fitclub_89/',
};
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`;

export function Current() {
  return (
    <section id="contact" className="section-pad bg-[#090909]">
      <div className="wrap">
        <div className="rise mb-12">
          <div className="eyebrow mb-4">YOUR NEXT REP STARTS HERE</div>
          <h2 className="display text-[clamp(4rem,9vw,8rem)] leading-[.82]">
            READY TO GET<br /><span className="text-[#ff3030]">STARTED?</span>
          </h2>
        </div>
        <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <div className="rise">
            <div className="mb-6 border-t border-white/15 pt-5">
              <span className="eyebrow">VISIT THE CLUB</span>
              <h3 className="display mt-2 text-3xl">{business.name}</h3>
            </div>
            <div className="flex gap-4 border-t border-white/10 py-5">
              <MapPin size={18} className="mt-1 shrink-0 text-[#ff4545]" />
              <p className="max-w-[400px] text-sm leading-6 text-[#b4b4b4]">{business.address}</p>
            </div>
            <a href={`tel:${business.phone}`} className="flex items-center gap-4 border-t border-white/10 py-5 text-sm font-bold transition hover:text-[#ff4545]">
              <Phone size={18} className="text-[#ff4545]" />{business.phone}
            </a>
            <a href={business.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 border-t border-white/10 py-5 text-sm font-bold transition hover:text-[#ff4545]">
              <Instagram size={18} className="text-[#ff4545]" />{business.instagramHandle}
            </a>
            <div className="mt-3 flex flex-wrap gap-3">
              <a href={`tel:${business.phone}`} className="btn-primary">CALL THE GYM <Phone size={14} /></a>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-outline">GET DIRECTIONS <ArrowRight size={14} /></a>
              <a href={business.instagramUrl} target="_blank" rel="noreferrer" className="btn-outline">FOLLOW ON INSTAGRAM <Instagram size={14} /></a>
            </div>
            <div className="mt-8 border border-white/10 bg-[#121212] p-5">
              <div className="eyebrow mb-3">FIND US IN SECTOR 89</div>
              <p className="text-xs leading-5 text-[#a3a3a3]">NBCC Heights, near Petal Apartments<br />Pataudi Road · Gurugram, Haryana 122505</p>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-[10px] font-extrabold tracking-[.12em] text-[#ff4545]">OPEN ADDRESS IN MAPS <ArrowRight size={13} /></a>
            </div>
          </div>
          <div className="rise border border-white/10 bg-[#111] p-6 md:p-9">
            <div className="eyebrow mb-3">LET'S TALK</div>
            <h3 className="display text-4xl md:text-5xl">REQUEST A CALLBACK</h3>
            <p className="mt-3 text-xs leading-5 text-[#a3a3a3]">Leave your details and the topic you would like to discuss.</p>
            <form className="mt-7 space-y-4" onSubmit={(event) => event.preventDefault()} noValidate>
              <div>
                <label htmlFor="full-name" className="mb-2 block text-[10px] font-extrabold uppercase tracking-[.13em]">Full name <span className="text-[#ff4545]">*</span></label>
                <input id="full-name" name="name" autoComplete="name" className="field" required maxLength={100} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="phone-number" className="mb-2 block text-[10px] font-extrabold uppercase tracking-[.13em]">Phone number <span className="text-[#ff4545]">*</span></label>
                <input id="phone-number" type="tel" name="phone" autoComplete="tel" inputMode="tel" className="field" required maxLength={20} placeholder="Your phone number" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-[10px] font-extrabold uppercase tracking-[.13em]">What would you like to know? <span className="font-medium normal-case tracking-normal text-white/45">(optional)</span></label>
                <textarea id="message" name="message" rows={3} maxLength={500} className="field resize-y" placeholder="Tell us what you'd like to discuss" />
              </div>
              <button type="submit" className="btn-primary w-full">REQUEST A CALLBACK <ArrowRight size={14} /></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
