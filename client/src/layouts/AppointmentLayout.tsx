// default imports
import Head from 'next/head'

interface AppointmentLayoutProps {
  children: React.ReactNode
}

const AppointmentLayout = ({ children }: AppointmentLayoutProps) => {
  return (
    <div>
      <Head>
        <title>ChainBridge Portal | Appointment Details</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        {children}
      </div>
    </div>
  )
}

export default AppointmentLayout
