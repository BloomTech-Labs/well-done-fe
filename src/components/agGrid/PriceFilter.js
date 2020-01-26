import React, {forwardRef, useImperativeHandle, useRef} from "react";

export default forwardRef((props, ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref, () => {
        return {
            // runs when filter input is actve
            isFilterActive() {
                console.log('inside price Filter actiive', inputRef.current.value)
                return inputRef.current.value !== '';
            },
            // runs if row matches filter condition
            doesFilterPass: (params) => {
                console.log('inside price Filter DOESFilterPass', inputRef.current.value)
                return params.data.price.toString() === inputRef.current.value;
            }
        };
    });

    return <input type="text" ref={inputRef} onChange={() => props.filterChangedCallback()}/>;
})
