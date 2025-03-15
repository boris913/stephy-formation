import { useEffect, useState } from 'react';
import { Loader, ErrorMessage } from '../ui';

const DataFetcher = ({ 
  url, 
  render, 
  loadingComponent = <Loader size="lg" />,
  errorComponent = <ErrorMessage />
}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Erreur de réseau');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) return loadingComponent;
  if (error) return errorComponent;
  return render(data);
};

export default DataFetcher;