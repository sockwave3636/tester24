"use client";

import { useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const C = {
  bg: "#f8fafc",
  bg2: "#f0fdf4",
  card: "rgba(255,255,255,0.92)",
  border: "rgba(16,185,129,0.18)",
  gold: "#047857",
  saffron: "#10b981",
  teal: "#34d399",
  rust: "#065f46",
  sage: "#059669",
  cream: "#0f172a",
  muted: "#64748b",
  dim: "#d1fae5",
};

const doshaData = [
  { dosha: "Vata", value: 72, fill: C.teal },
  { dosha: "Pitta", value: 58, fill: C.saffron },
  { dosha: "Kapha", value: 35, fill: C.sage },
];

const dhaatuData = [
  { name: "Rasa", sanskrit: "Plasma", score: 62, normal: [55, 85] },
  { name: "Rakta", sanskrit: "Blood", score: 58, normal: [60, 90] },
  { name: "Mamsa", sanskrit: "Muscle", score: 78, normal: [60, 90] },
  { name: "Meda", sanskrit: "Fat/Adipose", score: 84, normal: [50, 80] },
  { name: "Asthi", sanskrit: "Bone", score: 70, normal: [60, 90] },
  { name: "Majja", sanskrit: "Marrow/Nerve", score: 55, normal: [60, 90] },
  { name: "Shukra", sanskrit: "Reproductive", score: 65, normal: [60, 90] },
];

const bloodReport = [
  { param: "Hemoglobin", value: 12.8, unit: "g/dL", ref: "13.5-17.5", status: "low", ayur: "Rakta Dhatu deficiency and Pitta imbalance", color: C.rust },
  { param: "WBC", value: 7200, unit: "/uL", ref: "4000-11000", status: "normal", ayur: "Ojas adequate and immune fire stable", color: C.sage },
  { param: "Fasting Glucose", value: 104, unit: "mg/dL", ref: "70-100", status: "border", ayur: "Meda Dhatu excess and Kapha-Ama accumulation", color: C.saffron },
  { param: "Total Cholesterol", value: 218, unit: "mg/dL", ref: "<200", status: "high", ayur: "Meda Dhatu vitiation and Kapha aggravation", color: C.rust },
  { param: "Vitamin D3", value: 18, unit: "ng/mL", ref: "30-80", status: "low", ayur: "Asthi Dhatu depletion and Vata aggravation", color: C.rust },
  { param: "TSH", value: 2.4, unit: "mIU/L", ref: "0.4-4.0", status: "normal", ayur: "Agni balanced and endocrine rhythm stable", color: C.sage },
];

const radarData = [
  { param: "Vata", A: 72 },
  { param: "Pitta", A: 58 },
  { param: "Kapha", A: 35 },
  { param: "Agni", A: 48 },
  { param: "Ojas", A: 55 },
  { param: "Ama", A: 65 },
];

const recommendations = [
  {
    category: "Ahara (Diet)",
    priority: "high",
    modern: "Raise Hb and Ferritin with iron-rich foods and vitamin C pairing.",
    ayur: "Rakta-prasadana ahara, warm and easy-to-digest meals, avoid cold/raw foods.",
    herbs: ["Amalaki", "Triphala", "Draksha"],
  },
  {
    category: "Vihara (Lifestyle)",
    priority: "medium",
    modern: "30-min zone-2 cardio, 4x/week to improve insulin sensitivity.",
    ayur: "Morning abhyanga and regular wake-sleep timing to balance Vata.",
    herbs: ["Trikatu", "Triphala"],
  },
  {
    category: "Aushadha (Herbs)",
    priority: "high",
    modern: "Anti-inflammatory support and metabolic correction.",
    ayur: "Guduchi, Shunthi, and Guggulu for Ama pachana and Meda balance.",
    herbs: ["Guduchi", "Guggulu", "Shunthi"],
  },
];

type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

function Card({ children, style = {} }: CardProps) {
  return (
    <div
      style={{
        background: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: 16,
        padding: "clamp(14px, 2vw, 20px)",
        backdropFilter: "blur(3px)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionHead({ children, sub }: { children: string; sub?: string }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div
        style={{
          fontSize: 10,
          letterSpacing: 2,
          color: C.gold,
          textTransform: "uppercase",
          marginBottom: 4,
          fontWeight: 700,
        }}
      >
        {children}
      </div>
      {sub && <div style={{ fontSize: 11, color: C.muted, fontStyle: "italic" }}>{sub}</div>}
    </div>
  );
}

function DotsBar({ score, color }: { score: number; color: string }) {
  const dots = 10;
  const filled = Math.round(score / 10);
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {Array.from({ length: dots }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: i < filled ? color : C.dim,
          }}
        />
      ))}
    </div>
  );
}

