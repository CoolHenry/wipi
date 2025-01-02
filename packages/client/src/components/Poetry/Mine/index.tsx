import cls from 'classnames';
import React, { useState } from 'react';

import { Collect } from '@/components/Poetry/Collect';
import { modules } from '@/utils/constant';
import { mockFamousSentence } from '@/utils/mock';

import style from './index.module.scss';

export const Mine = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className={cls(style.wrapper)}>
      <div>
        {modules.map((item, i) => {
          return (
            <a
              key={item.type}
              className={index === i ? `${cls(style.sec)} ${cls(style.active)}` : cls(style.sec)}
              onClick={() => setIndex(i)}
            >
              {item.label}
            </a>
          );
        })}
      </div>
      <div className={cls(style.collect)}>{<Collect data={mockFamousSentence} />}</div>
    </div>
  );
};
