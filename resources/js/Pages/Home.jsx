
import React from "react";
import { Head, Link } from "@inertiajs/react";
import {
    ArrowRight,
    Factory,
    ShieldCheck,
    FlaskConical,
    PackageCheck,
    Leaf,
    CheckCircle2,
    Menu,
} from "lucide-react";

export default function Home() {
    const features = [
        {
            icon: <FlaskConical size={25} />,
            title: "Quality Production",
            description:
                "Maintain consistent product quality through careful production processes and quality checks.",
        },
        {
            icon: <PackageCheck size={25} />,
            title: "Inventory Management",
            description:
                "Keep track of raw materials, finished products, and stock availability in one system.",
        },
        {
            icon: <ShieldCheck size={25} />,
            title: "Reliable Operations",
            description:
                "Organize production activities and monitor factory operations with better visibility.",
        },
    ];

    return (
        <>
            <Head title="Home - Hannah Powder Factory" />

            <div className="min-h-screen bg-[#faf8f2] text-[#203b2d]">
                {/* Navigation */}
                <header className="sticky top-0 z-50 border-b border-[#e6e5da] bg-[#faf8f2]/95 backdrop-blur">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
                        <a
                            href="#home"
                            className="flex items-center gap-3"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#244a35] text-[#faf8f2]">
                                <Factory size={25} />
                            </div>

                            <div>
                                <h1 className="text-lg font-extrabold tracking-tight">
                                    HANNAH
                                </h1>
                                <p className="text-[10px] font-bold tracking-[0.22em] text-[#b85d3e]">
                                    POWDER FACTORY
                                </p>
                            </div>
                        </a>

                        <nav className="hidden items-center gap-8 md:flex">
                            <a
                                href="#home"
                                className="text-sm font-semibold hover:text-[#b85d3e]"
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className="text-sm font-semibold hover:text-[#b85d3e]"
                            >
                                About Us
                            </a>
                            <a
                                href="#services"
                                className="text-sm font-semibold hover:text-[#b85d3e]"
                            >
                                Our Services
                            </a>
                            <a
                                href="#contact"
                                className="text-sm font-semibold hover:text-[#b85d3e]"
                            >
                                Contact
                            </a>
                        </nav>

                        <div className="flex items-center gap-3">
                            <Link
                                href="/login"
                                className="hidden rounded-xl px-4 py-2.5 text-sm font-bold text-[#244a35] transition hover:bg-[#e9eee5] sm:inline-flex"
                            >
                                Log In
                            </Link>

                            <Link
                                href="/login"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#244a35] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#193626]"
                            >
                                Get Started
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Hero */}
                <main>
                    <section
                        id="home"
                        className="relative overflow-hidden"
                    >
                        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
                            <div>
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d9e2d5] bg-[#edf2e9] px-4 py-2 text-xs font-bold uppercase tracking-[0.13em] text-[#244a35]">
                                    <Leaf size={15} />
                                    Quality • Consistency • Excellence
                                </div>

                                <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                    Building Better{" "}
                                    <span className="text-[#b85d3e]">
                                        Production
                                    </span>{" "}
                                    Every Day.
                                </h2>

                                <p className="mt-6 max-w-xl text-base leading-8 text-[#68736a] sm:text-lg">
                                    Welcome to Hannah Powder Factory. We
                                    focus on organized manufacturing,
                                    responsible inventory management, and
                                    dependable production operations.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-4">
                                    <Link
                                        href="/login"
                                        className="inline-flex items-center gap-3 rounded-xl bg-[#244a35] px-6 py-4 font-bold text-white shadow-lg shadow-[#244a35]/10 transition hover:-translate-y-0.5 hover:bg-[#193626]"
                                    >
                                        Access Factory System
                                        <ArrowRight size={18} />
                                    </Link>

                                    <a
                                        href="#about"
                                        className="rounded-xl border border-[#d8d9ce] px-6 py-4 font-bold text-[#244a35] transition hover:bg-white"
                                    >
                                        Learn About Us
                                    </a>
                                </div>

                                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[#68736a]">
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2
                                            size={17}
                                            className="text-[#b85d3e]"
                                        />
                                        Organized workflows
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2
                                            size={17}
                                            className="text-[#b85d3e]"
                                        />
                                        Centralized records
                                    </span>
                                </div>
                            </div>

                            {/* Decorative factory illustration */}
                            <div className="relative">
                                <div className="absolute -right-4 -top-5 h-32 w-32 rounded-full bg-[#e8c5ae]/50 blur-2xl" />
                                <div className="absolute -bottom-5 -left-4 h-32 w-32 rounded-full bg-[#cbd9c5]/70 blur-2xl" />

                                <div className="relative overflow-hidden rounded-[2rem] bg-[#244a35] p-5 shadow-2xl shadow-[#244a35]/15 sm:p-8">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d3dfd0]">
                                                Our Commitment
                                            </p>
                                            <h3 className="mt-2 text-2xl font-extrabold text-white">
                                                Made with Purpose.
                                            </h3>
                                        </div>
                                        <div className="rounded-2xl bg-white/10 p-3 text-[#f2c5a7]">
                                            <Factory size={30} />
                                        </div>
                                    </div>

                                    <div className="my-8 flex h-64 items-end justify-center gap-3 overflow-hidden rounded-2xl bg-[#f1eee3] px-5 pt-6 sm:gap-5">
                                        <div className="relative h-32 w-16 rounded-t-lg bg-[#b85d3e] sm:h-40 sm:w-20">
                                            <div className="absolute -top-5 left-4 h-6 w-8 bg-[#b85d3e]" />
                                            <div className="absolute inset-x-3 top-5 grid grid-cols-2 gap-2">
                                                <span className="h-4 bg-[#f1d9c8]" />
                                                <span className="h-4 bg-[#f1d9c8]" />
                                                <span className="h-4 bg-[#f1d9c8]" />
                                                <span className="h-4 bg-[#f1d9c8]" />
                                            </div>
                                        </div>

                                        <div className="relative h-44 w-24 rounded-t-lg bg-[#355c43] sm:h-52 sm:w-28">
                                            <div className="absolute -top-8 left-8 h-10 w-8 bg-[#355c43]" />
                                            <div className="absolute inset-x-4 top-5 grid grid-cols-2 gap-2">
                                                {Array.from({ length: 6 }).map(
                                                    (_, index) => (
                                                        <span
                                                            key={index}
                                                            className="h-5 rounded-sm bg-[#d9e2d5]"
                                                        />
                                                    )
                                                )}
                                            </div>
                                            <div className="absolute bottom-0 left-1/2 h-14 w-8 -translate-x-1/2 rounded-t-md bg-[#f1eee3]" />
                                        </div>

                                        <div className="relative h-28 w-16 rounded-t-lg bg-[#d8a27f] sm:h-36 sm:w-20">
                                            <div className="absolute -top-6 left-5 h-7 w-7 bg-[#d8a27f]" />
                                            <div className="absolute inset-x-3 top-4 grid grid-cols-2 gap-2">
                                                <span className="h-4 bg-[#f1eee3]" />
                                                <span className="h-4 bg-[#f1eee3]" />
                                                <span className="h-4 bg-[#f1eee3]" />
                                                <span className="h-4 bg-[#f1eee3]" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="rounded-xl bg-white/10 p-4">
                                            <p className="text-sm text-[#d3dfd0]">
                                                Our Focus
                                            </p>
                                            <p className="mt-1 font-bold text-white">
                                                Quality Control
                                            </p>
                                        </div>
                                        <div className="rounded-xl bg-white/10 p-4">
                                            <p className="text-sm text-[#d3dfd0]">
                                                Our Goal
                                            </p>
                                            <p className="mt-1 font-bold text-white">
                                                Efficient Production
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* About */}
                    <section
                        id="about"
                        className="border-y border-[#e8e5da] bg-white py-20"
                    >
                        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-2 md:items-center">
                            <div>
                                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#b85d3e]">
                                    About Our Factory
                                </p>
                                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                                    A smarter way to manage factory
                                    operations.
                                </h2>
                            </div>

                            <p className="leading-8 text-[#68736a]">
                                Hannah Powder Factory is supported by a
                                management system designed to help organize
                                production activities, monitor inventory, and
                                keep essential operational information
                                accessible. Our goal is to make everyday
                                factory work clearer and more efficient.
                            </p>
                        </div>
                    </section>

                    {/* Services */}
                    <section
                        id="services"
                        className="mx-auto max-w-7xl px-5 py-20 sm:px-8"
                    >
                        <div className="mx-auto max-w-2xl text-center">
                            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#b85d3e]">
                                What We Do
                            </p>
                            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                                Operations built around quality
                            </h2>
                            <p className="mt-4 leading-7 text-[#68736a]">
                                A practical approach to managing the key
                                activities of a powder manufacturing facility.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {features.map((feature) => (
                                <article
                                    key={feature.title}
                                    className="rounded-2xl border border-[#e7e5da] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#244a35]/5"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf0e6] text-[#244a35]">
                                        {feature.icon}
                                    </div>
                                    <h3 className="mt-6 text-xl font-extrabold">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-3 leading-7 text-[#68736a]">
                                        {feature.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Contact / CTA */}
                    <section
                        id="contact"
                        className="px-5 pb-20 sm:px-8"
                    >
                        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#244a35] px-6 py-12 text-center sm:px-12 sm:py-16">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e9b99c]">
                                Hannah Powder Factory
                            </p>
                            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black text-white sm:text-4xl">
                                Ready to manage your factory operations?
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl leading-7 text-[#d3dfd0]">
                                Sign in to access the factory management
                                dashboard and production tools.
                            </p>
                            <Link
                                href="/login"
                                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#d17a55] px-6 py-4 font-bold text-white transition hover:bg-[#b85d3e]"
                            >
                                Sign In to the System
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="border-t border-[#e6e5da] px-5 py-7 sm:px-8">
                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-sm text-[#68736a] sm:flex-row sm:text-left">
                        <p>
                            © {new Date().getFullYear()} Hannah Powder Factory.
                            All rights reserved.
                        </p>
                        <p>Quality • Consistency • Excellence</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