function StatusPill({ status }: { status: string }) {
  const map: Record<string, [string, string]> = {
    low: [C.rust, "Low"],
    high: [C.rust, "High"],
    border: [C.saffron, "Borderline"],
    normal: [C.sage, "Normal"],
  };
  const [col, label] = map[status] || [C.muted, status];
  return (
    <span
      style={{
        fontSize: 9,
        padding: "2px 8px",
        borderRadius: 999,
        background: `${col}22`,
        color: col,
        border: `1px solid ${col}44`,
        textTransform: "uppercase",
        letterSpacing: 1,
      }}
    >
      {label}
    </span>
  );
}

export type AyurvedaTab = "overview" | "blood" | "dhatu" | "agni" | "kriya" | "srotas" | "reco";

export default function AyurvedaDashboard({
  initialTab = "overview",
  lockedTab,
}: {
  initialTab?: AyurvedaTab;
  lockedTab?: AyurvedaTab;
} = {}) {
  const [selectedTab, setSelectedTab] = useState<AyurvedaTab>(initialTab);
  const activeTab = lockedTab ?? selectedTab;

  const tabs = [
    { id: "overview", label: "Prakriti & Dosha" },
    { id: "blood", label: "Blood + Ayurveda" },
    { id: "dhatu", label: "Dhatu & Mala" },
    { id: "agni", label: "Agni Ama koshta" },
    { id: "kriya", label: "Kriyakala" },
    { id: "srotas", label: "Srotas and Srotodushti" },
    { id: "reco", label: "Recommendations" },
  ] as const satisfies { id: AyurvedaTab; label: string }[];

  return (
    <div
      style={{
        minHeight: "70vh",
        background: C.bg,
        color: C.cream,
        borderRadius: 18,
        border: `1px solid ${C.border}`,
        padding: "clamp(12px, 2vw, 20px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          borderBottom: `1px solid ${C.border}`,
          paddingBottom: 16,
          marginBottom: 18,
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div style={{ fontSize: 10, letterSpacing: 3, color: C.gold, textTransform: "uppercase" }}>
            Integrative Ayurveda
          </div>
          <h3 style={{ margin: "6px 0 0", fontSize: "clamp(22px, 4vw, 30px)", lineHeight: 1, color: "#1f2937" }}>
            Arogya Health Dashboard
          </h3>
          <div style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>
            Swastha: balance in body, mind and spirit
          </div>
        </div>
        <div style={{ textAlign: "right", minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#1f2937" }}>Arjun Kapoor</div>
          <div style={{ fontSize: 10, color: C.muted }}>Male · Age 34 · EMP-2847</div>
          <div style={{ fontSize: 10, color: C.muted, marginTop: 4 }}>Assessed: 02 Mar 2026</div>
        </div>
      </div>

      {!lockedTab && (
        <div
          style={{
            display: "flex",
            gap: 4,
            overflowX: "auto",
            borderBottom: `1px solid ${C.border}`,
            marginBottom: 18,
          }}
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTab(t.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "10px 14px",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: 1.4,
                whiteSpace: "nowrap",
                color: activeTab === t.id ? "#334155" : C.muted,
                borderBottom: activeTab === t.id ? `2px solid ${C.gold}` : "2px solid transparent",
                marginBottom: -1,
                fontWeight: activeTab === t.id ? 700 : 500,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}

      {activeTab === "overview" && (
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10, marginBottom: 14 }}>
            {[
              { label: "Overall Arogya", value: "61", unit: "/100", color: C.saffron, note: "Moderate Vikruti" },
              { label: "Ojas", value: "55", unit: "/100", color: C.teal, note: "Needs restoration" },
              { label: "Agni", value: "48", unit: "/100", color: C.rust, note: "Vishama Agni" },
              { label: "Ama", value: "High", unit: "", color: C.rust, note: "Inflammatory load" },
              { label: "Bala", value: "68", unit: "/100", color: C.sage, note: "Adequate" },
            ].map((m) => (
              <Card key={m.label} style={{ textAlign: "center", padding: 14 }}>
                <div style={{ fontSize: 9, color: C.muted, letterSpacing: 1, textTransform: "uppercase" }}>{m.label}</div>
                <div style={{ fontSize: 30, fontWeight: 700, color: m.color, marginTop: 4 }}>
                  {m.value}
                  <span style={{ fontSize: 13, color: C.muted }}>{m.unit}</span>
                </div>
                <div style={{ fontSize: 10, color: C.muted }}>{m.note}</div>
              </Card>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
            <Card>
              <SectionHead sub="Constitutional imbalance (Vikruti)">Tridosha Assessment</SectionHead>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {doshaData.map((d) => (
                  <div key={d.dosha}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: "#334155" }}>{d.dosha}</span>
                      <span style={{ fontSize: 11, color: C.gold }}>{d.value}%</span>
                    </div>
                    <div style={{ height: 5, borderRadius: 6, background: C.dim, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${d.value}%`, background: d.fill }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <SectionHead sub="Integrated constitution map">Ayurvedic Radar</SectionHead>
              <ResponsiveContainer width="100%" height={220}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke={C.border} />
                  <PolarAngleAxis dataKey="param" tick={{ fill: C.muted, fontSize: 10 }} />
                  <Radar dataKey="A" stroke={C.gold} fill={C.gold} fillOpacity={0.2} strokeWidth={1.5} />
                </RadarChart>
              </ResponsiveContainer>
            </Card>

            {/* <Card>
              <SectionHead sub="Five element composition">Panchamahabhuta State</SectionHead>
              {[
                { el: "Akasha", score: 45, col: C.teal, note: "Depleted and spacey" },
                { el: "Vayu", score: 72, col: C.teal, note: "Excess and irregularity" },
                { el: "Agni", score: 58, col: C.saffron, note: "Moderate inflammatory pattern" },
                { el: "Jala", score: 62, col: C.sage, note: "Adequate hydration" },
                { el: "Prithvi", score: 50, col: C.gold, note: "Mild Meda excess" },
              ].map((e) => (
                <div key={e.el} style={{ marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                    <span style={{ fontSize: 12, color: "#334155", fontWeight: 700 }}>{e.el}</span>
                    <span style={{ fontSize: 10, color: e.col }}>{e.score}%</span>
                  </div>
                  <div style={{ height: 4, borderRadius: 6, background: C.dim, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${e.score}%`, background: e.col }} />
                  </div>
                  <div style={{ marginTop: 2, fontSize: 9, color: C.muted }}>{e.note}</div>
                </div>
              ))}
            </Card> */}
          </div>
        </div>
      )}

      {activeTab === "blood" && (
        <Card>
          <SectionHead sub="Lab values with Ayurvedic Dhatu and Dosha correlation">
            Blood Report - Integrated Analysis
          </SectionHead>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                  {["Parameter", "Value", "Unit", "Ref Range", "Status", "Ayurvedic Interpretation"].map((h) => (
                    <th key={h} style={{ padding: "8px 12px", textAlign: "left", fontSize: 9, letterSpacing: 1, color: C.muted, textTransform: "uppercase" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bloodReport.map((r, i) => (
                  <tr key={r.param} style={{ borderBottom: `1px solid ${C.border}`, background: i % 2 === 0 ? "rgba(255,255,255,0.35)" : "transparent" }}>
                    <td style={{ padding: "10px 12px", fontWeight: 700, color: "#334155" }}>{r.param}</td>
                    <td style={{ padding: "10px 12px", color: r.color, fontWeight: 700 }}>{r.value}</td>
                    <td style={{ padding: "10px 12px", color: C.muted }}>{r.unit}</td>
                    <td style={{ padding: "10px 12px", color: C.muted }}>{r.ref}</td>
                    <td style={{ padding: "10px 12px" }}><StatusPill status={r.status} /></td>
                    <td style={{ padding: "10px 12px", color: "#475569" }}>{r.ayur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {activeTab === "dhatu" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
          <Card>
            <SectionHead sub="Seven tissue layers - Sara score">Sapta Dhatu Status</SectionHead>
            {dhaatuData.map((d, i) => {
              const isLow = d.score < d.normal[0];
              const isHigh = d.score > d.normal[1];
              const col = isLow ? C.rust : isHigh ? C.saffron : C.sage;
              return (
                <div key={d.name} style={{ marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontSize: 13, color: "#334155", fontWeight: 700 }}>{i + 1}. {d.name} <span style={{ color: C.muted, fontWeight: 500 }}>({d.sanskrit})</span></span>
                    <span style={{ fontSize: 10, color: col }}>{d.score}/100</span>
                  </div>
                  <div style={{ height: 5, borderRadius: 6, background: C.dim, overflow: "hidden", position: "relative" }}>
                    <div style={{ height: "100%", width: `${d.score}%`, background: col }} />
                  </div>
                </div>
              );
            })}
          </Card>
          <Card>
            <SectionHead sub="Three primary waste products">Tri-Mala Assessment</SectionHead>
            {[
              { name: "Purisha", score: 45, status: "Irregular", color: C.rust },
              { name: "Mutra", score: 82, status: "Optimal", color: C.sage },
              { name: "Sweda", score: 38, status: "Excessive", color: C.saffron },
            ].map((m) => (
              <div key={m.name} style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ color: "#334155", fontWeight: 700 }}>{m.name}</span>
                  <span style={{ fontSize: 10, color: m.color }}>{m.status}</span>
                </div>
                <DotsBar score={m.score} color={m.color} />
              </div>
            ))}
          </Card>
        </div>
      )}

      {activeTab === "agni" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
          <Card>
            <SectionHead sub="Digestive fire status">Agni Assessment</SectionHead>
            {[
              { name: "Jatharagni", score: 48, type: "Vishama (Irregular)" },
              { name: "Bhutagni", score: 62, type: "Moderate" },
              { name: "Dhatvagni", score: 55, type: "Partially impaired" },
            ].map((a) => (
              <div key={a.name} style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <span style={{ fontSize: 13, color: "#334155", fontWeight: 700 }}>{a.name}</span>
                  <span style={{ fontSize: 10, color: C.saffron }}>{a.type}</span>
                </div>
                <div style={{ height: 5, borderRadius: 6, background: C.dim, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${a.score}%`, background: C.saffron }} />
                </div>
              </div>
            ))}
          </Card>
          <Card>
            <SectionHead sub="Toxic metabolic burden">Ama Assessment</SectionHead>
            <div style={{ fontSize: 40, fontWeight: 700, color: C.rust, lineHeight: 1 }}>High</div>
            <div style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>
              Ama pattern suggested by coated tongue, elevated hsCRP, and post-meal heaviness.
            </div>
          </Card>
        </div>
      )}

      {activeTab === "kriya" && (
        <Card>
          <SectionHead sub="Six stages of disease progression">Kriyakala Stage Assessment</SectionHead>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px,1fr))", gap: 8 }}>
            {[
              "1 Sanchaya",
              "2 Prakopa",
              "3 Prasara",
              "4 Sthana Samshraya",
              "5 Vyakti",
              "6 Bheda",
            ].map((s, i) => (
              <div
                key={s}
                style={{
                  borderRadius: 10,
                  border: `1px solid ${i < 2 ? C.gold : C.border}`,
                  background: i < 2 ? `${C.teal}55` : "rgba(255,255,255,0.4)",
                  padding: 10,
                  textAlign: "center",
                  color: "#334155",
                  fontSize: 11,
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeTab === "srotas" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
          <Card>
            <SectionHead sub="Main channels reviewed">Srotas Overview</SectionHead>
            {[
              { name: "Annavaha Srotas", state: "Mild Dusti", note: "Post-meal heaviness and bloating pattern." },
              { name: "Pranavaha Srotas", state: "Stable", note: "Breath rhythm mostly balanced." },
              { name: "Rasavaha Srotas", state: "Moderate Dusti", note: "Fatigue and low nourishment signals." },
              { name: "Medovaha Srotas", state: "Moderate Dusti", note: "Metabolic sluggishness and weight retention." },
            ].map((item) => (
              <div key={item.name} style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#334155" }}>{item.name}</span>
                  <StatusPill status={item.state.includes("Mild") ? "border" : item.state.includes("Stable") ? "normal" : "high"} />
                </div>
                <div style={{ marginTop: 4, fontSize: 11, color: C.muted }}>{item.note}</div>
              </div>
            ))}
          </Card>

          <Card>
            <SectionHead sub="Type of channel pathology">Srotodushti Pattern</SectionHead>
            {[
              { type: "Sanga (Obstruction)", score: 68, color: C.saffron },
              { type: "Atipravritti (Excess flow)", score: 32, color: C.teal },
              { type: "Siragranthi (Structural change)", score: 48, color: C.gold },
              { type: "Vimarga-gamana (Misplaced flow)", score: 40, color: C.rust },
            ].map((row) => (
              <div key={row.type} style={{ marginBottom: 11 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <span style={{ fontSize: 12, color: "#334155", fontWeight: 700 }}>{row.type}</span>
                  <span style={{ fontSize: 10, color: row.color }}>{row.score}%</span>
                </div>
                <div style={{ height: 5, borderRadius: 6, background: C.dim, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${row.score}%`, background: row.color }} />
                </div>
              </div>
            ))}
          </Card>

          <Card>
            <SectionHead sub="Focused correction plan">Srotas Correction</SectionHead>
            {[
              "Deepana-Pachana protocol for Annavaha and Rasavaha channels.",
              "Daily ushna-jala and light langhana support for Sanga pattern.",
              "Kapha-meda balancing ahara with fixed meal timing.",
              "Gentle anuloma-viloma and 30-min walk post major meal.",
            ].map((line) => (
              <div key={line} style={{ fontSize: 12, color: "#475569", marginBottom: 8 }}>
                • {line}
              </div>
            ))}
          </Card>
        </div>
      )}

      {activeTab === "reco" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 12 }}>
          {recommendations.map((r) => (
            <Card key={r.category}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#334155" }}>{r.category}</div>
                <StatusPill status={r.priority === "high" ? "high" : r.priority === "medium" ? "border" : "normal"} />
              </div>
              <div style={{ fontSize: 10, color: C.gold, textTransform: "uppercase", letterSpacing: 1, marginBottom: 3 }}>
                Modern
              </div>
              <div style={{ fontSize: 12, color: "#475569", lineHeight: 1.6, marginBottom: 10 }}>{r.modern}</div>
              <div style={{ fontSize: 10, color: C.gold, textTransform: "uppercase", letterSpacing: 1, marginBottom: 3 }}>
                Ayurvedic
              </div>
              <div style={{ fontSize: 12, color: "#475569", lineHeight: 1.6, marginBottom: 10 }}>{r.ayur}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {r.herbs.map((h) => (
                  <span
                    key={h}
                    style={{
                      fontSize: 9,
                      padding: "2px 7px",
                      borderRadius: 10,
                      background: `${C.teal}66`,
                      color: "#334155",
                      border: `1px solid ${C.border}`,
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
