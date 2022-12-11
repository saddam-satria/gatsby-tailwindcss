import { graphql } from "gatsby"
import * as React from "react"
import MainLayout from "../layouts/main"
import Img from 'gatsby-image'
import { useDispatch, useSelector } from "react-redux"
import { counter } from '../redux/actions/index'

export default function Home({ data }) {


  const counterState = useSelector((state) => state.counter);
  const dispatch = useDispatch()

  return (
    <MainLayout>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Img fixed={data.file.childImageSharp.fixed} className="animate-spin" />
        <div className="py-4 flex flex-col items-center">
          <h6 className="font-bold capitalize text-2xl">Gatsby Boilerplate</h6>
          <span className="lowercase text-sm text-blue-800">created by saddam</span>
        </div>
        <div className="flex space-x-4 items-center">
          <button onClick={() => dispatch(counter(false))} className="py-2 px-4 bg-blue-400 text-white rounded-lg">-</button>
          <span>{counterState.data}</span>
          <button onClick={() => dispatch(counter())} className="py-2 px-4 bg-blue-400 text-white rounded-lg">+</button>
        </div>
      </div>
    </MainLayout>
  )
}

export const Head = () => (
  <>
    <title>Gatsby Tailwindcss Boilerplate</title>
    <meta name="description" content="Hello World" />
  </>
)


export const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`