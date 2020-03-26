import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { AbiCoder } from 'web3-eth-abi'
import { keccak256 } from 'web3-utils'

const abiCoder = new AbiCoder()
const format = /\w+\(((bool|string|address|bytes\d*|u?int(8|16|32|64|128|256)?)(\[\])?,?)+\)/

export default function FuncSigGenerator() {
  const [func, setFunc] = useState('')
  const [signature, setSignature] = useState()
  const [isError, setIsError] = useState()

  // check function format
  useEffect(() => {
    if (!func || format.exec(func)) {
      setIsError(false)
    } else {
      setIsError(true)
    }
  }, [func])

  // get function signature
  useEffect(() => {
    if (func && format.exec(func)) {
      setSignature(abiCoder.encodeFunctionSignature(func))
    } else {
      setSignature()
    }
  }, [func])

  const renderResult = () => {
    if (signature && !isError) {
      return (
        <>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <ArrowDownwardIcon color='primary' />
          </Box>
          <Box
            mt={1}
            p={2}
            border={1}
            borderRadius={4}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Typography variant='h6'>{signature}</Typography>
          </Box>
        </>
      )
    }
  }

  return (
    <Card variant='outlined'>
      <CardContent>
        <Typography gutterBottom variant='h6'>
          Generate function signature
        </Typography>
        <TextField
          fullWidth
          variant='outlined'
          margin='normal'
          label='Function name'
          placeholder='transfer(address,uint)'
          helperText={isError && 'Incorrect Function format'}
          error={isError}
          value={func}
          onChange={event => setFunc(event.target.value)}
        />
        {renderResult()}
      </CardContent>
    </Card>
  )
}
