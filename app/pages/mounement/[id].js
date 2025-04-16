// pages/monument/[id].js
import { useRouter } from 'next/router'
import monuments from '../../data/monuments'

export default function Monument() {
  const router = useRouter()
  const { id } = router.query
  const monument = monuments.find(m => m.id === id)

  if (!monument) return <p>Monument non trouvé.</p>

  return (
    <div>
      <h1>{monument.name}</h1>
      <p><strong>Pays :</strong> {monument.country}</p>
      <img src={monument.image} alt={monument.name} style={{ maxWidth: '400px' }} />
      <p>{monument.description}</p>
    </div>
  )
}
