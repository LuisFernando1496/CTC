import React,{forwardRef, useEffect, useRef} from 'react';



 const InputComponent = forwardRef(({ type='text', icon='user', placeholder='', name, id,
 classNme, required, value, handleChange , isFocused},ref) => {
  const input = ref ? ref: useRef();
useEffect(() => {
  if(isFocused)
  {
     input.current.focus();
  }
 
}, [])
  return (

    <div className='input-group mb-3 '>
      <span className='input-group-text'>
        <i className={'fa-solid '+icon}></i>
      </span>
      <input type={type} placeholder={placeholder} name={name} id={id} className={classNme} value={value} required={required}
      onChange={(e) => handleChange(e)}/>
    </div>
  );
});

export default InputComponent;