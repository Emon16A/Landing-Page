import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                VirtualR builds tools
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    for devlopers
                </span>

            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                VirtualR is a platform that provides tools and resources for developers to build and deploy their applications.
                Get started today and turn your imgaination into reality!
            </p>
            <div className="flex justify-center my-10">
                <a href="#"
                    className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md">
                    Get Started for Free
                </a>
                <a href="#" className="mx-4 py-3 px-4 border rounded-md">
                    Learn More
                </a>
            </div>
            <div className=" flex mt-10 justify-center w-full ">
                <video autoPlay loop muted className="rounded-lg w-1/2 border-2 border-orange-700 shadow-lg shadow-orange-400 mx-2 my-4">
                    <source src={video1} type="video/mp4" />
                </video>

                <video autoPlay loop muted className="rounded-lg w-1/2 border-2 border-orange-700 shadow-lg shadow-orange-400 mx-2 my-4">
                    <source src={video2} type="video/mp4" />
                </video>

            </div>

        </div>
    )
}

export default HeroSection