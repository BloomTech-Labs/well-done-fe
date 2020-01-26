import React, {useEffect, forwardRef, useImperativeHandle, useRef} from "react";

export default forwardRef((props, ref) => {
    const inputRef = useRef();
    // imperative allows user to customizes the instance value that is exposed to parent components when using ref.
    // in this case the row  
    useImperativeHandle(ref, () => {
        return {
            getValue: () => {
                console.log('INSIDIE IMPERATIVE HANDLE,', inputRef.current.value)
                return inputRef.current.value;
            }
        };
    });

// useEffects runs when I first touch a row ! 
    useEffect(() => {
        console.log('PRICE_EDITOR USE EFFECT RAN ',inputRef.current.value)
        // https://github.com/facebook/react/issues/7835#issuecomment-395504863
        setTimeout(() => inputRef.current.focus(), 10)
    }, []);
    return <input type="text" ref={inputRef} defaultValue={props.value}/>;
})
