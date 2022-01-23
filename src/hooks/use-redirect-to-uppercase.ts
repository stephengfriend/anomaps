// pages/[route].js

import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useRedirectToUppercase = () => {
  const router = useRouter()

  useEffect(() => {
    if (router.asPath !== router.asPath.toUpperCase()) {
      router.push(router.asPath.toUpperCase())
    }
  })
}

export default useRedirectToUppercase
