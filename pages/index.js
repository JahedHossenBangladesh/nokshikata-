import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <Layout/>
      <h1>Products</h1>
      <ul>
        <li>product 1</li>
        <li>Product 2</li>
      </ul>
    </div>
  )
}
