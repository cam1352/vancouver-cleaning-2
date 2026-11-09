import Link from 'next/link';
import { MapPin, Sparkles, ShieldCheck, Clock, Phone, Mail } from 'lucide-react';
import servicesData from '@/data/services.json';
import locationsData from '@/data/locations.json';

export default function Footer() {
  const primaryServices = servicesData.slice(0, 16);
  const primaryLocations = locationsData.slice(0, 20);

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800/80">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 font-bold text-xl text-white mb-4">
              <div className="w-9 h-9 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              Vancouver Cleaning Services
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed mb-6">
              Greater Vancouver's premier commercial janitorial, office sanitation, and specialized facility cleaners. Fully bonded, insured, and compliant with municipal health regulations.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> $5M Commercial Liability
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5 text-emerald-400" /> 24/7 After-Hours Dispatch
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-emerald-400 transition">Home</Link></li>
              <li><Link href="/book" className="hover:text-emerald-400 transition">Instant Free Quote</Link></li>
              <li><Link href="/faq" className="hover:text-emerald-400 transition">Pricing & FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-400 transition">Sanitation Guides & Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Contact & Coverage</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Vancouver, BC, Canada</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>(604) 555-0199</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="mailto:info@cleaningservicevancouver.ca" className="hover:text-emerald-400 transition">info@cleaningservicevancouver.ca</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-10 border-b border-slate-800/80">
          <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-5 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" /> Specialized Commercial & Janitorial Services
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2.5 text-xs text-slate-400">
            {primaryServices.map((service) => (
              <Link 
                key={service.slug} 
                href={`/services/${service.slug}`} 
                className="hover:text-emerald-400 hover:underline transition truncate"
                title={service.title}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="py-10 border-b border-slate-800/80">
          <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-5 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400" /> Greater Vancouver Service Areas
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-x-4 gap-y-2.5 text-xs text-slate-400">
            {primaryLocations.map((loc) => (
              <Link 
                key={loc.slug} 
                href={`/locations/${loc.slug}`} 
                className="hover:text-emerald-400 hover:underline transition truncate"
                title={`Cleaning services in ${loc.name}`}
              >
                {loc.name} Cleaning
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Vancouver Cleaning Services. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/sitemap.xml" className="hover:text-slate-400 transition">XML Sitemap</Link>
            <Link href="/faq" className="hover:text-slate-400 transition">Pricing Guide</Link>
            <Link href="/book" className="hover:text-slate-400 transition">Book Online</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
