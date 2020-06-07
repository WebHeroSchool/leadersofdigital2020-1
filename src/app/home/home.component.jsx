import React, { useState, useEffect } from 'react';

import './home.component.scss';
import logoImage from './images/logo.png';
import {HOST} from "app/app.constants";
import {Subtitle} from "app/components/shared/subtitle/subtitle";
import {Bar} from "app/components/shared/bar/bar";

const contacts = [
  {
    fio: 'sdfsdf',
    email: 'sdfasfddf',
    position: '',
  },

//  ...
];

export default () => {
  const [ data, setData ] = useState(null);

  useEffect((() => {
    async function fetchData() {
      const result = await fetch(`${HOST}/position/1`).then(r => r.json());
      console.log(result);
      setData(result);
    }

    fetchData();
  }), []);

  // const color = [
  //   "#7E0202",
  //   "#06895A",
  //   "#0097AC",
  //   "#E48C08",
  //   "#B3A20A",
  //   "#8F0056",
  // ];

  const colors = ['#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107'];

  return (
    <section className="home">
      <div className="home__wrapper">
        <header className="home__header">
          <div className="home__header_top">
            <img src={logoImage} alt=""/>
          </div>

          <div className="home__header_bottom">
            <div className="home__header-title">
              <p>Ваша должность:</p>
              <p>
                { data ? data.title : null }
              </p>
            </div>
          </div>
        </header>

        <main>
          {
            data
              ? data.subtitles.map(({ title, nextContent: content }, index) => {
                const gradient = 'background: linear-gradient(180deg, #06895A 0%, #0097AC 100%);'

                return (
                  <div className="home__bar" key={`bar-${index}`}>
                    <Bar title={title} />

                    <div className="home__bar-content">
                      <div className="home__bar-content_left">
                        <Subtitle content={content} />
                      </div>

                      <div className="home__bar-content_center"></div>

                      <div className="home__bar-content_right"></div>
                    </div>
                  </div>
                );
              })
              :null
          }

        </main>
      </div>
    </section>
  );
};
