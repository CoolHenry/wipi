import { NextPage } from 'next';
import { default as Router } from 'next/router';
import React, { useState } from 'react';

import { Aside } from '@/components/Poetry/Aside';
import { Prose } from '@/components/Poetry/Prose';
import { PoetryLayout } from '@/layout/PoetryLayout';
import { ArticleProvider } from '@/providers/article';

import style from './index.module.scss';

interface IProps {
  article: IArticle;
}

const MinePage: NextPage<IProps> = ({ article }) => {
  const [tags, setTags] = useState([
    { label: '唐诗三百', href: 'www.baidu.com' },
    { label: '唐诗三百', href: 'www.baidu.com' },
    { label: '唐诗三百', href: 'www.baidu.com' },
    { label: '楚辞', href: 'www.baidu.com' },
    { label: '唐诗三百', href: 'www.baidu.com' },
    { label: '唐诗三百', href: 'www.baidu.com' },
    { label: '咏物', href: 'www.baidu.com' },
    { label: '唐诗三百', href: 'www.baidu.com' },
    { label: '唐诗三百', href: 'www.baidu.com' },
    { label: '唐诗三百', href: 'www.baidu.com' },
    { label: '唐诗三百', href: 'www.baidu.com' },
    { label: '唐诗三百', href: 'www.baidu.com' },
  ]);

  const Content = (
    <>
      <Prose />
    </>
  );

  const RightNode = (
    <>
      <Aside title="诗文" tags={tags} />
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

MinePage.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const article = await ArticleProvider.getArticle(id);
  return { article };
};

export default MinePage;
