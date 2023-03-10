// named imports
import { useState } from 'react'
import { useRouter } from 'next/router'
import { ArrowDownCircleIcon, ArrowUpCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const ListingTable = () => {
  const router = useRouter()

  // sorting appointment states
  const [isSortedByDoctor, setIsSortedByDoctor] = useState<boolean>(false)
  const [isSortedByProviderId, setIsSortedByProviderId] = useState<boolean>(false)

  // pagination appointment states
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [appointmentsPerPage, setAppointmentsPerPage] = useState<number>(8)

  // filtering appointment state
  const [filteredAppointments, setFilteredAppointments] = useState<AppointmentListItem[]>([
    {
      id: '1',
      providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
      doctor: 'Dr. John Doe',
      ailment: 'Covid-19',
      date: '2021-09-01',
      time: '10:00 AM'
    },
    {
      id: '2',
      providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
      doctor: 'Dr. Mohn Doe',
      ailment: 'Covid-19',
      date: '2021-09-01',
      time: '10:00 AM'
    },
    {
      id: '3',
      providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
      doctor: 'Dr. John Doe',
      ailment: 'Covid-19',
      date: '2021-09-01',
      time: '10:00 AM'
    },
    {
      id: '4',
      providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
      doctor: 'Dr. John Doe',
      ailment: 'Covid-19',
      date: '2021-09-01',
      time: '10:00 AM'
    },
    {
      id: '5',
      providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
      doctor: 'Dr. Mohn Doe',
      ailment: 'Covid-19',
      date: '2021-09-01',
      time: '10:00 AM'
    },
    {
      id: '6',
      providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
      doctor: 'Dr. John Doe',
      ailment: 'Covid-19',
      date: '2021-09-01',
      time: '10:00 AM'
    },
    {
      id: '7',
      providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
      doctor: 'Dr. John Doe',
      ailment: 'Covid-19',
      date: '2021-09-01',
      time: '10:00 AM'
    },
    {
      id: '8',
      providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
      doctor: 'Dr. Mohn Doe',
      ailment: 'Covid-19',
      date: '2021-09-01',
      time: '10:00 AM'
    },
    {
      id: '9',
      providerId: '0x863841449a5bB0011B37B5e94504bFFB909Adcc0',
      doctor: 'Dr. John Doe',
      ailment: 'Covid-19',
      date: '2021-09-01',
      time: '10:00 AM'
    },
  ])

  // sorting handler functions
  const handleSortByDoctor = () => {
    // Sorting Appointments by Doctor
    // -------------
    // Case #1:
    //   If the appointments have already been sorted by doctor, then sort them in descending order
    // Case #2:
    //   If the appointments have not been sorted by doctor, then sort them in ascending order

    let newlySortedAppointments: AppointmentListItem[] = []

    if (isSortedByDoctor) {
      newlySortedAppointments = filteredAppointments?.sort((a, b) => b.doctor.localeCompare(a.doctor))
    } else {
      newlySortedAppointments = filteredAppointments?.sort((a, b) => a.doctor.localeCompare(b.doctor))
    }

    setFilteredAppointments(newlySortedAppointments)
    setIsSortedByDoctor(isSortedByDoctor => !isSortedByDoctor)
  }

  const handleSortByProviderId = () => {
    // Sorting Appointments by ProviderId
    // -------------
    // Case #1:
    //   If the appointments have already been sorted by providerId, then sort them in descending order
    // Case #2:
    //   If the appointments have not been sorted by providerId, then sort them in ascending order

    let newlySortedAppointments: AppointmentListItem[] = []

    if (isSortedByDoctor) {
      newlySortedAppointments = filteredAppointments?.sort((a, b) => b.providerId.localeCompare(a.providerId))
    } else {
      newlySortedAppointments = filteredAppointments?.sort((a, b) => a.providerId.localeCompare(b.providerId))
    }

    setFilteredAppointments(newlySortedAppointments)
    setIsSortedByDoctor(isSortedByDoctor => !isSortedByDoctor)
  }

  // pagination handler function
  const handlePagination = (type: 'previous' | 'next') => {
    if (type === 'previous') {
      if (currentPage > 1) {
        setCurrentPage(currentPage => currentPage - 1)
      }
    } else {
      if (currentPage < Math.ceil(filteredAppointments?.length / appointmentsPerPage)) {
        setCurrentPage(currentPage => currentPage + 1)
      }
    }
  }

  return (
    <div>
    <table className='w-full table-fixed text-center mt-4'>
      <thead>
        <tr className='table-header-row'>
          <th className='hidden lg:block'>
            <div className='flex items-center justify-center relative'>
              <p>Healthcare Provider</p>
              <button
                type='button'
                onClick={handleSortByProviderId}
                className='absolute right-5'
              >
                {isSortedByProviderId ? (
                  <ArrowUpCircleIcon className='w-5 h-5' />
                ) : (
                  <ArrowDownCircleIcon className='w-5 h-5' />
                )}
              </button>
            </div>
          </th>
          <th>
            <div className='flex items-center justify-center relative'>
              <p>Doctor</p>
              <button
                type='button'
                onClick={handleSortByDoctor}
                className='absolute right-5'
              >
                {isSortedByDoctor ? (
                  <ArrowUpCircleIcon className='w-5 h-5' />
                ) : (
                  <ArrowDownCircleIcon className='w-5 h-5' />
                )}
              </button>
            </div>
          </th>
          <th className='hidden lg:block'>Ailment</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {filteredAppointments?.slice((currentPage - 1) * appointmentsPerPage, currentPage * appointmentsPerPage).map(appointment => (
          <tr
            key={appointment.id}
            className='table-body-row'
            onClick={() => router.push(`/appointments/${appointment.id}`)}
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
      </tbody>
    </table>

    {/* Pagination */}
    {filteredAppointments?.length > 0 && (
        <section className='mt-7'>
          <p className='text-center text-xs text-gray-500 mb-12'>
            Showing page {currentPage} of {Math.ceil(filteredAppointments?.length / appointmentsPerPage)}
          </p>

          <div className='flex items-center space-x-10 justify-center'>
            <button
              type='button'
              onClick={() => handlePagination('previous')}
              className='flex space-x-2 items-center p-2 pr-4 rounded-full text-sm bg-indigo-400 hover:bg-indigo-600 animate text-white'
            >
              <ChevronLeftIcon className='w-4 h-4' />
              <span>Previous</span>
            </button>
            
            <div className='flex items-center'>
              <label
                htmlFor='paginationSize'
                className='text-sm text-gray-500'
              >
                Logs per page:
              </label>
              <select
                name='paginationSize'
                id='paginationSize'
                className='text-sm text-white ml-2  bg-indigo-400 hover:bg-indigo-600 animate rounded-md p-1 py-2'
                value={appointmentsPerPage}
                onChange={(e) => setAppointmentsPerPage(parseInt(e.target.value))}
              >
                <option value={5}>5</option>
                <option value={8}>8</option>
                <option value={10}>10</option>
              </select>
            </div>

            <button
              type='button'
              onClick={() => handlePagination('next')}
              className='flex space-x-2 items-center p-2 pl-4 rounded-full text-sm bg-indigo-400 hover:bg-indigo-600 animate text-white'
            >
              <span>Next</span>
              <ChevronRightIcon className='w-4 h-4' />
            </button>
          </div>
        </section>
      )}
    </div>
  )
}

export default ListingTable
