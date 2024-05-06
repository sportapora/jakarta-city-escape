import Slogan from '../assets/Sukses_Jakarta_Untuk_Indonesia.png'

export default function Footer() {
    return (
        <div
            className="mt-24 lg:mt-0 lg:absolute bottom-0 shadow-[0_-1px_4px_rgba(0,0,0,0.3)] py-4 container grid grid-cols-1 lg:grid-cols-2 gap-16 text-center lg:text-left">
            <div className="flex flex-col gap-6">
                <h1 className="text-2xl font-extrabold">jakarta<span className="font-normal">CityEscape</span></h1>
                <div className="flex justify-center lg:justify-start">
                    <img src={Slogan} className="w-24" alt="Sukses Jakarta untuk Indonesia"/>
                </div>
            </div>
            <div>
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <div className="mb-3">
                    <a href="" className="peer">Home</a>
                    <div className="animated-underscore peer-hover:w-12"></div>
                </div>
                <div className="mb-3">
                    <a href="" className="peer">Jelajahi Jakarta di Sini!</a>
                    <div className="animated-underscore peer-hover:w-40"></div>
                </div>
                <div className="mb-3">
                    <a href="" className="peer">About Devs</a>
                    <div className="animated-underscore peer-hover:w-24"></div>
                </div>
            </div>
        </div>
    )
}