import { Footer } from '@components/Footer';
import { Header } from '@components/Poetry/Header';
import { BackTop } from 'antd';
import cls from 'classnames';
import React, { useContext, useEffect, useMemo, useRef } from 'react';

import { CommentIcon } from '@/components/Comment/CommentIcon';
import { Likes, LikesProps } from '@/components/Likes';
import { Seo } from '@/components/Seo';
import { GlobalContext } from '@/context/global';
import { useToggle } from '@/hooks/useToggle';
import { getDocumentScrollTop } from '@/utils';

import { AppLayoutContext } from '../AppLayout'; // 引入上下文
import style from './index.module.scss';

interface IProps {
  leftNode: React.ReactNode;
  leftClassName?: null | string;
  rightNode: React.ReactNode;
  rightClassName?: null | string;
  isRightNodeMobileHidden?: boolean;
  minHeight?: string | number;
  likesProps?: LikesProps;
  showComment?: boolean;
}

export const PoetryLayout: React.FC<IProps> = ({
  leftNode,
  leftClassName = null,
  rightNode,
  rightClassName = null,
  isRightNodeMobileHidden = true,
  minHeight = '100vh',
  likesProps,
  showComment = false,
}) => {
  const { needFooter, hasBg } = useContext(AppLayoutContext);
  const { setting, pages, tags } = useContext(GlobalContext);
  const { systemBg } = setting;
  const [loaded, toggleLoaded] = useToggle(false);
  const bg = useMemo(
    () => `linear-gradient(to bottom, rgba(var(--rgb-bg-second), 0), rgba(var(--rgb-bg-second), 1)), url(${systemBg})`,
    [systemBg]
  );
  const customBg = hasBg || (!!systemBg && loaded);

  const $aside = useRef<HTMLElement>();
  const [showWidge, toggleWidge] = useToggle(true);

  useEffect(() => {
    if (!systemBg) return;
    const img = document.createElement('img');
    img.onload = () => {
      toggleLoaded(true);
    };
    img.onerror = () => {
      toggleLoaded(false);
    };
    img.src = systemBg;
  }, [systemBg, toggleLoaded]);

  useEffect(() => {
    let beforeY = 0;
    let y = 0;
    const handler = () => {
      y = getDocumentScrollTop();
      toggleWidge(beforeY <= y);
      setTimeout(() => {
        beforeY = y;
      }, 0);
    };
    document.addEventListener('scroll', handler);

    return () => {
      document.removeEventListener('scroll', handler);
    };
  }, [toggleWidge]);

  useEffect(() => {
    const handler = (evt) => {
      const { id, isFxied, isFixedVisible, height } = evt.data;
      if (id !== 'header-state') return;
      const el = $aside.current.querySelector('.sticky') as HTMLElement;
      if (!el) return;
      el.style.position = isFxied ? 'fixed' : 'sticky';
      el.style.marginTop = isFxied ? '0' : el.dataset.marginTop + 'px';
      el.style.transform = `translateY(${isFixedVisible ? height : 0})`;
    };
    window.addEventListener('message', handler);

    return () => {
      window.removeEventListener('message', handler);
    };
  }, []);

  return (
    <div className={cls(style.outerWrap)} style={{ minHeight }}>
      <Seo />
      <Header setting={setting} tags={tags} pages={pages} hasBg={customBg} />
      <div className={cls('poetry-container ')}>
        <div className={style.wrap}>
          {(likesProps || showComment) && (
            <div
              className={cls(style.fixed, showWidge && style.active)}
              onClick={(e) => {
                console.log('clicked');
                e.preventDefault();
                e.nativeEvent.stopImmediatePropagation();
                e.stopPropagation();
              }}
            >
              {/* {likesProps && (
                <div className={style.widgetWrapper}>
                  <Likes {...likesProps} />
                </div>
              )} */}
              {showComment && (
                <div className={style.widgetWrapper}>
                  <CommentIcon />
                </div>
              )}
            </div>
          )}

          <section className={cls(style.left, leftClassName)}>{leftNode}</section>
          <aside
            ref={$aside}
            className={cls(style.right, rightClassName, isRightNodeMobileHidden && style.isRightNodeMobileHidden)}
          >
            {rightNode}
          </aside>
        </div>
      </div>
      {systemBg && !hasBg && <div className={style.bg} style={{ backgroundImage: bg }}></div>}
    </div>
  );
};
