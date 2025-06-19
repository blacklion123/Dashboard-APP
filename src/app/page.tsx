"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { 
  Bar, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ComposedChart
} from "recharts"
import { 
  TrendingUp, 
  TrendingDown,
  Users, 
  DollarSign, 
  Target,
  Award,
  Clock,
  Mail,
  Phone,
  AlertTriangle,
  MousePointer,
  Eye,
  CheckCircle,
  FileText,
  Database
} from "lucide-react"

// Original Source Data Tables
const sourceData = {
  financialReport: [
    { metric: "Gross Profit", jan: "£66,500", feb: "£63,289", mar: "£65,338", apr: "£61,524", may: "£62,970", ytd: "£319,621" },
    { metric: "Total Expenses", jan: "£51,290", feb: "£56,293", mar: "£57,873", apr: "£59,641", may: "£58,100", ytd: "£283,197" },
    { metric: "Profit/Loss", jan: "£15,210", feb: "£6,996", mar: "£7,464", apr: "£1,883", may: "£4,870", ytd: "£36,424" },
    { metric: "Income from Sales", jan: "£71,386", feb: "£67,174", mar: "£69,531", apr: "£66,349", may: "£66,372", ytd: "£340,812" },
    { metric: "Less Refunds", jan: "£4,875", feb: "£3,885", mar: "£4,182", apr: "£4,814", may: "£3,391", ytd: "£21,148" },
    { metric: "Total COGS", jan: "£14,934", feb: "£14,885", mar: "£14,369", apr: "£18,895", may: "£18,977", ytd: "£82,060" },
    { metric: "Total CAC", jan: "£15,883", feb: "£16,510", mar: "£16,230", apr: "£16,667", may: "£13,855", ytd: "£79,145" },
    { metric: "New Enrollment", jan: "63", feb: "41", mar: "45", apr: "38", may: "54", ytd: "241" }
  ],
  firstOrderProfitability: [
    { metric: "Live Tutorial Enrollments", mar25: "2", apr25: "5" },
    { metric: "OnDemand Enrollments", mar25: "35", apr25: "32" },
    { metric: "30-Day Challenge", mar25: "8", apr25: "1" },
    { metric: "Total New Enrollment", mar25: "45", apr25: "38" },
    { metric: "Gross Sales", mar25: "£69,530.79", apr25: "£66,348.98" },
    { metric: "Order Revenue", mar25: "£69,530.79", apr25: "£66,348.98" },
    { metric: "(-) Refunds", mar25: "-£4,182.42", apr25: "-£4,814.13" },
    { metric: "Total Sales", mar25: "£65,348.37", apr25: "£61,534.85" },
    { metric: "Total COGS", mar25: "£14,368.59", apr25: "£18,894.98" },
    { metric: "Total CAC", mar25: "£16,229.60", apr25: "£16,666.80" },
    { metric: "Contribution Margin", mar25: "£34,739.38", apr25: "£25,962.26" },
    { metric: "Total Operating Expenses", mar25: "£21,075.17", apr25: "£17,879.05" },
    { metric: "Profit", mar25: "£13,664.21", apr25: "£8,083.21" },
    { metric: "First Order Profitability", mar25: "-£457.47", apr25: "-£659.00" },
    { metric: "Net First Order Profitability", mar25: "-£925.80", apr25: "-£1,129.50" }
  ],
  marketingFunnelMetrics: [
    { metric: "Total Impressions", value: "376,710", target: "600,000" },
    { metric: "Average CTR", value: "1.09%", target: "1%" },
    { metric: "Total Link Clicks", value: "1,372", target: "2,600" },
    { metric: "Average Leads Ratio", value: "19.88%", target: "20%" },
    { metric: "Total Leads", value: "392", target: "560" },
    { metric: "Average Booking Ratio", value: "32.40%", target: "51.00%" },
    { metric: "Total Bookings", value: "127", target: "300" },
    { metric: "Consult Ratio", value: "81.89%", target: "47.00%" },
    { metric: "Total Consultations", value: "104", target: "170" },
    { metric: "Close Ratio", value: "51.92%", target: "83.00%" },
    { metric: "Total Closes", value: "54", target: "60" },
    { metric: "Cash Collected", value: "£10,588", target: "-" },
    { metric: "Total Ad Spend", value: "£5,847", target: "-" },
    { metric: "Cost Per Lead", value: "£14.92", target: "£8.50" },
    { metric: "ROAS", value: "£1.81", target: "£3.00" }
  ],
  revenueSalaryData: [
    { metric: "Revenue", nov: "£58,549", dec: "£64,390", jan: "£71,386", feb: "£67,174", mar: "£69,531", apr: "£66,349", may: "£50,578" },
    { metric: "Salary Expenses", nov: "£31,248", dec: "£30,087", jan: "£27,084", feb: "£30,962", mar: "£36,804", apr: "£45,536", may: "£0*" },
    { metric: "Refunds", nov: "£1,931", dec: "£4,460", jan: "£4,875", feb: "£3,885", mar: "£4,182", apr: "£4,814", may: "£1,559" },
    { metric: "Taxes", nov: "£10.8", dec: "£0", jan: "£10.8", feb: "£0", mar: "£10.8", apr: "£10.8", may: "£10.8" },
    { metric: "Net Profit", nov: "£25,359", dec: "£29,843", jan: "£39,416", feb: "£32,327", mar: "£28,534", apr: "£15,986", may: "£49,008*" }
  ],
  forecastData: [
    { period: "Week 1", revenue: "£13,597", enrollments: "15" },
    { period: "Week 2", revenue: "£20,564", enrollments: "13" },
    { period: "Week 3", revenue: "£15,942", enrollments: "13" },
    { period: "Week 4", revenue: "£17,834", enrollments: "12" },
    { period: "Week 5", revenue: "£13,901", enrollments: "3" },
    { period: "Week 6", revenue: "£12,669", enrollments: "8" },
    { period: "Week 7", revenue: "£18,109", enrollments: "10" },
    { period: "Week 8", revenue: "£15,691", enrollments: "9.2" },
    { period: "Week 9", revenue: "£15,641", enrollments: "8.44" },
    { period: "Week 10", revenue: "£15,202", enrollments: "7.73" },
    { period: "Week 11", revenue: "£15,463", enrollments: "8.67" },
    { period: "Week 12", revenue: "£16,021", enrollments: "8.81" },
    { period: "Week 13", revenue: "£15,604", enrollments: "8.57" }
  ]
}

