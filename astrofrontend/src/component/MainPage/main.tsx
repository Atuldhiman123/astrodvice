'use client';
import Image from 'next/image';

export default function MainPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4 flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-8 w-full max-w-3xl">
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <Image src="/file.svg" alt="Astro Expert" width={120} height={120} className="rounded-full border-4 border-yellow-300" />
                        <span className="absolute bottom-2 right-2 bg-blue-500 text-white rounded-full px-2 py-1 text-xs font-bold">✔</span>
                    </div>
                    <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-lg transition">Gift</button>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">Acharya Aryan S</h2>
                    <div className="mb-2 text-gray-700"><span className="font-semibold">Expertise:</span> Vedic, Tarot, Numerology, Palmistry</div>
                    <div className="mb-2 text-gray-700"><span className="font-semibold">Experience:</span> 6+ Years of Experience</div>
                    <div className="mb-2 text-gray-700"><span className="font-semibold">Language:</span> English, Hindi</div>
                    <div className="flex flex-wrap gap-4 items-center mt-4 mb-2">
                        <div className="bg-yellow-100 px-3 py-1 rounded-lg text-yellow-800 font-semibold text-sm flex items-center gap-1">
                            <span>Consultation Charges:</span>
                            <span className="line-through text-gray-400">₹60/min</span>
                            <span className="font-bold">₹35/min</span>
                            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded ml-2">OFFER</span>
                        </div>
                        <div className="bg-green-100 px-3 py-1 rounded-lg text-green-800 font-semibold text-sm flex items-center gap-1">
                            <span>User Rating:</span>
                            <span className="text-yellow-500">★★★★★</span>
                            <span>(4.9)</span>
                        </div>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-1 rounded transition">Follow</button>
                        <span className="text-gray-500 text-sm">210 Followers</span>
                    </div>
                    <button className="mt-2 bg-gray-400 text-white font-semibold px-6 py-2 rounded-lg flex items-center gap-2 cursor-not-allowed" disabled>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                        Offline
                    </button>
                </div>
            </div>
            <div className="mt-10 bg-white rounded-xl shadow p-6 w-full max-w-3xl">
                <h3 className="text-xl font-bold mb-2">About Acharya Aryan S</h3>
                <p className="text-gray-700">Acharya Aryan is a seasoned practitioner with years of expertise in mystical arts. His knowledge spans Vedic Astrology, Tarot, Numerology, and Palmistry, helping seekers unravel cosmic influences and gain clarity in life decisions. Known for insightful guidance and compassionate advice, Aryan empowers individuals to navigate their destinies with confidence.</p>
            </div>
        </div>
    );
}