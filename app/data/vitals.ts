export type Vital = {
  slug: string;
  shortLabel: string;
  title: string;
  value: string;
  unit: string;
  status: string;
  normalRange: string;
  description: string;
};

export const VITALS: Vital[] = [
  {
    slug: "hr",
    shortLabel: "HR",
    title: "Heart Rate",
    value: "78",
    unit: "bpm",
    status: "Normal",
    normalRange: "60-100 bpm (resting adult)",
    description:
      "Heart rate is the number of heart beats per minute. It reflects cardiovascular response to activity, stress, hydration, and illness.",
  },
  {
    slug: "bp",
    shortLabel: "BP",
    title: "Blood Pressure",
    value: "122/78",
    unit: "mmHg",
    status: "Normal",
    normalRange: "Less than 120/80 mmHg is ideal",
    description:
      "Blood pressure indicates force exerted by blood on artery walls during heart contraction and relaxation. Persistent elevation raises cardiovascular risk.",
  },
  {
    slug: "rr",
    shortLabel: "RR",
    title: "Respiratory Rate",
    value: "16",
    unit: "breaths/min",
    status: "Normal",
    normalRange: "12-20 breaths/min (adult)",
    description:
      "Respiratory rate is the number of breaths taken per minute. It is a sensitive early marker for respiratory or metabolic distress.",
  },
  {
    slug: "spo2",
    shortLabel: "SpO2",
    title: "Oxygen Saturation",
    value: "98",
    unit: "%",
    status: "Normal",
    normalRange: "95-100% at sea level",
    description:
      "SpO2 estimates percentage of hemoglobin carrying oxygen. Lower values may suggest impaired oxygen exchange or cardiopulmonary compromise.",
  },
  {
    slug: "temperature",
    shortLabel: "Temperature",
    title: "Body Temperature",
    value: "98.4",
    unit: "F",
    status: "Normal",
    normalRange: "97 F to 99 F (oral)",
    description:
      "Temperature reflects thermal balance and can indicate infection, inflammation, endocrine changes, or environmental exposure.",
  },
  {
    slug: "hrv",
    shortLabel: "HRV",
    title: "Heart Rate Variability",
    value: "42",
    unit: "ms",
    status: "Average",
    normalRange: "Highly individual; trend over time is most useful",
    description:
      "HRV measures beat-to-beat variation in heart rhythm and serves as a proxy for autonomic nervous system flexibility and recovery state.",
  },
  {
    slug: "vo2-max",
    shortLabel: "VO2 Max",
    title: "VO2 Max",
    value: "31",
    unit: "ml/kg/min",
    status: "Fair",
    normalRange: "Varies by age and sex",
    description:
      "VO2 max represents maximal oxygen uptake during intense exercise and is a core indicator of cardiorespiratory fitness.",
  },
  {
    slug: "sleep",
    shortLabel: "Sleep",
    title: "Sleep Duration",
    value: "6.8",
    unit: "hours/night",
    status: "Needs Improvement",
    normalRange: "7-9 hours/night (adult)",
    description:
      "Sleep duration and continuity influence recovery, endocrine function, immune health, cognition, and metabolic regulation.",
  },
  {
    slug: "ecg-rhythm",
    shortLabel: "ECG Rhythm",
    title: "ECG Rhythm",
    value: "Sinus Rhythm",
    unit: "",
    status: "Normal",
    normalRange: "Regular sinus rhythm",
    description:
      "ECG rhythm describes the electrical pattern and regularity of heartbeats. Rhythm assessment helps detect arrhythmias and conduction abnormalities.",
  },
];

export function getVitalBySlug(slug: string) {
  return VITALS.find((vital) => vital.slug === slug);
}
