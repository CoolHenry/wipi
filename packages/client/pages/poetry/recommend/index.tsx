import { NextPage } from 'next';
import { default as Router } from 'next/router';
import React, { useState } from 'react';

import { Aside } from '@/components/Poetry/Aside';
import { Prose } from '@/components/Poetry/Prose';
import { PoetryLayout } from '@/layout/PoetryLayout';
import { ArticleProvider } from '@/providers/article';
import { mockAsideTags } from '@/utils/mock';

import style from './index.module.scss';

interface IProps {
  article: IArticle;
}

const RecommendPage: NextPage<IProps> = ({ article }) => {
  const Content = (
    <>
      <Prose />
    </>
  );

  const RightNode = (
    <>
      <Aside title="诗文" tags={mockAsideTags} />
    </>
  );

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

RecommendPage.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const article = await ArticleProvider.getArticle(id);
  return { article };
};

export default RecommendPage;