// Revenue & Salary Analysis Data
const revenueAnalysisData = {
  monthlyRevenue: [
    { month: "Nov 2024", revenue: 58549, salary: 31248, refunds: 1931, profit: 25370 },
    { month: "Dec 2024", revenue: 64390, salary: 30087, refunds: 4460, profit: 29843 },
    { month: "Jan 2025", revenue: 71386, salary: 27084, refunds: 4875, profit: 39416 },
    { month: "Feb 2025", revenue: 67174, salary: 30962, refunds: 3885, profit: 32327 },
    { month: "Mar 2025", revenue: 69531, salary: 36804, refunds: 4182, profit: 28545 },
    { month: "Apr 2025", revenue: 66349, salary: 45536, refunds: 4814, profit: 15999 },
    { month: "May 2025", revenue: 50578, salary: 0, refunds: 1559, profit: 49019 }
  ],
  forecastWeeks: [
    { week: "W1", revenue: 13597, enrollments: 15, projectedProfit: 8150 },
    { week: "W2", revenue: 20564, enrollments: 13, projectedProfit: 12340 },
    { week: "W3", revenue: 15942, enrollments: 13, projectedProfit: 9565 },
    { week: "W4", revenue: 17834, enrollments: 12, projectedProfit: 10700 },
    { week: "W5", revenue: 13901, enrollments: 3, projectedProfit: 8340 },
    { week: "W6", revenue: 12669, enrollments: 8, projectedProfit: 7600 },
    { week: "W7", revenue: 18109, enrollments: 10, projectedProfit: 10865 },
    { week: "W8", revenue: 15691, enrollments: 9, projectedProfit: 9415 },
    { week: "W9", revenue: 15641, enrollments: 8, projectedProfit: 9385 },
    { week: "W10", revenue: 15202, enrollments: 8, projectedProfit: 9121 },
    { week: "W11", revenue: 15463, enrollments: 9, projectedProfit: 9278 },
    { week: "W12", revenue: 16021, enrollments: 9, projectedProfit: 9613 },
    { week: "W13", revenue: 15604, enrollments: 9, projectedProfit: 9362 }
  ],
  keyMetrics: {
    totalRevenue7Months: 447957,
    totalProfit7Months: 220476,
    averageMonthlyRevenue: 63994,
    profitMargin: 49.2,
    revenueGrowthRate: -29.1,
    highestRevenueMonth: { month: "Jan 2025", value: 71386 },
    lowestRevenueMonth: { month: "May 2025", value: 50578 }
  }
}

