import React, { useEffect, useRef } from 'react'

const Dropdown = ({className, children, setShow}) => {
    let dropRef = useRef()
    useEffect(()=>{
      document.body.addEventListener('click', function (e) {
        if(dropRef.current.contains(e.target)){
          setShow(true)
        }else{
          setShow(false)
        }
      })
    },[])
  return (
    <div ref={dropRef} className={className}>{children}</div>
  )
}

export default Dropdown