// named imports
import { useState } from 'react'
import { useRouter } from 'next/router'
import { ArrowDownCircleIcon, ArrowUpCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

interface ListingTableProps {
  appointments: Appointment[]
  userDataLoading: boolean
}

const ListingTable = ({ appointments, userDataLoading }: ListingTableProps) => {
  const router = useRouter()

  // const [filteredAppointments, setFilteredAppointments] = useState<AppointmentListItem[]>([
  //   {
  //     id: '1',
  //     providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
  //     doctor: 'Dr. John Doe',
  //     ailment: 'Covid-19',
  //     date: '2021-09-01',
  //     time: '10:00 AM'
  //   },
  //   {
  //     id: '2',
  //     providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
  //     doctor: 'Dr. Mohn Doe',
  //     ailment: 'Covid-19',
  //     date: '2021-09-01',
  //     time: '10:00 AM'
  //   },
  //   {
  //     id: '3',
  //     providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
  //     doctor: 'Dr. John Doe',
  //     ailment: 'Covid-19',
  //     date: '2021-09-01',
  //     time: '10:00 AM'
  //   },
  //   {
  //     id: '4',
  //     providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
  //     doctor: 'Dr. John Doe',
  //     ailment: 'Covid-19',
  //     date: '2021-09-01',
  //     time: '10:00 AM'
  //   },
  //   {
  //     id: '5',
  //     providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
  //     doctor: 'Dr. Mohn Doe',
  //     ailment: 'Covid-19',
  //     date: '2021-09-01',
  //     time: '10:00 AM'
  //   },
  //   {
  //     id: '6',
  //     providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
  //     doctor: 'Dr. John Doe',
  //     ailment: 'Covid-19',
  //     date: '2021-09-01',
  //     time: '10:00 AM'
  //   },
  //   {
  //     id: '7',
  //     providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
  //     doctor: 'Dr. John Doe',
  //     ailment: 'Covid-19',
  //     date: '2021-09-01',
  //     time: '10:00 AM'
  //   },
  //   {
  //     id: '8',
  //     providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
  //     doctor: 'Dr. Mohn Doe',
  //     ailment: 'Covid-19',
  //     date: '2021-09-01',
  //     time: '10:00 AM'
  //   },
  //   {
  //     id: '9',
  //     providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
  //     doctor: 'Dr. John Doe',
  //     ailment: 'Covid-19',
  //     date: '2021-09-01',
  //     time: '10:00 AM'
  //   },
  // ])

  // sorting handler functions


  // pagination handler function

  return (
    <table className='w-full table-fixed text-center mt-4'>
      <thead>
        <tr className='table-header-row'>
          <th className='hidden lg:block'>
            Healthcare Provider
          </th>
          <th>
            Doctor
          </th>
          <th className='hidden lg:block'>
            Ailment
          </th>
          <th>
            Date
          </th>
          <th>
            Time
          </th>
        </tr>
      </thead>
      <tbody>
        {appointments?.map(appointment => (
          <tr
            key={appointment.patientId}
            className='table-body-row'
            onClick={() => router.push(`/appointments/${appointment.patientId}`)}
          >
            <td className='hidden lg:block'>
              {appointment.providerId.substring(0, 6)}.....{appointment.providerId.substring(appointment.providerId.length - 6, appointment.providerId.length)}
            </td>
            <td>
              {appointment.doctor}
            </td>
            <td className='hidden lg:block'>
              {appointment.ailment}
            </td>
            <td>
              {appointment.date}
            </td>
            <td>
              {appointment.time}
            </td>
          </tr>
        ))}

        {appointments?.length === 0 && (
          <tr>
            <td colSpan={5}>
              <p className='text-center text-gray-500 mt-4'>
                {userDataLoading ? 'Loading...' : 'No appointments found...'}
              </p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default ListingTable
