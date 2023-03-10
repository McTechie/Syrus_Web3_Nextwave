// type imports
import type { NextPage } from 'next'

// named imports
import { useAddress, useDisconnect, useMetamask, useUser } from '@thirdweb-dev/react'
import { AuthLayout } from '../layouts'

// default imports
import Image from 'next/image'

const Login: NextPage = () => {
  // web3 auth hooks
  const connectWithMetamask = useMetamask()
  const disconnect = useDisconnect()
  const address = useAddress()

  return (
    <AuthLayout>
      <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>

        {/* left side */}
        <aside className='bg-gradient-to-br from-emerald-600 to-indigo-400 flex flex-col items-center justify-center py-2 lg:min-h-screen lg:col-span-4'>
          <div className='bg-gradient-to-br from-amber-400 to-rose-400 px-4 py-3 rounded-xl'>
            <Image
              src='/logo.png'
              alt='ChainBridge Access NFT'
              width={200}
              height={200}
            />
          </div>

          <div className='text-center p-5 space-y-2'>
            <h1 className='text-3xl font-bold text-white'>ChainBridge Access</h1>
            <h2 className='text-lg text-gray-200'>An ERC 1155 Token that provides access to the ChainBridge Portal</h2>
          </div>
        </aside>

        {/* right side */}
        <section className='flex flex-1 flex-col p-12 lg:col-span-6'>
          
          {/* header section */}
          <header className='flex items-center justify-between'>
            <h2 className='w-52 cursor-pointer text-xl font-extralight sm:w-80 uppercase'>
              The <span className='font-bold underline decoration-indigo-400/70'>ChainBridge</span> Portal Access
            </h2>

            <button
              onClick={() => address ? disconnect() : connectWithMetamask()}
              className='rounded-full bg-indigo-500 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base'
            >
              {address ? 'Sign Out' : 'Sign In'}
            </button>
          </header>

          <hr className='my-2 border-[0.5px]' />

          {address && (
            <p className='text-center text-sm text-emerald-600'>
              Your logged in with wallet: {address.substring(0, 4)}...{address.substring(address.length - 4)}
            </p>
          )}

          <div className='flex mt-10 flex-1 flex-col items-center space-y-6 lg:justify-center'>
            <div className='flex'>
              <Image
                src='/cb_patient.png'
                alt='ChainBridge Patient NFT'
                width={200}
                height={200}
              />
              <Image
                src='/cb_admin.png'
                alt='ChainBridge Admin NFT'
                width={200}
                height={200}
              />
            </div>

            <h3 className='text-3xl font-semibold lg:text-4xl lg:font-bold text-gray-600'>
              ChainBridge Special NFT
            </h3>

            <p className='text-indigo-400 -mt-2 text-center'>
              Get access to the ChainBridge Portal by minting a special NFT.
            </p>
          </div>

          <button className='h-14 bg-emerald-600 w-full text-white rounded-full mt-10 font-bold'>
            Mint &#40;ERC 1155&#41; NFT
          </button>

        </section>

      </div>
    </AuthLayout>
  )
}

export default Login
