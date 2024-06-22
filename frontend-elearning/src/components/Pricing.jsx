import React from 'react'
import { features, pricingOptions } from '../constants'
import { MRT_FilterOptionMenu } from 'material-react-table'
import { CheckCircle2 } from 'lucide-react'

const Pricing = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">Check Our Plans</h2>
            <div className="flex flex-wrap">
                {pricingOptions.map((option, index) => (
                    <div className="w-full lg:w-1/3 sm:w-1/2 p-2">
                        <div className="p-10 border border-neutral-700 rounded-xl">
                            <p className="text-4xl mb-8">
                                {option.title}
                                {option.title === "Pro" && (
                                    <span className="text-xl bg-gradient-to-r from-blue-500
                                     to-blue-800 text-transparent bg-clip-text ml-2 mb-4">
                                        (Most popular)
                                    </span>

                                )}
                            </p>
                            <p className="mb-8">
                                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                                <span className="text-neutral-400 tracking-tight">/month</span>
                            </p>
                            
                            <ul>
                                {option.features.map((feature, index) => (
                                    <li className="mt-8 flex items-center">
                                        <CheckCircle2/>
                                        <span className="ml-2">{feature}</span>
                                    </li>
                                ))}  
                            </ul>
                            <a 
                            href="#" 
                            className="inline-flex justify-center itens-center text-center w-full 
                            h-12 p-2 mt-20 text-xl tracking-tight border hover:bg-blue-900
                             border-blue-900 rounded-lg transition duration-200 ">
                                Subscribe
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing