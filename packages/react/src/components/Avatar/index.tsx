import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

// export type AvatarProps = ComponentProps<typeof AvatarImage>
export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  mode: 'light' | 'dark'
}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600} {...props}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
