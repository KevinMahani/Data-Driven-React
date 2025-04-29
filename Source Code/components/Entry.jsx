// Travel Journal - Entry Component

// export default function Entry() {
//     return (
//         <article className="journal-entry">
//             <div className="main-image-container">
//                 <img 
//                     className="main-image"
//                     src="https://scrimba.com/links/travel-journal-japan-image-url" 
//                     alt="mount fuji" 
//                 />
//             </div>
//             <div className="info-container">
//                 {/* Browsers by default show the img,span,a horizentaly */}
//                 <img 
//                     className="marker"
//                     src="../images/marker.png" 
//                     alt="map marker icon"
//                 />
//                 <span className="country">Japan</span>
//                 <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
//                 <h2 className="entry-title">Mount Fuji</h2>
//                 <p className="trip-dates">12 Jan, 2021 - 24 Jan, 2021</p>
//                 <p className="entry-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
//             </div>
            
//         </article>
//     )
// }
// ..........................................................

// // Pass props to Entry component

// export default function Entry(props) {
//     console.log(props)
//     return (
//         <article className="journal-entry">
//             <div className="main-image-container">
//                 <img 
//                     className="main-image"
//                     src={props.img.src} 
//                     alt={props.img.alt}
//                 />
//             </div>
//             <div className="info-container">
//                 <img 
//                     className="marker"
//                     src="../images/marker.png" 
//                     alt="map marker icon"
//                 />
//                 <span className="country">{props.country}</span>
//                 <a href={props.googleMapsLink}>View on Google Maps</a>
//                 <h2 className="entry-title">{props.title}</h2>
//                 <p className="trip-dates">{props.dates}</p>
//                 <p className="entry-text">{props.text}</p>
//             </div>
            
//         </article>
//     )
// }
// ...............................................................

// // // Travel Journal: Pass object as props

// /**
//  * Challenge: Fix our component! 😱
//  */

// export default function Entry(props) {
//     return (
//         <article className="journal-entry">
//             <div className="main-image-container">
//                 <img 
//                     className="main-image"
//                     src={props.entry.img.src}
//                     alt={props.entry.img.alt}          
//                 />
//             </div>
//             <div className="info-container">
//                 <img 
//                     className="marker"
//                     src="../images/marker.png" 
//                     alt="map marker icon"
//                 />
//                 <span className="country">{props.entry.country}</span>
//                 <a href={props.entry.googleMapsLink} target="_blank">View on Google Maps</a>
//                 <h2 className="entry-title">{props.entry.title}</h2>
//                 <p className="trip-dates">{props.entry.dates}</p>
//                 <p className="entry-text">{props.entry.text}</p>
//             </div>
            
//         </article>
//     )
// }
// .........................................................


/**
 * Challenge: Fix our component! 😱
 */

export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.img.src}
                    alt={props.img.alt}
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="../images/marker.png" 
                    alt="map marker icon"
                />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
            
        </article>
    )
}



