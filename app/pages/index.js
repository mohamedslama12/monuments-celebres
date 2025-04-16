// pages/index.js
import Link from 'next/link'
import monuments from '../data/monuments'

export default function Home() {
  return (
    <div>
      <h1>Monuments célèbres</h1>
      <ul>
        {monuments.map(monument => (
          <li key={monument.id}>
            <Link href={`/monument/${monument.id}`}>
              {monument.name} - {monument.country}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
