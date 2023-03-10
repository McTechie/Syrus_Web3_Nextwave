// type imports
import type { NextPage } from 'next'

// named imports
import { useRouter } from 'next/router'
import { DashboardLayout } from '../layouts'
import { ProfileInfo, ListingTable } from '../components'
import {
  useAddress,
  useContract,
  useDisconnect,
  useOwnedNFTs,
} from '@thirdweb-dev/react'

const Dashboard: NextPage = () => {
  // next router
  const router = useRouter()

  // web3 auth hooks
  const disconnect = useDisconnect()
  const address = useAddress()

  // check if user owns any IRC 1155 NFTs
  const { contract } = useContract('0x863841449a5bB0011B37B5e94504bFFB909Adcc0')
  const { data: ownedNFTs, isLoading } = useOwnedNFTs(contract, address)
  const hasAccess = ownedNFTs?.length! > 0

  if (!address || (!isLoading && !hasAccess)) {
    return <p>No Access...</p>
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <DashboardLayout>
      <ProfileInfo />
      
      <main className='max-w-screen-2xl mx-auto p-4'>
        <ListingTable />
      </main>
    </DashboardLayout>
  )
}

export default Dashboard
