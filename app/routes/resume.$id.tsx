import { useParams } from 'react-router';

const ResumePage = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Resume Details Page</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default ResumePage;
