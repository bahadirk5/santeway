"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, FileText, ImageIcon, Settings, Eye, Edit3, Plus, TrendingUp, Activity } from "lucide-react"

export default function AdminDashboard() {
  const [recentActivity] = useState([
    { id: 1, action: "Hero section updated", user: "Admin", time: "2 hours ago", type: "edit" },
    { id: 2, action: "New product added", user: "Editor", time: "4 hours ago", type: "create" },
    { id: 3, action: "About section modified", user: "Admin", time: "1 day ago", type: "edit" },
    { id: 4, action: "User permissions updated", user: "Admin", time: "2 days ago", type: "settings" },
  ])

  const stats = [
    { title: "Total Pages", value: "12", change: "+2", icon: FileText, color: "text-blue-600" },
    { title: "Active Users", value: "3", change: "+1", icon: Users, color: "text-green-600" },
    { title: "Media Files", value: "48", change: "+12", icon: ImageIcon, color: "text-purple-600" },
    { title: "Site Views", value: "1,234", change: "+15%", icon: TrendingUp, color: "text-orange-600" },
  ]

  const quickActions = [
    { title: "Edit Hero Section", description: "Update main banner content", icon: Edit3, href: "/admin/content/hero" },
    {
      title: "Manage Products",
      description: "Add or edit product information",
      icon: Plus,
      href: "/admin/content/products",
    },
    { title: "User Management", description: "Manage user roles and permissions", icon: Users, href: "/admin/users" },
    { title: "Preview Site", description: "Preview changes before publishing", icon: Eye, href: "/admin/preview" },
  ]

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your website.</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Eye className="h-4 w-4 mr-2" />
            Preview Site
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <div className="flex items-center mt-2">
                      <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Settings className="h-5 w-5 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200 cursor-pointer group"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-secondary/20 rounded-lg group-hover:bg-secondary/30 transition-colors">
                          <action.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors">
                            {action.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Activity className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-3 pb-3 border-b border-gray-100 last:border-0"
                    >
                      <div className="p-1.5 bg-secondary/20 rounded-full">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-500">
                          by {activity.user} • {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Content Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-primary">
              <BarChart3 className="h-5 w-5 mr-2" />
              Content Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-primary">Pages</h3>
                <p className="text-2xl font-bold text-blue-600">12</p>
                <p className="text-sm text-gray-600">Active pages</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <ImageIcon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-primary">Media</h3>
                <p className="text-2xl font-bold text-green-600">48</p>
                <p className="text-sm text-gray-600">Images & files</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-primary">Users</h3>
                <p className="text-2xl font-bold text-purple-600">3</p>
                <p className="text-sm text-gray-600">Active users</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
