import React from "react";
import "./contact.scss";
import imgProfile from './img/profile.svg';
import imgMail from './img/mail.png';
import imgTicks from './img/ticks.png';

export const Contact = () => {
    return (
        <div className="ui-contact">
          <div className="ui-img">
                <img className="ui-contact-imagine__img" src={imgProfile} alt="profile"/>
          </div>
            <div className="ui-block">
                <div className="ui-name">
                Иванов Степан Сидорович
                </div>
                <div className="ui-status">
                Генеральный директор
                </div>
                <div className="ui-flex">
                <div className="ui-mail">
                    <img className="ui-contact-mail__img" src={imgMail} alt="mail"/>
                    <a href="mailto:email@email.ru">email@email.ru</a>
                </div>
                <div className="ui-ticks">
                    <img className="ui-contact-ticks__img" src={imgTicks} alt="ticks"/>
                </div>
                </div>
            </div>
        </div>
    
    );
}