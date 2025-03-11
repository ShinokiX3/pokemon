import { Meta, StoryObj } from '@storybook/react';
import Badge from './badge';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: 'text',
            description: 'The text content to display in the badge',
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes to apply to the badge',
        },
        onClick: {
            action: 'clicked',
            description: 'Click handler for the badge',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A simple badge component with text and a close icon, styled with Tailwind CSS.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        value: 'Default Badge',
    },
};

export const DefaultWithCross: Story = {
    args: {
        value: 'Default Badge',
        cross: true,
    },
};

export const LongText: Story = {
    args: {
        value: 'This is a very long badge text to test overflow',
    },
};

export const CustomStyled: Story = {
    args: {
        value: 'Custom',
        color: 'text-white',
        bgColor: 'bg-red-500',
        className: 'w-[100px]',
        cross: true,
    },
};
