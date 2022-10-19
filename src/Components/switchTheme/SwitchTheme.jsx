import React from 'react';
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import './switchTheme.css';

const SwitchTheme = () => {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    if (checked) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  }, [checked]);

  return (
    <div>
      <input
        type="checkbox"
        name="checkbox__toggleTheme"
        id="toggleTheme"
        className="toggleTheme__checkbox"
        onChange={({ target }) => setChecked(target.checked)}
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
