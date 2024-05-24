import Alert from 'react-bootstrap/Alert';

function BasicExample() {
  return (
    <>
      <div>
        <Alert key='primary' variant='primary'>
            Thêm tai khoan thanh cong
        </Alert>
        <Alert key='danger' variant='danger'>
            Thêm tài khoản thất bại
        </Alert>
        <Alert key='warning' variant='warning'>
            Tên tài khoản ko đc để trống
        </Alert>

      </div>
    </>
  );
}

export default BasicExample;