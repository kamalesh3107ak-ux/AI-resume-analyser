import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { usePuterStore } from '~/lib/puter';

const Result = () => {
  const { id } = useParams();
  const { kv } = usePuterStore();

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      const res = await kv.get(`resume:${id}`);
      if (res) {
        const parsed = JSON.parse(res);

        setData(parsed);

        // 🔥 ADD THIS LINE (console debug)
        console.log('Fetched Data:', parsed);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Result Page</h1>
      <p>ID: {id}</p>

      {data && (
        <>
          <h2>Feedback</h2>

          {/* 🔥 THIS ALREADY CORRECT */}
          <pre>{JSON.stringify(data.feedback, null, 2)}</pre>
        </>
      )}
    </div>
  );
};

export default Result;
