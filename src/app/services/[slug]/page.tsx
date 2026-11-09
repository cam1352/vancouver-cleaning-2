import servicesData from '@/data/services.json';
import locationsData from '@/data/locations.json';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, MapPin, Sparkles, Phone, ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find(s => s.slug === resolvedParams.slug);
  if (!service) return <div>Service not found</div>;

  // Find 4 related services (excluding current)
  const relatedServices = servicesData
    .filter(s => s.slug !== service.slug)
    .slice(0, 4);

  // Key locations to cross-link
  const keyLocations = locationsData.slice(0, 8);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8 uppercase tracking-wider">
        <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
        <span>/</span>
        <Link href="/#commercial" className="hover:text-emerald-600 transition">Services</Link>
        <span>/</span>
        <span className="text-slate-900">{service.title}</span>
      </nav>

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Commercial & Janitorial Excellence
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6">
          {service.title} in Vancouver
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed mb-8">
          {service.description}
        </p>

        <div className="prose prose-slate max-w-none text-slate-700 mb-8 leading-relaxed whitespace-pre-line">
          {service.content}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-100">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span className="text-sm text-slate-700 font-medium">Licensed, bonded & WCB compliant crews</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span className="text-sm text-slate-700 font-medium">Hospital-grade & eco-safe disinfectants</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span className="text-sm text-slate-700 font-medium">24/7 flexible scheduling (after-hours & weekend)</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span className="text-sm text-slate-700 font-medium">100% Quality & health inspection guarantee</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-900 text-white p-6 sm:p-8 rounded-2xl">
          <div>
            <h3 className="text-xl font-bold mb-1">Need a custom quote for {service.title}?</h3>
            <p className="text-sm text-slate-400">Get upfront pricing with zero commitments.</p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Link href="/book" className="w-full sm:w-auto text-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl transition">
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Neat Interlinking: Related Services */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center justify-between">
          <span>Related Commercial Services</span>
          <Link href="/#commercial" className="text-xs text-emerald-600 hover:underline">View All &rarr;</Link>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedServices.map((rel) => (
            <Link 
              key={rel.slug} 
              href={`/services/${rel.slug}`}
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-emerald-600 transition mb-2 text-sm">
                  {rel.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {rel.description}
                </p>
              </div>
              <span className="text-xs font-semibold text-emerald-600 mt-4 flex items-center gap-1">
                Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Neat Interlinking: Available Locations */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-emerald-600" />
          Where We Provide {service.title}
        </h3>
        <div className="flex flex-wrap gap-2 text-xs">
          {keyLocations.map((loc) => (
            <Link 
              key={loc.slug} 
              href={`/locations/${loc.slug}`}
              className="bg-white border border-slate-200 hover:border-emerald-500 hover:text-emerald-700 px-3.5 py-2 rounded-lg font-medium text-slate-600 transition"
            >
              {loc.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
