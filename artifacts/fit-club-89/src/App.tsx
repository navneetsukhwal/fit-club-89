import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUp, Check, Dumbbell, Instagram, MapPin, Menu, Phone, Star, X } from 'lucide-react';
import { business, stockPhoto } from './business';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Why us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

const values = [
  { title: 'Consistency', text: 'Make every workout count.', icon: Check, number: '01' },
  { title: 'Strength', text: 'Work towards becoming stronger.', icon: Dumbbell, number: '02' },
  { title: 'Commitment', text: 'Build sustainable fitness habits.', icon: ArrowRight, number: '03' },
  { title: 'Community', text: 'Make fitness part of your lifestyle.', icon: Star, number: '04' },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [formMessage, setFormMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const submittingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll('.rise');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null);
      if (event.key === 'ArrowRight') setLightbox((current) => current === null ? null : (current + 1) % business.gallery.length);
      if (event.key === 'ArrowLeft') setLightbox((current) => current === null ? null : (current + business.gallery.length - 1) % business.gallery.length);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  const handleForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submittingRef.current) return;
    setFormError('');
    setFormMessage('');
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    if (!name) {
      setFormError('Please enter your name.');
      return;
    }
    if (!phone || !/^[+()\-\s\d]{7,20}$/.test(phone)) {
      setFormError('Please enter a valid phone number.');
      return;
    }
    submittingRef.current = true;
    setSubmitting(true);
    window.setTimeout(() => {
      setFormMessage('This form is a frontend demonstration only. Your details were not sent and no callback has been requested. Please call the gym directly.');
      setSubmitting(false);
      submittingRef.current = false;
      form.reset();
    }, 450);
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`;

  return (
    <div className="grain min-h-[100dvh] overflow-hidden bg-[#090909] text-[#f5f5f5]">
      <header className={`topbar fixed inset-x-0 top-0 z-40 border-b ${scrolled ? 'border-white/10 bg-[#090909]/95 backdrop-blur-sm' : 'border-transparent bg-gradient-to-b from-black/65 to-transparent'}`}>
        <div className="wrap flex h-[76px] items-center justify-between">
          <a href="#home" aria-label="Fit Club 89 home" className="flex items-center gap-2.5" data-testid="link-brand-home">
            <span className="grid h-9 w-9 place-items-center bg-[#ff3030]"><Dumbbell size={19} strokeWidth={2.5} /></span>
            <span className="display text-[25px] leading-none tracking-wide">FIT CLUB <span className="text-[#ff4545]">89</span></span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navItems.map((item) => <a key={item.href} href={item.href} className="text-[11px] font-extrabold uppercase tracking-[.12em] text-white/75 transition hover:text-[#ff4545]" data-testid={`link-nav-${item.label.toLowerCase().replace(' ', '-')}`}>{item.label}</a>)}
          </nav>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary hidden !px-5 !py-3 md:inline-flex" data-testid="link-get-started">LET'S GET STARTED <ArrowRight size={14} /></a>
          <button className="grid h-10 w-10 place-items-center border border-white/20 md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} data-testid="button-mobile-menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && <nav className="menu-panel border-t border-white/10 bg-[#101010] px-5 py-4 md:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block border-b border-white/5 py-3 text-xs font-extrabold uppercase tracking-[.15em] text-white/80" data-testid={`link-mobile-${item.label.toLowerCase().replace(' ', '-')}`}>{item.label}</a>)}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary mt-4 w-full" data-testid="link-mobile-cta">LET'S GET STARTED <ArrowRight size={14} /></a>
        </nav>}
      </header>

      <main>
        <section id="home" className="relative flex min-h-[720px] items-end pb-16 pt-32 md:min-h-[800px] md:pb-24">
          <img src={stockPhoto('photo-1534438327276-14e5300c3a48', 2000)} alt="Illustrative stock image of a contemporary gym interior, not Fit Club 89 premises" className="absolute inset-0 h-full w-full object-cover object-center" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-black/35" />
          <div className="wrap relative z-10 grid items-end gap-12 lg:grid-cols-[1fr_auto]">
            <div className="max-w-[790px]">
              <div className="hero-enter eyebrow mb-5 flex items-center gap-3" style={{ animationDelay: '.08s' }}><span className="red-rule" />YOUR FITNESS. YOUR STRENGTH. YOUR CLUB.</div>
              <h1 className="display hero-enter text-[clamp(4.3rem,10vw,9.3rem)] leading-[.8] tracking-tight" style={{ animationDelay: '.18s' }}>
                BUILD YOUR<br /><span className="text-[#ff3030]">STRONGER</span><br />SELF.
              </h1>
              <p className="hero-enter mt-7 max-w-[470px] text-sm leading-7 text-white/70 md:text-base" style={{ animationDelay: '.28s' }}>Train with purpose. Build strength. Push your limits. Take the next step in your fitness journey at Fit Club 89.</p>
              <div className="hero-enter mt-8 flex flex-wrap gap-3" style={{ animationDelay: '.36s' }}>
                <a href="#contact" className="btn-primary" data-testid="link-hero-join">JOIN THE CLUB <ArrowRight size={15} /></a>
                <a href="#facilities" className="btn-outline border-white/40 text-white" data-testid="link-hero-explore">EXPLORE THE GYM <ArrowDown size={14} /></a>
              </div>
            </div>
            <a href="#reviews" className="hero-enter mb-1 flex items-center gap-3 border-l-2 border-[#ff3030] bg-black/45 px-5 py-3 backdrop-blur-sm" style={{ animationDelay: '.45s' }} aria-label="Business-provided rating: 4.9 out of 5 from 467 reviews" data-testid="link-hero-rating">
              <span className="flex gap-0.5 text-[#ff3030]" aria-hidden="true">{[1,2,3,4,5].map((n) => <Star key={n} size={13} fill="currentColor" />)}</span>
              <span className="text-xs font-bold">{business.rating}/{business.ratingOutOf} <span className="text-white/55">· {business.reviews} Reviews</span></span>
            </a>
          </div>
          <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] font-bold tracking-[.25em] text-white/45 md:flex">
            <span>SCROLL TO EXPLORE</span><span className="h-10 w-px animate-pulse bg-[#ff3030]" />
          </div>
          <span className="image-credit absolute bottom-5 right-6 z-10">Illustrative stock imagery · Unsplash</span>
        </section>

        <section id="about" className="section-pad relative bg-[#0d0d0d]">
          <div className="wrap grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-20">
            <div className="rise relative">
              <div className="absolute -left-3 -top-3 z-0 h-24 w-24 border-l border-t border-[#ff3030]/70" />
              <img src={stockPhoto('photo-1517836357463-d25dfeac3438', 1100)} loading="lazy" alt="Illustrative stock photo of a person preparing for a fitness training session" className="relative z-10 aspect-[.93] w-full object-cover grayscale-[20%]" />
              <div className="absolute -bottom-4 -right-4 z-20 bg-[#ff3030] px-5 py-4"><span className="display text-4xl">89</span><span className="ml-2 text-[9px] font-extrabold uppercase tracking-[.15em]">Sector 89, Gurugram</span></div>
            </div>
            <div className="rise">
              <div className="eyebrow mb-5">ABOUT FIT CLUB 89</div>
              <h2 className="display max-w-[620px] text-[clamp(3.2rem,6vw,5.5rem)] leading-[.9]">MORE THAN A WORKOUT.<br /><span className="text-[#ff3030]">A STRONGER WAY</span><br />OF LIFE.</h2>
              <div className="red-rule my-7" />
              <p className="max-w-[570px] text-sm leading-7 text-[#a3a3a3]">Fitness is built in the choices you repeat. Fit Club 89 is a local fitness destination in Sector 89, Gurugram — a place to make space for movement, develop consistency, and take your next step at your own pace.</p>
              <p className="mt-4 max-w-[570px] text-sm leading-7 text-[#a3a3a3]">Whether you are finding your rhythm or returning to a routine, start with a conversation and discover what works for you.</p>
              <a href="#contact" className="btn-outline mt-8" data-testid="link-about-contact">TALK TO THE CLUB <ArrowRight size={14} /></a>
            </div>
          </div>
          <p className="image-credit wrap mt-8">Image is illustrative stock photography, not a verified photograph of Fit Club 89.</p>
        </section>

        <section id="facilities" className="section-pad bg-[#090909]">
          <div className="wrap">
            <div className="rise mb-11 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div><div className="eyebrow mb-4">TRAIN WITH PURPOSE</div><h2 className="display max-w-[740px] text-[clamp(3.1rem,6vw,5.5rem)] leading-[.88]">EVERY REP. EVERY SET.<br /><span className="text-[#ff3030]">EVERY STEP FORWARD.</span></h2></div>
              <p className="max-w-[260px] pb-1 text-xs leading-6 text-[#969696]">Explore ideas for your fitness journey. Categories below are proposed content and must be confirmed before publication.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {business.proposedCategories.map((item, index) => <article key={item.title} className="rise group relative min-h-[330px] overflow-hidden border border-white/10 bg-[#171717]" style={{ transitionDelay: `${index * 65}ms` }}>
                <div className="card-image absolute inset-0 overflow-hidden"><img src={stockPhoto(item.image, 900)} loading="lazy" alt={`Illustrative stock image for proposed ${item.title.toLowerCase()} category`} className="h-full w-full object-cover opacity-55 grayscale-[15%] group-hover:opacity-75" /></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="eyebrow text-[9px]">PROPOSED CATEGORY · EDIT BEFORE PUBLISHING</span>
                  <h3 className="display mt-3 text-3xl">{item.title}</h3>
                  <div className="mt-2 flex items-end justify-between gap-4"><p className="max-w-[270px] text-xs leading-5 text-white/65">{item.text}</p><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/40 transition group-hover:border-[#ff3030] group-hover:bg-[#ff3030]"><ArrowDownRight size={16} /></span></div>
                </div>
              </article>)}
            </div>
            <p className="image-credit mt-5">All card imagery is illustrative stock imagery (Unsplash), not a depiction of confirmed Fit Club 89 facilities or services.</p>
          </div>
        </section>

        <section id="why-us" className="section-pad border-y border-white/5 bg-[#131313]">
          <div className="wrap">
            <div className="rise mb-12 grid gap-6 md:grid-cols-[1fr_.7fr] md:items-end">
              <div><div className="eyebrow mb-4">THE WORK IS YOURS</div><h2 className="display text-[clamp(3.4rem,7vw,6.2rem)] leading-[.87]">YOUR GOALS.<br /><span className="text-[#ff3030]">YOUR GRIND.</span><br />YOUR PROGRESS.</h2></div>
              <p className="max-w-[360px] text-sm leading-7 text-[#a3a3a3] md:justify-self-end">No shortcuts, no promises of overnight change. Just a place to show up, build a routine, and keep moving forward.</p>
            </div>
            <div className="grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {values.map(({ title, text, icon: Icon, number }, index) => <article key={title} className="rise group border-b border-white/10 py-7 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0" style={{ transitionDelay: `${index * 70}ms` }}>
                <div className="mb-8 flex items-start justify-between"><Icon size={22} className="text-[#ff3030]" strokeWidth={1.5} /><span className="display text-xl text-white/25">{number}</span></div>
                <h3 className="display text-3xl transition group-hover:text-[#ff4545]">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#a3a3a3]">{text}</p>
              </article>)}
            </div>
          </div>
        </section>

        <section id="reviews" className="relative overflow-hidden bg-[#ff3030] py-16 md:py-20">
          <div className="absolute -right-12 -top-28 select-none font-display text-[370px] leading-none text-black/[.08]">89</div>
          <div className="wrap relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="rise"><div className="text-[10px] font-extrabold uppercase tracking-[.2em] text-black/65">BUSINESS-PROVIDED RATING</div><div className="display mt-2 text-[clamp(5rem,10vw,8rem)] leading-[.8]">4.9<span className="text-4xl"> / 5</span></div>
              <div className="mt-5 flex items-center gap-3"><span className="flex gap-1 text-[#151515]" aria-label="Five stars">{[1,2,3,4,5].map((n) => <Star key={n} size={18} fill="currentColor" />)}</span><span className="text-xs font-extrabold">{business.reviews} customer reviews</span></div>
            </div>
            <div className="rise max-w-sm md:text-right"><p className="text-sm leading-6 text-black/75">A rating and review count shared by the business. We do not publish individual review quotations here.</p>
              <a href={business.instagramUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 border border-black/35 px-5 py-3 text-[10px] font-extrabold tracking-[.13em] transition hover:bg-black hover:text-white" data-testid="link-connect-instagram">CONNECT WITH US <Instagram size={15} /></a>
            </div>
          </div>
        </section>

        <section id="gallery" className="section-pad bg-[#0d0d0d]">
          <div className="wrap">
            <div className="rise mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="eyebrow mb-4">THE FITNESS LIFESTYLE</div><h2 className="display text-[clamp(3.3rem,6vw,5.4rem)] leading-[.9]">INSIDE THE <span className="text-[#ff3030]">FITNESS</span><br />LIFESTYLE</h2></div><p className="max-w-[310px] text-xs leading-5 text-[#a3a3a3]">A visual moodboard of training and movement. These are illustrative stock images, not photos of this location.</p></div>
            <div className="gallery-grid rise">
              {business.gallery.map((item, index) => <button key={item.image} onClick={() => setLightbox(index)} className="card-image group relative min-h-0 overflow-hidden bg-[#1c1c1c] text-left" aria-label={`Expand image ${index + 1}: ${item.alt}`} data-testid={`button-gallery-image-${index + 1}`}>
                <img src={stockPhoto(item.image, 1000)} loading="lazy" alt={item.alt} className="h-full w-full object-cover opacity-75 grayscale-[12%] group-hover:opacity-100" />
                <span className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent opacity-70" />
                <span className="absolute bottom-3 left-3 text-[9px] font-extrabold uppercase tracking-[.12em] text-white/80">FITNESS / 0{index + 1}</span>
              </button>)}
            </div>
            <p className="image-credit mt-4">Illustrative stock imagery · Unsplash. Replace with verified club photography to show the actual premises.</p>
          </div>
        </section>

        <section id="contact" className="section-pad bg-[#090909]">
          <div className="wrap">
            <div className="rise mb-12"><div className="eyebrow mb-4">YOUR NEXT REP STARTS HERE</div><h2 className="display text-[clamp(4rem,9vw,8rem)] leading-[.82]">READY TO GET<br /><span className="text-[#ff3030]">STARTED?</span></h2></div>
            <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr]">
              <div className="rise">
                <div className="mb-6 border-t border-white/15 pt-5"><span className="eyebrow">VISIT THE CLUB</span><h3 className="display mt-2 text-3xl">{business.name}</h3></div>
                <div className="flex gap-4 border-t border-white/10 py-5"><MapPin size={18} className="mt-1 shrink-0 text-[#ff4545]" /><p className="max-w-[400px] text-sm leading-6 text-[#b4b4b4]">{business.address}</p></div>
                <a href={`tel:${business.phone}`} className="flex items-center gap-4 border-t border-white/10 py-5 text-sm font-bold transition hover:text-[#ff4545]" data-testid="link-call-contact"><Phone size={18} className="text-[#ff4545]" />{business.phone}</a>
                <a href={business.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 border-t border-white/10 py-5 text-sm font-bold transition hover:text-[#ff4545]" data-testid="link-instagram-contact"><Instagram size={18} className="text-[#ff4545]" />{business.instagramHandle}</a>
                <div className="mt-3 flex flex-wrap gap-3"><a href={`tel:${business.phone}`} className="btn-primary" data-testid="link-call-gym">CALL THE GYM <Phone size={14} /></a><a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-outline" data-testid="link-directions">GET DIRECTIONS <ArrowRight size={14} /></a><a href={business.instagramUrl} target="_blank" rel="noreferrer" className="btn-outline" data-testid="link-follow-instagram">FOLLOW ON INSTAGRAM <Instagram size={14} /></a></div>
                <div className="mt-8 border border-white/10 bg-[#121212] p-5">
                  <div className="eyebrow mb-3">FIND US IN SECTOR 89</div>
                  <p className="text-xs leading-5 text-[#a3a3a3]">NBCC Heights, near Petal Apartments<br />Pataudi Road · Gurugram, Haryana 122505</p>
                  <a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-[10px] font-extrabold tracking-[.12em] text-[#ff4545]" data-testid="link-location-map">OPEN ADDRESS IN MAPS <ArrowRight size={13} /></a>
                </div>
              </div>
              <div className="rise border border-white/10 bg-[#111] p-6 md:p-9">
                <div className="eyebrow mb-3">LET'S TALK</div><h3 className="display text-4xl md:text-5xl">REQUEST A CALLBACK</h3>
                <p className="mt-3 text-xs leading-5 text-[#a3a3a3]">Leave your details and the topic you would like to discuss.</p>
                <form className="mt-7 space-y-4" onSubmit={handleForm} noValidate>
                  <div><label htmlFor="full-name" className="mb-2 block text-[10px] font-extrabold uppercase tracking-[.13em]">Full name <span className="text-[#ff4545]">*</span></label><input id="full-name" name="name" autoComplete="name" className="field" required maxLength={100} placeholder="Your name" data-testid="input-full-name" /></div>
                  <div><label htmlFor="phone-number" className="mb-2 block text-[10px] font-extrabold uppercase tracking-[.13em]">Phone number <span className="text-[#ff4545]">*</span></label><input id="phone-number" type="tel" name="phone" autoComplete="tel" inputMode="tel" className="field" required maxLength={20} placeholder="Your phone number" data-testid="input-phone-number" /></div>
                  <div><label htmlFor="message" className="mb-2 block text-[10px] font-extrabold uppercase tracking-[.13em]">What would you like to know? <span className="font-medium normal-case tracking-normal text-white/45">(optional)</span></label><textarea id="message" name="message" rows={3} maxLength={500} className="field resize-y" placeholder="Tell us what you'd like to discuss" data-testid="input-message" /></div>
                  {formError && <p role="alert" className="border-l-2 border-[#ff3030] bg-[#ff3030]/10 px-3 py-2 text-xs text-[#ffb2b2]" data-testid="status-form-error">{formError}</p>}
                  {formMessage && <p role="status" aria-live="polite" className="border-l-2 border-[#ff3030] bg-[#ff3030]/10 px-3 py-3 text-xs leading-5 text-white/85" data-testid="status-form-feedback">{formMessage}</p>}
                  <button type="submit" disabled={submitting} className="btn-primary w-full disabled:cursor-wait disabled:opacity-60" data-testid="button-submit-callback">{submitting ? 'CHECKING DETAILS…' : 'REQUEST A CALLBACK'} <ArrowRight size={14} /></button>
                  <p className="text-[10px] leading-4 text-white/45">Frontend demonstration only. This form is not connected to a delivery service, so submitting it does not send your details or request a callback. Please call the gym directly.</p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#101010] py-8">
        <div className="wrap">
          <div className="grid gap-8 pb-8 md:grid-cols-[1.2fr_1fr_1fr]">
            <div><a href="#home" className="display text-3xl" data-testid="link-footer-brand">FIT CLUB <span className="text-[#ff3030]">89</span></a><p className="mt-2 max-w-[270px] text-xs leading-5 text-[#888]">Show up. Find your rhythm. Keep moving forward.</p></div>
            <div><div className="eyebrow mb-3">QUICK LINKS</div><nav className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-[.08em] text-white/65" aria-label="Footer navigation">{navItems.map((item) => <a key={item.href} href={item.href} className="hover:text-[#ff4545]" data-testid={`link-footer-${item.label.toLowerCase().replace(' ', '-')}`}>{item.label}</a>)}</nav></div>
            <div><div className="eyebrow mb-3">FIND THE CLUB</div><a href={`tel:${business.phone}`} className="block text-xs font-bold text-white/80 hover:text-[#ff4545]" data-testid="link-footer-phone">{business.phone}</a><p className="mt-2 max-w-[300px] text-[10px] leading-4 text-[#888]">{business.address}</p></div>
          </div>
          <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-[10px] text-[#777] sm:flex-row sm:items-center">
            <span>© {new Date().getFullYear()} Fit Club 89. All rights reserved.</span>
            <div className="flex items-center gap-5"><a href={business.instagramUrl} target="_blank" rel="noreferrer" aria-label="Fit Club 89 on Instagram" className="hover:text-[#ff4545]" data-testid="link-footer-instagram"><Instagram size={16} /></a><a href="#home" className="flex items-center gap-1.5 font-extrabold tracking-[.1em] hover:text-[#ff4545]" data-testid="link-back-to-top">BACK TO TOP <ArrowUp size={13} /></a></div>
          </div>
        </div>
      </footer>

      {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Fitness image viewer" onClick={() => setLightbox(null)}>
        <button className="absolute right-5 top-5 grid h-11 w-11 place-items-center border border-white/35 bg-black/40 text-white hover:bg-[#ff3030]" onClick={() => setLightbox(null)} aria-label="Close image viewer" data-testid="button-lightbox-close"><X size={22} /></button>
        <button className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/35 bg-black/40 text-white hover:bg-[#ff3030] md:left-8" onClick={(event) => { event.stopPropagation(); setLightbox((lightbox + business.gallery.length - 1) % business.gallery.length); }} aria-label="Previous image" data-testid="button-lightbox-previous"><ArrowRight className="rotate-180" size={20} /></button>
        <img src={stockPhoto(business.gallery[lightbox].image, 1800)} alt={business.gallery[lightbox].alt} onClick={(event) => event.stopPropagation()} />
        <button className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/35 bg-black/40 text-white hover:bg-[#ff3030] md:right-8" onClick={(event) => { event.stopPropagation(); setLightbox((lightbox + 1) % business.gallery.length); }} aria-label="Next image" data-testid="button-lightbox-next"><ArrowRight size={20} /></button>
        <p className="absolute bottom-5 text-center text-[10px] text-white/65">Illustrative stock photography · {business.gallery[lightbox].alt}</p>
      </div>}
    </div>
  );
}

export default App;
