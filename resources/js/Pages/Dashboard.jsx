
import React from "react";
import { Head, Link } from "@inertiajs/react";
import {
    LayoutDashboard,
    Factory,
    Package,
    ClipboardList,
    Settings,
    LogOut,
    Bell,
    Search,
    ArrowUpRight,
    ArrowRight,
    Boxes,
    FlaskConical,
    CheckCircle2,
    Clock3,
    AlertTriangle,
    Menu,
} from "lucide-react";

const stats = [
    {
        label: "Total Products",
        value: "24",
        note: "Products registered",
        icon: Package,
        color: "bg-[#eaf0e6] text-[#244a35]",
    },
    {
        label: "Active Batches",
        value: "08",
        note: "Currently in production",
        icon: Factory,
        color: "bg-[#f7e8dc] text-[#b85d3e]",
    },
    {
        label: "Inventory Items",
        value: "156",
        note: "Materials and supplies",
        icon: Boxes,
        color: "bg-[#ece9f1] text-[#625278]",
    },
    {
        label: "Completed Today",
        value: "12",
        note: "Batches completed",
        icon: CheckCircle2,
        color: "bg-[#e5efed] text-[#386b61]",
    },
];

const batches = [
    {
        id: "BTH-2026-041",
        product: "Talcum Powder",
        line: "Production Line A",
        quantity: "500 units",
        status: "In Progress",
        progress: 72,
    },
    {
        id: "BTH-2026-042",
        product: "Baby Powder",
        line: "Production Line B",
        quantity: "350 units",
        status: "Quality Check",
        progress: 90,
    },
    {
        id: "BTH-2026-043",
        product: "Body Powder",
        line: "Production Line A",
        quantity: "250 units",
        status: "Scheduled",
        progress: 15,
    },
    {
        id: "BTH-2026-044",
        product: "Cooling Powder",
        line: "Production Line C",
        quantity: "400 units",
        status: "Completed",
        progress: 100,
    },
];

const inventory = [
    {
        name: "Talc Raw Material",
        category: "Raw Material",
        stock: "18 kg",
        level: "Low Stock",
    },
    {
        name: "Packaging Containers",
        category: "Packaging",
        stock: "240 pcs",
        level: "In Stock",
    },
    {
        name: "Fragrance Ingredient",
        category: "Raw Material",
        stock: "8 liters",
        level: "Low Stock",
    },
];

function StatusBadge({ status }) {
    const styles = {
        "In Progress": "bg-[#eaf0e6] text-[#315b3f]",
        "Quality Check": "bg-[#f7e8dc] text-[#a45132]",
        Scheduled: "bg-[#ece9f1] text-[#625278]",
        Completed: "bg-[#e5efed] text-[#386b61]",
    };

    return (
        <span
            className={`inline-flex whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-bold ${
                styles[status] || "bg-[#f1f0e8] text-[#68736a]"
            }`}
        >
            {status}
        </span>
    );
}

