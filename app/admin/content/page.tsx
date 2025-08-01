"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FileText, Edit3, Eye, MoreHorizontal, Plus, Search, Filter, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function ContentManagement() {
  const [searchTerm, setSearchTerm] = useState("")

  const pages = [
    {
      id: 1,
      title: "Homepage",
      type: "Page",
      status: "Published",
      lastModified: "2024-01-15",
      author: "Admin",
      sections: ["Hero", "Featured Product", "About", "Ingredients"],
    },
    {
      id: 2,
      title: "Products Page",
      type: "Page",
      status: "Published",
      lastModified: "2024-01-14",
      author: "Editor",
      sections: ["Header", "Product Grid", "Filters"],
    },
    {
      id: 3,
      title: "About Us",
      type: "Page",
      status: "Published",
      lastModified: "2024-01-13",
      author: "Admin",
      sections: ["Header", "Mission", "Values"],
    },
    {
      id: 4,
      title: "Contact",
      type: "Page",
      status: "Draft",
      lastModified: "2024-01-12",
      author: "Editor",
      sections: ["Header", "Contact Form", "Map"],
    },
  ]

  const sections = [
    {
      id: 1,
      name: "Hero Section",
      page: "Homepage",
      type: "Hero",
      status: "Active",
      lastModified: "2024-01-15",
    },
    {
      id: 2,
      name: "Featured Product",
      page: "Homepage",
      type: "Product Showcase",
      status: "Active",
      lastModified: "2024-01-14",
    },
    {
      id: 3,
      name: "About Section",
      page: "Homepage",
      type: "Content Block",
      status: "Active",
      lastModified: "2024-01-13",
    },
    {
      id: 4,
      name: "Ingredients Section",
      page: "Homepage",
      type: "Grid Layout",
      status: "Active",
      lastModified: "2024-01-12",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
      case "Active":
        return "bg-green-100 text-green-800"
      case "Draft":
        return "bg-yellow-100 text-yellow-800"
      case "Inactive":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary">Content Management</h1>
            <p className="text-gray-600 mt-1">Manage your website pages and sections</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              Preview Changes
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add New Page
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search pages and sections..."
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
          </CardContent>
        </Card>

        {/* Content Tabs */}
        <Tabs defaultValue="pages" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="sections">Sections</TabsTrigger>
          </TabsList>

          <TabsContent value="pages">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Website Pages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Modified</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pages.map((page) => (
                      <TableRow key={page.id}>
                        <TableCell className="font-medium">{page.title}</TableCell>
                        <TableCell>{page.type}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(page.status)}>{page.status}</Badge>
                        </TableCell>
                        <TableCell className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                          {page.lastModified}
                        </TableCell>
                        <TableCell className="flex items-center">
                          <User className="h-4 w-4 mr-2 text-gray-400" />
                          {page.author}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem asChild>
                                <Link href={`/admin/content/edit/${page.id}`}>
                                  <Edit3 className="h-4 w-4 mr-2" />
                                  Edit
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                Preview
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sections">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Page Sections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Section Name</TableHead>
                      <TableHead>Page</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Modified</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sections.map((section) => (
                      <TableRow key={section.id}>
                        <TableCell className="font-medium">{section.name}</TableCell>
                        <TableCell>{section.page}</TableCell>
                        <TableCell>{section.type}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(section.status)}>{section.status}</Badge>
                        </TableCell>
                        <TableCell className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                          {section.lastModified}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem asChild>
                                <Link href={`/admin/content/sections/${section.id}`}>
                                  <Edit3 className="h-4 w-4 mr-2" />
                                  Edit Section
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                Preview
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}
