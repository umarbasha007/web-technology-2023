import { forwardRef, useImperativeHandle } from "react";

const Hooks =(ref)=> {

    const getData = ()=> {
        return 11111;
    }

    useImperativeHandle(ref, ()=> ({getData}))


    return <>hhhh</>
}

export default forwardRef(Hooks)