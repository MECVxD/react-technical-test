import { useCatImage } from '../hooks/useCatImage'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'Random' })
  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}
