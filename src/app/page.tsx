"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { 
  BarChart, 
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
  GraduationCap, 
  Target,
  Star,
  Award,
  Clock,
  Mail,
  Phone,
  UserCheck,
  ShoppingCart,
  AlertTriangle,
  BarChart3,
  PieChart as PieChartIcon
} from "lucide-react"

// UCADEMY Actual Financial Data
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
      withdrawnAccounts: 25
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
      withdrawnAccounts: 13
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
      withdrawnAccounts: 15
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
      withdrawnAccounts: 19
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
      withdrawnAccounts: 19
    }
  ],

  // Cost Breakdown (May 2025)
  costBreakdown: [
    { name: "COGS", value: 18977, color: "#8884d8" },
    { name: "Customer Acquisition (CAC)", value: 13855, color: "#82ca9d" },
    { name: "Operating Expenses", value: 19067, color: "#ffc658" },
    { name: "Other Expenses", value: 6201, color: "#ff7300" }
  ],

  // Marketing KPIs (Latest Month)
  marketingKPIs: {
    adSpend: 5847,
    costPerLead: 15,
    totalImpressions: 376710,
    avgCTR: 1.0,
    linkClicks: 1972,
    totalLeads: 392
  },

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
  },

  // First Order Profitability (Latest Month)
  firstOrderProfitability: {
    avgDealSize: 196.07,
    estimatedCOGS: 351.43,
    estimatedCAC: 256.58,
    estimatedOPEX: 353.10,
    firstOrderProfit: -411.94,
    netFirstOrderProfit: -765.03
  }
}

export default function UcademyExecutiveDashboard() {
  const currentMonth = "May 2025"
  const currentData = ucademyData.latestMonth
  
  // Calculate key metrics
  const grossMargin = ((currentData.grossProfit / currentData.revenue) * 100)
  const profitMargin = ((currentData.profit / currentData.revenue) * 100)
  const refundRate = ((currentData.refunds / currentData.revenue) * 100)
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">UCADEMY Executive Dashboard</h1>
            <p className="text-gray-600">Complete Financial Metrics Report - {currentMonth}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Export Report</Button>
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
                <span className={`flex items-center ${currentData.revenue > 67000 ? 'text-red-600' : 'text-green-600'}`}>
                  {currentData.revenue > 67000 ? <TrendingDown className="h-3 w-3 mr-1" /> : <TrendingUp className="h-3 w-3 mr-1" />}
                  vs. Feb high of £67,174
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
              <CardTitle className="text-sm font-medium">New Enrollments</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{currentData.newEnrollments}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +42% vs. April
                </span>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Gross Margin</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{grossMargin.toFixed(1)}%</div>
              <Progress value={grossMargin} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="sales">Sales & Marketing</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
            <TabsTrigger value="profitability">Profitability</TabsTrigger>
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

            {/* Enrollments vs Withdrawals */}
            <Card>
              <CardHeader>
                <CardTitle>Student Enrollment vs Withdrawal Trends</CardTitle>
                <CardDescription>Monthly enrollment and withdrawal patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    enrollments: {
                      label: "New Enrollments",
                      color: "hsl(var(--chart-3))",
                    },
                    withdrawnAccounts: {
                      label: "Withdrawn Accounts",
                      color: "hsl(var(--chart-4))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ucademyData.monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="enrollments" fill="hsl(var(--chart-3))" />
                      <Bar dataKey="withdrawnAccounts" fill="hsl(var(--chart-4))" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
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

            {/* Contribution Margin Trend */}
            <Card>
              <CardHeader>
                <CardTitle>Contribution Margin Analysis</CardTitle>
                <CardDescription>Monthly contribution margin after COGS and CAC</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    contributionMargin: {
                      label: "Contribution Margin",
                      color: "hsl(var(--chart-5))",
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
                        dataKey="contributionMargin" 
                        stroke="hsl(var(--chart-5))" 
                        fill="hsl(var(--chart-5))" 
                        fillOpacity={0.2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sales & Marketing Tab */}
          <TabsContent value="sales" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ad Spend (May)</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">£{ucademyData.marketingKPIs.adSpend.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Cost per lead: £{ucademyData.marketingKPIs.costPerLead}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Impressions</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{ucademyData.marketingKPIs.totalImpressions.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">CTR: {ucademyData.marketingKPIs.avgCTR}%</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{ucademyData.marketingKPIs.totalLeads}</div>
                  <p className="text-xs text-muted-foreground">{ucademyData.marketingKPIs.linkClicks.toLocaleString()} link clicks</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">YTD Enrollments</CardTitle>
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{ucademyData.ytdTotals.enrollments}</div>
                  <p className="text-xs text-muted-foreground">Total new students</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">YTD Withdrawals</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">{ucademyData.ytdTotals.withdrawnAccounts}</div>
                  <p className="text-xs text-muted-foreground">Total withdrawn accounts</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Retention Rate</CardTitle>
                  <UserCheck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">
                    {(((ucademyData.ytdTotals.enrollments - ucademyData.ytdTotals.withdrawnAccounts) / ucademyData.ytdTotals.enrollments) * 100).toFixed(1)}%
                  </div>
                  <p className="text-xs text-muted-foreground">Student retention</p>
                </CardContent>
              </Card>
            </div>
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

          {/* Profitability Tab */}
          <TabsContent value="profitability" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>First Order Profitability (May)</CardTitle>
                  <CardDescription>Per-customer profitability analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Average Deal Size:</span>
                    <span className="font-semibold">£{ucademyData.firstOrderProfitability.avgDealSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated COGS per Sale:</span>
                    <span className="font-semibold text-red-600">-£{ucademyData.firstOrderProfitability.estimatedCOGS}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated CAC per Sale:</span>
                    <span className="font-semibold text-red-600">-£{ucademyData.firstOrderProfitability.estimatedCAC}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated OPEX per Sale:</span>
                    <span className="font-semibold text-red-600">-£{ucademyData.firstOrderProfitability.estimatedOPEX}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Net First Order Profitability:</span>
                    <span className="text-red-600">£{ucademyData.firstOrderProfitability.netFirstOrderProfit}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Profitability Metrics</CardTitle>
                  <CardDescription>Critical financial ratios and margins</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Gross Margin</span>
                      <span className="font-semibold">{grossMargin.toFixed(1)}%</span>
                    </div>
                    <Progress value={grossMargin} />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Net Profit Margin</span>
                      <span className="font-semibold">{profitMargin.toFixed(1)}%</span>
                    </div>
                    <Progress value={Math.max(0, profitMargin)} />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>COGS as % of Revenue</span>
                      <span className="font-semibold">{((currentData.cogs/currentData.revenue)*100).toFixed(1)}%</span>
                    </div>
                    <Progress value={(currentData.cogs/currentData.revenue)*100} />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>CAC as % of Revenue</span>
                      <span className="font-semibold">{((currentData.cac/currentData.revenue)*100).toFixed(1)}%</span>
                    </div>
                    <Progress value={(currentData.cac/currentData.revenue)*100} />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Profitability Alert */}
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Profitability Alert
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-600">
                  <strong>First Order Profitability is negative (£{ucademyData.firstOrderProfitability.netFirstOrderProfit}).</strong>
                </p>
                <p className="mt-2 text-gray-600">
                  This indicates that new customers are not profitable on first purchase. Consider:
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                  <li>Increasing average deal size through upselling</li>
                  <li>Reducing customer acquisition costs</li>
                  <li>Optimizing operational efficiency</li>
                  <li>Focusing on customer lifetime value optimization</li>
                </ul>
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