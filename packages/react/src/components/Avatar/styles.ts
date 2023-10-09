import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$16',
  height: '$16',
  overflow: 'hidden',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    mode: {
      light: {
        backgroundColor: '$gray100',
        color: '$gray300',
      },
      dark: {
        backgroundColor: '$gray600',
        color: '$gray800',
      },
    },
  },

  defaultVariants: {
    mode: 'dark',
  },

  svg: {
    width: '$6',
    height: '$6',
  },
})
