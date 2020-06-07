import React from "react";
import "./contact.scss";
import imgProfile from './img/profile.svg';
import imgMail from './img/mail.png';
import imgTicks from './img/ticks.png';
import imgLady from './img/lady.png';
import imgLadySecond from './img/lady2.png';
import imgMan from './img/man1.png';
import imgManSecond from './img/man2.png';


    export const contactsData = [
        {
            img: imgLady,
            fio: 'Васильева Екатерина Юриевна',
            status : 'Исполнительный директор',
            mail: 'elena@gmail.com'
        },

        {
            img: imgMan,
            fio: 'Иванов Александр Иванович',
            status: 'Директор по маркетингу',
            mail: 'aleksandr@gmail.com'
        },

        {
            img: imgManSecond,
            fio: 'Соколов Иван Иванович',
            status:'Технический директор',
            mail: 'ivan@gmail.com'
        },

        {
            img: imgLadySecond,
            fio: 'Фролова Ирина Дмитриевна',
            status: 'Менеджер по маркетингу',
            mail: 'irina@gamil.com'
        }

      ];

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
                    <a href="mailto:email@email.ru">stepan@email.ru</a>
                </div>
                <div className="ui-ticks">
                    <img className="ui-contact-ticks__img" src={imgTicks} alt="ticks"/>
                </div>
                </div>
            </div>
        </div>
    
    );
}