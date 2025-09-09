'use client';
import Image from 'next/image';

export default function HeaderPage() {
    return (
        <header className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white shadow-lg py-6 px-4 flex flex-col md:flex-row items-center justify-between animate-fade-in">
            <div className="flex items-center gap-4">
                <Image src="/globe.svg" alt="Astro Globe" width={48} height={48} className="animate-spin-slow" />
                <h1 className="text-3xl md:text-4xl font-bold tracking-wide drop-shadow-lg">Astro Talk</h1>
            </div>
            <nav className="mt-4 md:mt-0 flex gap-6 text-lg">
                <a href="#horoscope" className="hover:text-yellow-300 transition-colors duration-200 font-semibold">Horoscope</a>
                <a href="#tarot" className="hover:text-pink-300 transition-colors duration-200 font-semibold">Tarot</a>
                <a href="#chat" className="hover:text-green-300 transition-colors duration-200 font-semibold">Live Chat</a>
                <a href="#about" className="hover:text-blue-300 transition-colors duration-200 font-semibold">About</a>
            </nav>
            <div className="hidden md:flex items-center gap-2">
                <Image src="/window.svg" alt="Astro Window" width={32} height={32} />
                <span className="italic text-sm text-gray-200">Your cosmic guide</span>
            </div>
        </header>
    );
}