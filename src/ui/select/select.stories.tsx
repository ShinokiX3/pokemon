import { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import { SelectOption } from './select.type';
import Select from './select';

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
		label: { control: 'text' },
		placeholder: { control: 'text' },
		required: { control: 'boolean' },
		error: { control: 'text' },
		disabled: { control: 'boolean' },
		multiple: { control: 'boolean' },
		limit: { control: 'number' },
		options: {
			control: 'object',
			description: 'Array of SelectOption objects { label, value, url? }',
		},
    },
	parameters: {
		docs: {
			description: {
				component: 'A customizable select dropdown component with support for single and multiple selections, search, and badges.',
			},
		},
	},
	decorators: [
		(Story) => {
			const methods = useForm();
			return (
				<FormProvider {...methods}>
				<Story />
				</FormProvider>
			);
		},
	],
};

export default meta;

type Story = StoryObj<typeof Select>;

const defaultOptions: SelectOption[] = [
	{ label: 'Option 1', value: '1' },
	{ label: 'Option 2', value: '2' },
	{ label: 'Option 3', value: '3' },
	{ label: 'Option 4', value: '4' },
	{ label: 'Option 5', value: '5' },
	{ label: 'Option 6', value: '6' },
	{ label: 'Option 7', value: '7' },
	{ label: 'Option 8', value: '8' },
	{ label: 'Option 9', value: '9' },
	{ label: 'Option 10', value: '10' },
];

export const Default: Story = {
	args: {
		name: 'defaultSelect',
		label: 'Default Select',
		options: defaultOptions,
		placeholder: 'Select an option...',
	},
};

export const Multiple: Story = {
	args: {
		name: 'multipleSelect',
		label: 'Multiple Select',
		options: defaultOptions,
		multiple: true,
		limit: 4,
		placeholder: 'Select up to 4 options...',
	},
};

export const WithError: Story = {
	args: {
		name: 'errorSelect',
		label: 'Select with Error',
		options: defaultOptions,
		error: 'Please select a valid option',
		required: true,
		placeholder: 'Select an option...',
	},
};

export const Disabled: Story = {
	args: {
		name: 'disabledSelect',
		label: 'Disabled Select',
		options: defaultOptions,
		disabled: true,
		placeholder: 'Cannot select...',
	},
};

export const Required: Story = {
	args: {
		name: 'requiredSelect',
		label: 'Required Select',
		options: defaultOptions,
		required: true,
		placeholder: 'Select an option...',
	},
};

export const WithUrlOptions: Story = {
	args: {
		name: 'urlSelect',
		label: 'Select with URLs',
		options: [
			{ label: 'Google', value: 'google', url: 'https://www.google.com' },
			{ label: 'Facebook', value: 'facebook', url: 'https://www.facebook.com' },
			{ label: 'Twitter', value: 'twitter', url: 'https://www.twitter.com' },
		],
		placeholder: 'Select a site...',
	},
};
