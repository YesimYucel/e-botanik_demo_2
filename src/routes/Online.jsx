import { Form, Button, Container } from 'react-bootstrap';
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../utils/firebase/firebase.utils";
const Online = () => {
  const loginGoogleUser = async () => {
    // Popup ile hesap seçimi
    const { user } = await signInWithGooglePopup();

  }

  return (
    <Container className='mt-5'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Kayıt Ol
        </Button>

      </Form>
      <div className="container">
        <div className="row my-5">
          <div className="col-xl-6  ">
            <div className="google-sigin mb-5 d-flex border w-50 p-2 ">
              <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" width={40} alt="" />
              <button onClick={loginGoogleUser} className='nav-link mt-2 '> <span className='text-decoration-underline'>Sign in with Google</span></button>

            </div>
          </div>

        </div>
      </div>
    </Container>
  );
}


export default Online;
