import { NextPage } from 'next';
import { default as Router } from 'next/router';
import React, { useState } from 'react';

import { Aside } from '@/components/Poetry/Aside';
import { Mine } from '@/components/Poetry/Mine';
import { PoetryLayout } from '@/layout/PoetryLayout';
import { ArticleProvider } from '@/providers/article';

import style from './index.module.scss';

interface IProps {
  article: IArticle;
}

const MinePage: NextPage<IProps> = ({ article }) => {
  const Content = (
    <>
      <div className={style.mineWrap}>我的收藏</div>
      <Mine />
    </>
  );

  const RightNode = <></>;

  return (
    <PoetryLayout
      leftNode={Content}
      rightNode={RightNode}
      likesProps={{
        defaultCount: article?.likes,
        id: article?.id,
        api: (id, type) => ArticleProvider.updateArticleLikes(id, type).then((res) => res.likes),
      }}
    />
  );
};

MinePage.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const article = await ArticleProvider.getArticle(id);
  return { article };
};

export default MinePage;
