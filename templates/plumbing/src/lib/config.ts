import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Roto-Rooter",
    tagline: "Plumbing, Drains, Water Cleanup Experts",
    phone: "(209) 362-1914",
    phoneHref: "tel:+12093621914",
    email: "info@rotorooter.com",
    address: "Tracy, CA",
    city: "Tracy",
    serviceAreas: ["Tracy, CA", "San Joaquin Valley"],
    license: "CA C36 Plumbing Contractor",
    since: "1935",
    google_rating: "4.8",
    review_count: "500",
    emergency: true,
    theme: "noir",
    niche: "plumbing",
  },

  services: [
    { icon: "droplets", title: "Emergency Plumbing", desc: "Rapid response for urgent plumbing issues, minimizing damage and restoring peace of mind.", urgent: true },
    { icon: "thermometer", title: "Water Heater Repair & Replacement", desc: "Expert service for all water heater types, ensuring reliable hot water when you need it most.", urgent: false },
    { icon: "droplets", title: "Leak Repair", desc: "Precise detection and repair of leaks in pipes, fixtures, and hidden areas to prevent water damage.", urgent: true },
    { icon: "wrench", title: "Drain Cleaning", desc: "Thorough clearing of clogged drains, from sinks to main sewer lines, using advanced techniques.", urgent: false },
    { icon: "truck", title: "Sewer Line Services", desc: "Comprehensive sewer line inspection, repair, and replacement to maintain proper waste flow.", urgent: false },
    { icon: "home", title: "Water Damage Restoration", desc: "Complete water removal, drying, and restoration services after floods or plumbing emergencies.", urgent: true }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Tracy, CA", stars: 5, text: "Our water heater burst on a Saturday night, and Roto-Rooter was here within an hour. The technician, Mark, was incredibly professional and had it replaced by midnight. The upfront pricing was a huge relief, and we didn't pay extra for the weekend service. Truly a lifesaver!" },
    { name: "David M.", location: "Stockton, CA", stars: 5, text: "Had a persistent drain clog that other companies couldn't fix. Roto-Rooter used a video camera inspection to find the root cause and cleared it with hydro-jetting. It's been weeks, and the drain is still flowing perfectly. Highly recommend their thorough approach." },
    { name: "Emily R.", location: "Modesto, CA", stars: 5, text: "We discovered a hidden leak behind a wall, causing significant water damage. Roto-Rooter not only fixed the leak quickly but also handled the water damage cleanup and restoration. Their team was efficient, compassionate, and made a stressful situation much more manageable. Excellent service from start to finish." }
  ],

  trustBadges: [
    "Licensed & Insured", "24/7 Emergency Service", "No Extra Charge Nights/Weekends", "Free Onsite Estimates", "89+ Years Experience", "Roto-Rooter Certified"
  ],

  stats: [
    { value: 4.8, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 89, label: "Years in Business", suffix: "+", decimals: 0 },
    { value: 10000, label: "Jobs Completed", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We arrive quickly for all emergencies and scheduled appointments." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Clear, honest pricing with no hidden fees, even for after-hours calls." },
    { icon: "award", title: "Certified Pros", desc: "Our plumbers are highly trained, experienced, and fully insured." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction." },
    { icon: "phone", title: "24/7 Availability", desc: "Always here for you, day or night, including holidays." },
    { icon: "truck", title: "Fully Equipped", desc: "Our trucks are stocked with industry-leading tools for efficient service." }
  ],

  formServiceOptions: ["Emergency Plumbing", "Water Heater Repair & Replacement", "Leak Repair", "Drain Cleaning", "Sewer Line Services", "Water Damage Restoration"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!