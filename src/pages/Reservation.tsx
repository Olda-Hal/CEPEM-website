import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { AlertCircle, Calendar as CalendarIcon, Clock3, Hospital, PhoneCall, Stethoscope } from 'lucide-react';
import { websiteApi, type AvailabilityResponse, type BookingOptions, type Clinic } from '../lib/api';
import { useI18n } from '../i18n/I18nProvider';

function nextBusinessDate(daysFromNow: number): string {
  const d = new Date();
  d.setDate(d.getDate() + daysFromNow);
  return d.toISOString().slice(0, 10);
}

export const Reservation: React.FC = () => {
  const { t } = useI18n();
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [bookingOptions, setBookingOptions] = useState<BookingOptions | null>(null);
  const [availability, setAvailability] = useState<AvailabilityResponse | null>(null);

  const [loadingClinics, setLoadingClinics] = useState(true);
  const [loadingOptions, setLoadingOptions] = useState(false);
  const [loadingAvailability, setLoadingAvailability] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [selectedClinicId, setSelectedClinicId] = useState<number | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);
  const [date, setDate] = useState(nextBusinessDate(3));

  useEffect(() => {
    let mounted = true;

    async function loadClinics() {
      try {
        setLoadingClinics(true);
        setError(null);
        const data = await websiteApi.getClinics();
        if (!mounted) {
          return;
        }
        setClinics(data);
        if (data.length > 0) {
          setSelectedClinicId(data[0].id);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : t('reservation.loadClinicsError'));
        }
      } finally {
        if (mounted) {
          setLoadingClinics(false);
        }
      }
    }

    loadClinics();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;

    async function loadBookingOptions() {
      if (!selectedClinicId) {
        return;
      }

      try {
        setLoadingOptions(true);
        setError(null);
        const data = await websiteApi.getClinicBookingOptions(selectedClinicId);
        if (!mounted) {
          return;
        }
        setBookingOptions(data);
        setSelectedServiceId(data.services[0]?.id ?? null);
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : t('reservation.loadServicesError'));
        }
      } finally {
        if (mounted) {
          setLoadingOptions(false);
        }
      }
    }

    loadBookingOptions();

    return () => {
      mounted = false;
    };
  }, [selectedClinicId]);

  useEffect(() => {
    let mounted = true;

    async function loadAvailability() {
      if (!selectedClinicId || !date) {
        return;
      }

      try {
        setLoadingAvailability(true);
        setError(null);
        const data = await websiteApi.getClinicAvailability(selectedClinicId, date, 60, 30);
        if (!mounted) {
          return;
        }
        setAvailability(data);
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : t('reservation.loadSlotsError'));
        }
      } finally {
        if (mounted) {
          setLoadingAvailability(false);
        }
      }
    }

    loadAvailability();

    return () => {
      mounted = false;
    };
  }, [selectedClinicId, date]);

  const selectedClinic = useMemo(
    () => clinics.find((clinic) => clinic.id === selectedClinicId) ?? null,
    [clinics, selectedClinicId],
  );

  const joinedSlots = useMemo(() => {
    const counts = new Map<string, number>();
    for (const room of availability?.rooms ?? []) {
      for (const slot of room.availableSlots) {
        counts.set(slot, (counts.get(slot) ?? 0) + 1);
      }
    }

    return Array.from(counts.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([time, roomCount]) => ({ time, roomCount }));
  }, [availability]);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <section className="mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 tracking-tight mb-4">
          {t('reservation.title')}
        </h1>
        <p className="text-slate-600 text-lg max-w-4xl">
          {t('reservation.description')}
        </p>
      </section>

      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-5 text-red-700 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 mt-0.5" />
          <p>{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-8 bg-slate-50 rounded-2xl p-8 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Hospital className="w-5 h-5 text-cyan-600" /> {t('reservation.clinic')}
            </h2>
            <select
              value={selectedClinicId ?? ''}
              onChange={(e) => setSelectedClinicId(Number(e.target.value))}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3"
              disabled={loadingClinics || clinics.length === 0}
            >
              {clinics.map((clinic) => (
                <option key={clinic.id} value={clinic.id}>
                  {clinic.name}
                </option>
              ))}
            </select>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-cyan-600" /> {t('reservation.service')}
            </h2>
            <select
              value={selectedServiceId ?? ''}
              onChange={(e) => setSelectedServiceId(Number(e.target.value))}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3"
              disabled={loadingOptions || !bookingOptions || bookingOptions.services.length === 0}
            >
              {bookingOptions?.services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </section>

          <section>
            <label className="text-sm font-bold text-slate-700 block mb-2">{t('reservation.date')}</label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3"
            />
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Clock3 className="w-5 h-5 text-cyan-600" /> {t('reservation.freeTimes')}
            </h3>

            {loadingAvailability && (
              <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-600">
                {t('reservation.loadingAvailability')}
              </div>
            )}

            {!loadingAvailability && joinedSlots.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {joinedSlots.map((slot) => (
                  <span
                    key={slot.time}
                    className="px-3 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold"
                  >
                    {slot.time} ({slot.roomCount})
                  </span>
                ))}
              </div>
            )}

            {!loadingAvailability && joinedSlots.length === 0 && (
              <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-600">
                {t('reservation.noSlots')}
              </div>
            )}
          </section>
        </motion.div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
            <h3 className="text-xl font-black text-slate-800 mb-4">{t('reservation.summary')}</h3>
            <div className="space-y-4 text-sm text-slate-700">
              <p className="flex items-center gap-2"><Hospital className="w-4 h-4 text-cyan-600" /> {selectedClinic?.name || t('reservation.unknown')}</p>
              <p className="flex items-center gap-2"><Stethoscope className="w-4 h-4 text-cyan-600" /> {bookingOptions?.services.find((s) => s.id === selectedServiceId)?.name || t('reservation.unknown')}</p>
              <p className="flex items-center gap-2"><CalendarIcon className="w-4 h-4 text-cyan-600" /> {date || t('reservation.unknown')}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-cyan-50 border border-cyan-100 p-6 text-sm text-slate-700">
            <p className="font-bold text-slate-800 mb-2 flex items-center gap-2"><PhoneCall className="w-4 h-4 text-cyan-700" /> {t('reservation.phoneOnlyTitle')}</p>
            <p>
              {t('reservation.phoneOnlyPrefix')}{' '}
              {selectedClinic?.phoneNumber ? (
                selectedClinic.phoneNumber
              ) : (
                <span className="font-extrabold text-red-700">{t('reservation.phoneOnlyUnavailable')}</span>
              )}
              {t('reservation.phoneOnlySuffix')}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};
