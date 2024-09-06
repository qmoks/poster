import localFont from 'next/font/local'
import type {Metadata} from 'next'
import './globals.css'

const JetBrainsMono = localFont({
  src: [
    {
      path: '../assets/fonts/JetBrainsMono-Regular.woff2',
      weight: '400',
    },
    {
      path: '../assets/fonts/JetBrainsMono-Medium.woff2',
      weight: '500',
    },
  ],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'веб-плакат',
  description: 'руководство по веб-плакатам',
}

import Analytics from '~/Global/Analytics'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${JetBrainsMono.className} antialiased bg-background text-foreground`}>
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
