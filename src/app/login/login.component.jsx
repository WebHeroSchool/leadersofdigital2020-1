import React from 'react';

import './login.component.scss';
import rosatomLogoImg from './images/rosatom-logo.png';

export const LoginComponent = ({ login }) => {
  return (
    <section className="section_introduction">
      <div className="introduction">
        <div className="introduction_block">
          <div className="introduction_flex">
            <div className="introduction_logo">
              <img src={rosatomLogoImg} alt="logo" className="introduction_logo-image" />
            </div>

            <div className="introduction_validator_block">
              <div className="introduction_title">Авторизация</div>

              <div className="validator">
                <div className="inputWithIcon">
                  <input type="text" placeholder="Имя пользователя" />
                  <i className="fa fa-user-o" aria-hidden="true"></i>

                  <div className="inputWithIcon">
                    <input type="password" placeholder="Пароль" />

                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </div>

                  <div className="validator_button">
                    <button onClick={() => login(true)}>Войти</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
