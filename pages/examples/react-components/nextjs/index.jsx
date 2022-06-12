import Image from 'next/image'

export default function NextJSExample() {
  return (
    <div>
      <div>
        <p>
          Image component from the NextJS library (<a href="https://nextjs.org/docs/api-reference/next/image">https://nextjs.org/docs/api-reference/next/image</a>)
        </p>

        <Image
          src="/subway.jpeg"
          height="200"
          width="200"
        />
      </div>
      <p>Note that you'll mostly want to use <code>mui</code> (Material UI) for basic components like Buttons</p>

    </div>
  )
}
