import { useEffect, useState, useRef } from "react";

 const Geolocation = () => {

   const hasMounted = useRef<boolean>(false);
   const [currentCoords, setCurrentCoords] = useState<number[] | null>(null)

   useEffect(() => {
     if (!hasMounted.current) {
       if ('geolocation' in navigator) {
         navigator.geolocation.getCurrentPosition((position) => {
           setCurrentCoords([position.coords.longitude, position.coords.latitude])
         });
       }
       else console.error('geolocation unavailable')
     }      
     hasMounted.current = true;
   }, [hasMounted])


   useEffect(() => {
     if (hasMounted.current) {

       const interval = setInterval(() => {
         if ('geolocation' in navigator) {
           navigator.geolocation.getCurrentPosition((position) => {
             setCurrentCoords([position.coords.longitude, position.coords.latitude])
           });
         }
         else console.error('geolocation unavailable')
       }, 3000);

       return () => {
         clearInterval(interval)
       }
     }
   })


   return ({
     currentCoords
   });
 };

 export default Geolocation;