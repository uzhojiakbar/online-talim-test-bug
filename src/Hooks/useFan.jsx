import React, { useEffect, useState } from 'react';
import { instance } from './api';

export function useFan() {
    const [fan, setFan] = useState(null);  // Avval boshiga `null` qoyamiz
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await instance.get('/api/lessons');
                setFan(response.data || []);  // Agar API bo‘sh bo‘lsa, bo‘sh array ber
            } catch (error) {
                setError('Malumot olishda xatolik');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    return { fan, loading, error };
}

export default useFan;
