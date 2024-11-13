import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import type { PostgrestError } from '@supabase/supabase-js'; // Importación solo de tipo

// Define la interfaz para los datos que esperas obtener
interface DataItem {
  id: number;
  nombre_columna: string; // Cambia esto por el nombre de las columnas de tu tabla
}

const supabaseUrl = 'https://xianiljacvbxxkofuidy.supabase.co'; // Cambia por tu URL de Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpYW5pbGphY3ZieHhrb2Z1aWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzMjQ3MzYsImV4cCI6MjA0NjkwMDczNn0.yY5lj_zCN1F09zf7yLIAq5g_ErefogEbnhhxgR412S4'; // Usa tu clave pública o de servicio
const supabase = createClient(supabaseUrl, supabaseKey);

const SupabaseData: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]); // Usa el tipo de datos definido
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error }: { data: DataItem[] | null; error: PostgrestError | null } = await supabase
          .from('image1') // Cambia por el nombre de tu tabla
          .select('*');

        if (error) {
          throw error;
        }

        if (data) {
          setData(data);
          console.log(data);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.nombre_columna}</li> // Cambia por el nombre de una columna
      ))}
    </ul>
  );
};

export default SupabaseData;
