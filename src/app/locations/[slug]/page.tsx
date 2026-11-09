import locationsData from '@/data/locations.json';
import servicesData from '@/data/services.json';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, MapPin, Sparkles, Building2, ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  return locationsData.map((loc) => ({ slug: loc.slug }));
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const loc = locationsData.find(l => l.slug === resolvedParams.slug);
  if (!loc) return <div>Location not found</div>;

  // Nearby locations (excluding current)
  const nearbyLocations = locationsData
    .filter(l => l.slug !== loc.slug)
    .slice(0, 8);

  // Top commercial services to link to
  const topServices = servicesData.slice(0, 6);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8 uppercase tracking-wider">
        <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
        <span>/</span>
        <Link href="/#areas" className="hover:text-emerald-600 transition">Locations</Link>
        <span>/</span>
        <span className="text-slate-900">{loc.name}</span>
      </nav>

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-4">
          <MapPin className="w-3.5 h-3.5" /> Regional Service Hub
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6">
          Commercial Cleaning in {loc.name}, BC
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed mb-8">
          {loc.description}
        </p>

        <div className="prose prose-slate max-w-none text-slate-700 mb-8 leading-relaxed whitespace-pre-line">
          {loc.content}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-100">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span className="text-sm text-slate-700 font-medium">Daily & weekly commercial office contracts in {loc.name}</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span className="text-sm text-slate-700 font-medium">Restaurant, clinic & retail facility sanitization</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span className="text-sm text-slate-700 font-medium">Strata common area, parkade & lobby maintenance</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span className="text-sm text-slate-700 font-medium">Fully insured & bonded cleaners with local dispatch</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-900 text-white p-6 sm:p-8 rounded-2xl">
          <div>
            <h3 className="text-xl font-bold mb-1">Book your cleaner in {loc.name} today</h3>
            <p className="text-sm text-slate-400">Rapid local response with competitive commercial rates.</p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Link href="/book" className="w-full sm:w-auto text-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl transition">
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Services available in this location */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center justify-between">
          <span>Popular Services in {loc.name}</span>
          <Link href="/#commercial" className="text-xs text-emerald-600 hover:underline">All Services &rarr;</Link>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topServices.map((service) => (
            <Link 
              key={service.slug} 
              href={`/services/${service.slug}`}
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-emerald-600 transition mb-2 text-sm">
                  {service.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {service.description}
                </p>
              </div>
              <span className="text-xs font-semibold text-emerald-600 mt-4 flex items-center gap-1">
                View Service <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Nearby areas */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-emerald-600" />
          Nearby Lower Mainland Service Areas
        </h3>
        <div className="flex flex-wrap gap-2 text-xs">
          {nearbyLocations.map((nearby) => (
            <Link 
              key={nearby.slug} 
              href={`/locations/${nearby.slug}`}
              className="bg-white border border-slate-200 hover:border-emerald-500 hover:text-emerald-700 px-3.5 py-2 rounded-lg font-medium text-slate-600 transition"
            >
              {nearby.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
