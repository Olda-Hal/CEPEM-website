import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Phone, ArrowRight, CheckCircle, ChevronRight, Navigation } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Clinics: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero & Search Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800 mb-6">
              Najděte kliniku <br /><span className="text-cyan-600">ve svém okolí.</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-md leading-relaxed">
              Získejte přístup k lékařské péči světové úrovně v kterémkoli z našich vybraných klinických prostředí. Špičková péče, blíže k vám.
            </p>
          </motion.div>
          
          <div className="flex flex-col gap-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="text-slate-400 w-5 h-5" />
              </div>
              <input 
                className="w-full pl-12 pr-6 py-4 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-cyan-600/40 focus:bg-white transition-all placeholder:text-slate-400" 
                placeholder="Hledat podle města, PSČ nebo specializace..." 
                type="text" 
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              <FilterChip label="Všechny lokality" active />
              <FilterChip label="Specializovaná chirurgie" />
              <FilterChip label="Diagnostika" />
              <FilterChip label="Primární péče" />
            </div>
          </div>
        </div>
      </section>

      {/* Clinics Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Featured Clinic */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="md:col-span-8 bg-slate-50 rounded-xl overflow-hidden flex flex-col md:flex-row group shadow-sm border border-slate-100"
        >
          <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
            <img 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjqLkrawLSq4-3cmdoQzSyAfvmiotLgCUG5HOWxAyZVv26P36N5BMedXLK54A4r8qW-k71pdPlorHoALhu0_hBS1TM8zCmHjAxBm0iaTtIQWNaqViyNrYblfnYX64SuvQKUh0rV2L3vcX7mvyKZY1Y-BPH8LgY_dsUTlCOzUZJNWi_wbLQ8ImFWRcjRLPuFFWw8uNqP1PWwRzDTZfKTO5Fa0ouwhl3QHzPIC14z7CJxZ1ZUfhiSgS4SPfjtlJJSErGZIVrK-rNNYQ"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-teal-300 rounded-full animate-pulse"></span>
              Hlavní Centrum
            </div>
          </div>
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Metropolitní Institut</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="text-cyan-600 w-5 h-5 mt-0.5" />
                <p className="text-slate-600 text-sm leading-relaxed">Madison Avenue 742, Upper East Side,<br />New York, NY 10065</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-cyan-600 w-5 h-5" />
                <p className="text-slate-600 text-sm font-medium">+1 (212) 555-0198</p>
              </div>
            </div>
            <button className="self-start text-cyan-600 font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
              Zobrazit detaily <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Small Card 1 */}
        <div className="md:col-span-4 bg-white rounded-xl p-8 flex flex-col justify-between shadow-sm border border-slate-100">
          <div>
            <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="text-cyan-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Harbor Diagnostika</h3>
            <p className="text-slate-600 text-sm mb-6">Specializuje se na pokročilé zobrazovací metody a služby genomického testování.</p>
          </div>
          <div className="pt-6 border-t border-slate-100">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Lokalita</p>
            <p className="text-sm text-slate-800 font-medium">Boston Seaport District</p>
            <p className="text-xs text-slate-500 mt-1">+1 (617) 555-0122</p>
          </div>
        </div>

        {/* Small Card 2 */}
        <div className="md:col-span-4 bg-slate-50 rounded-xl overflow-hidden group border border-slate-100">
          <div className="h-48 relative">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI30VG-nPW-gj7bjYRDDWQYl3ZCTCgNRdknWg-qqkmCordYCaw5RLBSXRc7HPy-mZaUgTNjmPx0m5dbjflGXSZcnfVBmKQeklQUxczuGNje8h9SGLiEptfURlBjKOMXzrhIRXgCqEhWWGxR2bwn1j0XGmhrBL2TgFtHFvIGHeQ_d4l4250uPU_rrtDs6WcFFjUzLisJaPR5mKecwUgomGwQgw3AaLvRkR2-ZlviEX_65ZK4LGaVHklilgR31R8TYFgu82TU8pBNJU"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-2">Pacific Wellness Hub</h3>
            <p className="text-slate-500 text-xs mb-4">Ocean Drive 102, Santa Monica, CA</p>
            <div className="flex justify-between items-center">
              <span className="text-teal-600 text-xs font-bold flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Nyní otevřeno
              </span>
              <button className="p-2 rounded-full bg-slate-200 text-slate-700">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Asymmetric Wide Card */}
        <div className="md:col-span-8 bg-slate-800 rounded-xl p-10 flex flex-col md:flex-row items-center gap-10 text-white">
          <div className="flex-1 order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Chirurgické centrum Lakeside</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Naše přední chirurgické zařízení s 12 nejmodernějšími operačními sály a luxusními regeneračními apartmány s výhledem na Michiganské jezero.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Adresa</p>
                <p className="text-xs font-medium">405 E Michigan Ave, Chicago</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Telefon</p>
                <p className="text-xs font-medium">+1 (312) 555-0450</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-40 md:h-56 bg-white/10 rounded-lg overflow-hidden order-1 md:order-2">
            <img 
              className="w-full h-full object-cover mix-blend-overlay opacity-80" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSYnq_qF5JJ2arf-9mR_qdN1xsIci7Qk0ueteaU9cooBjqwcu--LrpL2yNN35STBoKmWCnyOr76cqFjpckpWSkF-vXBy3-7rW5n3HVYK-DI9RI4K1jQkvfDRAh-iJH-d9Ypyn4Ng-LP7ZsuU5uoIthstxyXOFF2z2SRFAqVdjDz3DkUc_3xhSkEb1jqpbaX68r4KK9hgtdoAabnHBs5PwRihEx7TRhpWeB0S3H2cz4sIOESCalqogI-wVNWUDGRv9WMcYn4EkvTms"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Small Cards */}
        <ClinicSmallCard 
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuC5vJ_R_tZKL_XDnD585SWe57Q8yO0kVPI-2NhvJYB6IcLPMbPWU8g0ZzoHynWvbiaHC7HbQj3rzzPPIDCiqBOs-g41gs3R1izZqnhXv-GGz3xBLBvnB0kqv5i37mpk56bR7ikwFZ72q9Zh-ByASukz4mCWeEhXaUp4-pTWtJA6CCFP6RvX29E2wOiDb9S1xjliROSXG9mFTWOty88IkzFTY68y3kyU5nPhSus7qWRpNAJsHx6uDG32I9TfIx1zUxW_MeEAfsivdjg"
          title="Austin Care Point"
          address="Congress Ave 801, Austin, TX 78701"
        />
        <ClinicSmallCard 
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuC1cmMnh_0P5sWPMb4uP7tvYWtM6JJoUwPXo1rB2-tDzfYOyHhoGLWVHfuYo64VsRdBWBOOJ6xL4td6xIGY6yjFXorzL01lwfWs9oXmHSvkdrZbLJ-SjY6PXPwC75p5pPz_WSwjrIPirnSYZFXyLt6vYtTco6m2YRz5M6JHdAFpiLkOrHQNq2uHKsHRCXXCGZ4iurNpjDg4tL-zK_PU3tV74Rovy75xknni0Gvdhey3zufcjG44JI5XufwZb0ry6UWwWi0ukYk2bE8"
          title="Evergreen Pediatrie"
          address="Pine St 1201, Seattle, WA 98101"
        />
      </section>

      {/* CTA Section */}
      <section className="mt-24 rounded-3xl bg-cyan-50 p-12 text-center">
        <h2 className="text-3xl font-extrabold text-slate-800 mb-4">Nenašli jste lokalitu?</h2>
        <p className="text-slate-600 max-w-xl mx-auto mb-8">
          Naše síť se neustále rozšiřuje. Přihlaste se k odběru novinek, abyste byli informováni, až otevřeme kliniku ve vašem městě.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input 
            className="px-6 py-3 rounded-full bg-white border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-cyan-600 min-w-[300px]" 
            placeholder="Zadejte váš e-mail" 
            type="email" 
          />
          <Button variant="secondary" className="rounded-full px-8">Informujte mě</Button>
        </div>
      </section>
    </div>
  );
};

