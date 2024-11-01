import './App.css'
import { cn } from './lib/utils'
import { Home } from './components/Home';

function App() {


  return (
    <div className={cn("relative h-full font-sans antialiased")}>
    <main className='relative flex flex-col min-h-screen'>
      <div className='flex-grow flex-1'>
        <Home/>
      </div>
    </main>
    </div>
  )
}

export default App
