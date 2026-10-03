import type { LucideIcon } from "lucide-react";
import {
  BookOpenCheck,
  Wallet,
  Receipt,
  Users,
  CalendarDays,
  Megaphone,
  MessageSquare,
  BookMarked,
  CalendarClock,
  FileDown,
  ClipboardCheck,
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
      "Teacher: daily snapshot, attendance marking, syllabus tracking, exam marks",
      "Student: syllabus progress, marks, digital library, academic calendar",
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
          "Assigning a teacher to a subject is what makes it appear correctly in their portal — no more \"Maths\" vs \"Mathematics\" mismatches.",
      },
      {
        step: "04",
        title: "Coverage updates everyone at once",
        description:
          "When a teacher marks a topic covered, that single action updates the school's coverage analytics, the student's syllabus view, and what a parent sees.",
      },
    ],
    note: "An \"auto-suggest homework\" button exists in the teacher screen when a topic is marked covered — this AI backend is still being wired in and isn't live yet.",
  },
  {
    slug: "attendance",
    icon: ClipboardCheck,
    accent: "teacher",
    name: "Attendance Tracking",
    tagline: "Marked once, visible everywhere",
    summary:
      "Teachers mark attendance once from their portal — it flows instantly to the admin dashboard, analytics, absentee reports, and the parent's read-only view.",
    glimpse:
      "One-tap daily attendance with real-time analytics, absentee tracking, and parent visibility — no paper registers, no duplicate entry.",
    bullets: [
      "Teachers mark attendance per class in seconds from their portal",
      "Admin sees school-wide attendance in real time — by grade, section, or individual student",
      "Automated absentee list with contact details for quick follow-up",
      "Attendance analytics with trends, percentages, and at-risk student flags",
      "Parents see their child's attendance record updated daily",
      "Historical reports exportable for compliance and parent-teacher meetings",
    ],
    steps: [
      {
        step: "01",
        title: "Teacher marks attendance",
        description:
          "Open the class, tap Present or Absent for each student — done in under a minute. Supports back-dating for catch-up entries.",
      },
      {
        step: "02",
        title: "Admin sees it immediately",
        description:
          "The attendance dashboard updates in real time — who's in, who's absent, and which classes haven't been marked yet.",
      },
      {
        step: "03",
        title: "Parents see it by end of day",
        description:
          "No waiting for a weekly SMS or WhatsApp update — parents check their portal and see today's status for their child.",
      },
    ],
  },
  {
    slug: "exam-marks",
    icon: CalendarClock,
    accent: "primary",
    name: "Exam Schedule & Marks",
    tagline: "Schedule, grade, and release results — one flow",
    summary:
      "Create exam schedules, let teachers enter marks per subject, release results with a parent notification, and track which subjects are still pending — all in one place.",
    glimpse:
      "Schedule exams, enter marks, and release results with parent notification — students and parents see marks the moment they're published.",
    bullets: [
      "School admin creates the exam schedule by grade and subject",
      "Teachers enter marks per student from their portal",
      "Admin tracks marks-entry status per subject — nothing gets missed",
      "Results published to students and parents with a single action",
      "Parents are notified the moment results are released — no separate call",
      "Students see subject-wise marks, class averages, and rank",
    ],
    steps: [
      {
        step: "01",
        title: "Admin creates the exam schedule",
        description:
          "Set exam dates and subjects for each grade — teachers see it in their portal, students see it in theirs.",
      },
      {
        step: "02",
        title: "Teachers enter marks",
        description:
          "Each teacher enters marks for their subject after grading. Admin sees real-time status — which subjects are pending and which are done.",
      },
      {
        step: "03",
        title: "Release results to everyone at once",
        description:
          "One click publishes results — students and parents see marks the moment they're released, with no paper distribution.",
      },
    ],
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
    slug: "announcements",
    icon: Megaphone,
    accent: "primary",
    name: "Announcements",
    tagline: "Targeted communication, full send history",
    summary:
      "Send announcements targeted by grade, section, role, or the whole school — with read tracking and a complete audit log of every message sent.",
    glimpse:
      "Targeted announcements by audience and a full send history — one place for every school communication, no WhatsApp groups needed.",
    bullets: [
      "Send announcements to specific grades, sections, or the whole school",
      "Target by role — teachers, students, parents, or any combination",
      "Full send history for every announcement — see who received what",
      "Read receipts so you know the message actually landed",
      "Parents receive announcements in their portal — no separate app needed",
      "Notification center logs every message for school-wide audit",
    ],
    steps: [
      {
        step: "01",
        title: "Write and target your announcement",
        description:
          "Type your message, select who receives it — specific grades, all teachers, all parents, or everyone — and send in one click.",
      },
      {
        step: "02",
        title: "It reaches the right people instantly",
        description:
          "Each group sees the announcement in their portal the moment it's sent. No WhatsApp groups, no printed notices.",
      },
      {
        step: "03",
        title: "Track who read it",
        description:
          "See read receipts and delivery status for every announcement — no more wondering if the message was actually seen.",
      },
    ],
  },
  {
    slug: "feedback-management",
    icon: MessageSquare,
    accent: "student",
    name: "Feedback Management",
    tagline: "Anonymous QR-based feedback with voice",
    summary:
      "Generate QR codes for anonymous student or parent feedback — respondents can type or record a voice note, and submissions are tagged by category for admin review.",
    glimpse:
      "QR-based anonymous feedback with voice recording — students and parents submit honestly, admins see it categorized and searchable.",
    bullets: [
      "Generate unique QR codes for any feedback campaign — shareable via print or screen",
      "Fully anonymous — respondents don't log in, nothing ties responses to an identity",
      "Voice upload option so respondents can speak instead of type",
      "Category tagging (academics, facilities, teachers, etc.) for organized review",
      "Admin sees submissions in a filterable dashboard with category-wise stats",
      "Issue tracking — flag feedback items as open, in progress, or resolved",
    ],
    steps: [
      {
        step: "01",
        title: "Generate a QR code for your campaign",
        description:
          "Give the feedback form a title and category focus — a QR code is generated instantly, ready to print or display on-screen.",
      },
      {
        step: "02",
        title: "Respondents scan and submit anonymously",
        description:
          "No login required. Students or parents scan, type or record a voice note, and submit — nothing links the response to them.",
      },
      {
        step: "03",
        title: "Admin reviews and acts",
        description:
          "All submissions appear in the admin dashboard, categorized and flaggable — track which issues are open, in progress, or resolved.",
      },
    ],
  },
  {
    slug: "library",
    icon: BookMarked,
    accent: "student",
    name: "Digital Library",
    tagline: "One shared library for every portal",
    summary:
      "A school-managed digital library accessible to students, teachers, and parents from their own portals — resources organized by grade, subject, and type.",
    glimpse:
      "School-managed digital resources — accessible by teachers, students, and parents from their own portals, organized by grade and subject.",
    bullets: [
      "School admin uploads and manages library resources",
      "Resources organized by grade, subject, and content type",
      "Teachers, students, and parents each have their own portal access",
      "Students browse by subject or grade without leaving their portal",
      "Teachers can reference the same resources they assign",
      "Accessible on any device — no separate app needed",
    ],
    steps: [
      {
        step: "01",
        title: "Admin populates the library",
        description:
          "Upload PDFs, links, or documents organized by grade and subject — the library is as detailed or as simple as you want.",
      },
      {
        step: "02",
        title: "Teachers reference their resources",
        description:
          "Teachers see the same library from their portal — making it easy to point students to materials they've already reviewed.",
      },
      {
        step: "03",
        title: "Students and parents access on demand",
        description:
          "Students browse resources any time from their portal. Parents see what's available for their child's grade.",
      },
    ],
  },
  {
    slug: "academic-calendar",
    icon: CalendarDays,
    accent: "primary",
    name: "Academic Calendar",
    tagline: "One calendar, every portal sees it",
    summary:
      "School admin manages the academic calendar — holidays, events, exam dates, and term breaks — and every portal shows it read-only in real time.",
    glimpse:
      "Admin sets the academic calendar once — teachers, students, and parents all see the same holidays, events, and exam dates without any extra steps.",
    bullets: [
      "School admin creates and manages holidays, events, and term dates",
      "Every portal shows the same calendar — no version mismatch",
      "Teachers see upcoming events alongside their class schedule",
      "Students see holidays and exam dates as set by the school",
      "Parents see the full school calendar from their portal",
      "Calendar changes propagate instantly across all portals",
    ],
    steps: [
      {
        step: "01",
        title: "Admin sets the calendar",
        description:
          "Add holidays, term breaks, exam windows, and school events — any change updates everywhere instantly.",
      },
      {
        step: "02",
        title: "Everyone sees the same version",
        description:
          "No printing, no email forwards — every portal shows the current calendar as the admin has it.",
      },
      {
        step: "03",
        title: "No surprises",
        description:
          "Parents, students, and teachers all know about holidays and events the moment they're added — before the question is asked.",
      },
    ],
  },
  {
    slug: "data-export",
    icon: FileDown,
    accent: "primary",
    name: "Data Export",
    tagline: "Your school's data, whenever you need it",
    summary:
      "Download any section of your school's data — student lists, attendance records, fee reports, expense summaries — in structured formats for offline use or compliance.",
    glimpse:
      "Structured exports for every module — student records, attendance, fees, expenses — downloadable any time for offline use or compliance filing.",
    bullets: [
      "Export student lists, staff records, attendance, marks, and financials",
      "Structured formats ready for Excel, accounting software, or compliance filing",
      "Filter by grade, date range, or module before exporting",
      "Export catalog with descriptions so you know exactly what each report contains",
      "Role-scoped — only authorized admins can trigger exports",
      "Full download history for audit purposes",
    ],
    steps: [
      {
        step: "01",
        title: "Browse the export catalog",
        description:
          "See every available report described — student rosters, attendance summaries, fee ledgers, expense logs — and pick what you need.",
      },
      {
        step: "02",
        title: "Apply filters and download",
        description:
          "Narrow by grade, date range, or academic year, then download in a format ready for Excel or your accountant.",
      },
      {
        step: "03",
        title: "Every export is logged",
        description:
          "A download history tells you what was exported, by whom, and when — full accountability for data access.",
      },
    ],
  },
];

export function getFeature(slug: string) {
  return features.find((f) => f.slug === slug);
}
