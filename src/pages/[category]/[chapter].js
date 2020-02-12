import React from 'react'
import { useRouter } from 'next/router'

export default function TokenChapter() {
  const router = useRouter()
  return (
    <div>
      {router.query.category} - {router.query.chapter}
    </div>
  )
}
