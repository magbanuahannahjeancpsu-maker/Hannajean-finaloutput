import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/register", {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <>
            <Head title="Create Account" />

            <div className="flex min-h-screen items-center justify-center bg-[#f5f1e8] px-4 py-10">
                <div className="w-full max-w-md rounded-2xl border border-[#e5dfd2] bg-white p-8 shadow-sm">
                    <Link
                        href="/"
                        className="text-sm font-semibold text-[#b85d3e] hover:underline"
                    >
                        ← Back to Home
                    </Link>

                    <div className="mb-8 mt-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b85d3e]">
                            Hannah Powder Factory
                        </p>
                        <h1 className="mt-3 text-3xl font-bold text-[#263b2d]">
                            Create Account
                        </h1>
                        <p className="mt-2 text-sm text-gray-500">
                            Register to access the management system.
                        </p>
                    </div>

                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                autoComplete="name"
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#b85d3e] focus:ring-2 focus:ring-[#b85d3e]/20"
                                required
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                value={data.email}
                                onChange={(e) => setData("email", e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#b85d3e] focus:ring-2 focus:ring-[#b85d3e]/20"
                                required
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                autoComplete="new-password"
                                value={data.password}
                                onChange={(e) => setData("password", e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#b85d3e] focus:ring-2 focus:ring-[#b85d3e]/20"
                                required
                            />
                            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                        </div>

                        <div>
                            <label htmlFor="password_confirmation" className="mb-2 block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <input
                                id="password_confirmation"
                                type="password"
                                autoComplete="new-password"
                                value={data.password_confirmation}
                                onChange={(e) => setData("password_confirmation", e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#b85d3e] focus:ring-2 focus:ring-[#b85d3e]/20"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-lg bg-[#263b2d] px-4 py-3 font-semibold text-white transition hover:bg-[#354d3b] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {processing ? "Creating Account..." : "Create Account"}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link href="/login" className="font-semibold text-[#b85d3e] hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}