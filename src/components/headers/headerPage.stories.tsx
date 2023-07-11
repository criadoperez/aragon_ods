import { type Meta, type Story } from '@storybook/react';
import React from 'react';
import { IconAdd, IconFinance, IconLinkExternal } from '../icons';
import { HeaderPage, type HeaderPageProps } from './headerPage';

export default {
    title: 'Components/Headers/Page',
    component: HeaderPage,
} as Meta;

const Template: Story<HeaderPageProps> = (args) => <HeaderPage {...args} />;

export const Page = Template.bind({});
Page.args = {
    title: 'Title',
    description: 'description',

    breadCrumbs: {
        crumbs: [
            { label: 'Finance', path: '/abc' },
            { label: 'Tokens', path: '/abc' },
            { label: 'Third Level', path: '/abc' },
        ],
        icon: <IconFinance />,
        onClick: (path) => alert(path),
    },

    primaryBtnProps: {
        iconLeft: <IconAdd />,
        label: 'Primary Action',
    },

    secondaryBtnProps: {
        iconRight: <IconLinkExternal />,
        label: 'Secondary Action',
        disabled: true,
    },
};
