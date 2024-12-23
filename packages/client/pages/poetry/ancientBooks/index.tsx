import { NextPage } from 'next';
import React, { useState } from 'react';

import { Abbreviate } from '@/components/Poetry/Abbreviate';
import { AbbreviateExpand } from '@/components/Poetry/AbbreviateExpand';
import { Aside } from '@/components/Poetry/Aside';
import { Recommend } from '@/components/Poetry/Recommend';
import { PoetryLayout } from '@/layout/PoetryLayout';
import { ArticleProvider } from '@/providers/article';
import { ancientBooksTags, mockAncientBooks, mockAsideTags } from '@/utils/mock';

import style from './index.module.scss';

interface IProps {
  article: IArticle;
}

const AncientBooks: NextPage<IProps> = ({ article }) => {
  const [abbreviateType, setGetAbbreviateType] = useState(1);
  const getAbbreviateType = (val) => {
    setGetAbbreviateType(val);
  };
  const Content = (
    <>
      <Recommend
        title="不限"
        recommendTags={ancientBooksTags}
        isAbbreviate={true}
        getAbbreviateType={getAbbreviateType}
      />
      {abbreviateType === 1 ? (
        <Abbreviate data={mockAncientBooks} />
      ) : (
        <AbbreviateExpand type="ancientBooks" data={mockAncientBooks} />
      )}
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

AncientBooks.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const article = await ArticleProvider.getArticle(id);
  return { article };
};

export default AncientBooks;