// UCADEMY Complete Financial & Marketing Data
const ucademyData = {
  // Executive Summary - Latest Month (May 2025)
  latestMonth: {
    revenue: 66372,
    grossProfit: 62970,
    totalExpenses: 58100,
    profit: 4870,
    newEnrollments: 54,
    adSpend: 6407,
    refunds: 3391,
    cogs: 18977,
    cac: 13855,
    opex: 19067
  },

  // Monthly P&L Data (Jan-May 2025)
  monthlyData: [
    { 
      month: "Jan", 
      revenue: 71386, 
      grossProfit: 66500, 
      totalExpenses: 51290, 
      profit: 15210,
      enrollments: 63,
      adSpend: 7389,
      refunds: 4875,
      cogs: 14934,
      cac: 15883,
      contributionMargin: 35682,
      withdrawnAccounts: 25,
      grossMargin: 77.54,
      netMargin: 22.87
    },
    { 
      month: "Feb", 
      revenue: 67174, 
      grossProfit: 63289, 
      totalExpenses: 56293, 
      profit: 6996,
      enrollments: 41,
      adSpend: 6732,
      refunds: 3885,
      cogs: 14885,
      cac: 16510,
      contributionMargin: 31916,
      withdrawnAccounts: 13,
      grossMargin: 76.49,
      netMargin: 11.12
    },
    { 
      month: "Mar", 
      revenue: 69531, 
      grossProfit: 65338, 
      totalExpenses: 57873, 
      profit: 7464,
      enrollments: 45,
      adSpend: 7158,
      refunds: 4182,
      cogs: 14369,
      cac: 16230,
      contributionMargin: 34739,
      withdrawnAccounts: 15,
      grossMargin: 78.01,
      netMargin: 11.42
    },
    { 
      month: "Apr", 
      revenue: 66349, 
      grossProfit: 61524, 
      totalExpenses: 59641, 
      profit: 1883,
      enrollments: 38,
      adSpend: 7541,
      refunds: 4814,
      cogs: 18895,
      cac: 16667,
      contributionMargin: 25962,
      withdrawnAccounts: 19,
      grossMargin: 69.29,
      netMargin: 3.06
    },
    { 
      month: "May", 
      revenue: 66372, 
      grossProfit: 62970, 
      totalExpenses: 58100, 
      profit: 4870,
      enrollments: 54,
      adSpend: 6407,
      refunds: 3391,
      cogs: 18977,
      cac: 13855,
      contributionMargin: 30138,
      withdrawnAccounts: 19,
      grossMargin: 69.86,
      netMargin: 7.73
    }
  ],

  // Detailed First Order Profitability Comparison (Mar vs Apr)
  firstOrderComparison: {
    mar: {
      enrollments: 45,
      avgDealSize: 222.49,
      estimatedCOGS: 319.30,
      estimatedCAC: 360.66,
      estimatedOPEX: 468.34,
      firstOrderProfit: -457.47,
      netFirstOrderProfit: -925.80,
      netSales: 65337.57,
      grossProfit: 50968.98,
      contributionMargin: 34739.38,
      totalDividends: 6200.00,
      retainedProfit: 7464.21
    },
    apr: {
      enrollments: 38,
      avgDealSize: 276.84,
      estimatedCOGS: 497.24,
      estimatedCAC: 438.60,
      estimatedOPEX: 470.50,
      firstOrderProfit: -659.00,
      netFirstOrderProfit: -1129.50,
      netSales: 61524.05,
      grossProfit: 42629.06,
      contributionMargin: 25962.26,
      totalDividends: 6200.00,
      retainedProfit: 1883.21
    }
  },

  // Marketing Funnel Metrics (May 2025)
  marketingFunnel: {
    impressions: { actual: 376710, target: 600000 },
    ctr: { actual: 1.09, target: 1.0 },
    linkClicks: { actual: 1372, target: 2600 },
    leadsRatio: { actual: 19.88, target: 20.0 },
    totalLeads: { actual: 392, target: 560 },
    bookingRatio: { actual: 32.40, target: 51.0 },
    totalBookings: { actual: 127, target: 300 },
    consultRatio: { actual: 81.89, target: 47.0 },
    totalConsultations: { actual: 104, target: 170 },
    closeRatio: { actual: 51.92, target: 83.0 },
    totalCloses: { actual: 54, target: 60 },
    cashCollected: 10588,
    adSpend: 5847,
    costPerLead: { actual: 14.92, target: 8.50 },
    roas: { actual: 1.81, target: 3.00 }
  },

  // Marketing Funnel Data for Chart
  funnelData: [
    { name: "Impressions", value: 376710, target: 600000, fill: "#8884d8" },
    { name: "Link Clicks", value: 1372, target: 2600, fill: "#82ca9d" },
    { name: "Leads", value: 392, target: 560, fill: "#ffc658" },
    { name: "Bookings", value: 127, target: 300, fill: "#ff7300" },
    { name: "Consultations", value: 104, target: 170, fill: "#e74c3c" },
    { name: "Closes", value: 54, target: 60, fill: "#2ecc71" }
  ],

  // Cost Breakdown (May 2025)
  costBreakdown: [
    { name: "COGS", value: 18977, color: "#8884d8" },
    { name: "Customer Acquisition (CAC)", value: 13855, color: "#82ca9d" },
    { name: "Operating Expenses", value: 19067, color: "#ffc658" },
    { name: "Other Expenses", value: 6201, color: "#ff7300" }
  ],

  // COGS Breakdown (Latest detailed data from Apr)
  cogsBreakdown: [
    { name: "Tutor Costs", value: 72.17, color: "#3b82f6" },
    { name: "Client Meetings", value: 10.13, color: "#10b981" },
    { name: "English Examiners", value: 1.27, color: "#f59e0b" },
    { name: "Resources/Materials", value: 0.56, color: "#ef4444" },
    { name: "Other", value: 15.87, color: "#8b5cf6" }
  ],

  // CAC Breakdown (Latest detailed data from Apr)
  cacBreakdown: [
    { name: "Ad Spend", value: 45.25, color: "#dc2626" },
    { name: "Consultant Team", value: 29.90, color: "#7c3aed" },
    { name: "Setter Team", value: 20.48, color: "#059669" },
    { name: "Marketing Team", value: 4.38, color: "#d97706" }
  ],

  // Customer Success KPIs (Latest Month)
  customerSuccessKPIs: {
    onboardingMeetings: 235,
    avgOnboardingGap: 1.32,
    clientsDueRmeets40: 26,
    clientsDueRmeets100: 4,
    dangerStudents: 2
  },

  // YTD Totals
  ytdTotals: {
    revenue: 340812,
    grossProfit: 319621,
    totalExpenses: 283197,
    profit: 36424,
    enrollments: 241,
    withdrawnAccounts: 91
  }
}

