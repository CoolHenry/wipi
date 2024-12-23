import { NextPage } from 'next';
import React, { useState } from 'react';

import { Aside } from '@/components/Poetry/Aside';
import { Prose } from '@/components/Poetry/Prose';
import { Recommend } from '@/components/Poetry/Recommend';
import { PoetryLayout } from '@/layout/PoetryLayout';
import { ArticleProvider } from '@/providers/article';
import { mockAsideTags, mockRecommendTags } from '@/utils/mock';

import style from './index.module.scss';

interface IProps {
  article: IArticle;
}

const ProsePage: NextPage<IProps> = ({ article }) => {
  const Content = (
    <>
      <Recommend title="推荐诗文" recommendTags={mockRecommendTags} />
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

ProsePage.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const article = await ArticleProvider.getArticle(id);
  return { article };
};

export default ProsePage;
