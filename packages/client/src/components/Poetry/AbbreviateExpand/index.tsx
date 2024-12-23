import cls from 'classnames';
import React, { useMemo, useRef, useState } from 'react';

const shouCangIcon = '/assets/images/shou-cang.png';
const shouCangOkIcon = '/assets/images/shou-cangok.png';

import style from './index.module.scss';

export const AbbreviateExpand = ({ type, data }) => {
  const contRef = useRef(null);
  const [isCollect, setCollect] = useState(false);

  // 收藏
  const handleCollect = () => {
    setCollect(!isCollect);
  };
  // 复制;
  const handleCopy = () => {
    if (contRef.current) {
      const text = `${contRef.current.textContent} --${window.location.href}`; // 获取文本内容，自动过滤掉标签
      console.log(text);
      navigator.clipboard.writeText(text);
      alert('已复制到剪贴板，快去分享吧~');
    }
  };
  return (
    <>
      {data &&
        data.map((e, i) => {
          return (
            <div key={i} className={cls(style.wrapper)}>
              <div className={style.prose}>
                <a className={style.avatar}>
                  <img src={e.avatar} alt="" />
                </a>
                <a className={style.author}>
                  <b>{e.name}</b>
                </a>
                <p className={style.cont} ref={contRef}>
                  {e.desc}
                  <a target="_blank" className={style.num}>
                    ► {e.proseNum}篇诗文
                  </a>
                  {type === 'author' && (
                    <a target="_blank" className={style.num}>
                      ► {e.famousSentenceNum}篇名句
                    </a>
                  )}
                </p>
              </div>
              <div className={style.tools}>
                <img
                  className={style.toolsIcon}
                  src={isCollect ? shouCangOkIcon : shouCangIcon}
                  alt=""
                  onClick={handleCollect}
                />
                <img className={style.toolsIcon} src="/assets/images/down-load.png" alt="" />
                <img className={style.toolsIcon} src="/assets/images/co-py.png" alt="" onClick={handleCopy} />
                <img className={style.toolsIcon} src="/assets/images/speak-er.png" alt="" />
                <img className={style.toolsIcon} src="/assets/images/tool-more.png" alt="" />
              </div>
            </div>
          );
        })}
    </>
  );
};
