import {cn} from '@/lib/utils'
import {Fragment} from 'react'
import Link from 'next/link'
import Container from '~/Global/Container'

const headerLinks = ['404']

const IndexLink: React.FC<{href: string; text: string; className?: string}> = ({href, text, className}) => (
  <Link className={cn('block underline underline-offset-4 hover:no-underline font-medium text-primary', className)} href={href}>
    {text}
  </Link>
)

export default function HomePage() {
  return (
    <Container className="space-y-6">
      <header className="flex gap-1.5">
        {headerLinks.map((link, index) => (
          <Fragment key={link}>
            <IndexLink text={link} href={`/${link}`} />
            {index < headerLinks.length - 1 && '/'}
          </Fragment>
        ))}
      </header>

      <section className="space-y-4">
        <span className="text-sm">
          <span className="text-primary">Веб-плакат?</span> Одностраничный сайт c анимацией, созданный с помощью веб-технологий для динамичного взаимодействия с пользователями.
        </span>
      </section>
    </Container>
  )
}
