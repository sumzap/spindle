import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HeroCarousel } from './HeroCarousel';
import type { CarouselItem } from './HeroCarouselItem';

const meta: Meta<typeof HeroCarousel> = {
  title: 'HeroCarousel',
};

export default meta;
type Story = StoryObj<typeof meta>;

const carouselList: CarouselItem[] = [
  {
    title: '1. 愛されるコンテンツをつくる',
    imageUrl:
      'https://images.microcms-assets.io/assets/24995dc41d5c40808fe4a9e3f6fb2b20/e2526e7bfa494168a2e547cfe55ac89f/top_mv.jpg?w=640&h=336&fit=crop&fm=webp&q=85',
    link: 'https://sumzap.co.jp/',
  },
  {
    title: '2. ゲーム開発の技術力',
    imageUrl:
      'https://images.microcms-assets.io/assets/24995dc41d5c40808fe4a9e3f6fb2b20/8582f4d2842741f78a7d8496019a2be2/team_article_003_cover.png?w=640&h=336&fm=webp&q=85',
    link: 'https://sumzap.co.jp/company/',
  },
  {
    title: '3. デザインシステムの軌跡',
    imageUrl:
      'https://images.microcms-assets.io/assets/24995dc41d5c40808fe4a9e3f6fb2b20/eb868ea0d6af41aaaff3091b7c1d4cfb/team_article_002_cover.png?w=640&h=336&fm=webp&q=85',
    link: 'https://sumzap.co.jp/news/',
  },
  {
    title: '4. サムザップの仲間たち',
    imageUrl:
      'https://images.microcms-assets.io/assets/24995dc41d5c40808fe4a9e3f6fb2b20/2ed4baaeb1b24a0096bef49b087fbe38/team_article_004__cover%402x.jpg?w=640&h=336&fit=crop&fm=webp&q=85',
    link: 'https://sumzap.co.jp/recruit/',
  },
  {
    title: '5. エンジニアブログ',
    imageUrl:
      'https://images.microcms-assets.io/assets/24995dc41d5c40808fe4a9e3f6fb2b20/2ed4baaeb1b24a0096bef49b087fbe38/team_article_004__cover%402x.jpg?w=640&h=336&fit=crop&fm=webp&q=85',
    link: 'https://tech.sumzap.co.jp/',
  },
];

export const Normal: Story = {
  render: () => <HeroCarousel carouselList={carouselList} autoplay={false} />,
};
