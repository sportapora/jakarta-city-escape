import Kotu from '../assets/kotu-hero.jpg'

export default function ErrorPage() {
    return (
        <div className="min-h-screen relative bg-cover flex flex-col gap-10 items-center justify-center"
             style={{backgroundImage: `url(${Kotu})`}}>
            <div className="z-[55]">
                <h1 className="text-6xl text-stone-100 text-center mb-5 font-extrabold">Error!</h1>
                <p className="text-stone-100 font-semibold text-2xl">Terjadi kesalahan nih! Silakan coba lagi nanti
                    :(</p>
            </div>
            <div
                className='absolute h-screen w-full top-0 z-50 opacity-25 bg-gradient-to-t from-zinc-900 to-zinc-50'
                id="dark-layer"></div>
        </div>

    )
}