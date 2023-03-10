// default imports
import Head from 'next/head'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div>
      <Head>
        <title>Welcome to ChainBridge Portal!</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
