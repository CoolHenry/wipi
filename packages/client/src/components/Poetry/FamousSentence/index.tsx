import cls from 'classnames';
import React from 'react';

import style from './index.module.scss';

export const FamousSentence = ({ data }) => {
  return (
    <div className={cls(style.wrapper)}>
      {data &&
        data.map((e, i) => {
          return (
            <div key={i} className={style.sec}>
              <span className={style.name}>{e.sentence}</span>
              <span className={style.line}>——</span>
              <span className={style.title}>{e.title}</span>
            </div>
          );
        })}
    </div>
  );
};
