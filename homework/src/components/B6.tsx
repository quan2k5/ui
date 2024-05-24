import Spinner from 'react-bootstrap/Spinner';

function VariantsExample() {
  return (
    <>
    <div style={{display:'flex',flexDirection:"column" ,gap:"10px"}}>
    <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
    </div>
    </>
  );
}

export default VariantsExample;