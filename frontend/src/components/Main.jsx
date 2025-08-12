import Blogpost from "./Blogpost"
import Category from "./Category"
import FAQ from "./FAQ"
import Feedback from "./Feedback"
import Getknow from "./Getknow"
import Hero from "./Hero"
import Jhumkas from "./Jhumkas"
import Natural from "./Natural"
import StealDeal from "./StealDeal"
import Trending from "./Trending"

function Main() {
  return (
    <>
      <Hero />
      <Trending />
      <Category />
      <Natural />
      <StealDeal />
      <Jhumkas />
      <Getknow />
      <Blogpost />
      <Feedback />
      <FAQ />
    </>
  )
}

export default Main
