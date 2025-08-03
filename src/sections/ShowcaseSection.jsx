import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id="work" className='app-showcase'>
      <div className="w-full">
        <div className="showcaselayout">
            {/* Left */}
            <div className="first-project-wrapper">
                <div className="image-wrapper">
                    <img 
                      src="/images/project1.png" 
                      alt="Ryde" 
                      className="" />
                </div>
                <div className="text-content">
                    <h2 className="">On-Demand Rides Made Simple with a Powerful, User-Friendly all called Ryde</h2>
                    <p className="text-white-50 md:text-xl">
                        An app Built with react Expo & Tailwindcss for a fast , User-Friendly Experience.
                    </p>
                </div>
            </div>
            {/* Right */}
        </div>

      </div>
    </div>
  )
}

export default ShowcaseSection
