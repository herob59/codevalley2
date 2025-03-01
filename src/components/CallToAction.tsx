import React from 'react'

export default function CallToAction() {
  return (
            <div className="px-2 py-20 w-full flex justify-center">
            <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                <div className="lg:w-1/2">
                    <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                       style={{backgroundImage: "url(/assets/cta.jpg) "}}>
                    </div>
                </div>
                <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                    <h2 className="text-3xl text-gray-800 font-bold">
                        Promoting Sustainable Lifestyle 
                        <span className="text-indigo-600"> Choices</span>
                    </h2>
                    <p className="mt-4 text-gray-600">
                       Unlock your Tech Career Today. Learn How To code On a Daily basis by choosing a course Sustainable
                       for your. Join Our Developer Community and meet up with other developers that will work together
                       with you in your jorney as a developer.
                    </p>
                    <div className="mt-8">
                        <a href="#" className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Start Now</a>
                    </div>
                </div>
            </div>
        </div>
  )
}
