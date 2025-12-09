import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata = {
  title: 'Next.js Blog App',
  description: 'A blog application built with Next.js and Bootstrap',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}