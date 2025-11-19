import { type ActionFunction, Form } from 'react-router-dom';

const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get('name');
  const password = formData.get('password');
  const repeatPassword = formData.get('repeat_password');

  if (password !== repeatPassword) {
    console.error('Passwords do not match');
  }
  return { status: 200 };
};

const Register = () => (
  <>
    <h2>Register</h2>
    <Form method='post'>
      <div className='form-field'>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' required />
      </div>
      <div className='form-field'>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' required />
      </div>
      <div className='form-field'>
        <label htmlFor='password2'>Confirm Password</label>
        <input type='password' name='password2' required />
      </div>
      <button id='register' type='submit'>
        Register
      </button>
    </Form>
  </>
);

Register.action = action;

export default Register;