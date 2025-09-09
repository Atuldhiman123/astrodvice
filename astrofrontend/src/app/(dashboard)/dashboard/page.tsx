'use client';
import HeaderPage from "@/app/page";
import MainPage from "@/component/MainPage/main";
import HomePage from "./@header/page";

export default function DashboardPage() {
    return (
        <div>
            <HomePage/>
            <MainPage/>
        </div>
    );
}