const FilterChip: React.FC<{ label: string; active?: boolean }> = ({ label, active }) => (
  <button className={cn(
    "whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-colors",
    active ? "bg-cyan-600 text-white" : "bg-slate-200 text-slate-700 hover:bg-slate-300"
  )}>
    {label}
  </button>
);

const ClinicSmallCard: React.FC<{ image: string; title: string; address: string }> = ({ image, title, address }) => (
  <div className="md:col-span-6 bg-slate-50 rounded-xl p-8 group flex items-start gap-6 border border-slate-100">
    <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
      <img className="w-full h-full object-cover" src={image} referrerPolicy="no-referrer" />
    </div>
    <div className="flex-1">
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
      <p className="text-slate-500 text-xs mt-1 mb-4">{address}</p>
      <div className="flex items-center gap-4">
        <button className="text-cyan-600 text-sm font-semibold flex items-center gap-1 hover:text-cyan-800 transition-colors">
          <Phone className="w-4 h-4" /> Zavolat
        </button>
        <button className="text-cyan-600 text-sm font-semibold flex items-center gap-1 hover:text-cyan-800 transition-colors">
          <Navigation className="w-4 h-4" /> Navigovat
        </button>
      </div>
    </div>
  </div>
);

import { cn } from '@/src/lib/utils';
