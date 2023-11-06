import React from 'react'
import logoDIVINEwhite from '../assets/logoDIVINEwhite.png'
import HomeNewIn from '../components/HomeNewIn'
import { ShopNow } from '../components/ShopNow'
import { ShopCollections } from '../components/ShopCollections'
import { HomeSale } from '../components/HomeSale'
import { HeroSec } from '../components/HeroSec'
import { OurMission } from '../components/OurMission'

export const Home = () => {
  return (
    <>

      <HeroSec />

      <HomeNewIn />

      <ShopNow />

      <ShopCollections />

      <OurMission />

      <HomeSale />
    </>
  )
}
