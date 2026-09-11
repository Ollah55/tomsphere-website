export const programs = [
  { id: "fullstack", name: "Fullstack Development", physical: 500000, online: 400000 },
  { id: "data-analytics", name: "Data Analytics", physical: 300000, online: 200000 },
  { id: "cybersecurity", name: "Cybersecurity", physical: 350000, online: 250000 },
  { id: "uiux", name: "UI/UX Design", physical: 250000, online: 200000 },
  { id: "frontend", name: "Frontend Development", physical: 300000, online: 250000 },
  { id: "backend", name: "Backend Development", physical: 350000, online: 300000 },
]

export const formatFee = (amount) => new Intl.NumberFormat("en-NG", {
  style: "currency", currency: "NGN", maximumFractionDigits: 0,
}).format(amount)

export const applicationEmail = "tomsphereglobaltechltd@gmail.com"
export const paymentUrl = "https://paystack.shop/pay/tomsphere-globaltech"
export const legacyApplicationUrl = "https://docs.google.com/forms/d/e/1FAIpQLScfEVSSaC10cB8RCUPUI0ZV10fEO4_S_Mj2Kpf10tt_SMU6Qw/viewform"
// The owner confirmed FormSubmit activation for the application inbox.
export const applicationsEnabled = true
