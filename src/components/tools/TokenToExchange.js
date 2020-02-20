import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

export default function TokenToExchange() {
  const [tokenAddress, setTokenAddress] = useState()
  const [exchangeAddress, setExchangeAddress] = useState()

  return (
    <Card variant='outlined'>
      <CardContent>
        <Typography gutterBottom variant='h6'>
          Query Uniswap exchange address
        </Typography>
        <TextField
          fullWidth
          variant='outlined'
          margin='normal'
          label='Token address'
          value={tokenAddress}
          onChange={event => setTokenAddress(event.target.value)}
        />
        <Box display='flex' justifyContent='center' alignItems='center'>
          <ArrowDownwardIcon color='primary' />
        </Box>
        <TextField
          fullWidth
          variant='outlined'
          margin='normal'
          label='Exchange address'
          value={exchangeAddress}
        />
      </CardContent>
    </Card>
  )
}
