import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BreadcrumbItem } from './BreadcrumbItem';
import { BreadcrumbList as BreadcrumbListComponent } from './BreadcrumbList';

const meta: Meta<typeof BreadcrumbListComponent> = {
  title: 'Breadcrumb',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BreadcrumbList: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="emphasized">
        <BreadcrumbItem href="https://sumzap.co.jp/">Top</BreadcrumbItem>
        <BreadcrumbItem href="https://sumzap.co.jp/">Team</BreadcrumbItem>
        <BreadcrumbItem href="https://sumzap.co.jp/" current>
          Sumzapとは
        </BreadcrumbItem>
      </BreadcrumbListComponent>
    </>
  ),
};

export const BreadcrumbListWithoutBreadcrumbItem: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="emphasized">
        <a href="https://sumzap.co.jp/">Top</a>
        <a href="https://sumzap.co.jp/">Team</a>
        <span aria-current="page">Sumzapとは</span>
      </BreadcrumbListComponent>
    </>
  ),
};

export const NoHref: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="emphasized">
        <a href="https://sumzap.co.jp/">Top</a>
        <a href="https://sumzap.co.jp/">Team</a>
        <span aria-current="page">Sumzapとは</span>
      </BreadcrumbListComponent>
    </>
  ),
};

export const Standard: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="standard">
        <BreadcrumbItem href="https://sumzap.co.jp/">Top</BreadcrumbItem>
        <BreadcrumbItem href="https://sumzap.co.jp/">Team</BreadcrumbItem>
        <BreadcrumbItem href="https://sumzap.co.jp/" current>
          Sumzapとは
        </BreadcrumbItem>
      </BreadcrumbListComponent>
    </>
  ),
};

export const Emphasized: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="emphasized">
        <BreadcrumbItem href="https://sumzap.co.jp/">Top</BreadcrumbItem>
        <BreadcrumbItem href="https://sumzap.co.jp/">Team</BreadcrumbItem>
        <BreadcrumbItem href="https://sumzap.co.jp/" current>
          Sumzapとは
        </BreadcrumbItem>
      </BreadcrumbListComponent>
    </>
  ),
};

export const Wrap: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="standard" wrap="wrap">
        <BreadcrumbItem href="https://sumzap.co.jp/">Sumzapとは</BreadcrumbItem>
        <BreadcrumbItem href="https://sumzap.co.jp/">
          Ameヨコ (アメヨコ)
        </BreadcrumbItem>
        <BreadcrumbItem href="https://sumzap.co.jp/">
          福利厚生・社内制度
        </BreadcrumbItem>
        <BreadcrumbItem href="https://sumzap.co.jp/" current>
          「わたしたち、育休取得した経営陣です！」育休が2秒で快諾される、&quot;取るのが当たり前&quot;な環境とは
        </BreadcrumbItem>
      </BreadcrumbListComponent>
    </>
  ),
};

export const StandardOverflow: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="standard">
        <BreadcrumbItem href="https://sumzap.co.jp/">Sumzapとは</BreadcrumbItem>
        <BreadcrumbItem href="https://sumzap.co.jp/">
          Ameヨコ (アメヨコ)
        </BreadcrumbItem>
        <BreadcrumbItem href="https://sumzap.co.jp/">
          福利厚生・社内制度
        </BreadcrumbItem>
        <BreadcrumbItem href="https://sumzap.co.jp/" current>
          「わたしたち、育休取得した経営陣です！」育休が2秒で快諾される、&quot;取るのが当たり前&quot;な環境とは
        </BreadcrumbItem>
      </BreadcrumbListComponent>
    </>
  ),
};

export const StandardOverflowMiddleItem: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="standard">
        <BreadcrumbItem href="https://sumzap.co.jp/">Sumzapとは</BreadcrumbItem>
        <BreadcrumbItem href="https://sumzap.co.jp/" current>
          Ameヨコ (アメヨコ)
        </BreadcrumbItem>
        <BreadcrumbItem href="https://sumzap.co.jp/">
          福利厚生・社内制度
        </BreadcrumbItem>
        <BreadcrumbItem href="https://sumzap.co.jp/">
          「わたしたち、育休取得した経営陣です！」育休が2秒で快諾される、&quot;取るのが当たり前&quot;な環境とは
        </BreadcrumbItem>
      </BreadcrumbListComponent>
    </>
  ),
};
