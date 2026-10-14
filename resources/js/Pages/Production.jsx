
import React, { useMemo, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import {
    Factory,
    LayoutDashboard,
    Package,
    ClipboardList,
    Settings,
    LogOut,
    Search,
    Plus,
    X,
    Filter,
    Boxes,
    Clock3,
    CheckCircle2,
    AlertTriangle,
    ArrowRight,
    Eye,
    CalendarDays,
    FlaskConical,
} from "lucide-react";

const initialBatches = [
    {
        id: "BTH-2026-041",
        product: "Talcum Powder",
        line: "Production Line A",
        quantity: 500,
        unit: "units",
        startDate: "2026-10-14",
        status: "In Progress",
        progress: 72,
    },
    {
        id: "BTH-2026-042",
        product: "Baby Powder",
        line: "Production Line B",
        quantity: 350,
        unit: "units",
        startDate: "2026-10-14",
        status: "Quality Check",
        progress: 90,
    },
    {
        id: "BTH-2026-043",
        product: "Body Powder",
        line: "Production Line A",
        quantity: 250,
        unit: "units",
        startDate: "2026-10-15",
        status: "Scheduled",
        progress: 0,
    },
    {
        id: "BTH-2026-044",
        product: "Cooling Powder",
        line: "Production Line C",
        quantity: 400,
        unit: "units",
        startDate: "2026-10-13",
        status: "Completed",
        progress: 100,
    },
    {
        id: "BTH-2026-045",
        product: "Talcum Powder",
        line: "Production Line B",
        quantity: 600,
        unit: "units",
        startDate: "2026-10-16",
        status: "Scheduled",
        progress: 0,
    },
];

const statusStyles = {
    "In Progress": "bg-[#eaf0e6] text-[#315b3f]",
    "Quality Check": "bg-[#f7e8dc] text-[#a45132]",
    Scheduled: "bg-[#ece9f1] text-[#625278]",
    Completed: "bg-[#e5efed] text-[#386b61]",
};

function StatusBadge({ status }) {
    return (
        <span
            className={`inline-flex whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-bold ${
                statusStyles[status] || "bg-[#f1f0e8] text-[#68736a]"
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
                    ? "bg-[#244a35] text-white"
                    : "text-[#68736a] hover:bg-[#eef0e8] hover:text-[#244a35]"
            }`}
        >
            <Icon size={19} />
            {children}
        </Link>
    );
}

function FormField({ label, children }) {
    return (
        <div>
            <label className="mb-2 block text-sm font-bold">{label}</label>
            {children}
        </div>
    );
}

const inputClass =
    "w-full rounded-xl border border-[#dedfd4] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#244a35] focus:ring-4 focus:ring-[#244a35]/10";

export default function Production() {
    const [batches, setBatches] = useState(initialBatches);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [showModal, setShowModal] = useState(false);
    const [selectedBatch, setSelectedBatch] = useState(null);
    const [formError, setFormError] = useState("");

    const [form, setForm] = useState({
        product: "",
        line: "Production Line A",
        quantity: "",
        startDate: new Date().toISOString().slice(0, 10),
    });

    const filteredBatches = useMemo(() => {
        const query = search.trim().toLowerCase();

        return batches.filter((batch) => {
            const matchesSearch =
                !query ||
                batch.id.toLowerCase().includes(query) ||
                batch.product.toLowerCase().includes(query) ||
                batch.line.toLowerCase().includes(query);

            const matchesStatus =
                statusFilter === "All" || batch.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [batches, search, statusFilter]);

    const stats = [
        {
            label: "Total Batches",
            value: batches.length,
            icon: Boxes,
            color: "bg-[#eaf0e6] text-[#244a35]",
        },
        {
            label: "In Progress",
            value: batches.filter((b) => b.status === "In Progress").length,
            icon: Clock3,
            color: "bg-[#f7e8dc] text-[#b85d3e]",
        },
        {
            label: "Quality Check",
            value: batches.filter((b) => b.status === "Quality Check").length,
            icon: FlaskConical,
            color: "bg-[#ece9f1] text-[#625278]",
        },
        {
            label: "Completed",
            value: batches.filter((b) => b.status === "Completed").length,
            icon: CheckCircle2,
            color: "bg-[#e5efed] text-[#386b61]",
        },
    ];

    function updateForm(field, value) {
        setForm((previous) => ({ ...previous, [field]: value }));
    }

    function openCreateModal() {
        setForm({
            product: "",
            line: "Production Line A",
            quantity: "",
            startDate: new Date().toISOString().slice(0, 10),
        });
        setFormError("");
        setShowModal(true);
    }

    function createBatch(event) {
        event.preventDefault();

        const quantity = Number(form.quantity);

        if (!form.product.trim() || !form.startDate) {
            setFormError("Please complete all required fields.");
            return;
        }

        if (!Number.isInteger(quantity) || quantity <= 0) {
            setFormError("Quantity must be a positive whole number.");
            return;
        }

        const nextNumber =
            Math.max(
                0,
                ...batches.map((batch) => {
                    const match = batch.id.match(/BTH-\d{4}-(\d+)/);
                    return match ? Number(match[1]) : 0;
                })
            ) + 1;

        const year = new Date().getFullYear();
        const newBatch = {
            id: `BTH-${year}-${String(nextNumber).padStart(3, "0")}`,
            product: form.product.trim(),
            line: form.line,
            quantity,
            unit: "units",
            startDate: form.startDate,
            status: "Scheduled",
            progress: 0,
        };

        setBatches((previous) => [newBatch, ...previous]);
        setStatusFilter("All");
        setSearch("");
        setShowModal(false);
    }

    return (
        <>
            <Head title="Production Management - Hannah Powder Factory" />

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
                        <SidebarLink href="/dashboard" icon={LayoutDashboard}>
                            Dashboard
                        </SidebarLink>
                        <SidebarLink
                            href="/production"
                            icon={Factory}
                            active
                        >
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

                    <nav className="mt-5 hidden md:block">
                        <SidebarLink href="/settings" icon={Settings}>
                            Settings
                        </SidebarLink>
                    </nav>

                    <div className="mt-6 hidden rounded-2xl bg-[#edf1e8] p-4 md:block md:mt-auto">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#244a35]">
                            <Factory size={21} />
                        </div>
                        <p className="font-bold">Production Center</p>
                        <p className="mt-1 text-xs leading-5 text-[#68736a]">
                            Organize batches and follow production progress.
                        </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-[#e5e4d9] pt-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dce5d6] font-extrabold text-[#244a35]">
                                H
                            </div>
                            <div>
                                <p className="text-sm font-bold">
                                    Factory User
                                </p>
                                <p className="text-xs text-[#92988f]">
                                    Management
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            title="Log out"
                            aria-label="Log out"
                            className="rounded-lg p-2 text-[#68736a] hover:bg-[#f7e8dc] hover:text-[#b85d3e]"
                        >
                            <LogOut size={18} />
                        </Link>
                    </div>
                </aside>

                {/* Main content */}
                <main className="min-w-0 flex-1">
                    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5e4d9] bg-[#fcfbf7] px-5 py-4 sm:px-8">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#b85d3e]">
                                Factory Operations
                            </p>
                            <h1 className="mt-1 text-xl font-extrabold sm:text-2xl">
                                Production Management
                            </h1>
                        </div>

                        <button
                            type="button"
                            onClick={openCreateModal}
                            className="inline-flex items-center gap-2 rounded-xl bg-[#244a35] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#193626]"
                        >
                            <Plus size={18} />
                            Create Batch
                        </button>
                    </header>

                    <div className="mx-auto max-w-[1600px] p-5 sm:p-8">
                        {/* Intro */}
                        <section className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                            <div>
                                <p className="text-sm font-bold text-[#b85d3e]">
                                    Production Workspace
                                </p>
                                <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                                    Manage your production batches.
                                </h2>
                                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#68736a]">
                                    Review batch schedules, monitor workflow
                                    status, and organize powder production
                                    activities.
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-[#68736a]">
                                <CalendarDays size={17} />
                                <span>Production records</span>
                            </div>
                        </section>

                        {/* Stats */}
                        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                            {stats.map((stat) => {
                                const Icon = stat.icon;

                                return (
                                    <article
                                        key={stat.label}
                                        className="rounded-2xl border border-[#e5e4d9] bg-[#fcfbf7] p-5"
                                    >
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm font-medium text-[#68736a]">
                                                {stat.label}
                                            </p>
                                            <div
                                                className={`rounded-xl p-3 ${stat.color}`}
                                            >
                                                <Icon size={21} />
                                            </div>
                                        </div>
                                        <p className="mt-4 text-3xl font-black">
                                            {String(stat.value).padStart(2, "0")}
                                        </p>
                                    </article>
                                );
                            })}
                        </section>

                        {/* Batch records */}
                        <section className="mt-8 overflow-hidden rounded-2xl border border-[#e5e4d9] bg-[#fcfbf7]">
                            <div className="flex flex-col gap-4 border-b border-[#e5e4d9] p-5 lg:flex-row lg:items-center lg:justify-between">
                                <div>
                                    <h3 className="text-lg font-extrabold">
                                        Production Batch Records
                                    </h3>
                                    <p className="mt-1 text-sm text-[#92988f]">
                                        {filteredBatches.length} record
                                        {filteredBatches.length !== 1 ? "s" : ""}{" "}
                                        displayed
                                    </p>
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <div className="flex items-center gap-2 rounded-xl border border-[#e5e4d9] bg-white px-3">
                                        <Search
                                            size={17}
                                            className="shrink-0 text-[#92988f]"
                                        />
                                        <input
                                            type="search"
                                            value={search}
                                            onChange={(event) =>
                                                setSearch(event.target.value)
                                            }
                                            placeholder="Search batches..."
                                            aria-label="Search batches"
                                            className="min-w-0 bg-transparent py-3 text-sm outline-none placeholder:text-[#92988f] sm:w-48"
                                        />
                                    </div>

                                    <div className="flex items-center gap-2 rounded-xl border border-[#e5e4d9] bg-white px-3">
                                        <Filter
                                            size={16}
                                            className="shrink-0 text-[#92988f]"
                                        />
                                        <select
                                            value={statusFilter}
                                            onChange={(event) =>
                                                setStatusFilter(
                                                    event.target.value
                                                )
                                            }
                                            aria-label="Filter by status"
                                            className="min-w-0 bg-transparent py-3 text-sm font-medium outline-none"
                                        >
                                            <option value="All">
                                                All Statuses
                                            </option>
                                            <option value="Scheduled">
                                                Scheduled
                                            </option>
                                            <option value="In Progress">
                                                In Progress
                                            </option>
                                            <option value="Quality Check">
                                                Quality Check
                                            </option>
                                            <option value="Completed">
                                                Completed
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[850px] text-left text-sm">
                                    <thead className="bg-[#f4f3ec] text-xs uppercase tracking-wide text-[#68736a]">
                                        <tr>
                                            <th className="px-5 py-4 font-bold">
                                                Batch ID
                                            </th>
                                            <th className="px-5 py-4 font-bold">
                                                Product / Line
                                            </th>
                                            <th className="px-5 py-4 font-bold">
                                                Quantity
                                            </th>
                                            <th className="px-5 py-4 font-bold">
                                                Start Date
                                            </th>
                                            <th className="px-5 py-4 font-bold">
                                                Progress
                                            </th>
                                            <th className="px-5 py-4 font-bold">
                                                Status
                                            </th>
                                            <th className="px-5 py-4 font-bold">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-[#eeede5]">
                                        {filteredBatches.map((batch) => (
                                            <tr
                                                key={batch.id}
                                                className="transition hover:bg-[#f8f7f1]"
                                            >
                                                <td className="px-5 py-4 font-bold">
                                                    {batch.id}
                                                </td>
                                                <td className="px-5 py-4">
                                                    <p className="font-bold">
                                                        {batch.product}
                                                    </p>
                                                    <p className="mt-1 text-xs text-[#92988f]">
                                                        {batch.line}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-4 font-semibold">
                                                    {batch.quantity.toLocaleString()}{" "}
                                                    {batch.unit}
                                                </td>
                                                <td className="px-5 py-4 text-[#68736a]">
                                                    {batch.startDate}
                                                </td>
                                                <td className="px-5 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <div className="h-2 w-16 overflow-hidden rounded-full bg-[#e5e4d9]">
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
                                                <td className="px-5 py-4">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setSelectedBatch(
                                                                batch
                                                            )
                                                        }
                                                        aria-label={`View ${batch.id}`}
                                                        className="rounded-lg border border-[#e5e4d9] p-2 text-[#244a35] transition hover:bg-[#edf1e8]"
                                                    >
                                                        <Eye size={17} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}

                                        {filteredBatches.length === 0 && (
                                            <tr>
                                                <td
                                                    colSpan={7}
                                                    className="px-5 py-14 text-center"
                                                >
                                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#edf1e8] text-[#244a35]">
                                                        <Search size={23} />
                                                    </div>
                                                    <p className="mt-4 font-bold">
                                                        No batches found
                                                    </p>
                                                    <p className="mt-1 text-sm text-[#92988f]">
                                                        Try another search term
                                                        or status filter.
                                                    </p>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <div className="flex flex-col justify-between gap-3 border-t border-[#e5e4d9] p-4 text-xs text-[#92988f] sm:flex-row sm:items-center">
                                <span>
                                    Showing {filteredBatches.length} of{" "}
                                    {batches.length} batches
                                </span>
                                <span>Sample records · Not database-backed</span>
                            </div>
                        </section>

                        {/* Notice */}
                        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#e9d6b7] bg-[#fff8eb] p-4">
                            <AlertTriangle
                                size={20}
                                className="mt-0.5 shrink-0 text-[#b85d3e]"
                            />
                            <div>
                                <p className="text-sm font-bold">
                                    Prototype data
                                </p>
                                <p className="mt-1 text-sm leading-6 text-[#806d56]">
                                    Batch records are stored in the page's
                                    temporary state. New batches will disappear
                                    after a refresh. Database storage,
                                    authorization, and production workflow
                                    validation must be implemented in Laravel.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Create Batch Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#15271d]/60 p-4 backdrop-blur-sm"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setShowModal(false);
                        }
                    }}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="create-batch-title"
                        className="my-auto w-full max-w-lg rounded-3xl border border-[#e5e4d9] bg-[#fcfbf7] p-6 shadow-2xl sm:p-8"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b85d3e]">
                                    Production Workspace
                                </p>
                                <h2
                                    id="create-batch-title"
                                    className="mt-2 text-2xl font-black"
                                >
                                    Create New Batch
                                </h2>
                                <p className="mt-2 text-sm leading-6 text-[#68736a]">
                                    Enter the details for a new production
                                    batch.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setShowModal(false)}
                                aria-label="Close form"
                                className="rounded-xl p-2 text-[#68736a] hover:bg-[#f1f0e8]"
                            >
                                <X size={21} />
                            </button>
                        </div>

                        <form
                            onSubmit={createBatch}
                            className="mt-7 space-y-5"
                        >
                            <FormField label="Product Name *">
                                <input
                                    required
                                    maxLength={120}
                                    value={form.product}
                                    onChange={(event) =>
                                        updateForm(
                                            "product",
                                            event.target.value
                                        )
                                    }
                                    placeholder="e.g. Talcum Powder"
                                    className={inputClass}
                                />
                            </FormField>

                            <FormField label="Production Line *">
                                <select
                                    required
                                    value={form.line}
                                    onChange={(event) =>
                                        updateForm("line", event.target.value)
                                    }
                                    className={inputClass}
                                >
                                    <option>Production Line A</option>
                                    <option>Production Line B</option>
                                    <option>Production Line C</option>
                                </select>
                            </FormField>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <FormField label="Quantity (units) *">
                                    <input
                                        required
                                        type="number"
                                        min="1"
                                        step="1"
                                        value={form.quantity}
                                        onChange={(event) =>
                                            updateForm(
                                                "quantity",
                                                event.target.value
                                            )
                                        }
                                        placeholder="Enter quantity"
                                        className={inputClass}
                                    />
                                </FormField>

                                <FormField label="Start Date *">
                                    <input
                                        required
                                        type="date"
                                        value={form.startDate}
                                        onChange={(event) =>
                                            updateForm(
                                                "startDate",
                                                event.target.value
                                            )
                                        }
                                        className={inputClass}
                                    />
                                </FormField>
                            </div>

                            {formError && (
                                <p
                                    role="alert"
                                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                                >
                                    {formError}
                                </p>
                            )}

                            <div className="flex flex-col-reverse gap-3 border-t border-[#e5e4d9] pt-5 sm:flex-row sm:justify-end">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="rounded-xl border border-[#dedfd4] px-5 py-3 text-sm font-bold text-[#68736a] hover:bg-[#f1f0e8]"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#244a35] px-5 py-3 text-sm font-bold text-white hover:bg-[#193626]"
                                >
                                    <Plus size={17} />
                                    Create Batch
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Batch Details Modal */}
            {selectedBatch && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#15271d]/60 p-4 backdrop-blur-sm">
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="batch-details-title"
                        className="my-auto w-full max-w-md rounded-3xl bg-[#fcfbf7] p-6 shadow-2xl sm:p-8"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b85d3e]">
                                    Batch Details
                                </p>
                                <h2
                                    id="batch-details-title"
                                    className="mt-2 text-2xl font-black"
                                >
                                    {selectedBatch.product}
                                </h2>
                                <p className="mt-1 text-sm text-[#92988f]">
                                    {selectedBatch.id}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setSelectedBatch(null)}
                                aria-label="Close batch details"
                                className="rounded-xl p-2 text-[#68736a] hover:bg-[#f1f0e8]"
                            >
                                <X size={21} />
                            </button>
                        </div>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-center justify-between gap-4 border-b border-[#e5e4d9] pb-4">
                                <span className="text-sm text-[#68736a]">
                                    Status
                                </span>
                                <StatusBadge status={selectedBatch.status} />
                            </div>
                            <div className="flex items-center justify-between gap-4 border-b border-[#e5e4d9] pb-4">
                                <span className="text-sm text-[#68736a]">
                                    Production Line
                                </span>
                                <span className="text-right text-sm font-bold">
                                    {selectedBatch.line}
                                </span>
                            </div>
                            <div className="flex items-center justify-between gap-4 border-b border-[#e5e4d9] pb-4">
                                <span className="text-sm text-[#68736a]">
                                    Quantity
                                </span>
                                <span className="text-sm font-bold">
                                    {selectedBatch.quantity.toLocaleString()}{" "}
                                    {selectedBatch.unit}
                                </span>
                            </div>
                            <div className="flex items-center justify-between gap-4 border-b border-[#e5e4d9] pb-4">
                                <span className="text-sm text-[#68736a]">
                                    Start Date
                                </span>
                                <span className="text-sm font-bold">
                                    {selectedBatch.startDate}
                                </span>
                            </div>

                            <div>
                                <div className="mb-2 flex justify-between text-sm">
                                    <span className="text-[#68736a]">
                                        Progress
                                    </span>
                                    <span className="font-bold">
                                        {selectedBatch.progress}%
                                    </span>
                                </div>
                                <div className="h-2.5 overflow-hidden rounded-full bg-[#e5e4d9]">
                                    <div
                                        className="h-full rounded-full bg-[#b85d3e]"
                                        style={{
                                            width: `${selectedBatch.progress}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setSelectedBatch(null)}
                            className="mt-7 w-full rounded-xl bg-[#244a35] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#193626]"
                        >
                            Close Details
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
