import Timeline from "./components/Timeline";
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="py-8 bg-white shadow-md">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-2">Time Loop Debugger</h1>
        <p className="text-center text-gray-600">Welcome to the Time Travel Adventure!</p>
      </header>

      <main className="flex flex-col items-center mt-8">
        <Toaster position="top-right" reverseOrder={false} />
        <div className="w-full max-w-2xl">
          <Timeline />
        </div>
      </main>
    </div>
  )
}
export default App;