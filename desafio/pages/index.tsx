import type { NextPage } from 'next'
import Card from '../components/card'
import Grid2Col from '../components/grid-2-col'
import Grid3Col from '../components/grid-3-col'
import Header from '../components/header'
import ImgCard from '../components/img-card'
import Title from '../components/title'

const Home: NextPage = () => {
  return (
    <div>
      <Header/>
      <Card/>
      <ImgCard/>
      <Title/>
      <Grid3Col/>
      <Grid2Col/>
    </div>
  )
}

export default Home
