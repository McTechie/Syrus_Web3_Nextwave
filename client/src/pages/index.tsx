// type imports
import type { NextPage } from 'next'

// name imports
import { BaseLayout } from '../layouts'
import { Section } from '../components'

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Section
        title='Bridging The Gap'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, placeat. Eaque enim amet sunt ipsa eum iusto corrupti blanditiis nesciunt odio excepturi, molestiae assumenda earum deserunt reiciendis dolorem dolorum sint, molestiae assumenda earum!'
        imgPath='/home/section1.svg'
        btnText='Get Started'
        link='/login'
      />

      <Section
        title='Powered By Blockchain'
        content='Lorem ipsum dolor sit amet consectetur, adipisicing elit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex suscipit eveniet architecto reprehenderit, quidem maiores maxime perferendis quae nobis ad! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur assumenda id totam animi nesciunt, tempore sint dolorem est voluptate.'
        imgPath='/home/section2.svg'
        btnText='Know How?'
        link='/about'
        isReversed
      />

      <Section
        title='Fast & Secure'
        content='Lorem ipsum dolor sit amet consectetur, adipisicing elit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex suscipit eveniet architecto reprehenderit, quidem maiores maxime perferendis quae nobis ad! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur assumenda id totam animi nesciunt, tempore sint dolorem est voluptate.'
        imgPath='/home/section3.svg'
        btnText='Learn More'
        link='/about'
      />
    </BaseLayout>
  )
}

export default Home
