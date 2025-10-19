import './App.css'
import BrowserExtensionHeader from './components/BrowserExtensionHeader'
import BrowserExtensionList from './components/BrowserExtensionList'

function App() {

  return (
    <main className='min-h-screen w-full px-4' id='main-container'>
      <section className='max-w-5xl mx-auto h-full pt-12' id="browser-extension-page">
         <BrowserExtensionHeader/>
         <BrowserExtensionList/>
      </section>
    </main>
  )
}

export default App
