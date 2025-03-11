import { Meta, StoryObj } from '@storybook/react';
import Input from './input';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        placeholder: { control: 'text' },
        required: { control: 'boolean' },
        error: { control: 'text' },
        disabled: { control: 'boolean' },
        value: { control: 'text' },
        onChange: { action: 'changed' },
    },
    parameters: {
        docs: {
			description: {
				component: 'A customizable input component for Pokemon Forms',
			},
        },
    },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		label: 'Username',
		placeholder: 'Enter your username',
	},
};

export const Required: Story = {
	args: {
		label: 'Email',
		placeholder: 'Enter your email',
		required: true,
	},
};

export const WithError: Story = {
	args: {
		label: 'Password',
		placeholder: 'Enter your password',
		error: 'Password must be at least 8 characters',
		required: true,
	},
};

export const Disabled: Story = {
	args: {
		label: 'Disabled Input',
		placeholder: 'Cannot edit this',
		disabled: true,
		value: 'Disabled content',
	},
};

export const Filled: Story = {
	args: {
		label: 'Name',
		placeholder: 'Enter your name',
		value: 'John Doe',
	},
};

export const NoLabel: Story = {
	args: {
		placeholder: 'Enter text here',
	},
};

export const FullExample: Story = {
	args: {
		label: 'Full Example',
		placeholder: 'Start typing...',
		required: true,
		value: 'Sample text',
		onChange: (e) => console.log(e.target.value),
	},
};
