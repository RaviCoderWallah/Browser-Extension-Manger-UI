import './App.css'
import BrowserExtensionHeader from './components/BrowserExtensionHeader'
import BrowserExtensionList from './components/BrowserExtensionList'

function App() {

  return (
    <main className='bg-linear-to-t from  bg-blue-950 to-neutral-900 min-h-screen w-full px-4'>
      <section className='max-w-5xl mx-auto h-full pt-12' id="browser-extension-page">
         <BrowserExtensionHeader/>
         <BrowserExtensionList/>
      </section>
    </main>
  )
}

export default App
