// src/lib/api.js
const API_BASE = 'https://jjxvgpxweolzeqmtlkmx.supabase.co'; 

export async function fetchPieza() {
  const res = await fetch(`${API_BASE}/piezas`, {
    method: 'get',
  });
  if (!res.ok) throw new Error('Error al obtener piezas');
  return await res.json();
}

//TODO Agregar todos las necesitdades de Piezas