function SidebarLink({ href, icon: Icon, children, active = false }) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                active
                    ? "bg-[#244a35] text-white shadow-md shadow-[#244a35]/10"
                    : "text-[#68736a] hover:bg-[#eef0e8] hover:text-[#244a35]"
            }`}
        >
            <Icon size={19} />
            <span>{children}</span>
            {active && (
                <span className="ml-auto h-2 w-2 rounded-full bg-[#e9b99c]" />
            )}
        </Link>
    );
}

export default function Dashboard({ auth }) {
    const userName = auth?.user?.name || "Factory Manager";
    const firstName = userName.split(" ")[0];

    return (
        <>
            <Head title="Dashboard - Hannah Powder Factory" />

            <div className="min-h-screen bg-[#f7f6f0] text-[#203b2d] md:flex">
                {/* Sidebar */}
                <aside className="flex w-full shrink-0 flex-col border-b border-[#e5e4d9] bg-[#fcfbf7] p-4 md:sticky md:top-0 md:h-screen md:w-64 md:border-b-0 md:border-r md:p-5">
                    <Link href="/" className="flex items-center gap-3 px-2 py-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#244a35] text-white">
                            <Factory size={24} />
                        </div>
                        <div>
                            <p className="font-extrabold tracking-tight">
                                HANNAH
                            </p>
                            <p className="text-[10px] font-bold tracking-[0.18em] text-[#b85d3e]">
                                POWDER FACTORY
                            </p>
                        </div>
                    </Link>

                    <div className="my-6 hidden h-px bg-[#e5e4d9] md:block" />

                    <p className="mb-3 hidden px-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#92988f] md:block">
                        Workspace
                    </p>

                    <nav className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:flex md:flex-col">
                        <SidebarLink
                            href="/dashboard"
                            icon={LayoutDashboard}
                            active
                        >
                            Dashboard
                        </SidebarLink>
                        <SidebarLink href="/production" icon={Factory}>
                            Production
                        </SidebarLink>
                        <SidebarLink href="/inventory" icon={Boxes}>
                            Inventory
                        </SidebarLink>
                        <SidebarLink href="/products" icon={Package}>
                            Products
                        </SidebarLink>
                        <SidebarLink href="/reports" icon={ClipboardList}>
                            Reports
                        </SidebarLink>
                    </nav>

                    <div className="mt-5 hidden h-px bg-[#e5e4d9] md:block" />

                    <p className="mb-3 mt-5 hidden px-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#92988f] md:block">
                        Preferences
                    </p>

                    <nav className="hidden md:block">
                        <SidebarLink href="/settings" icon={Settings}>
                            Settings
                        </SidebarLink>
                    </nav>

                    <div className="mt-6 rounded-2xl bg-[#edf1e8] p-4 md:mt-auto">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#244a35]">
                            <FlaskConical size={21} />
                        </div>
                        <p className="font-bold">Factory Operations</p>
                        <p className="mt-1 text-xs leading-5 text-[#68736a]">
                            Monitor production and keep your operations
                            organized.
                        </p>
                        <Link
                            href="/production"
                            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#244a35] hover:text-[#b85d3e]"
                        >
                            View Production <ArrowRight size={15} />
                        </Link>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-[#e5e4d9] pt-4">
                        <div className="flex min-w-0 items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dce5d6] font-extrabold text-[#244a35]">
                                {firstName.charAt(0).toUpperCase()}
                            </div>
                            <div className="min-w-0">
                                <p className="truncate text-sm font-bold">
                                    {userName}
                                </p>
                                <p className="text-xs text-[#92988f]">
                                    Factory User
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="rounded-lg p-2 text-[#68736a] transition hover:bg-[#f7e8dc] hover:text-[#b85d3e]"
                            title="Log out"
                            aria-label="Log out"
                        >
                            <LogOut size={18} />
                        </Link>
                    </div>
                </aside>

                {/* Main content */}
                <main className="min-w-0 flex-1">
                    {/* Top bar */}
                    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5e4d9] bg-[#fcfbf7] px-5 py-4 sm:px-8">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#b85d3e]">
                                Factory Overview
                            </p>
                            <h1 className="mt-1 text-xl font-extrabold sm:text-2xl">
                                Dashboard
                            </h1>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="hidden items-center gap-2 rounded-xl border border-[#e5e4d9] bg-white px-3 py-2.5 lg:flex">
                                <Search
                                    size={17}
                                    className="text-[#92988f]"
                                />
                                <input
                                    type="search"
                                    placeholder="Search dashboard..."
                                    aria-label="Search dashboard"
                                    className="w-40 bg-transparent text-sm outline-none placeholder:text-[#92988f]"
                                />
                            </div>

                            <button
                                type="button"
                                className="relative rounded-xl border border-[#e5e4d9] bg-white p-3 text-[#68736a] hover:bg-[#f1f0e8]"
                                aria-label="Notifications"
                            >
                                <Bell size={19} />
                                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#b85d3e]" />
                            </button>
                        </div>
                    </header>

                    <div className="mx-auto max-w-[1600px] p-5 sm:p-8">
                        {/* Welcome banner */}
                        <section className="relative overflow-hidden rounded-3xl bg-[#244a35] p-6 text-white sm:p-9">
                            <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full bg-[#d17a55]/20 blur-2xl" />
                            <div className="absolute -bottom-20 right-1/3 h-48 w-48 rounded-full bg-[#9bb69b]/15 blur-2xl" />

                            <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
                                <div>
                                    <p className="text-sm font-semibold text-[#e9b99c]">
                                        Welcome back, {firstName}
                                    </p>
                                    <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                                        Let’s keep production moving.
                                    </h2>
                                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#d3dfd0] sm:text-base">
                                        Here's an overview of your factory
                                        activities. Review production progress
                                        and check inventory items that need
                                        attention.
                                    </p>
                                </div>

                                <Link
                                    href="/production"
                                    className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-[#d17a55] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#b85d3e]"
                                >
                                    Manage Production
                                    <ArrowUpRight size={18} />
                                </Link>
                            </div>
                        </section>

                        {/* Stats */}
                        <section className="mt-8">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-lg font-extrabold">
                                    Operations Summary
                                </h2>
                                <span className="text-xs text-[#92988f]">
                                    Illustrative sample data
                                </span>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                                {stats.map((stat) => {
                                    const Icon = stat.icon;

                                    return (
                                        <article
                                            key={stat.label}
                                            className="rounded-2xl border border-[#e5e4d9] bg-[#fcfbf7] p-5 transition hover:shadow-lg hover:shadow-[#244a35]/5"
                                        >
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <p className="text-sm font-medium text-[#68736a]">
                                                        {stat.label}
                                                    </p>
                                                    <p className="mt-3 text-3xl font-black tracking-tight">
                                                        {stat.value}
                                                    </p>
                                                </div>
                                                <div
                                                    className={`rounded-xl p-3 ${stat.color}`}
                                                >
                                                    <Icon size={22} />
                                                </div>
                                            </div>
                                            <p className="mt-3 text-xs text-[#92988f]">
                                                {stat.note}
                                            </p>
                                        </article>
                                    );
                                })}
                            </div>
                        </section>

                        {/* Production table and inventory */}
                        <div className="mt-8 grid items-start gap-6 xl:grid-cols-[minmax(0,1.65fr)_minmax(300px,1fr)]">
                            <section className="min-w-0 overflow-hidden rounded-2xl border border-[#e5e4d9] bg-[#fcfbf7]">
                                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e5e4d9] p-5">
                                    <div>
                                        <h2 className="font-extrabold">
                                            Recent Production Batches
                                        </h2>
                                        <p className="mt-1 text-xs text-[#92988f]">
                                            Overview of production activity
                                        </p>
                                    </div>
                                    <Link
                                        href="/production"
                                        className="inline-flex items-center gap-1 text-sm font-bold text-[#b85d3e] hover:underline"
                                    >
                                        View all <ArrowRight size={15} />
                                    </Link>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[680px] text-left text-sm">
                                        <thead className="bg-[#f4f3ec] text-xs uppercase tracking-wide text-[#68736a]">
                                            <tr>
                                                <th className="px-5 py-4 font-bold">
                                                    Batch / Product
                                                </th>
                                                <th className="px-5 py-4 font-bold">
                                                    Quantity
                                                </th>
                                                <th className="px-5 py-4 font-bold">
                                                    Progress
                                                </th>
                                                <th className="px-5 py-4 font-bold">
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-[#eeede5]">
                                            {batches.map((batch) => (
                                                <tr
                                                    key={batch.id}
                                                    className="hover:bg-[#f8f7f1]"
                                                >
                                                    <td className="px-5 py-4">
                                                        <p className="font-bold">
                                                            {batch.product}
                                                        </p>
                                                        <p className="mt-1 text-xs text-[#92988f]">
                                                            {batch.id}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-4">
                                                        <p className="font-semibold">
                                                            {batch.quantity}
                                                        </p>
                                                        <p className="mt-1 text-xs text-[#92988f]">
                                                            {batch.line}
                                                        </p>
                                                    </td>
                                                    <td className="px-5 py-4">
                                                        <div className="flex items-center gap-2">
                                                            <div className="h-2 w-20 overflow-hidden rounded-full bg-[#e5e4d9]">
                                                                <div
                                                                    className="h-full rounded-full bg-[#b85d3e]"
                                                                    style={{
                                                                        width: `${batch.progress}%`,
                                                                    }}
                                                                />
                                                            </div>
                                                            <span className="text-xs font-bold">
                                                                {batch.progress}%
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-4">
                                                        <StatusBadge
                                                            status={batch.status}
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="border-t border-[#e5e4d9] p-4">
                                    <Link
                                        href="/production"
                                        className="flex items-center justify-center gap-2 rounded-xl border border-[#dfe1d6] px-4 py-3 text-sm font-bold text-[#244a35] transition hover:bg-[#edf1e8]"
                                    >
                                        Open Production Management
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </section>

                            {/* Inventory panel */}
                            <section className="rounded-2xl border border-[#e5e4d9] bg-[#fcfbf7]">
                                <div className="flex items-center justify-between border-b border-[#e5e4d9] p-5">
                                    <div>
                                        <h2 className="font-extrabold">
                                            Inventory Overview
                                        </h2>
                                        <p className="mt-1 text-xs text-[#92988f]">
                                            Sample stock levels
                                        </p>
                                    </div>
                                    <div className="rounded-xl bg-[#eaf0e6] p-2.5 text-[#244a35]">
                                        <Boxes size={20} />
                                    </div>
                                </div>

                                <div className="space-y-1 p-3">
                                    {inventory.map((item) => (
                                        <div
                                            key={item.name}
                                            className="rounded-xl p-3 transition hover:bg-[#f4f3ec]"
                                        >
                                            <div className="flex items-start justify-between gap-3">
                                                <div className="flex min-w-0 gap-3">
                                                    <div className="mt-0.5 rounded-lg bg-[#f0efe7] p-2 text-[#68736a]">
                                                        <Package size={18} />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="text-sm font-bold">
                                                            {item.name}
                                                        </p>
                                                        <p className="mt-1 text-xs text-[#92988f]">
                                                            {item.category}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="shrink-0 text-right">
                                                    <p className="text-sm font-extrabold">
                                                        {item.stock}
                                                    </p>
                                                    <span
                                                        className={`mt-1 inline-flex items-center gap-1 text-[11px] font-bold ${
                                                            item.level ===
                                                            "Low Stock"
                                                                ? "text-[#b85d3e]"
                                                                : "text-[#386b61]"
                                                        }`}
                                                    >
                                                        {item.level ===
                                                        "Low Stock" ? (
                                                            <AlertTriangle
                                                                size={12}
                                                            />
                                                        ) : (
                                                            <CheckCircle2
                                                                size={12}
                                                            />
                                                        )}
                                                        {item.level}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mx-4 mb-4 flex gap-3 rounded-xl bg-[#f7e8dc] p-4">
                                    <AlertTriangle
                                        size={20}
                                        className="shrink-0 text-[#b85d3e]"
                                    />
                                    <div>
                                        <p className="text-sm font-bold text-[#8e452d]">
                                            Stock needs attention
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-[#8e5d4c]">
                                            Two sample inventory items are
                                            marked as low stock.
                                        </p>
                                    </div>
                                </div>

                                <div className="border-t border-[#e5e4d9] p-4">
                                    <Link
                                        href="/inventory"
                                        className="flex items-center justify-center gap-2 rounded-xl border border-[#dfe1d6] px-4 py-3 text-sm font-bold text-[#244a35] transition hover:bg-[#edf1e8]"
                                    >
                                        Manage Inventory
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </section>
                        </div>

                        {/* Bottom notice */}
                        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#e5e4d9] bg-[#fcfbf7] p-4">
                            <Clock3
                                size={19}
                                className="mt-0.5 shrink-0 text-[#b85d3e]"
                            />
                            <p className="text-sm leading-6 text-[#68736a]">
                                <span className="font-bold text-[#203b2d]">
                                    Development preview:
                                </span>{" "}
                                dashboard figures and inventory records are
                                sample data. They will need to be connected to
                                your database before they represent actual
                                factory operations.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
