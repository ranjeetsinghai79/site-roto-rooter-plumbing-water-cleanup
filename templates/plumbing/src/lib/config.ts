import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Roto-Rooter",
    tagline: "Plumbing, Drains, Water Cleanup Experts",
    phone: "(407) 823-8483",
    phoneHref: "tel:+14078238483",
    email: "info@rotorooter.com",
    address: "123 Main St",
    city: "Kissimmee",
    serviceAreas: ["Kissimmee, FL", "Orlando, FL", "St. Cloud, FL"],
    license: "CFC1234567",
    since: "1935",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "noir",
    niche: "plumbing",
  },

  services: [
    { icon: "droplets", title: "Emergency Plumbing", desc: "Rapid response for all urgent plumbing issues, day or night.", urgent: true },
    { icon: "thermometer", title: "Water Heater Repair", desc: "Expert repair and installation for all types of water heaters.", urgent: false },
    { icon: "droplets", title: "Leak Detection & Repair", desc: "Advanced technology to find and fix leaks quickly, preventing further damage.", urgent: false },
    { icon: "wrench", title: "Drain Cleaning", desc: "Thorough cleaning to clear blockages and restore proper drainage.", urgent: false },
    { icon: "truck", title: "Sewer Line Services", desc: "Comprehensive sewer line repair, replacement, and inspection.", urgent: false },
    { icon: "home", title: "Water Damage Restoration", desc: "Complete cleanup and restoration after water damage or flooding.", urgent: true }
  ],

  testimonials: [
    { name: "Sarah M.", location: "Kissimmee, FL", stars: 5, text: "Our water heater burst late on a Saturday night. Roto-Rooter was here within an hour! The technician, Mark, was incredibly professional and had it replaced by Sunday morning. The upfront pricing was a huge relief. Highly recommend their emergency service!" },
    { name: "David L.", location: "Orlando, FL", stars: 5, text: "Had a persistent drain clog that other companies couldn't fix. Roto-Rooter used a video inspection to find the root cause and cleared it completely. It's been months, and the drain is still flowing perfectly. Worth every penny for their expertise." },
    { name: "Jessica P.", location: "St. Cloud, FL", stars: 5, text: "We discovered a hidden leak under our sink, causing significant water damage. Roto-Rooter not only fixed the leak but also handled the water damage cleanup efficiently. They made a stressful situation much more manageable with their prompt and thorough work." }
  ],

  trustBadges: [
    "Licensed & Insured", "24/7 Emergency Service", "Same-Day Service", "No Extra Charge Nights/Weekends", "Free Onsite Estimates", "Roto-Rooter Certified"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 10000, label: "Jobs Done", suffix: "+", decimals: 0 },
    { value: 85, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We arrive quickly, ready to tackle any plumbing emergency, day or night." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Receive clear, honest pricing before any work begins – no surprises." },
    { icon: "award", title: "Certified Pros", desc: "Our plumbers are highly trained, licensed, and insured for your peace of mind." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction." },
    { icon: "phone", title: "24/7 Availability", desc: "We're always here for you, including holidays, nights, and weekends." },
    { icon: "truck", title: "Fully Equipped", desc: "Our trucks are stocked with state-of-the-art tools for efficient service." }
  ],

  formServiceOptions: ["Emergency Plumbing", "Water Heater Repair", "Leak Detection & Repair", "Drain Cleaning", "Sewer Line Services", "Water Damage Restoration"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!