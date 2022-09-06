import { useEffect } from "react";

// Receive the data (as array or object) and save it in a ref ... Bcz ref values persist during the rerenders
const objDataRef = useRef(objData) // this executes only once ... in the beginning

// after each re-render check if the string value of the ref.current and object matches
if (JSON.stringify(objDataRef.current) !== JSON.stringify(objData)) {
    objDataRef.current = objData; // update the ref if it really has changed
}

useEffect(() => {
    // do something with objData
}, [objDataRef.current]) // rather than putting the original objData as dependency, use the ref we created. Bcz objData will always have a new instance each time component/hook rerenders 