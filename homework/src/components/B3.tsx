import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function B3() {
  return (
    <div style={{display:"flex", gap:"30px"}}>
         <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:"200px"}} variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS-6lBGdimyH3NCzJFVLjFH2Z0WHm74QhTYN1TiclpO16Vq5Sh02fdGr5NxBvF3NiSNxCDmlbeNnbt1DmEQrBXsATihD2l3xJnxMA-W1z27tbdzTPwLuP4D&usqp=CAc" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div style={{display:"flex", gap:"10px",alignItems:"center"}}>
            <Button variant="primary">Go somewhere</Button>
             <div>30.000.000d</div>
        </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:"200px"}} variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS-6lBGdimyH3NCzJFVLjFH2Z0WHm74QhTYN1TiclpO16Vq5Sh02fdGr5NxBvF3NiSNxCDmlbeNnbt1DmEQrBXsATihD2l3xJnxMA-W1z27tbdzTPwLuP4D&usqp=CAc" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div style={{display:"flex", gap:"10px",alignItems:"center"}}>
            <Button variant="primary">Go somewhere</Button>
             <div>30.000.000d</div>
        </div>
      </Card.Body>
    </Card>
    </div>
   
  );
}

export default B3;