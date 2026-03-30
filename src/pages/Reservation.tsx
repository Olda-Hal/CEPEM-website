import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Stethoscope, Calendar as CalendarIcon, ShieldCheck, ChevronLeft, ChevronRight, Check, Clock, Microscope, Syringe, ClipboardList, User } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { cn } from '@/src/lib/utils';

export const Reservation: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedClinic, setSelectedClinic] = useState<string | null>('Metropolitní klinika');
  const [selectedService, setSelectedService] = useState<string | null>('Diagnostika');
  const [selectedDate, setSelectedDate] = useState<number | null>(3);
  const [selectedTime, setSelectedTime] = useState<string | null>('10:30');

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero Title Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold mb-4 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              PŘÍMÉ PLÁNOVÁNÍ
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 tracking-tighter leading-tight mb-6">
              Naplánujte si cestu <br /><span className="text-cyan-600">k lepšímu zdraví.</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-lg leading-relaxed">
              Využijte špičkovou preventivní péči s naším přehledným rezervačním systémem. Vyberte si kliniku a službu během několika okamžiků.
            </p>
          </div>
          
          <div className="flex gap-4">
            <StepIndicator number={1} label="Klinika" active={step >= 1} />
            <div className="w-12 h-[2px] bg-slate-200 self-center mb-6"></div>
            <StepIndicator number={2} label="Služba" active={step >= 2} />
            <div className="w-12 h-[2px] bg-slate-200 self-center mb-6"></div>
            <StepIndicator number={3} label="Termín" active={step >= 3} />
          </div>
        </div>
      </section>

      {/* Main Booking Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Selection Canvas */}
        <div className="lg:col-span-8 space-y-8">
          {/* Clinic Selection */}
          <div className="bg-slate-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-8 text-slate-800">Vyberte si pracoviště</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ClinicSelectionCard 
                title="Klinika Sever"
                address="Zdravotní distrikt 42, Budova A"
                distance="1.3 km od vás"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBl6AUZYcmB2HALoqWNifsQy1c7m7b5_xEqWQ68i_3LsRa7yOyHux9RFO4D4dyck75gmgCeI4N8lyt5V81sapInQMDNhHFTCcPsQKAir0VlvHI6h1hmWMPm_eAfLUkN_BnUU8yJEuVkxBqUYx18p80R4k8oy5o_Y0hR7RH5dXmdtJVbrdR0oaeQC6Mbmo3fhhIaJ_saYiript9_mKP0F_eoQ2ZmKvtzJYjDKAtOlfVwCWV1pCvlDaUriyxPT1vlv5ClIHfCJGLpgm0"
                selected={selectedClinic === 'Klinika Sever'}
                onClick={() => setSelectedClinic('Klinika Sever')}
              />
              <ClinicSelectionCard 
                title="Metropolitní klinika"
                address="Centrální náměstí, Věž B"
                distance="3.8 km od vás"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBrYQOJpAeO2y0IsIQMxAi_uX4UC6jI3fyCW3X7XlmyheCduJmuwF-RT_Za-4FENCo4l6PxfnudAeqNPCWdsb07zV2k8SDFQWwGtm4cBpnptUD9RBVmUoDGwW-cysR6Ig4tupEd9iVio07U-a6jZGzCR7iLsTBV12GO9spBPaj4fv8oxYoVEpyaz8iPunfVFwMkicp5FrzQE4mj4BJ0iMSk8cAmKFVbv49IynI8dohuoRaDeXe3w1r9msSwjzFPd4UknZcDs8h9Px8"
                selected={selectedClinic === 'Metropolitní klinika'}
                onClick={() => setSelectedClinic('Metropolitní klinika')}
              />
            </div>
          </div>

          {/* Service Selection */}
          <div className="bg-slate-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-8 text-slate-800">Vyberte službu</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ServiceOption 
                icon={<User className="w-8 h-8" />}
                label="Konzultace"
                selected={selectedService === 'Konzultace'}
                onClick={() => setSelectedService('Konzultace')}
              />
              <ServiceOption 
                icon={<Stethoscope className="w-8 h-8" />}
                label="Diagnostika"
                selected={selectedService === 'Diagnostika'}
                onClick={() => setSelectedService('Diagnostika')}
              />
              <ServiceOption 
                icon={<Syringe className="w-8 h-8" />}
                label="Očkování"
                selected={selectedService === 'Očkování'}
                onClick={() => setSelectedService('Očkování')}
              />
              <ServiceOption 
                icon={<Microscope className="w-8 h-8" />}
                label="Laboratoř"
                selected={selectedService === 'Laboratoř'}
                onClick={() => setSelectedService('Laboratoř')}
              />
            </div>
          </div>

          {/* Scheduling Section */}
          <div className="bg-slate-50 rounded-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-slate-800">Volné termíny</h2>
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-bold text-sm">Rijen 2026</span>
                <button className="p-2 rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-2 mb-8">
              {['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'].map(day => (
                <div key={day} className="text-center font-bold text-[10px] text-slate-400 uppercase py-2">{day}</div>
              ))}
              {[28, 29, 30].map(d => (
                <div key={d} className="h-12 flex items-center justify-center rounded text-slate-300 text-sm">{d}</div>
              ))}
              {[1, 2, 3, 4].map(d => (
                <button 
                  key={d}
                  onClick={() => setSelectedDate(d)}
                  className={cn(
                    "h-12 flex items-center justify-center rounded font-bold text-sm transition-all",
                    selectedDate === d 
                      ? "bg-cyan-600 text-white shadow-lg shadow-cyan-600/20" 
                      : "bg-white text-slate-800 hover:ring-2 ring-cyan-600/20"
                  )}
                >
                  {d}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <label className="font-bold text-sm text-slate-800 block">Časové sloty</label>
              <div className="flex flex-wrap gap-3">
                {['09:00', '10:30', '13:15', '15:45'].map(time => (
                  <button 
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "px-6 py-2 rounded border-2 font-bold text-sm transition-all",
                      selectedTime === time 
                        ? "border-cyan-600 bg-cyan-50 text-cyan-600" 
                        : "border-slate-200 text-slate-500 hover:border-cyan-600"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Summary Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 space-y-6">
            <div className="bg-slate-100 rounded-lg p-8 border-2 border-white shadow-sm">
              <h3 className="text-xl font-black text-slate-800 mb-6">Sumář rezervace</h3>
              <div className="space-y-6">
                <SummaryItem icon={<MapPin className="text-cyan-600" />} label="Klinika" value={selectedClinic || 'Nevybráno'} />
                <SummaryItem icon={<Stethoscope className="text-cyan-600" />} label="Služba" value={selectedService || 'Nevybráno'} />
                <SummaryItem 
                  icon={<CalendarIcon className="text-cyan-600" />} 
                  label="Datum a čas" 
                  value={selectedDate ? `Pátek, ${selectedDate}. října • ${selectedTime || '--:--'}` : 'Nevybráno'} 
                />
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="p-4 bg-slate-800/5 rounded-lg border border-slate-800/10 mb-6">
                  <p className="text-sm font-bold text-slate-800 mb-2">Instrukce k potvrzení:</p>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Pro potvrzení termínu nás prosím kontaktujte telefonicky na <span className="text-slate-800 font-bold">+420 123 456 789</span>.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-xs font-bold text-slate-800 text-center">
                    Vaše rezervace bude platná po telefonickém potvrzení.
                  </p>
                  <Button className="w-full py-4" size="lg">Rezervovat termín</Button>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 rounded-lg p-6 flex items-center gap-4">
              <ShieldCheck className="text-teal-600 w-8 h-8" />
              <div>
                <p className="font-bold text-xs text-teal-700">Bezpečná péče</p>
                <p className="text-[10px] text-slate-500">Vaše údaje jsou u nás v bezpečí a podléhají nejpřísnějším standardům ochrany soukromí.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StepIndicator: React.FC<{ number: number; label: string; active?: boolean }> = ({ number, label, active }) => (
  <div className="flex flex-col items-center">
    <div className={cn(
      "w-10 h-10 rounded flex items-center justify-center font-bold text-sm transition-colors",
      active ? "bg-slate-800 text-white" : "bg-slate-200 text-slate-500"
    )}>
      {number}
    </div>
    <span className={cn(
      "text-[10px] font-bold mt-2 uppercase",
      active ? "text-slate-800" : "text-slate-400"
    )}>
      {label}
    </span>
  </div>
);

const ClinicSelectionCard: React.FC<{ title: string; address: string; distance: string; image: string; selected?: boolean; onClick: () => void }> = ({ title, address, distance, image, selected, onClick }) => (
  <div 
    onClick={onClick}
    className={cn(
      "group relative bg-white rounded overflow-hidden transition-all cursor-pointer",
      selected ? "ring-2 ring-cyan-600" : "hover:ring-2 ring-cyan-600/20"
    )}
  >
    <div className="h-40 overflow-hidden">
      <img alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={image} referrerPolicy="no-referrer" />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg text-slate-800">{title}</h3>
        {selected ? (
          <div className="w-4 h-4 rounded-full bg-cyan-600 flex items-center justify-center">
            <Check className="text-white w-3 h-3" />
          </div>
        ) : (
          <span className="text-teal-600 font-bold text-xs bg-teal-50 px-2 py-1 rounded">Dostupná</span>
        )}
      </div>
      <p className="text-slate-500 text-sm mb-4">{address}</p>
      <div className="flex items-center gap-2 text-cyan-600 font-bold text-xs uppercase tracking-tight">
        <MapPin className="w-3 h-3" /> {distance}
      </div>
    </div>
  </div>
);

const ServiceOption: React.FC<{ icon: React.ReactNode; label: string; selected?: boolean; onClick: () => void }> = ({ icon, label, selected, onClick }) => (
  <button 
    onClick={onClick}
    className={cn(
      "flex flex-col items-center justify-center p-6 rounded-lg transition-all group border-2",
      selected 
        ? "bg-slate-800 text-white border-slate-800 shadow-xl" 
        : "bg-white text-slate-800 border-transparent hover:bg-slate-100"
    )}
  >
    <div className={cn("mb-3 transition-colors", selected ? "text-white" : "text-cyan-600")}>
      {icon}
    </div>
    <span className="font-bold text-xs uppercase tracking-tighter text-center">{label}</span>
  </button>
);

const SummaryItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
      <p className="font-bold text-sm text-slate-800">{value}</p>
    </div>
  </div>
);
