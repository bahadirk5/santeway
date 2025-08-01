"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Monitor, Smartphone, Tablet, BookIcon as Publish, Save, RotateCcw, ExternalLink } from "lucide-react"

export default function PreviewPage() {
  const [viewMode, setViewMode] = useState("desktop")
  const [selectedPage, setSelectedPage] = useState("homepage")
  const [hasChanges, setHasChanges] = useState(true)

  const pages = [
    { value: "homepage", label: "Homepage" },
    { value: "products", label: "Products" },
    { value: "about", label: "About Us" },
    { value: "contact", label: "Contact" },
  ]

  const changes = [
    { section: "Hero Section", type: "Content", status: "Modified" },
    { section: "Featured Product", type: "Image", status: "Updated" },
    { section: "About Section", type: "Text", status: "Modified" },
  ]

  const getViewportClass = () => {
    switch (viewMode) {
      case "mobile":
        return "max-w-sm mx-auto"
      case "tablet":
        return "max-w-2xl mx-auto"
      case "desktop":
      default:
        return "w-full"
    }
  }

  const handlePublish = () => {
    console.log("Publishing changes...")
    setHasChanges(false)
  }

  const handleDiscard = () => {
    console.log("Discarding changes...")
    setHasChanges(false)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary">Preview Changes</h1>
            <p className="text-gray-600 mt-1">Review your changes before publishing</p>
          </div>
          <div className="flex items-center space-x-3">
            {hasChanges && (
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                Unpublished Changes
              </Badge>
            )}
            <Button variant="outline" onClick={handleDiscard} disabled={!hasChanges}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Discard Changes
            </Button>
            <Button onClick={handlePublish} disabled={!hasChanges} className="bg-primary hover:bg-primary/90">
              <Publish className="h-4 w-4 mr-2" />
              Publish Changes
            </Button>
          </div>
        </div>

        {/* Controls */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Page</label>
                  <Select value={selectedPage} onValueChange={setSelectedPage}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {pages.map((page) => (
                        <SelectItem key={page.value} value={page.value}>
                          {page.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">View Mode</label>
                  <div className="flex border rounded-lg p-1">
                    <Button
                      variant={viewMode === "desktop" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("desktop")}
                      className="flex items-center"
                    >
                      <Monitor className="h-4 w-4 mr-1" />
                      Desktop
                    </Button>
                    <Button
                      variant={viewMode === "tablet" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("tablet")}
                      className="flex items-center"
                    >
                      <Tablet className="h-4 w-4 mr-1" />
                      Tablet
                    </Button>
                    <Button
                      variant={viewMode === "mobile" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("mobile")}
                      className="flex items-center"
                    >
                      <Smartphone className="h-4 w-4 mr-1" />
                      Mobile
                    </Button>
                  </div>
                </div>
              </div>

              <Button variant="outline" asChild>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Live Site
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Preview */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="h-5 w-5 mr-2" />
                  Preview - {pages.find((p) => p.value === selectedPage)?.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`transition-all duration-300 ${getViewportClass()}`}>
                  <div className="border rounded-lg overflow-hidden bg-white shadow-lg">
                    {/* Preview iframe or content would go here */}
                    <div className="aspect-video bg-gradient-to-br from-secondary/20 to-secondary/40 flex items-center justify-center">
                      <div className="text-center">
                        <Eye className="h-16 w-16 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-primary mb-2">Preview Mode</h3>
                        <p className="text-gray-600">
                          {selectedPage === "homepage"
                            ? "Homepage"
                            : pages.find((p) => p.value === selectedPage)?.label}{" "}
                          preview would appear here
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Viewing in {viewMode} mode</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Changes Panel */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Save className="h-5 w-5 mr-2" />
                  Pending Changes
                </CardTitle>
              </CardHeader>
              <CardContent>
                {hasChanges ? (
                  <div className="space-y-4">
                    {changes.map((change, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-sm">{change.section}</h4>
                          <Badge variant="outline" className="text-xs">
                            {change.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600">{change.type} changes</p>
                      </div>
                    ))}
                    <div className="pt-4 border-t">
                      <p className="text-sm text-gray-600 mb-3">
                        {changes.length} section{changes.length !== 1 ? "s" : ""} modified
                      </p>
                      <Button size="sm" className="w-full bg-primary hover:bg-primary/90" onClick={handlePublish}>
                        Publish All Changes
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2">All Changes Published</h3>
                    <p className="text-sm text-gray-600">No pending changes to review</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-sm">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    <Eye className="h-4 w-4 mr-2" />
                    Compare with Live
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    <Save className="h-4 w-4 mr-2" />
                    Save as Draft
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Share Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
