import Counter from "./Counter"
import { CounterProvider } from "./context/CounterContext"
import { initState } from "./context/CounterContext"

function App (){

  return (
    <>
    <CounterProvider count = {initState.count} text = {initState.text}>
      <Counter children={(num: number) => <> Current Count: {num} </>} />
    </CounterProvider>
      
    </>
  )
}

export default App 



// import { useState, useEffect, useCallback, useMemo, useRef, type MouseEvent, type KeyboardEvent } from 'react'

// interface User {
//   id: number,
//   username: string
// }

// type fibonacciFunc = (n: number) => number

// const fib: fibonacciFunc = (n) => {
//   if (n < 2) return n
//   return fib(n - 1) + fib(n -2) 
// }

// const myNum: number = 29

// function App() {
//   const [count, setCount] = useState<number>(0)
//   const [users, setUsers] = useState<User[] | null>(null)

//   const inputRef = useRef<HTMLInputElement>(null)

//   console.log(inputRef?.current)
//   console.log(inputRef?.current?.value)

//   useEffect( () => {    // used for side effects, doesn't actually return a value 
//     console.log('Mounting')
//     console.log('Users: ', users)

//     return () => {console.log('Unmounting')}
//   }, [users])

//   const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 2 ), [])

//   const result = useMemo<number> (() => fib(myNum),[myNum]) // useMemo used for memoizing, optimal for extensive calculations 

//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button onClick = {addTwo}>Add</button>
//       <h2>{result}</h2>
//       <input ref = {inputRef} type="text" />
//     </div>
//   )
// }

// export default App


