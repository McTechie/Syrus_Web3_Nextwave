// type imports
import type { NextPage } from 'next'

// named imports
import { DashboardLayout } from '../../layouts'
import {
  useAddress,
  useContract,
  useOwnedNFTs,
} from '@thirdweb-dev/react'

const Appointment: NextPage = () => {
  // web3 auth hooks
  const address = useAddress()

  // check if user owns any ERC 1155 NFTs
  // const { contract: accessContract } = useContract('0x863841449a5bB0011B37B5e94504bFFB909Adcc0')
  // const { data: ownedNFTs, isLoading } = useOwnedNFTs(accessContract, address)

  // const hasAccess = ownedNFTs?.length! > 0

  // if (!address || (!isLoading && !hasAccess)) {
  //   return <p>No Access...</p>
  // }

  // if (isLoading) {
  //   return <p>Loading...</p>
  // }

  return (
    <DashboardLayout>
      <p>Appointment</p>
    </DashboardLayout>
  )
}

export default Appointment
