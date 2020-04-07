import React, { useState, useEffect, useReducer, useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { isAddress, getContract } from '../../utils'

export default function KyberRegistry() {
  const [address, setAddress] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // check address format
  useEffect(() => {
    if (!address || isAddress(address)) {
      setErrorMessage()
    } else {
      setErrorMessage('Incorrect Address')
    }
  }, [address])

  const renderResult = () => {}

  return (
    <Card variant='outlined'>
      <CardContent>
        <Typography gutterBottom variant='h6'>
          Register as a referrer on Kyber Network
        </Typography>
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
        {renderResult()}
      </CardContent>
    </Card>
  )
}
