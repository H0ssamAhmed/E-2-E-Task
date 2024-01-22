"use client"
import { useEffect } from 'react'
import HomePage from './_components/HomePage'

export default function Home() {

  useEffect(() => {
    document.title = 'E2E task';
  }, [])
  return (
    <main>
      <HomePage />
    </main>
  )
}
