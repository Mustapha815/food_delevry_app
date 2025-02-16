import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'; // Import the CSS file

const Login = () => {
  const Admins = [
    {
      username: 'mustapha',
      Number_Phon: '0640606282',
      password: '1234',
      role: 'Directeur',
    },
    {
      username: 'Mohssine',
      Number_Phon: '0644666688',
      password: '0000',
      role: 'Manager',
    },
  ];

  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [role, setRole] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();

    const Existe = Admins.find(
      (item) => item.Number_Phon === number
    );

    if (Existe && Existe.password === password) {
      setRole(Existe.role);
      setError('');
    } else {
      setError('رقم الهاتف أو كلمة المرور غير صحيحة');
      setRole('');
    }
  };

  return (
    <div className="login-container">
      <div className="formContainer">
        {error && <span className="error-message">{error}</span>}
        <form className="login-form" onSubmit={handelSubmit}>
          <h3>تسجيل الدخول إلى حسابك</h3>
          <div className="input-container">
            <input
              type="tel"
              placeholder="أدخل رقم هاتفك"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="أدخل كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login" type="submit">
            تسجيل الدخول
          </button>
        </form>
        {role && (
          <div className="button">
            <Link to={`/admin/Dashboard/${role}`} className="home-link">
              الانتقال إلى الصفحة الرئيسية
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;