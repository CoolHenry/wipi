import { DownOutlined, UpOutlined } from '@ant-design/icons';
import cls from 'classnames';
import React, { useState } from 'react';

import style from './index.module.scss';

export const Recommend = ({ title, recommendTags, isAbbreviate = false, getAbbreviateType }) => {
  const [abbreviateIndex, setAbbreviateIndex] = useState(1);
  const [tags, setTags] = useState(recommendTags);
  const handleExpand = (val, index) => {
    const cloneTags = tags.map((e, i) => {
      if (i === index) {
        return { ...e, expand: val };
      } else {
        return { ...e };
      }
    });
    setTags(cloneTags);
  };
  const handleAbbreviate = (val) => {
    setAbbreviateIndex(val);
    getAbbreviateType(val);
  };
  return (
    <div className={cls(style.wrapper)}>
      <div className={style.header}>
        <span className={style.title}>{title}</span>
        {isAbbreviate && (
          <div className={style.abbreviateCont}>
            <span
              className={abbreviateIndex === 1 ? style.abbreviate_active : style.abbreviate}
              onClick={() => handleAbbreviate(1)}
            >
              缩略
            </span>
            <span className={style.abbreviate_line}>/</span>
            <span
              className={abbreviateIndex === 2 ? style.abbreviate_active : style.abbreviate}
              onClick={() => handleAbbreviate(2)}
            >
              列表
            </span>
          </div>
        )}
      </div>

      <div className={style.cont}>
        {tags &&
          tags.map((e, i) => {
            return (
              <div key={i} className={e.expand ? `${style.sec} ${style.visible}` : style.sec}>
                <span className={style.name}>{e.name}:</span>
                <div className={style.tagBox}>
                  {e.list &&
                    e.list.map((l, k) => {
                      return (
                        <a className={style.tag} key={k} href={l.href}>
                          {l.label}
                        </a>
                      );
                    })}
                </div>
                {e.list.length > 16 &&
                  (e.expand ? (
                    <UpOutlined
                      className={style.expandIcon}
                      onClick={() => {
                        handleExpand(false, i);
                      }}
                    />
                  ) : (
                    <DownOutlined
                      className={style.expandIcon}
                      onClick={() => {
                        handleExpand(true, i);
                      }}
                    />
                  ))}
              </div>
            );
          })}
      </div>
    </div>
  );
};
