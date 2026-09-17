"use client";

import { useState } from "react";

type Task = { id: number; title: string; owner: string; due: string; status: "To do" | "In progress" | "Done" };
const initialTasks: Task[] = [];
const sections = ["Corporate & legal", "Board meetings", "Events & festivals", "Advertising & marketing", "Sponsors & partners", "Merchandise", "Volunteer resources", "Financial records"];

/** Preview only. Do not render private organizational data until server-side authentication and authorization exist. */
export default function PortalPreview() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  const [due, setDue] = useState("");
  const [tab, setTab] = useState<"Overview" | "Tasks" | "Events" | "Documents">("Overview");
  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim()) return;
    setTasks((current) => [...current, { id: Date.now(), title: title.trim(), owner: owner.trim(), due, status: "To do" }]);
    setTitle(""); setOwner(""); setDue("");
  };
  return <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px", color: "#e9edf5" }}>
    <p style={{ color: "#fbbf24", fontWeight: 700 }}>INTERNAL DESIGN PREVIEW · NOT A SECURE PORTAL</p>
    <h1 style={{ fontSize: 36, fontWeight: 800 }}>VVR Team Portal</h1>
    <p style={{ margin: "8px 0 24px", color: "#cbd5e1" }}>A central workspace for board members and volunteers. Sample tasks in this preview are not saved.</p>
    <nav aria-label="Portal sections" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>{(["Overview", "Tasks", "Events", "Documents"] as const).map((item) => <button key={item} type="button" onClick={() => setTab(item)} aria-current={tab === item ? "page" : undefined} style={{ padding: "10px 16px", borderRadius: 8, background: tab === item ? "#2563eb" : "#26354b", color: "white", cursor: "pointer" }}>{item}</button>)}</nav>
    {tab === "Overview" && <section style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}><Panel heading="Open tasks"><strong style={{ fontSize: 32 }}>{tasks.filter(t => t.status !== "Done").length}</strong><p>Preview tasks only</p></Panel><Panel heading="Upcoming events"><p>No events connected yet.</p></Panel><Panel heading="Team announcements"><p>Announcements will appear after secure sign-in and database setup.</p></Panel><Panel heading="Google Drive"><p>Waiting for VVR-owned Drive folder and approved sharing.</p></Panel></section>}
    {tab === "Tasks" && <section><Panel heading="Add a preview task"><form onSubmit={addTask} style={{ display: "flex", flexWrap: "wrap", gap: 8 }}><input aria-label="Task title" required placeholder="Task title" value={title} onChange={e => setTitle(e.target.value)} style={field}/><input aria-label="Assigned to" placeholder="Assigned to" value={owner} onChange={e => setOwner(e.target.value)} style={field}/><input aria-label="Due date" type="date" value={due} onChange={e => setDue(e.target.value)} style={field}/><button type="submit" style={action}>Add task</button></form></Panel><div style={{ marginTop: 16, display: "grid", gap: 10 }}>{tasks.length === 0 ? <p>No preview tasks yet.</p> : tasks.map(task => <Panel key={task.id} heading={task.title}><p>{task.owner || "Unassigned"} · {task.due || "No due date"}</p><label>Status <select aria-label={`Status for ${task.title}`} value={task.status} onChange={e => setTasks(current => current.map(t => t.id === task.id ? { ...t, status: e.target.value as Task["status"] } : t))} style={field}><option>To do</option><option>In progress</option><option>Done</option></select></label><button type="button" onClick={() => setTasks(current => current.filter(t => t.id !== task.id))} style={{ ...action, marginLeft: 8 }}>Remove</button></Panel>)}</div></section>}
    {tab === "Events" && <Panel heading="Event workspaces"><p>Event schedule, volunteers, checklists, booth materials and deadlines will appear here once the database is connected.</p></Panel>}
    {tab === "Documents" && <Panel heading="Google Drive folders"><p>Drive is not connected. No files are stored on this website.</p><ul style={{ display: "grid", gap: 8, marginTop: 16 }}>{sections.map(section => <li key={section}>📁 {section}</li>)}</ul></Panel>}
  </main>;
}
const field: React.CSSProperties = { padding: "10px", borderRadius: 6, background: "#fff", color: "#111827", minWidth: 160, maxWidth: "100%" };
const action: React.CSSProperties = { padding: "10px 14px", borderRadius: 6, background: "#2563eb", color: "white", cursor: "pointer" };
function Panel({ heading, children }: { heading: string; children: React.ReactNode }) { return <article style={{ background: "#172438", padding: 20, borderRadius: 12, border: "1px solid #334155" }}><h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{heading}</h2>{children}</article>; }
