import cls from 'classnames';
import React, { useState } from 'react';

import style from './index.module.scss';
const shouCangIcon = '/assets/images/shou-cang.png';
const shouCangOkIcon = '/assets/images/shou-cangok.png';

export const Collect = ({ data }) => {
  const [collectData, setCollectData] = useState(data);
  // 收藏
  const handleCollect = (i) => {
    const newCollectData = collectData.map((e, index) => {
      if (index === i) {
        return { ...e, isCollect: !e.isCollect };
      } else {
        return { ...e };
      }
    });
    setCollectData(newCollectData);
  };
  console.log('hs---collectData', collectData);
  return (
    <div className={cls(style.wrapper)}>
      {collectData &&
        collectData.map((e, i) => {
          return (
            <div key={i} className={style.sec}>
              <span>
                <span className={style.name}>{e.sentence}</span>
                <span className={style.line}>——</span>
                <span className={style.title}>{e.title}</span>
              </span>
              <img
                className={style.toolsIcon}
                src={e.isCollect ? shouCangOkIcon : shouCangIcon}
                alt=""
                onClick={() => handleCollect(i)}
              />
            </div>
          );
        })}
    </div>
  );
};
