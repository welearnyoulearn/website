import type { LucideIcon } from "lucide-react";
import {
  BookOpenCheck,
  Wallet,
  Receipt,
  Fingerprint,
  Users,
} from "lucide-react";

export type FeatureStep = {
  step: string;
  title: string;
  description: string;
};

export type FeatureDetail = {
  slug: string;
  icon: LucideIcon;
  accent: "primary" | "teacher" | "student" | "parent" | "amber";
  name: string;
  tagline: string;
  summary: string;
  glimpse: string;
  bullets: string[];
  steps?: FeatureStep[];
  note?: string;
};

export const features: FeatureDetail[] = [
  {
    slug: "portals",
    icon: Users,
    accent: "primary",
    name: "5 Portals",
    tagline: "One system instead of five disconnected tools",
    summary:
      "School Admin, Teacher, Student, Parent and Platform Admin — each sees exactly what they need, all built on the same shared data.",
    glimpse:
      "Purpose-built dashboards for every role in the school, sharing one source of truth so nothing gets re-entered twice.",
    bullets: [
      "School Admin: people, schedules, fees, expenses, and analytics from one dashboard",
      "Teacher: daily snapshot, attendance, grading, syllabus tracking",
      "Student: tasks, marks, doubts, syllabus progress, rewards",
      "Parent: read-only view of attendance, marks, fees, and activity",
      "Platform Admin: school directory, subscriptions, feature control, audit log",
    ],
    steps: [
      {
        step: "01",
        title: "Everyone logs into their own portal",
        description:
          "Separate, isolated login sessions per role — a teacher's session never grants access to admin or parent data.",
      },
      {
        step: "02",
        title: "All portals read from the same data",
        description:
          "A student marked present by a teacher, a fee paid by an admin, a topic marked covered — every portal downstream reflects it instantly.",
      },
      {
        step: "03",
        title: "Nothing gets re-entered",
        description:
          "Information entered once — a student record, a subject assignment — is correct everywhere, automatically.",
      },
    ],
  },
  {
    slug: "syllabus-tracking",
    icon: BookOpenCheck,
    accent: "student",
    name: "Syllabus Tracking",
    tagline: "Built once, subscribed to, tracked everywhere",
    summary:
      "A shared curriculum library maintained at the platform level — schools subscribe instead of retyping, and every portal stays in sync automatically.",
    glimpse:
      "Subscribe once to a shared curriculum library — it flows automatically into teacher assignments, coverage tracking, and what parents see.",
    bullets: [
      "Central master curriculum library — subjects, chapters, topics, homework/quiz tasks",
      "Supports CBSE, APSSC/SSC (Andhra Pradesh State Board), or both",
      "Combined-board option and a separate Extra Subjects category (Dance, Music, Art)",
      "Teachers mark topics covered as they teach, with a date",
      "Coverage updates the school's analytics, the student's view, and the parent's view — all at once",
    ],
    steps: [
      {
        step: "01",
        title: "Built once, at the platform level",
        description:
          "Subjects, chapters, topics and homework/quiz tasks are maintained centrally as a master curriculum library — for CBSE, APSSC/SSC, or both.",
      },
      {
        step: "02",
        title: "A school subscribes, not retypes",
        description:
          "An admin browses the library and subscribes to the subjects that apply to each grade. The full structure is copied into the school's own records for the academic year — theirs to customize, with room to add chapters.",
      },
      {
        step: "03",
        title: "It flows everywhere automatically",
        description:
          "Assigning a teacher to a subject is what makes it appear correctly in their portal — no more \"Maths\" vs \"Mathematics\" mismatches. The same subscribed list populates onboarding, so a teacher's subject never drifts out of sync.",
      },
      {
        step: "04",
        title: "Coverage updates everyone at once",
        description:
          "When a teacher marks a topic covered, that single action updates the school's coverage analytics, the student's syllabus view, and what a parent sees — parents only ever see what's actually been taught.",
      },
    ],
    note: "An \"auto-suggest homework\" button exists in the teacher screen when a topic is marked covered — this AI backend is still being wired in and isn't live yet.",
  },
  {
    slug: "fee-management",
    icon: Wallet,
    accent: "primary",
    name: "Fee Management",
    tagline: "Every fee, every payment, one ledger",
    summary:
      "Grade-based fee structures, a complete ledger, multiple payment modes, and waivers — a full financial view of fee collection without spreadsheets.",
    glimpse:
      "Structures, ledger, payments and waivers — a complete view of fee collection for the whole school, without spreadsheets.",
    bullets: [
      "Grade-based fee structures set once, applied automatically",
      "Full ledger per student — payments, dues, history",
      "Cash, cheque, DD and UPI payment recording",
      "Waivers and concessions tracked against the ledger",
      "Real-time fee collection percentage across the whole school",
      "Parents see their own child's fee ledger — outstanding balance, history, waivers",
    ],
    steps: [
      {
        step: "01",
        title: "Set fee structures by grade",
        description:
          "Define what each grade owes, once — no manually re-entering fee amounts per student.",
      },
      {
        step: "02",
        title: "Record payments as they happen",
        description:
          "Cash, cheque, DD or UPI — every payment is logged against the student's ledger the moment it's collected.",
      },
      {
        step: "03",
        title: "See collection status school-wide",
        description:
          "Admins get a real-time view of collection percentage, outstanding dues, and waivers — no manual reconciliation at month-end.",
      },
      {
        step: "04",
        title: "Parents see their own ledger",
        description:
          "No calling the school office to ask what's owed — parents see the current balance, full history, and any waivers applied.",
      },
    ],
  },
  {
    slug: "expense-management",
    icon: Receipt,
    accent: "amber",
    name: "Expense Management",
    tagline: "Every rupee out, tracked and auditable",
    summary:
      "Track every school expense in one place — categorized, dated, searchable, with receipts attached and a full audit trail.",
    glimpse:
      "Every school expense tracked, categorized and searchable, with bills attached and a full audit trail — no more lost paperwork.",
    bullets: [
      "Track every school expense in one place — categorized, dated, and searchable",
      "Custom and default expense categories tailored to how your school actually spends",
      "Attach bills and receipts directly to each expense entry — no more lost paperwork",
      "Filter and search by day, date range, or month to find any transaction instantly",
      "Real-time spending dashboard with category-wise breakdowns and trends",
      "Multiple payment modes supported — cash, bank transfer, UPI, cheque",
      "Full audit trail — every expense entry, edit, and deletion is logged and traceable",
      "Export expense reports for accounting and compliance",
      "Role-based access so only authorized staff can log or approve expenses",
      "Fully responsive — manage expenses from desktop, tablet, or phone",
    ],
    steps: [
      {
        step: "01",
        title: "Log an expense as it happens",
        description:
          "Pick a category, enter the amount and payment mode, and attach the bill or receipt — done in seconds, not at month-end.",
      },
      {
        step: "02",
        title: "Everything stays searchable",
        description:
          "Filter by day, date range, or month to find any transaction instantly — no digging through paper files or spreadsheets.",
      },
      {
        step: "03",
        title: "See spending patterns in real time",
        description:
          "A live dashboard breaks spending down by category so admins can spot trends without waiting for a monthly report.",
      },
      {
        step: "04",
        title: "Every action is logged",
        description:
          "Every entry, edit, and deletion is recorded and traceable — full accountability for who spent what, when.",
      },
    ],
  },
  {
    slug: "teacher-attendance",
    icon: Fingerprint,
    accent: "teacher",
    name: "Teacher Attendance",
    tagline: "Biometric/RFID hardware, synced automatically",
    summary:
      "Hardware-based staff attendance — biometric or RFID — that syncs directly into the platform, replacing manual registers and end-of-month reconciliation.",
    glimpse:
      "Biometric/RFID-based staff attendance that syncs automatically into the platform — no manual registers, no end-of-month reconciliation.",
    bullets: [
      "Biometric or RFID card-based check-in for staff",
      "Attendance syncs automatically into the platform — no manual entry",
      "No more paper registers or end-of-month reconciliation",
      "Visible in the same admin dashboard as student attendance and leave requests",
    ],
    steps: [
      {
        step: "01",
        title: "Staff check in on the device",
        description:
          "A biometric scan or RFID tap at the school entrance — the same motion staff already know from other systems.",
      },
      {
        step: "02",
        title: "It syncs to the platform automatically",
        description:
          "No manual entry, no separate spreadsheet to reconcile — the record appears in the admin dashboard immediately.",
      },
      {
        step: "03",
        title: "Admins see it alongside everything else",
        description:
          "Staff attendance sits next to leave requests and substitute assignment — one place to see who's in, who's out, and who needs covering.",
      },
    ],
  },
];

export function getFeature(slug: string) {
  return features.find((f) => f.slug === slug);
}
