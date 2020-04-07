import React, { useState, useEffect, useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { UnsupportedChainIdError } from '@web3-react/core'
import { NoEthereumProviderError } from '@web3-react/injected-connector'
import { UserRejectedRequestError } from '@web3-react/injected-connector'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { injected } from '../../connectors'
import { isAddress, getContract } from '../../utils'
import { KYBER_REGISTER_WALLET_ADDRESS } from '../../constants'
import KYBER_REGSITER_WALLET_ABI from '../../constants/abis/kyber_register_wallet.json'

export default function KyberRegistry() {
  const { active, error, library, account, activate } = useWeb3React()
  const [address, setAddress] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isPending, setIsPending] = useState(false)

  // check wallet provider
  useEffect(() => {
    if (error instanceof NoEthereumProviderError) {
      setErrorMessage('You have to install MetaMask first.')
    } else if (error instanceof UserRejectedRequestError) {
      setErrorMessage('You have to connect wallet first')
    } else if (error instanceof UnsupportedChainIdError) {
      setErrorMessage('Please switch to Mainnet')
    } else {
      setErrorMessage()
    }
  }, [error])

  // check address format
  useEffect(() => {
    if (!address || isAddress(address)) {
      setErrorMessage()
    } else {
      setErrorMessage('Incorrect Address')
    }
  }, [address])

  const connect = useCallback(() => {
    activate(injected)
  }, [activate])

  const register = useCallback(async () => {
    const registryContract = getContract(
      KYBER_REGISTER_WALLET_ADDRESS,
      KYBER_REGSITER_WALLET_ABI,
      library,
    )
    const registerWallet = registryContract.methods.registerWallet(address)
    const gas = await registerWallet.estimateGas()
    registerWallet
      .send({
        from: account,
        gas,
      })
      .on('transactionHash', () => {
        setIsPending(true)
      })
      .on('confirmation', number => {
        if (number === 1) {
          setIsPending(false)
        }
      })
      .on('error', () => {
        setIsPending(false)
        setErrorMessage('Fail to send transaction')
      })
  }, [account, address, library])

  return (
    <Card variant='outlined'>
      <CardContent>
        <Typography gutterBottom variant='h6'>
          Register as a referrer on Kyber Network
        </Typography>
        {active ? (
          <>
            <TextField
              fullWidth
              variant='outlined'
              margin='normal'
              label='Account address'
              helperText={errorMessage}
              error={!!errorMessage}
              value={address}
              onChange={event => setAddress(event.target.value)}
            />
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Button
                variant='contained'
                color='primary'
                disabled={isPending || !!errorMessage}
                onClick={register}
              >
                {isPending ? 'Pending...' : 'Register'}
              </Button>
            </Box>
          </>
        ) : (
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            {errorMessage && (
              <Typography color='error'>{errorMessage}</Typography>
            )}
            <Button variant='contained' color='primary' onClick={connect}>
              Connect
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  )
}
