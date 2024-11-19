import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import type { PostgrestError } from '@supabase/supabase-js';

interface Coordinate {
  x: number;
  y: number;
}

interface DataItem {
  id: number;
  name: string;
  ruta: Coordinate[];
}

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const SupabaseData: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error }: { data: DataItem[] | null; error: PostgrestError | null } = await supabase
          .from('image1') // Cambia por el nombre de tu tabla
          .select('*');

        if (error) throw error;
        if (data) {
          setData(data);
          console.log(data);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(`Error: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <p>{item.name}</p>
          <ul>
            {item.ruta.map((coord, index) => (
              <li key={index}>
                x: {coord.x} / y: {coord.y}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default SupabaseData;
