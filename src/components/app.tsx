import Count from '@/components/count'
import ThemeToggle from '@/components/theme-toggle'

const App: React.FC = () => {
  return (
    <>
      <h1 className='text-4xl font-bold'>template - astro - shadcn - SSG/SSR</h1>
      <p>
        Link to{' '}
        <a href='/about' className='underline'>
          About
        </a>
      </p>
      <ThemeToggle />
      <Count />
    </>
  )
}

export default App
