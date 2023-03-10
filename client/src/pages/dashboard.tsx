// type imports
import type { NextPage } from 'next'

// named imports
import { DashboardLayout } from '../layouts'
import { ListingTable } from '../components'
import {
  useAddress,
  useContract,
  useOwnedNFTs,
} from '@thirdweb-dev/react'
import Link from 'next/link'

const Dashboard: NextPage = () => {
  // web3 auth hooks
  const address = useAddress()

  // check if user owns any ERC 1155 NFTs
  const { contract: accessContract } = useContract(process.env.NEXT_PUBLIC_NFT_GATING_CONTRACT)
  const { data: ownedNFTs, isLoading } = useOwnedNFTs(accessContract, address)

  const hasAccess = ownedNFTs?.length! > 0

  if (!address || (!isLoading && !hasAccess)) {
    return <p>No Access...</p>
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <DashboardLayout>
      <div className='flex items-center justify-center md:justify-end mb-6'>
        {(address && ownedNFTs) && ownedNFTs[0].metadata.name === 'CB Admin' && (
          <Link
            href='/create'
            className='bg-indigo-500 hover:bg-indigo-600 animate text-white font-semibold py-2 px-4 rounded'
            >
            Create Appointment
          </Link>
        )}
      </div>

      <ListingTable />
    </DashboardLayout>
  )
}

export default Dashboard
