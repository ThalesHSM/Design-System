import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@thales-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/ThalesHSM.png',
    alt: 'Diego Fernandes',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    mode: 'light',
  },
  argTypes: {
    mode: {
      options: ['light', 'dark'],
      control: {
        type: 'inline-radio',
      },
    },
  },
}
