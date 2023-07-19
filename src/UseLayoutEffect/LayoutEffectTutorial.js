import React, { useEffect, useLayoutEffect, useRef } from 'react'

function LayoutEffectTutorial() {

    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value)
    }, []);

    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, [])
    
    return (
        <div>
            <input ref={inputRef} value="KEVIN" style={{width: 400, height: 60}} />
        </div>
    )
}

export default LayoutEffectTutorial