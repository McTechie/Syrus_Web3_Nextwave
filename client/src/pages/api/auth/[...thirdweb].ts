import { ThirdwebAuth } from '@thirdweb-dev/auth/next'
import { PrivateKeyWallet } from '@thirdweb-dev/auth/evm'
import { formatBytes32String } from 'ethers/lib/utils'

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || '',
  wallet: new PrivateKeyWallet(formatBytes32String(process.env.THIRDWEB_AUTH_PRIVATE_KEY || '')),
})

export default ThirdwebAuthHandler()
