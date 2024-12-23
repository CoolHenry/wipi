import cls from 'classnames';
import React from 'react';

import style from './index.module.scss';

export const Aside = ({ title, tags }) => {
  return (
    <div className={cls(style.wrapper)}>
      <div className={cls(style.title)}>{title}</div>
      <div className={cls(style.cont)}>
        {tags &&
          tags.map((e, i) => {
            return (
              <a className={cls(style.tag)} key={i} href={e.href}>
                {e.label}
              </a>
            );
          })}
      </div>
    </div>
  );
};
