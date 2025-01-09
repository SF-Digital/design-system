import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

import '../../global.css'

export default function Layout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  )
}
