import React from 'react';
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import './switchTheme.css';

const SwitchTheme = () => {
  const [check, setCheck] = React.useState(false);

  function changeTheme() {
    if (!check) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  React.useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setCheck(true);
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    } else if (theme === 'light') {
      setCheck(false);
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else {
      setCheck(false);
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  return (
    <div>
      <input
        type="checkbox"
        name="checkbox__toggleTheme"
        id="toggleTheme"
        className="toggleTheme__checkbox"
        checked={check}
        onChange={({ target }) => {
          setCheck(target.checked);
          changeTheme();
        }}
      />
      <label htmlFor="toggleTheme" className="toggleTheme__label">
        <i className="toggleTheme__icon">
          <FaMoon color="#f1f1f1" />
        </i>
        <i className="toggleTheme__icon">
          <FaSun color="#F7BF64" />
        </i>
        <div className="toggleTheme__ball"></div>
      </label>
    </div>
  );
};

export default SwitchTheme;
