import Typewriter from "typewriter-effect"

const TypewriterEffect = () => {
    return (
        <div className="Typewriter">
            <Typewriter 
            onInit={(typewriter) => 
            {
             typewriter
             .typeString("I'm Leonard")
             .start()
            }} />
        </div>

     );
}
 
export default TypewriterEffect;