import { BadgeCheck, BarChart3, CircleDollarSign, Megaphone, Scale, Settings, ShieldCheck, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const adminAreas: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Cook Verification", text: "Review applications, food hygiene evidence, kitchen checks, and active status.", icon: ShieldCheck },
  { title: "Menu and Content", text: "Moderate meal listings, images, categories, dietary tags, and availability.", icon: BadgeCheck },
  { title: "Order and User Management", text: "Resolve customer, cook, delivery, refund, and cancellation workflows.", icon: UsersRound },
  { title: "Payments and Settlements", text: "Track Stripe payments, commission, delivery margin, and cook payouts.", icon: CircleDollarSign },
  { title: "Reports and Analytics", text: "Monitor order volume, ratings, retention, borough growth, and service levels.", icon: BarChart3 },
  { title: "Promotions", text: "Manage coupons, featured listings, subscriptions, loyalty, and bulk order campaigns.", icon: Megaphone },
  { title: "Dispute Resolution", text: "Handle quality issues, refunds, support escalations, and policy outcomes.", icon: Scale },
  { title: "System Settings", text: "Control borough launches, platform fees, roles, notifications, and compliance copy.", icon: Settings }
];

export default function AdminPage() {
  return (
    <main>
      <Header />
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-widest text-mech-red">Backend operations</p>
          <h1 className="font-heading text-5xl font-black">Admin panel</h1>
          <p className="mt-3 max-w-2xl leading-7 text-mech-muted">
            A control room for cook verification, order support, payment settlement, promotions, reporting, disputes, and platform settings.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {adminAreas.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-lg border border-mech-line bg-mech-cream p-5">
                <Icon className="mb-5 text-mech-red" size={26} />
                <h2 className="font-heading text-xl font-bold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-mech-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
