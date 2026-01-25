"use client";

import { useEffect, useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import type { IntakeRecord, IntakeStatus } from "@/lib/models/intake";

const statusOptions: IntakeStatus[] = ["new", "reviewing", "approved", "rejected"];

type IntakeResponse = {
  ok: boolean;
  items?: IntakeRecord[];
  error?: string;
};

export default function IntakeTable() {
  const [items, setItems] = useState<IntakeRecord[]>([]);
  const [statusFilter, setStatusFilter] = useState<"all" | IntakeStatus>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    if (statusFilter === "all") {
      return items;
    }
    return items.filter((item) => item.status === statusFilter);
  }, [items, statusFilter]);

  const fetchItems = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/intake", {
        cache: "no-store",
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as IntakeResponse | null;
        throw new Error(data?.error || "Unable to fetch intake submissions.");
      }

      const data = (await response.json()) as IntakeResponse;
      setItems(data.items ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to fetch intake submissions.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchItems();
  }, []);

  const handleStatusUpdate = async (id: string, status: IntakeStatus) => {
    setUpdatingId(id);
    setError(null);

    try {
      const response = await fetch("/api/admin/intake", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, status }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as IntakeResponse | null;
        throw new Error(data?.error || "Unable to update intake status.");
      }

      setItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status } : item))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to update intake status.");
    } finally {
      setUpdatingId(null);
    }
  };

  const toggleExpanded = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300" htmlFor="status-filter">
          Filter by status
        </label>
        <select
          id="status-filter"
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value as "all" | IntakeStatus)}
          className="rounded-full border border-white/20 bg-ink-900/70 px-4 py-2 text-sm text-white"
        >
          <option value="all">All statuses</option>
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <Button variant="ghost" onClick={fetchItems} disabled={loading}>
          Refresh
        </Button>
      </div>

      {error ? <p className="text-sm text-red-200">{error}</p> : null}

      <div className="overflow-hidden rounded-card border border-white/10 bg-ink-900/60 shadow-card">
        <table className="w-full border-collapse text-left text-sm text-slate-200">
          <thead className="border-b border-white/10 text-xs uppercase tracking-[0.2em] text-slate-400">
            <tr>
              <th className="px-6 py-4">Created</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="px-6 py-6" colSpan={5}>
                  Loading submissions...
                </td>
              </tr>
            ) : filteredItems.length === 0 ? (
              <tr>
                <td className="px-6 py-6" colSpan={5}>
                  No intake submissions yet.
                </td>
              </tr>
            ) : (
              filteredItems.map((item) => (
                <tr
                  key={item.id}
                  className="cursor-pointer border-b border-white/5 last:border-b-0 hover:bg-white/5"
                  onClick={() => toggleExpanded(item.id)}
                >
                  <td className="px-6 py-5 align-top">
                    {new Date(item.createdAt).toLocaleString()}
                  </td>
                  <td className="px-6 py-5 align-top capitalize">{item.type}</td>
                  <td className="px-6 py-5 align-top">{item.name}</td>
                  <td className="px-6 py-5 align-top">{item.email}</td>
                  <td className="px-6 py-5 align-top">
                    <div className="flex flex-wrap gap-2">
                      {statusOptions.map((status) => (
                        <Button
                          key={status}
                          variant={item.status === status ? "primary" : "ghost"}
                          className="px-3 py-1 text-xs uppercase tracking-[0.2em]"
                          onClick={(event) => {
                            event.stopPropagation();
                            void handleStatusUpdate(item.id, status);
                          }}
                          disabled={updatingId === item.id}
                        >
                          {status}
                        </Button>
                      ))}
                    </div>
                    {expandedId === item.id ? (
                      <div className="mt-4 space-y-2 rounded-2xl border border-white/10 bg-ink-950/60 p-4 text-xs text-slate-200">
                        {item.businessName ? (
                          <p>
                            <span className="font-semibold uppercase tracking-[0.2em] text-slate-400">
                              Business
                            </span>
                            <span className="ml-2 text-slate-200">{item.businessName}</span>
                          </p>
                        ) : null}
                        {item.role ? (
                          <p>
                            <span className="font-semibold uppercase tracking-[0.2em] text-slate-400">Role</span>
                            <span className="ml-2 text-slate-200">{item.role}</span>
                          </p>
                        ) : null}
                        {item.message ? (
                          <p>
                            <span className="font-semibold uppercase tracking-[0.2em] text-slate-400">Message</span>
                            <span className="ml-2 text-slate-200">{item.message}</span>
                          </p>
                        ) : null}
                        {item.metadata ? (
                          <p className="text-slate-300">
                            <span className="font-semibold uppercase tracking-[0.2em] text-slate-400">
                              Metadata
                            </span>
                            <span className="ml-2">{JSON.stringify(item.metadata)}</span>
                          </p>
                        ) : null}
                      </div>
                    ) : null}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
