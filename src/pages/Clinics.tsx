import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Building2, Search, AlertCircle } from 'lucide-react';
import { websiteApi, type Clinic } from '../lib/api';

function formatAddress(clinic: Clinic): string {
  if (!clinic.address) {
    return 'Adresa není k dispozici';
  }

  const parts = [
    clinic.address.street,
    clinic.address.city,
    clinic.address.postalCode,
    clinic.address.country,
  ].filter(Boolean);

  return parts.length > 0 ? parts.join(', ') : 'Adresa není k dispozici';
}

export const Clinics: React.FC = () => {
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadClinics() {
      try {
        setLoading(true);
        setError(null);
        const data = await websiteApi.getClinics();
        if (mounted) {
          setClinics(data);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Nepodařilo se načíst kliniky.');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadClinics();

    return () => {
      mounted = false;
    };
  }, []);

  const filteredClinics = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) {
      return clinics;
    }

    return clinics.filter((clinic) => {
      const haystack = [
        clinic.name,
        clinic.companyName,
        clinic.companyIco,
        clinic.address?.city,
        clinic.address?.street,
        clinic.address?.postalCode,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [clinics, search]);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <section className="mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800 mb-4">
          Naše kliniky
        </h1>
        <p className="text-slate-600 text-lg max-w-3xl leading-relaxed mb-8">
          Přehled klinik je načítán živě z DatabaseAPI. Vyhledávejte podle názvu nebo adresy.
        </p>

        <div className="relative max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-cyan-600/40 focus:bg-white transition-all"
            placeholder="Hledat kliniku nebo město..."
            type="text"
          />
        </div>
      </section>

      {loading && (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-slate-600">
          Načítám kliniky z databáze...
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-700 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 mt-0.5" />
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredClinics.map((clinic, index) => (
            <motion.article
              key={clinic.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, duration: 0.3 }}
              className="rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                {clinic.companyIco && (
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-slate-100 text-slate-500 px-2 py-1 rounded">
                    ICO {clinic.companyIco}
                  </span>
                )}
              </div>

              <h2 className="text-xl font-bold text-slate-800 mb-2">{clinic.name}</h2>
              {clinic.companyName && (
                <p className="text-sm text-slate-500 mb-3">{clinic.companyName}</p>
              )}

              <div className="flex items-start gap-2 text-slate-600 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-cyan-600" />
                <span>{formatAddress(clinic)}</span>
              </div>
            </motion.article>
          ))}

          {filteredClinics.length === 0 && (
            <div className="md:col-span-2 xl:col-span-3 rounded-xl border border-slate-200 bg-slate-50 p-8 text-slate-600">
              Pro zadaný filtr nebyla nalezena žádná klinika.
            </div>
          )}
        </section>
      )}
    </div>
  );
};
