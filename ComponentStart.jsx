import {useRef} from 'react'
function Start({setUser}){
    const inputRef = useRef();
    function handleChange(){
        inputRef.current.value && setUser(inputRef.current.value);
    }
    return(
        <div className='start_conatiner'>
            <input placeholder='Enter your name' ref={inputRef}/>
            <button onClick={handleChange}>Start</button>
        </div>

    );
}
export default Start