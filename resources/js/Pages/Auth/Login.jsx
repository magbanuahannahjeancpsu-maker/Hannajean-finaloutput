import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import {
    Factory,
    Eye,
    EyeOff,
    ArrowRight,
    ShieldCheck,
    Leaf,
    LockKeyhole,
    UserPlus,
    UserRound,
} from "lucide-react";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [isRegister, setIsRegister] = useState(
        window.location.pathname === "/register"
    );

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        remember: false,
    });

    function handleSubmit(event) {
        event.preventDefault();

        if (isRegister) {
            post("/register", {
                onSuccess: () => reset(),
                onFinish: () => reset("password", "password_confirmation"),
            });
        } else {
            post("/login", {
                onFinish: () => reset("password"),
            });
        }
    }

    function switchMode(register) {
        setIsRegister(register);
        reset();
        setShowPassword(false);
        window.history.replaceState(
            {},
            "",
            register ? "/register" : "/login"
        );
    }

    return (
        <>
            <Head title={isRegister ? "Create Account" : "Login"} />

            <main className="min-h-screen bg-[#faf8f2] text-[#203b2d]">
                <div className="grid min-h-screen lg:grid-cols-2">
                    <section className="relative hidden overflow-hidden bg-[#244a35] p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">
                        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#d17a55]/20 blur-3xl" />
                        <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-[#9bb69b]/20 blur-3xl" />

                        <Link href="/" className="relative z-10 flex w-fit items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                                <Factory size={26} />
                            </div>
                            <div>
                                <p className="text-lg font-extrabold tracking-tight">HANNAH</p>
                                <p className="text-[10px] font-bold tracking-[0.22em] text-[#e9b99c]">
                                    POWDER FACTORY
                                </p>
                            </div>
                        </Link>

                        <div className="relative z-10 max-w-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#e9b99c]">
                                {isRegister ? <UserPlus size={34} /> : <ShieldCheck size={34} />}
                            </div>

                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e9b99c]">
                                Factory Management System
                            </p>

                            <h1 className="mt-5 text-4xl font-black leading-tight xl:text-5xl">
                                {isRegister ? "Create your" : "Every process."}
                                <br />
                                {isRegister ? "factory workspace." : "Every detail."}
                                <br />
                                <span className="text-[#e9b99c]">
                                    {isRegister ? "Stay organized." : "Better organized."}
                                </span>
                            </h1>

                            <p className="mt-6 max-w-md text-base leading-8 text-[#d3dfd0]">
                                Manage production activities and keep factory
                                operations organized in one place.
                            </p>

                            <div className="mt-8 flex items-center gap-3 text-sm text-[#d3dfd0]">
                                <Leaf size={18} className="text-[#e9b99c]" />
                                Quality • Consistency • Excellence
                            </div>
                        </div>

                        <p className="relative z-10 text-sm text-[#d3dfd0]/80">
                            © {new Date().getFullYear()} Hannah Powder Factory
                        </p>
                    </section>

                    <section className="flex items-center justify-center px-5 py-12 sm:px-10">
                        <div className="w-full max-w-md">
                            <Link href="/" className="mb-10 inline-flex items-center gap-3 lg:hidden">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#244a35] text-white">
                                    <Factory size={23} />
                                </div>
                                <div>
                                    <p className="font-extrabold">HANNAH</p>
                                    <p className="text-[10px] font-bold tracking-[0.18em] text-[#b85d3e]">
                                        POWDER FACTORY
                                    </p>
                                </div>
                            </Link>

                            <div className="mb-8">
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf0e6] text-[#244a35]">
                                    {isRegister ? <UserRound size={27} /> : <LockKeyhole size={27} />}
                                </div>

                                <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#b85d3e]">
                                    {isRegister ? "Join the Workspace" : "Welcome Back"}
                                </p>

                                <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                                    {isRegister ? "Create your account" : "Sign in to your account"}
                                </h2>

                                <p className="mt-3 leading-7 text-[#68736a]">
                                    {isRegister
                                        ? "Fill in your details to create an account."
                                        : "Enter your account details to access the factory management system."}
                                </p>
                            </div>

                            {errors.email && (
                                <div role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                    {errors.email}
                                </div>
                            )}

                            {errors.name && (
                                <div role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                    {errors.name}
                                </div>
                            )}

                            {errors.password && (
                                <div role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                    {errors.password}
                                </div>
                            )}

                            {isRegister && errors.password_confirmation && (
                                <div role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                    {errors.password_confirmation}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {isRegister && (
                                    <div>
                                        <label htmlFor="name" className="mb-2 block text-sm font-bold">
                                            Full Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            autoComplete="name"
                                            required
                                            value={data.name}
                                            onChange={(e) => setData("name", e.target.value)}
                                            placeholder="Enter your full name"
                                            className="w-full rounded-xl border border-[#dedfd4] bg-white px-4 py-3.5 outline-none focus:border-[#244a35] focus:ring-4 focus:ring-[#244a35]/10"
                                        />
                                    </div>
                                )}

                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-bold">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        autoFocus
                                        value={data.email}
                                        onChange={(e) => setData("email", e.target.value)}
                                        placeholder="you@example.com"
                                        className="w-full rounded-xl border border-[#dedfd4] bg-white px-4 py-3.5 outline-none focus:border-[#244a35] focus:ring-4 focus:ring-[#244a35]/10"
                                    />
                                </div>

                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <label htmlFor="password" className="text-sm font-bold">
                                            Password
                                        </label>

                                        {!isRegister && (
                                            <Link href="/forgot-password" className="text-sm font-semibold text-[#b85d3e] hover:underline">
                                                Forgot password?
                                            </Link>
                                        )}
                                    </div>

                                    <div className="relative">
                                        <input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            autoComplete={isRegister ? "new-password" : "current-password"}
                                            required
                                            value={data.password}
                                            onChange={(e) => setData("password", e.target.value)}
                                            placeholder="Enter your password"
                                            className="w-full rounded-xl border border-[#dedfd4] bg-white px-4 py-3.5 pr-12 outline-none focus:border-[#244a35] focus:ring-4 focus:ring-[#244a35]/10"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-[#68736a] hover:bg-[#f1f0e8]"
                                        >
                                            {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                                        </button>
                                    </div>
                                </div>

                                {isRegister && (
                                    <div>
                                        <label htmlFor="password_confirmation" className="mb-2 block text-sm font-bold">
                                            Confirm Password
                                        </label>
                                        <input
                                            id="password_confirmation"
                                            type="password"
                                            autoComplete="new-password"
                                            required
                                            value={data.password_confirmation}
                                            onChange={(e) => setData("password_confirmation", e.target.value)}
                                            placeholder="Re-enter your password"
                                            className="w-full rounded-xl border border-[#dedfd4] bg-white px-4 py-3.5 outline-none focus:border-[#244a35] focus:ring-4 focus:ring-[#244a35]/10"
                                        />
                                    </div>
                                )}

                                {!isRegister && (
                                    <label className="flex cursor-pointer items-center gap-3 text-sm text-[#68736a]">
                                        <input
                                            type="checkbox"
                                            checked={data.remember}
                                            onChange={(e) => setData("remember", e.target.checked)}
                                            className="h-4 w-4 rounded border-[#c9cec3] accent-[#244a35]"
                                        />
                                        Remember me
                                    </label>
                                )}

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#244a35] px-5 py-4 font-bold text-white transition hover:bg-[#193626] disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {processing
                                        ? "Please wait..."
                                        : isRegister
                                            ? "Create Account"
                                            : "Sign In"}
                                    {!processing && <ArrowRight size={18} />}
                                </button>
                            </form>

                            <p className="mt-6 text-center text-sm text-gray-600">
                                {isRegister ? "Already have an account? " : "Don't have an account? "}
                                <button
                                    type="button"
                                    onClick={() => switchMode(!isRegister)}
                                    className="font-semibold text-[#b85d3e] hover:underline"
                                >
                                    {isRegister ? "Sign in" : "Register here"}
                                </button>
                            </p>

                            <div className="my-8 flex items-center gap-4">
                                <div className="h-px flex-1 bg-[#e3e2d8]" />
                                <span className="text-xs font-medium text-[#92988f]">
                                    SECURE FACTORY ACCESS
                                </span>
                                <div className="h-px flex-1 bg-[#e3e2d8]" />
                            </div>

                            <p className="text-center text-sm text-[#68736a]">
                                Need to return to the main page?{" "}
                                <Link href="/" className="font-bold text-[#b85d3e] hover:underline">
                                    Back to Home
                                </Link>
                            </p>

                            <p className="mt-8 text-center text-xs leading-5 text-[#92988f]">
                                Authorized users only. Please keep your account credentials private.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}