export default function UcademyExecutiveDashboard() {
  const currentMonth = "May 2025"
  const currentData = ucademyData.latestMonth
  const funnel = ucademyData.marketingFunnel
  
  // Calculate key metrics
  const profitMargin = ((currentData.profit / currentData.revenue) * 100)
  const refundRate = ((currentData.refunds / currentData.revenue) * 100)
  
  // Calculate funnel conversion rates
  const impressionToClick = (funnel.linkClicks.actual / funnel.impressions.actual * 100)
  const clickToLead = (funnel.totalLeads.actual / funnel.linkClicks.actual * 100)
  const leadToBooking = (funnel.totalBookings.actual / funnel.totalLeads.actual * 100)
  const bookingToConsult = (funnel.totalConsultations.actual / funnel.totalBookings.actual * 100)
  const consultToClose = (funnel.totalCloses.actual / funnel.totalConsultations.actual * 100)
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">UCADEMY Executive Dashboard</h1>
            <p className="text-gray-600">Complete Financial & Marketing Analytics - {currentMonth}</p>
          </div>
          <div className="flex gap-2">
            {/* Financial Report Source Data */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Financial Report
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl">
                <DialogHeader>
                  <DialogTitle>UCADEMY Complete Financial Metrics Report</DialogTitle>
                  <DialogDescription>
                    Monthly P&L Summary (January - May 2025)
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Metric</TableHead>
                        <TableHead className="text-center">Jan</TableHead>
                        <TableHead className="text-center">Feb</TableHead>
                        <TableHead className="text-center">Mar</TableHead>
                        <TableHead className="text-center">Apr</TableHead>
                        <TableHead className="text-center">May</TableHead>
                        <TableHead className="text-center font-semibold">YTD</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sourceData.financialReport.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{row.metric}</TableCell>
                          <TableCell className="text-center">{row.jan}</TableCell>
                          <TableCell className="text-center">{row.feb}</TableCell>
                          <TableCell className="text-center">{row.mar}</TableCell>
                          <TableCell className="text-center">{row.apr}</TableCell>
                          <TableCell className="text-center">{row.may}</TableCell>
                          <TableCell className="text-center font-medium">{row.ytd}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </DialogContent>
            </Dialog>

            {/* First Order Profitability Source Data */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Database className="h-4 w-4 mr-2" />
                  First Order Analysis
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>First Order Profitability Report</DialogTitle>
                  <DialogDescription>
                    March 2025 vs April 2025 Comparison
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Metric</TableHead>
                        <TableHead className="text-center">Mar-25</TableHead>
                        <TableHead className="text-center">Apr-25</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sourceData.firstOrderProfitability.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{row.metric}</TableCell>
                          <TableCell className="text-center">{row.mar25}</TableCell>
                          <TableCell className="text-center">{row.apr25}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </DialogContent>
            </Dialog>

            {/* Marketing Funnel Source Data */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Target className="h-4 w-4 mr-2" />
                  Marketing Funnel
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Marketing & Sales Metrics</DialogTitle>
                  <DialogDescription>
                    May 2025 Performance vs Targets
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Metric</TableHead>
                        <TableHead className="text-center">Value</TableHead>
                        <TableHead className="text-center">Target</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sourceData.marketingFunnelMetrics.map((row, index) => {
                        const isOverTarget = row.target !== "-" && (
                          (row.metric.includes("CTR") || row.metric.includes("Ratio")) ?
                          parseFloat(row.value) >= parseFloat(row.target) :
                          parseInt(row.value.replace(/[£,%]/g, '')) >= parseInt(row.target.replace(/[£,%]/g, ''))
                        );
                        return (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{row.metric}</TableCell>
                            <TableCell className="text-center">{row.value}</TableCell>
                            <TableCell className="text-center">{row.target}</TableCell>
                            <TableCell className="text-center">
                              {row.target === "-" ? (
                                <Badge variant="secondary">N/A</Badge>
                              ) : isOverTarget ? (
                                <Badge variant="default" className="bg-green-100 text-green-800">✓ Met</Badge>
                              ) : (
                                <Badge variant="destructive">✗ Below</Badge>
                              )}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </DialogContent>
            </Dialog>

            {/* Revenue & Salary Source Data */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Revenue & Salary
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl">
                <DialogHeader>
                  <DialogTitle>Revenue & Salary Analysis</DialogTitle>
                  <DialogDescription>
                    7-Month Financial Performance (Nov 2024 - May 2025)
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Metric</TableHead>
                        <TableHead className="text-center">Nov 2024</TableHead>
                        <TableHead className="text-center">Dec 2024</TableHead>
                        <TableHead className="text-center">Jan 2025</TableHead>
                        <TableHead className="text-center">Feb 2025</TableHead>
                        <TableHead className="text-center">Mar 2025</TableHead>
                        <TableHead className="text-center">Apr 2025</TableHead>
                        <TableHead className="text-center">May 2025</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sourceData.revenueSalaryData.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{row.metric}</TableCell>
                          <TableCell className="text-center">{row.nov}</TableCell>
                          <TableCell className="text-center">{row.dec}</TableCell>
                          <TableCell className="text-center">{row.jan}</TableCell>
                          <TableCell className="text-center">{row.feb}</TableCell>
                          <TableCell className="text-center">{row.mar}</TableCell>
                          <TableCell className="text-center">{row.apr}</TableCell>
                          <TableCell className="text-center">{row.may}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-700">
                      <strong>Key Insights:</strong> Total Revenue: £447,957 | Net Profit: £220,476 | Profit Margin: 49.2% | 
                      *May 2025 salary data incomplete
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* 13-Week Forecast Source Data */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Clock className="h-4 w-4 mr-2" />
                  13-Week Forecast
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>13-Week Revenue Forecast</DialogTitle>
                  <DialogDescription>
                    Weekly Revenue Projections & Enrollment Targets
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Period</TableHead>
                        <TableHead className="text-center">Projected Revenue</TableHead>
                        <TableHead className="text-center">Expected Enrollments</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sourceData.forecastData.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{row.period}</TableCell>
                          <TableCell className="text-center">{row.revenue}</TableCell>
                          <TableCell className="text-center">{row.enrollments}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <strong>Forecast Summary:</strong> 13-week projected revenue: £203,373 | 
                      Average weekly revenue: £15,644 | Enrollment trend: Declining from 15 to 8-9 weekly
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button>Refresh Data</Button>
          </div>
        </div>

        {/* Key Executive Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">£{currentData.revenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +158% vs. April (£1,883)
                </span>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">£{currentData.profit.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Profit margin: {profitMargin.toFixed(1)}%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Marketing ROAS</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">£{funnel.roas.actual}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-600 flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  Target: £{funnel.roas.target}
                </span>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Enrollments</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{currentData.newEnrollments}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  90% of target (60)
                </span>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="marketing">Marketing Funnel</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="profitability">First Order</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="revenue">Revenue Trends</TabsTrigger>
            <TabsTrigger value="forecast">13-Week Forecast</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Revenue & Profit Trend */}
              <Card>
                <CardHeader>
                  <CardTitle>Revenue vs Profit Trend</CardTitle>
                  <CardDescription>Monthly performance January - May 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      revenue: {
                        label: "Revenue",
                        color: "hsl(var(--chart-1))",
                      },
                      profit: {
                        label: "Profit",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={ucademyData.monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="revenue" fill="hsl(var(--chart-1))" />
                        <Line 
                          type="monotone" 
                          dataKey="profit" 
                          stroke="hsl(var(--chart-2))" 
                          strokeWidth={3}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Cost Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Cost Breakdown - May 2025</CardTitle>
                  <CardDescription>Distribution of major cost categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      value: {
                        label: "Amount (£)",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={ucademyData.costBreakdown}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {ucademyData.costBreakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Gross vs Net Margin Trend */}
            <Card>
              <CardHeader>
                <CardTitle>Margin Analysis Trends</CardTitle>
                <CardDescription>Gross and net profit margins over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    grossMargin: {
                      label: "Gross Margin %",
                      color: "hsl(var(--chart-3))",
                    },
                    netMargin: {
                      label: "Net Margin %",
                      color: "hsl(var(--chart-4))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={ucademyData.monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area 
                        type="monotone" 
                        dataKey="grossMargin" 
                        stackId="1"
                        stroke="hsl(var(--chart-3))" 
                        fill="hsl(var(--chart-3))" 
                        fillOpacity={0.6}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="netMargin" 
                        stackId="2"
                        stroke="hsl(var(--chart-4))" 
                        fill="hsl(var(--chart-4))" 
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Marketing Funnel Tab */}
          <TabsContent value="marketing" className="space-y-6">
            {/* Funnel Performance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Impressions</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{funnel.impressions.actual.toLocaleString()}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Target: {funnel.impressions.target.toLocaleString()}</span>
                    <Badge variant="destructive">-37%</Badge>
                  </div>
                  <Progress value={(funnel.impressions.actual/funnel.impressions.target)*100} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">CTR</CardTitle>
                  <MousePointer className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{funnel.ctr.actual}%</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Target: {funnel.ctr.target}%</span>
                    <Badge variant="default">+9%</Badge>
                  </div>
                  <Progress value={(funnel.ctr.actual/funnel.ctr.target)*100} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{funnel.totalLeads.actual}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Target: {funnel.totalLeads.target}</span>
                    <Badge variant="destructive">-30%</Badge>
                  </div>
                  <Progress value={(funnel.totalLeads.actual/funnel.totalLeads.target)*100} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Close Rate</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{funnel.closeRatio.actual}%</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Target: {funnel.closeRatio.target}%</span>
                    <Badge variant="destructive">-37%</Badge>
                  </div>
                  <Progress value={(funnel.closeRatio.actual/funnel.closeRatio.target)*100} className="mt-2" />
                </CardContent>
              </Card>
            </div>

            {/* Detailed Funnel Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Marketing Funnel Performance</CardTitle>
                  <CardDescription>Conversion rates at each stage (May 2025)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Impressions → Clicks</span>
                      <div className="flex items-center space-x-2">
                        <Badge variant={impressionToClick > 0.5 ? "default" : "destructive"}>
                          {impressionToClick.toFixed(2)}%
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {funnel.linkClicks.actual.toLocaleString()}/{funnel.impressions.actual.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>Clicks → Leads</span>
                      <div className="flex items-center space-x-2">
                        <Badge variant={clickToLead > 20 ? "default" : "destructive"}>
                          {clickToLead.toFixed(1)}%
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {funnel.totalLeads.actual}/{funnel.linkClicks.actual}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>Leads → Bookings</span>
                      <div className="flex items-center space-x-2">
                        <Badge variant={leadToBooking > 40 ? "default" : "destructive"}>
                          {leadToBooking.toFixed(1)}%
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {funnel.totalBookings.actual}/{funnel.totalLeads.actual}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>Bookings → Consultations</span>
                      <div className="flex items-center space-x-2">
                        <Badge variant="default">
                          {bookingToConsult.toFixed(1)}%
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {funnel.totalConsultations.actual}/{funnel.totalBookings.actual}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>Consultations → Closes</span>
                      <div className="flex items-center space-x-2">
                        <Badge variant="destructive">
                          {consultToClose.toFixed(1)}%
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {funnel.totalCloses.actual}/{funnel.totalConsultations.actual}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Marketing ROI Metrics</CardTitle>
                  <CardDescription>Cost efficiency and return metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Total Ad Spend:</span>
                    <span className="font-semibold">£{funnel.adSpend.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cash Collected:</span>
                    <span className="font-semibold text-green-600">£{funnel.cashCollected.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cost Per Lead:</span>
                    <span className={`font-semibold ${funnel.costPerLead.actual > funnel.costPerLead.target ? 'text-red-600' : 'text-green-600'}`}>
                      £{funnel.costPerLead.actual}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Target CPL:</span>
                    <span className="text-muted-foreground">£{funnel.costPerLead.target}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg">
                    <span>ROAS:</span>
                    <span className={`font-bold ${funnel.roas.actual < funnel.roas.target ? 'text-red-600' : 'text-green-600'}`}>
                      £{funnel.roas.actual} (Target: £{funnel.roas.target})
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Funnel Optimization Alerts */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-600 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Marketing Funnel Optimization Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">✅ Performing Above Target:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• CTR: 1.09% vs 1.0% target (+9%)</li>
                      <li>• Consult Ratio: 81.89% vs 47% target (+74%)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">🚨 Critical Issues:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ROAS: £1.81 vs £3.00 target (-40%)</li>
                      <li>• Impressions: 376K vs 600K target (-37%)</li>
                      <li>• Close Ratio: 51.92% vs 83% target (-37%)</li>
                      <li>• Cost Per Lead: £14.92 vs £8.50 target (+75%)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Financial Tab */}
          <TabsContent value="financial" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>YTD Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">£{ucademyData.ytdTotals.revenue.toLocaleString()}</div>
                  <p className="text-sm text-muted-foreground">Jan-May 2025</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>YTD Gross Profit</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">£{ucademyData.ytdTotals.grossProfit.toLocaleString()}</div>
                  <p className="text-sm text-muted-foreground">Total gross profit</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>YTD Net Profit</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">£{ucademyData.ytdTotals.profit.toLocaleString()}</div>
                  <p className="text-sm text-muted-foreground">After all expenses</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>COGS (May)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">£{currentData.cogs.toLocaleString()}</div>
                  <p className="text-sm text-muted-foreground">{((currentData.cogs/currentData.revenue)*100).toFixed(1)}% of revenue</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>CAC (May)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">£{currentData.cac.toLocaleString()}</div>
                  <p className="text-sm text-muted-foreground">{((currentData.cac/currentData.revenue)*100).toFixed(1)}% of revenue</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Refund Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600">{refundRate.toFixed(1)}%</div>
                  <p className="text-sm text-muted-foreground">£{currentData.refunds.toLocaleString()} refunded</p>
                </CardContent>
              </Card>
            </div>

            {/* COGS and CAC Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>COGS Breakdown - April 2025</CardTitle>
                  <CardDescription>Cost of Goods Sold by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      value: {
                        label: "Percentage (%)",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={ucademyData.cogsBreakdown}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {ucademyData.cogsBreakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>CAC Breakdown - April 2025</CardTitle>
                  <CardDescription>Customer Acquisition Cost by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      value: {
                        label: "Percentage (%)",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={ucademyData.cacBreakdown}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {ucademyData.cacBreakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* First Order Profitability Tab */}
          <TabsContent value="profitability" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>First Order Profitability - March 2025</CardTitle>
                  <CardDescription>Per-customer profitability breakdown</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Total Enrollments:</span>
                    <span className="font-semibold">{ucademyData.firstOrderComparison.mar.enrollments}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Deal Size:</span>
                    <span className="font-semibold">£{ucademyData.firstOrderComparison.mar.avgDealSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated COGS per Sale:</span>
                    <span className="font-semibold text-red-600">-£{ucademyData.firstOrderComparison.mar.estimatedCOGS}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated CAC per Sale:</span>
                    <span className="font-semibold text-red-600">-£{ucademyData.firstOrderComparison.mar.estimatedCAC}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated OPEX per Sale:</span>
                    <span className="font-semibold text-red-600">-£{ucademyData.firstOrderComparison.mar.estimatedOPEX}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Net First Order Profitability:</span>
                    <span className="text-red-600">£{ucademyData.firstOrderComparison.mar.netFirstOrderProfit}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>First Order Profitability - April 2025</CardTitle>
                  <CardDescription>Per-customer profitability breakdown</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Total Enrollments:</span>
                    <span className="font-semibold">{ucademyData.firstOrderComparison.apr.enrollments}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Deal Size:</span>
                    <span className="font-semibold">£{ucademyData.firstOrderComparison.apr.avgDealSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated COGS per Sale:</span>
                    <span className="font-semibold text-red-600">-£{ucademyData.firstOrderComparison.apr.estimatedCOGS}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated CAC per Sale:</span>
                    <span className="font-semibold text-red-600">-£{ucademyData.firstOrderComparison.apr.estimatedCAC}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated OPEX per Sale:</span>
                    <span className="font-semibold text-red-600">-£{ucademyData.firstOrderComparison.apr.estimatedOPEX}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Net First Order Profitability:</span>
                    <span className="text-red-600">£{ucademyData.firstOrderComparison.apr.netFirstOrderProfit}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Month-over-Month Comparison */}
            <Card>
              <CardHeader>
                <CardTitle>March vs April Comparison</CardTitle>
                <CardDescription>Key metrics comparison between months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center">
                    <h4 className="font-semibold">Enrollments</h4>
                    <div className="text-2xl font-bold">{ucademyData.firstOrderComparison.mar.enrollments} → {ucademyData.firstOrderComparison.apr.enrollments}</div>
                    <Badge variant="destructive">-15.6%</Badge>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold">Avg Deal Size</h4>
                    <div className="text-2xl font-bold">£{ucademyData.firstOrderComparison.mar.avgDealSize} → £{ucademyData.firstOrderComparison.apr.avgDealSize}</div>
                    <Badge variant="default">+24.4%</Badge>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold">Net Sales</h4>
                    <div className="text-2xl font-bold">£{ucademyData.firstOrderComparison.mar.netSales.toLocaleString()} → £{ucademyData.firstOrderComparison.apr.netSales.toLocaleString()}</div>
                    <Badge variant="destructive">-5.8%</Badge>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold">First Order Loss</h4>
                    <div className="text-2xl font-bold">£{ucademyData.firstOrderComparison.mar.netFirstOrderProfit} → £{ucademyData.firstOrderComparison.apr.netFirstOrderProfit}</div>
                    <Badge variant="destructive">+22%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profitability Alert */}
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Critical Profitability Issues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-600 mb-4">
                  <strong>First Order Profitability is deeply negative and worsening.</strong>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">📉 Key Issues:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Net loss per customer: £925-£1,129</li>
                      <li>• COGS increased 55% from Mar to Apr</li>
                      <li>• Customer acquisition is unprofitable</li>
                      <li>• Operational efficiency declining</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">💡 Recommended Actions:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Increase average deal size (currently £222-£277)</li>
                      <li>• Optimize tutor costs (72% of COGS)</li>
                      <li>• Reduce CAC through better conversion</li>
                      <li>• Focus on customer lifetime value</li>
                      <li>• Review pricing strategy urgently</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Operations Tab */}
          <TabsContent value="operations" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Client Meetings (May)</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{ucademyData.customerSuccessKPIs.onboardingMeetings}</div>
                  <p className="text-xs text-muted-foreground">Onboarding & review meetings</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Onboarding Gap</CardTitle>
                  <Award className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{ucademyData.customerSuccessKPIs.avgOnboardingGap} days</div>
                  <p className="text-xs text-muted-foreground">Time to first meeting</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Danger Students</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">{ucademyData.customerSuccessKPIs.dangerStudents}</div>
                  <p className="text-xs text-muted-foreground">Requiring attention</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Due for Review (+40 days)</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">{ucademyData.customerSuccessKPIs.clientsDueRmeets40}</div>
                  <p className="text-xs text-muted-foreground">Clients overdue</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Due for Review (+100 days)</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">{ucademyData.customerSuccessKPIs.clientsDueRmeets100}</div>
                  <p className="text-xs text-muted-foreground">Critical attention needed</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Operating Expenses (May)</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">£{currentData.opex.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">{((currentData.opex/currentData.revenue)*100).toFixed(1)}% of revenue</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analysis Tab */}
          <TabsContent value="analysis" className="space-y-6">
            {/* Executive Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Executive Summary & Recommendations</CardTitle>
                <CardDescription>Key insights and strategic recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">✅ Positive Trends</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Revenue recovery: £66,372 in May vs £66,349 in April</li>
                      <li>• Profit improvement: 158% increase (£4,870 vs £1,883)</li>
                      <li>• Enrollment growth: 54 vs 38 in April (+42%)</li>
                      <li>• Marketing CTR exceeding target (1.09% vs 1.0%)</li>
                      <li>• Strong consultation conversion (81.89% vs 47% target)</li>
                      <li>• Low onboarding gap (1.32 days)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">🚨 Critical Issues</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• First order profitability deeply negative (-£765 to -£1,129)</li>
                      <li>• ROAS below target (£1.81 vs £3.00)</li>
                      <li>• Cost per lead 75% above target (£14.92 vs £8.50)</li>
                      <li>• Close ratio 37% below target (51.92% vs 83%)</li>
                      <li>• Impressions 37% below target</li>
                      <li>• COGS increasing trend (30.71% of revenue in April)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Strategic Recommendations */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-600">💰 Revenue Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>Increase pricing:</strong> Current deal size £222-£277 too low</li>
                    <li>• <strong>Upselling strategy:</strong> Add premium packages</li>
                    <li>• <strong>Bundle services:</strong> Combine tutorials + materials</li>
                    <li>• <strong>Payment terms:</strong> Front-load cash collection</li>
                    <li>• <strong>Value proposition:</strong> Justify higher prices with outcomes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-600">📊 Cost Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>Tutor efficiency:</strong> 72% of COGS - optimize utilization</li>
                    <li>• <strong>CAC reduction:</strong> Improve conversion funnel</li>
                    <li>• <strong>Ad spend ROI:</strong> Better targeting and creative</li>
                    <li>• <strong>Operational scale:</strong> Leverage technology for efficiency</li>
                    <li>• <strong>COGS control:</strong> Set strict cost per student limits</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-600">🎯 Marketing Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>Scale impressions:</strong> Increase budget for proven channels</li>
                    <li>• <strong>Improve close rate:</strong> Sales training and processes</li>
                    <li>• <strong>Lead quality:</strong> Better qualification and targeting</li>
                    <li>• <strong>Conversion optimization:</strong> Landing page and funnel testing</li>
                    <li>• <strong>Referral program:</strong> Leverage high satisfaction scores</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Key Metrics Targets */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended KPI Targets for Next Quarter</CardTitle>
                <CardDescription>Realistic targets to achieve profitability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center">
                    <h4 className="font-semibold">Average Deal Size</h4>
                    <div className="text-2xl font-bold text-blue-600">£400+</div>
                    <p className="text-sm text-muted-foreground">Current: £277</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold">Close Rate</h4>
                    <div className="text-2xl font-bold text-green-600">70%+</div>
                    <p className="text-sm text-muted-foreground">Current: 52%</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold">Cost Per Lead</h4>
                    <div className="text-2xl font-bold text-orange-600">£10</div>
                    <p className="text-sm text-muted-foreground">Current: £14.92</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold">ROAS</h4>
                    <div className="text-2xl font-bold text-purple-600">£2.5+</div>
                    <p className="text-sm text-muted-foreground">Current: £1.81</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Revenue Trends Tab */}
          <TabsContent value="revenue" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Trend Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trend Analysis</CardTitle>
                  <CardDescription>7-Month Revenue Performance (Nov 2024 - May 2025)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer height={300}>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={revenueAnalysisData.monthlyRevenue}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area type="monotone" dataKey="revenue" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.6} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Salary vs Revenue */}
              <Card>
                <CardHeader>
                  <CardTitle>Revenue vs Salary Expenses</CardTitle>
                  <CardDescription>Monthly comparison showing salary impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer height={300}>
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={revenueAnalysisData.monthlyRevenue}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" />
                        <Bar dataKey="salary" fill="#ef4444" name="Salary" />
                        <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={3} name="Profit" />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Key Metrics Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Total Revenue (7 months)</CardDescription>
                  <CardTitle className="text-2xl">£{revenueAnalysisData.keyMetrics.totalRevenue7Months.toLocaleString()}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <TrendingUp className="h-4 w-4" />
                    <span>Peak: {revenueAnalysisData.keyMetrics.highestRevenueMonth.month}</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Net Profit (7 months)</CardDescription>
                  <CardTitle className="text-2xl">£{revenueAnalysisData.keyMetrics.totalProfit7Months.toLocaleString()}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-green-600">
                    <Award className="h-4 w-4" />
                    <span>{revenueAnalysisData.keyMetrics.profitMargin}% margin</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Average Monthly Revenue</CardDescription>
                  <CardTitle className="text-2xl">£{revenueAnalysisData.keyMetrics.averageMonthlyRevenue.toLocaleString()}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    <span>Consistent performer</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Revenue Growth Rate</CardDescription>
                  <CardTitle className="text-2xl text-red-600">{revenueAnalysisData.keyMetrics.revenueGrowthRate}%</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-red-600">
                    <TrendingDown className="h-4 w-4" />
                    <span>Declining trend</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Revenue Analysis Insights */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue Analysis & Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">⚠️ Concerning Trends</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Revenue declined 29.1% from Jan to May 2025</li>
                      <li>• May 2025 revenue at £50,578 - lowest in 7 months</li>
                      <li>• Salary expenses spiked to £45,536 in April 2025</li>
                      <li>• Revenue-to-salary ratio worsening significantly</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">✅ Positive Indicators</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Overall 7-month profit margin of 49.2% remains strong</li>
                      <li>• January 2025 peak performance at £71,386</li>
                      <li>• Low refund rates (average 5.7% of revenue)</li>
                      <li>• May 2025 profit boost due to incomplete salary data</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 13-Week Forecast Tab */}
          <TabsContent value="forecast" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Weekly Revenue Forecast */}
              <Card>
                <CardHeader>
                  <CardTitle>13-Week Revenue Forecast</CardTitle>
                  <CardDescription>Projected weekly revenue performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer height={300}>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={revenueAnalysisData.forecastWeeks}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="week" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area type="monotone" dataKey="revenue" stroke="#059669" fill="#10b981" fillOpacity={0.6} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Weekly Enrollments Forecast */}
              <Card>
                <CardHeader>
                  <CardTitle>Enrollment Projections</CardTitle>
                  <CardDescription>Expected weekly new enrollments</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer height={300}>
                    <ResponsiveContainer width="100%" height="100%">
                      <Bar dataKey="enrollments" fill="#f59e0b" data={revenueAnalysisData.forecastWeeks}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="week" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </Bar>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Forecast Summary Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>13-Week Total Revenue</CardDescription>
                  <CardTitle className="text-2xl">£203,373</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Target className="h-4 w-4" />
                    <span>Projected performance</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Average Weekly Revenue</CardDescription>
                  <CardTitle className="text-2xl">£15,644</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-blue-600">
                    <DollarSign className="h-4 w-4" />
                    <span>Consistent target</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Total Enrollments</CardDescription>
                  <CardTitle className="text-2xl">119</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-orange-600">
                    <Users className="h-4 w-4" />
                    <span>13-week target</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Forecast Insights */}
            <Card>
              <CardHeader>
                <CardTitle>Forecast Analysis & Strategic Planning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">📊 Forecast Highlights</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Week 2 shows highest projected revenue at £20,564</li>
                      <li>• Revenue stabilizes around £15,000-16,000 weekly</li>
                      <li>• Enrollment forecast shows concerning decline trend</li>
                      <li>• Week 5 enrollment drop to just 3 students expected</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-3">🎯 Strategic Recommendations</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Implement aggressive marketing for Week 5+ recovery</li>
                      <li>• Target consistent 12+ weekly enrollments</li>
                      <li>• Focus on conversion optimization in Week 2-4</li>
                      <li>• Monitor actual vs forecast variance weekly</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
                  <h5 className="font-semibold mb-2">13-Week Success Metrics:</h5>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div><strong>Revenue Target:</strong> £200,000+</div>
                    <div><strong>Weekly Average:</strong> £15,400+</div>
                    <div><strong>Enrollment Target:</strong> 130+</div>
                    <div><strong>Conversion Rate:</strong> 8%+</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <p>Report generated: {new Date().toLocaleString()} | Data period: January - May 2025</p>
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <Mail className="h-4 w-4 mr-1" />
                  finance@ucademy.co.uk
                </span>
                <span className="flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  +44 (0) 20 1234 5678
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}