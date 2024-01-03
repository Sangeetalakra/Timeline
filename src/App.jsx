
qimport Timeline from "./Timeline"

const App =()=>{
  return(
    <div>
      <h1>MY TIMELINE</h1>
      <br/>
      <Timeline year = {2006} event = "I was played  football first-time."/>
      <Timeline year = {2007} event="I was winned a final-match in khuti. I got a big goat in the prize."/>
      <Timeline year = {2023} event = "I was came first-time in Himchal  Pradesh."/>
      
    </div>
  )
}

export default App
