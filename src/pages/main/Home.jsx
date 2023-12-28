import React from 'react'
import {Landingtop} from "../../components/Landing/Landingtop"
import { Landingsearchbar } from '../../components/Landing/Landingsearchbar'
import {Landingcommcard1} from '../../components/Landing/Landingcommcard'
import {Landingmid} from "../../components/Landing/Landingmid";
import { Landingbottom } from '../../components/Landing/Landingbottom';
import { Landingwhouses } from '../../components/Landing/Landingwhouses';
import { FeedCard } from '../../components/patron/feed/FeedCard';
function Home() {
  return (
    <div>
      <Landingtop />
      <Landingsearchbar />
      <Landingcommcard1 />
      <Landingmid />
      <Landingwhouses />
      <Landingbottom/>
    </div>
  )
}

export default Home