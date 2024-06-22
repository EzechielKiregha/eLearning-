import { CheckCircle2 } from "lucide-react"
import institut from '../assets/institut.jpg'
import train from '../assets/train.jpg'
import kidlearning from '../assets/kid learning.jpg'
import { checklistItems, checklistItems2 } from "../constants"

const Workflow = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 
            tracking-wide" >Academic Institutions<br/>
                <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text ">
                    Let us bring your idea to life
                </span>
            </h2>
            
            <div className="flex flex-wrap justify-content">
                <div className="p-2 mt-12 w-full lg:w-1/2">
                    <img src={kidlearning} alt="learn" />
                </div>
                <div className="pt-12 lg:w-1/2 w-full">
                    {checklistItems.map((item, index) => (
                        <div key={index} className="mb-12 flex">
                            <div className="text-green-400  bg-neutral-900 h-10 w-20
                            p-2 justify-center items-center rounded-full">
                                <CheckCircle2/>
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                                <p className="text-md text-neutral-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-wrap justify-content">
                <div className="p-2 mt-12 w-full lg:w-1/2">
                    <img src={train} alt="learn" />
                </div>
                <div className="pt-12 lg:w-1/2 w-full">
                    {checklistItems2.map((item, index) => (
                        <div key={index} className="mb-12 flex">
                            <div className="text-green-400  bg-neutral-900 h-10 w-20
                            p-2 justify-center items-center rounded-full">
                                <CheckCircle2/>
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                                <p className="text-md text-neutral-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default Workflow