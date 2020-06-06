import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="px-8 pt-20 pb-20 md:px-20">
      {children}
    </main>
    <Footer />
  </div>

)

export default Layout
