// // Travel Journal - Header

// import Header from "./components/Header"

// export default function App() {
//     return (
//         <Header />
//     )
// }
// ....................................................


// ....................................................

// Travel Journal - Entry Componen

// import Header from "./components/Header"
// import Entry from "./components/Entry"

// export default function App() {// Pass props to Entry component

// import Header from "./components/Header"
// import Entry from "./components/Entry"

// export default function App() {
//     return (
//         <>
//             <Header />
//             <main className="container"> tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
//                 />
//                 <Entry
//                     img={{ 
//                         src: "https://scrimba.com/links/travel-journal-japan-image-url",
//                         alt: "Mount Fuji" 
//                     }}
//                     title="Mount Fuji"
//                     country="Japan"
//                     googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
//                     dates="12 Jan, 2021 - 24 Jan, 2021"
//                     text="Mount Fuji is the
//             </main>
//         </>
//     )
// }
//     return (
//         <>
//             <Header />
//             <main className="container">
//                 <Entry />
//                 {/* in many websites like IMDB or Amazon,
//                  works with such thing and becaause of we have hardcoded 
//                  our html Entry */}
//                 <Entry />     
//             </main>
//         </>
//     )
// }
// ............................................................................

// // Aside: JS inside JSX

// P1:
// import ReactDOM from 'react-dom/client';

// function App() {
//   const firstName = "Joe"
//   const lastName = "Schmoe"
  
//   /**
//    * Challenge: finish off the h1 below so it says "Hello Joe Schmoe"
//    */
  
//   return (
//     <h1>Hello {firstName} {lastName}</h1>
//   )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);



// P2:
// import ReactDOM from 'react-dom/client';

// function App() {
//   const hours = new Date().getHours()
//   let timeOfDay

//   if (hours < 12) {
//     timeOfDay = "morning"
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon"
//   } else if (hours < 21) {
//     timeOfDay = "evening"
//   } else {
//     timeOfDay = "night"
//   }
  
//   /**
//    * Challenge: change the hard-coded "night" to display the
//    * text we determined from the logic above.
//    */

//   return (
//     <h1>Good {timeOfDay}</h1>
//   )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
// ..............................................................

// ****************************Review - array .map() ********************************

// /*
// Challenge 1:
// Given an array of numbers, return an array of each number, squared
// */
// const nums = [1, 2, 3, 4, 5]
// // -->       [1, 4, 9, 16, 25]
// // Your code here
// const squares = nums.map(function(num) {
//     return num * num
// })

// // console.log(squares)



// /*
// Challenge 2:
// Given an array of strings, return an array where 
// the first letter of each string is capitalized
// */

// const names = ["alice", "bob", "charlie", "danielle"]
// // -->        ["Alice", "Bob", "Charlie", "Danielle"]
// // Your code here
// const capitalized = names.map(name => (
//     name[0].toUpperCase() + name.slice(1))
// )
// // console.log(capitalized)



// /*
// Challenge 3:
// Given an array of strings, return an array of strings that wraps each
// of the original strings in an HTML-like <p></p> tag.

// E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
// return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// */

// const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// // -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// // Your code here

// const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)

// console.log(paragraphs)
// .............................................................

// // React can render arrays

    
//     /**
//      * Challenge: manually turn this string array into an array of
//      * JSX elements by surrounding each ninja turtle with an <h2> element
//      */
    
//     export default function App() {
//         const ninjaTurtles = [
//             <h2>Donatello</h2>, 
//             <h2>Michaelangelo</h2>,
//             <h2>Rafael</h2>,
//             <h2>Leonardo</h2>
//         ]
//         return (
//             <main>
//                 {ninjaTurtles}
//             </main>
//         )
//     }
// ........................................................
// // Mapping components

//     /**
//      * Challenge: See if you can correctly pass the necessary props to the 
//      * Joke component in the .map() (and render the jokeElements array) so 
//      * the jokes show up on the page again
//      */

//     import Joke from "./Joke"
// import jokesData from "./jokesData"

// export default function App() {
//     const jokeElements = jokesData.map((joke) => {
//         return <Joke setup={joke.setup} punchline={joke.punchline} />
//     })
//     return (
//         <main>
//             {jokeElements}
//         </main>
//     )
// }
// ....................................................................

// Map quiz!

// 1. What does the `.map()` array method do?
// Returns a new array. Whatever gets returned from the callback
// function provided is placed at the same index in the new array.
// Usually we take the items from the original array and modify them
// in some way.


// 2. What do we usually use `.map()` for in React?
// Convert an array of raw data into an array of JSX elements
// that can be displayed on the page.


// 3. Critical thinking: why is using `.map()` better than just
//    creating the components manually by typing them out?
//     1. We often don't have the data ahead of time when we're building
//        the app, so we simply can't manually type them out.
//     2. It makes our code more "self-sustaining" - not requiring additional
//        changes to the code whenever the data changes.
// ...........................................................

// // Travel Journal: Map Entry components

// import Header from "./components/Header"
// import Entry from "./components/Entry"
// import data from "./data"

// export default function App() {
    
//     const entryElements = data.map((entry) => {
//         return (
//             <Entry
//                 img={entry.img}
//                 title={entry.title}
//                 country={entry.country}
//                 googleMapsLink={entry.googleMapsLink}
//                 dates={entry.dates}
//                 text={entry.text}
//             />
//         )
//     })
    
//     return (
//         <>
//             <Header />
//             <main className="container">
//                 {entryElements}
//             </main>
//         </>
//     )
// }   
// ...............................................................

// // Travel Journal: Pass object as props

// import Header from "./components/Header"
// import Entry from "./components/Entry"
// import data from "./data"

// export default function App() {
    
//     const entryElements = data.map((entry) => {
//         return (
//             <Entry
//                 key={entry.id}
//                 entry={entry}
//             />
//         )
//     })
    
//     return (
//         <>
//             <Header />
//             <main className="container">
//                 {entryElements}
//             </main>
//         </>
//     )
// }
// .........................................................

import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App() {
    
    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                {...entry}
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}
