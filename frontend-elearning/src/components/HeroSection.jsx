import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Empower Your Future with <br/>
                <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text ">
                    K-Corp eLearning
                </span>
            </h1>
            <p className="text-lg mt-10 text-center text-neutral-500 max-w-4xl">
                Discover high-quality education and unlock new opportunities. Join our community and start learning today!
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-800 px-3 py-2
                rounded-md ">Start Now it's free</a>
                <a href="#" className="px-3 py-2 mx-3 rounded-md ">Guide & Docs</a>
            </div>
            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
                    
                    <source src={video1} type='video/mp4'/>
                    Unable to load the video
                </video>
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
                    
                    <source src={video2} type='video/mp4'/>
                    Unable to load the video
                </video>
            </div>
        </div>
    )
}

export default HeroSection