import Kotu from '../assets/kotu-hero.jpg'

export default function ErrorPage() {
    return (
        <div className="min-h-screen bg-cover flex flex-col gap-10 items-center justify-center"
             style={{backgroundImage: `url(${Kotu})`}}>
            <div className="p-5 bg-stone-400/25 rounded-lg">
                <h1 className="text-6xl text-stone-100 text-center mb-5 font-extrabold">Error!</h1>
                <p className="text-stone-100 font-semibold text-2xl">Laman yang kamu mau tuju tidak tersedia nih! :(</p>
            </div>
        </div>
    )
}