// images
import imgOne from '../../assets/images/home/hero-1.png';

export default function HeroSection() {
    return (
    <div id="hero" className="relative grid grid-cols-4 grid-rows-4 bg-zinc-950 px-6 text-zinc-50">
        <img src={imgOne} />
        <div className="absolute top-0 left-0 w-100 text-center">
            <div className="flex flex-row place-items-center">
                <h1 className="text-5xl">Voile</h1>
                <p className="text-3xl">Lyon</p>
            </div>
            <div className="frosted-glass" />
        </div>
    </div>
    )
}