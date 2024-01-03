import Typewriter from "typewriter-effect"

const TypewriterEffect = () => {
    return (
        <>
        <div className="Typewriter">
            <Typewriter 
            onInit={(typewriter) => 
            {
             typewriter
             .typeString("I'm Leonard")
             .start()
            }} />
        </div>
        <div className = "subTypewriter">
            <p>A web developer from Norway who focuses on machine learning and full-stack development
            </p>
        </div>

        </>
     );
}
 
export default TypewriterEffect;