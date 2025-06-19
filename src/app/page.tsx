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
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from "recharts"
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  GraduationCap, 
  Target,
  Calendar,
  Star,
  BookOpen,
  Award,
  Clock,
  Mail,
  Phone,
  UserCheck
} from "lucide-react"

// Mock data - replace with actual data from your API
const kpiData = {
  totalRevenue: 125000,
  totalStudents: 1245,
  courseCompletion: 78,
  customerSat: 4.8,
  monthlySales: [
    { month: "Jan", revenue: 65000, students: 200, completion: 75 },
    { month: "Feb", revenue: 72000, students: 230, completion: 77 },
    { month: "Mar", revenue: 68000, students: 210, completion: 79 },
    { month: "Apr", revenue: 85000, students: 280, completion: 81 },
    { month: "May", revenue: 125000, students: 325, completion: 78 }
  ],
  revenueBySource: [
    { name: "Direct Sales", value: 45000, color: "#8884d8" },
    { name: "Partnerships", value: 35000, color: "#82ca9d" },
    { name: "Referrals", value: 25000, color: "#ffc658" },
    { name: "Marketing", value: 20000, color: "#ff7300" }
  ],
  topCourses: [
    { name: "Mathematics Advanced", students: 456, revenue: 45600, rating: 4.9 },
    { name: "Physics Complete", students: 389, revenue: 38900, rating: 4.8 },
    { name: "Chemistry Mastery", students: 234, revenue: 23400, rating: 4.7 },
    { name: "Biology Intensive", students: 166, revenue: 16600, rating: 4.6 }
  ],
  financialMetrics: {
    grossMargin: 85,
    netMargin: 22,
    costPerAcquisition: 45,
    lifetimeValue: 890,
    churnRate: 3.2,
    growthRate: 15.4
  },
  studentMetrics: {
    totalActive: 1245,
    newThisMonth: 325,
    retentionRate: 96.8,
    avgSessionTime: 42,
    completionRate: 78.5,
    satisfactionScore: 4.8
  }
}

export default function ExecutiveDashboard() {
  const currentMonth = "May 2025"
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Executive Dashboard</h1>
            <p className="text-gray-600">UCADEMY Monthly KPI & Finance Report - {currentMonth}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Export Report</Button>
            <Button>Refresh Data</Button>
          </div>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${kpiData.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +15.4% from last month
                </span>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpiData.totalStudents.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +325 new this month
                </span>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Course Completion</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpiData.courseCompletion}%</div>
              <Progress value={kpiData.courseCompletion} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpiData.customerSat}/5.0</div>
              <div className="flex mt-1">
                {[1,2,3,4,5].map((star) => (
                  <Star 
                    key={star} 
                    className={`h-3 w-3 ${star <= Math.floor(kpiData.customerSat) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Trend */}
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Revenue Trend</CardTitle>
                  <CardDescription>Revenue performance over the last 5 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      revenue: {
                        label: "Revenue",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={kpiData.monthlySales}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area 
                          type="monotone" 
                          dataKey="revenue" 
                          stroke="hsl(var(--chart-1))" 
                          fill="hsl(var(--chart-1))" 
                          fillOpacity={0.2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Revenue by Source */}
              <Card>
                <CardHeader>
                  <CardTitle>Revenue by Source</CardTitle>
                  <CardDescription>Breakdown of revenue sources this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      value: {
                        label: "Value",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={kpiData.revenueBySource}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {kpiData.revenueBySource.map((entry, index) => (
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

            {/* Student Growth */}
            <Card>
              <CardHeader>
                <CardTitle>Student Growth & Completion Rate</CardTitle>
                <CardDescription>Monthly student acquisition and course completion trends</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    students: {
                      label: "New Students",
                      color: "hsl(var(--chart-2))",
                    },
                    completion: {
                      label: "Completion Rate",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={kpiData.monthlySales}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar yAxisId="left" dataKey="students" fill="hsl(var(--chart-2))" />
                      <Line yAxisId="right" type="monotone" dataKey="completion" stroke="hsl(var(--chart-3))" strokeWidth={3} />
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
                  <CardTitle>Gross Margin</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">{kpiData.financialMetrics.grossMargin}%</div>
                  <Progress value={kpiData.financialMetrics.grossMargin} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Net Margin</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">{kpiData.financialMetrics.netMargin}%</div>
                  <Progress value={kpiData.financialMetrics.netMargin} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer LTV</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">${kpiData.financialMetrics.lifetimeValue}</div>
                  <p className="text-sm text-muted-foreground">Average lifetime value</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>CAC</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">${kpiData.financialMetrics.costPerAcquisition}</div>
                  <p className="text-sm text-muted-foreground">Cost per acquisition</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Churn Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600">{kpiData.financialMetrics.churnRate}%</div>
                  <p className="text-sm text-muted-foreground">Monthly churn rate</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Growth Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">+{kpiData.financialMetrics.growthRate}%</div>
                  <p className="text-sm text-muted-foreground">Month-over-month</p>
                </CardContent>
              </Card>
            </div>

            {/* LTV/CAC Ratio */}
            <Card>
              <CardHeader>
                <CardTitle>LTV/CAC Ratio Analysis</CardTitle>
                <CardDescription>Customer lifetime value to acquisition cost ratio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-green-600">
                  {(kpiData.financialMetrics.lifetimeValue / kpiData.financialMetrics.costPerAcquisition).toFixed(1)}:1
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Excellent ratio (target: 3:1 or higher)
                </p>
                <Progress 
                  value={Math.min(100, (kpiData.financialMetrics.lifetimeValue / kpiData.financialMetrics.costPerAcquisition / 3) * 100)} 
                  className="mt-4" 
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Active Students</CardTitle>
                  <UserCheck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpiData.studentMetrics.totalActive.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Currently enrolled</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">New Students</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpiData.studentMetrics.newThisMonth}</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Retention Rate</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{kpiData.studentMetrics.retentionRate}%</div>
                  <Progress value={kpiData.studentMetrics.retentionRate} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Session Time</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpiData.studentMetrics.avgSessionTime} min</div>
                  <p className="text-xs text-muted-foreground">Per study session</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                  <Award className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpiData.studentMetrics.completionRate}%</div>
                  <Progress value={kpiData.studentMetrics.completionRate} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Satisfaction Score</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpiData.studentMetrics.satisfactionScore}/5.0</div>
                  <div className="flex mt-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star 
                        key={star} 
                        className={`h-3 w-3 ${star <= Math.floor(kpiData.studentMetrics.satisfactionScore) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Courses</CardTitle>
                <CardDescription>Course performance by student enrollment and revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {kpiData.topCourses.map((course, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <h3 className="font-semibold">{course.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            {course.students} students
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="h-3 w-3 mr-1" />
                            ${course.revenue.toLocaleString()}
                          </span>
                          <span className="flex items-center">
                            <Star className="h-3 w-3 mr-1 text-yellow-400 fill-yellow-400" />
                            {course.rating}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">#{index + 1}</Badge>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <p>Last updated: {new Date().toLocaleString()}</p>
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <Mail className="h-4 w-4 mr-1" />
                  analytics@ucademy.com
                </span>
                <span className="flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  +1 (555) 123-4567
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}