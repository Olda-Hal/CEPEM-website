export type Clinic = {
  id: number;
  name: string;
  phoneNumber?: string | null;
  active?: boolean;
  companyIco?: string | null;
  companyName?: string | null;
  parentHospitalId?: number | null;
  address?: {
    street?: string | null;
    city?: string | null;
    postalCode?: string | null;
    country?: string | null;
  } | null;
};

export type Service = {
  id: number;
  name: string;
};

export type Doctor = {
  id: number;
  fullName: string;
};

export type Room = {
  id: number;
  name: string;
  description?: string | null;
  doctors: Doctor[];
};

export type BookingOptions = {
  clinicId: number;
  services: Service[];
  rooms: Room[];
};

export type AvailabilityResponse = {
  clinicId: number;
  date: string;
  durationMinutes: number;
  slotMinutes: number;
  rooms: Array<{
    id: number;
    name: string;
    description?: string | null;
    doctors: Doctor[];
    availableSlots: string[];
  }>;
};

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8001').replace(/\/$/, '');

async function apiRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
    ...init,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export const websiteApi = {
  getClinics: () => apiRequest<Clinic[]>('/api/clinics'),
  getClinicServices: (clinicId: number) => apiRequest<Service[]>(`/api/clinics/${clinicId}/services`),
  getClinicBookingOptions: (clinicId: number) =>
    apiRequest<BookingOptions>(`/api/clinics/${clinicId}/booking-options`),
  getClinicAvailability: (clinicId: number, date: string, durationMinutes = 60, slotMinutes = 30) =>
    apiRequest<AvailabilityResponse>(
      `/api/clinics/${clinicId}/availability?date=${date}&durationMinutes=${durationMinutes}&slotMinutes=${slotMinutes}`,
    ),
};
