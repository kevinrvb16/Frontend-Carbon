import type { NextPage } from 'next'
import FloatButton from '../components/float-button'
import Grid2ColResult from '../components/grid-2-col/result-grid'
import Header from '../components/header'
import ResultHeader from '../components/result-header'

const Results: NextPage = () => {
  return (
    <div className="relative">
      <Header/>
      <ResultHeader/>
      <Grid2ColResult/>
      <FloatButton/>
    </div>
  )
}

export default Results
