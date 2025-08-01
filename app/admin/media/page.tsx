"use client"

import type React from "react"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  ImageIcon,
  Upload,
  Search,
  Filter,
  MoreHorizontal,
  Download,
  Trash2,
  Edit3,
  FolderPlus,
  Grid3X3,
  List,
} from "lucide-react"

export default function MediaLibrary() {
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState("grid")
  const [isUploadOpen, setIsUploadOpen] = useState(false)

  const mediaFiles = [
    {
      id: 1,
      name: "hero-image.jpg",
      type: "image",
      size: "2.4 MB",
      dimensions: "1920x1080",
      uploadDate: "2024-01-15",
      url: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "product-magnesium.png",
      type: "image",
      size: "1.8 MB",
      dimensions: "800x600",
      uploadDate: "2024-01-14",
      url: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "about-us-team.jpg",
      type: "image",
      size: "3.2 MB",
      dimensions: "1600x900",
      uploadDate: "2024-01-13",
      url: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      name: "ingredients-bg.jpg",
      type: "image",
      size: "1.5 MB",
      dimensions: "1200x800",
      uploadDate: "2024-01-12",
      url: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      name: "logo-santeway.svg",
      type: "vector",
      size: "45 KB",
      dimensions: "Vector",
      uploadDate: "2024-01-10",
      url: "/images/santeway-logo.png",
    },
    {
      id: 6,
      name: "product-catalog.pdf",
      type: "document",
      size: "5.2 MB",
      dimensions: "A4",
      uploadDate: "2024-01-09",
      url: "/placeholder.svg?height=200&width=300",
    },
  ]

  const getFileTypeColor = (type: string) => {
    switch (type) {
      case "image":
        return "bg-blue-100 text-blue-800"
      case "vector":
        return "bg-purple-100 text-purple-800"
      case "document":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      console.log("Uploading files:", files)
      setIsUploadOpen(false)
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary">Media Library</h1>
            <p className="text-gray-600 mt-1">Manage your images, documents, and other media files</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <FolderPlus className="h-4 w-4 mr-2" />
              New Folder
            </Button>
            <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Files
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Upload Media Files</DialogTitle>
                  <DialogDescription>Select files to upload to your media library.</DialogDescription>
                </DialogHeader>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-900 mb-2">Drop files here or click to browse</p>
                  <p className="text-sm text-gray-600 mb-4">Supports: JPG, PNG, SVG, PDF, MP4 (Max 10MB)</p>
                  <Button onClick={() => document.getElementById("fileUpload")?.click()}>Choose Files</Button>
                  <input
                    id="fileUpload"
                    type="file"
                    multiple
                    accept="image/*,.pdf,.svg"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsUploadOpen(false)}>
                    Cancel
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Search and Controls */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search media files..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Media Grid/List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ImageIcon className="h-5 w-5 mr-2" />
              Media Files ({mediaFiles.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {viewMode === "grid" ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {mediaFiles.map((file) => (
                  <div
                    key={file.id}
                    className="group relative border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-square bg-gray-100 flex items-center justify-center">
                      {file.type === "image" || file.type === "vector" ? (
                        <img
                          src={file.url || "/placeholder.svg"}
                          alt={file.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center">
                          <ImageIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-xs text-gray-600">{file.type.toUpperCase()}</p>
                        </div>
                      )}
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-medium truncate" title={file.name}>
                        {file.name}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <Badge className={getFileTypeColor(file.type)} variant="secondary">
                          {file.type}
                        </Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <MoreHorizontal className="h-3 w-3" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit3 className="h-4 w-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{file.size}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                {mediaFiles.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        {file.type === "image" || file.type === "vector" ? (
                          <img
                            src={file.url || "/placeholder.svg"}
                            alt={file.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <ImageIcon className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{file.size}</span>
                          <span>{file.dimensions}</span>
                          <span>{file.uploadDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getFileTypeColor(file.type)} variant="secondary">
                        {file.type}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit3 className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
