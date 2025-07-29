const API_BASE = 'https://jjxvgpxweolzeqmtlkmx.supabase.co'; 

export async function fetchConjuntos() {
  const res = await fetch(`${API_BASE}/conjuntos`, {
    method: 'get',
  });
  if (!res.ok) throw new Error('Error al obtener conjuntos');
  return await res.json();
}
//TODO Agregar todos las necesitdades de Conjunto