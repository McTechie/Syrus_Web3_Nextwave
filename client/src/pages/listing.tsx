import { EvmChain } from '@moralisweb3/common-evm-utils'
import { useState } from 'react'
import Moralis from 'moralis'

const Listing = () => {
  type Transaction = {
    block_hash: string,
    block_number: string,
    from_address: string,
    hash: string,
    value: string
  }

  const address = '0x3c27d14748b589281eCFAce2d4f1F0F2784104Fa'
  const [txs, setTsx] = useState<Transaction[]>([])

  const fetchListing = async () => {

    await Moralis.start({
      apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
    });

    const chain = EvmChain.GOERLI;

    const response = await Moralis.EvmApi.transaction.getWalletTransactions({
      address,
      chain,
    });
    const data = await response.toJSON()
    const transaction: Transaction[] = data.result
    setTsx(transaction)
  }

  return (
    <div>
      <button onClick={() => fetchListing()}>Fetch</button>
      <div className='space-y-3 w-1/2 mx-auto'>
        {txs?.map(tx => (
          <div className='bg-indigo-100 p-4'>
            <p>Block Hash:{tx.block_hash}</p>
            <p>Block Number:{tx.block_number}</p>
            <p>From Address{tx.from_address}</p>
            <p>Hash:{tx.hash}</p>
            <p>Value:{tx.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listing;