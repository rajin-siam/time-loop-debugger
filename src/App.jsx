import EventList from "./components/EventList";
import Timeline from "./components/Timeline";
import AddEventForm from "./components/AddEventForm";
function App() {
  return (
    <div>
      <header>
        <h1>Time Loop Debugger</h1>
        <p>Welcome to the Time Travel Adventure!</p>
      </header>

      <main>
        <AddEventForm />
        <Timeline />
      </main>
    </div>
  )
}
export default App;