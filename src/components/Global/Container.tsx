import {cn} from '@/lib/utils'

interface Props {
  width?: '1/2' | '2/3'
  className?: string
  children: React.ReactNode
}

export const widthClasses = {
  '1/2': 'max-w-lg xl:max-w-md sm:mx-3.5',
  '2/3': '',
}

export default function Container({children, width = '1/2', className}: Props) {
  return <main className={cn('mx-auto my-28 xl:my-20 sm:my-10', widthClasses[width], className)}>{children}</main>
}
