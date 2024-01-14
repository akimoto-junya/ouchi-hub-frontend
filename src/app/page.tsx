export default function Home() {
  const test = {
    "test": "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest", "test2": "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>frontend</div>
      <div>{test.test}</div>

    </main>
  )
}
