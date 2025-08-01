"use client"

import type React from "react"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, Eye, Upload, ArrowLeft, ImageIcon, Type, Palette, Layout } from "lucide-react"
import Link from "next/link"

export default function HeroSectionEditor() {
  const [heroData, setHeroData] = useState({
    title: "Daha İyi Bir",
    subtitle: "Sizi Seçin",
    description: "Santeway ile daha iyi hissedin, genel sağlık ve zindelik için ihtiyacınız olan takviyeler.",
    buttonText: "HEMEN İNCELE",
    buttonLink: "/urunler",
    backgroundImage: "/placeholder.svg?height=400&width=600",
    isActive: true,
    backgroundColor: "from-secondary/20 to-secondary/40",
    textColor: "text-primary",
    layout: "split", // split, centered, full-width
  })

  const [previewMode, setPreviewMode] = useState(false)

  const handleSave = () => {
    // Save logic here
    console.log("Saving hero section:", heroData)
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Handle image upload
      console.log("Uploading image:", file)
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/admin/content">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-primary">Edit Hero Section</h1>
              <p className="text-gray-600">Customize your homepage hero section</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant={heroData.isActive ? "default" : "secondary"}>
              {heroData.isActive ? "Active" : "Inactive"}
            </Badge>
            <Button variant="outline" onClick={() => setPreviewMode(!previewMode)}>
              <Eye className="h-4 w-4 mr-2" />
              {previewMode ? "Edit Mode" : "Preview"}
            </Button>
            <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>

        {previewMode ? (
          /* Preview Mode */
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`bg-gradient-to-br ${heroData.backgroundColor} py-16 rounded-lg`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h1 className={`text-5xl lg:text-6xl font-bold ${heroData.textColor} mb-6`}>
                        {heroData.title}
                        <br />
                        <span className="relative">
                          {heroData.subtitle}
                          <div className="absolute bottom-2 left-0 w-full h-3 bg-secondary/50 -z-10"></div>
                        </span>
                      </h1>
                      <p className="text-xl text-gray-700 mb-8 leading-relaxed">{heroData.description}</p>
                      <Button size="lg" className="group bg-primary hover:bg-primary/90 rounded-full px-8 py-6 text-lg">
                        {heroData.buttonText}
                      </Button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary/20 rounded-3xl transform rotate-3"></div>
                      <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                        <img
                          src={heroData.backgroundImage || "/placeholder.svg"}
                          alt="Hero Image"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Edit Mode */
          <Tabs defaultValue="content" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="content" className="flex items-center">
                <Type className="h-4 w-4 mr-2" />
                Content
              </TabsTrigger>
              <TabsTrigger value="media" className="flex items-center">
                <ImageIcon className="h-4 w-4 mr-2" />
                Media
              </TabsTrigger>
              <TabsTrigger value="design" className="flex items-center">
                <Palette className="h-4 w-4 mr-2" />
                Design
              </TabsTrigger>
              <TabsTrigger value="layout" className="flex items-center">
                <Layout className="h-4 w-4 mr-2" />
                Layout
              </TabsTrigger>
            </TabsList>

            <TabsContent value="content">
              <Card>
                <CardHeader>
                  <CardTitle>Content Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Main Title</Label>
                      <Input
                        id="title"
                        value={heroData.title}
                        onChange={(e) => setHeroData({ ...heroData, title: e.target.value })}
                        placeholder="Enter main title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subtitle">Subtitle</Label>
                      <Input
                        id="subtitle"
                        value={heroData.subtitle}
                        onChange={(e) => setHeroData({ ...heroData, subtitle: e.target.value })}
                        placeholder="Enter subtitle"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={heroData.description}
                      onChange={(e) => setHeroData({ ...heroData, description: e.target.value })}
                      placeholder="Enter description text"
                      rows={3}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="buttonText">Button Text</Label>
                      <Input
                        id="buttonText"
                        value={heroData.buttonText}
                        onChange={(e) => setHeroData({ ...heroData, buttonText: e.target.value })}
                        placeholder="Enter button text"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="buttonLink">Button Link</Label>
                      <Input
                        id="buttonLink"
                        value={heroData.buttonLink}
                        onChange={(e) => setHeroData({ ...heroData, buttonLink: e.target.value })}
                        placeholder="Enter button link"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="isActive"
                      checked={heroData.isActive}
                      onCheckedChange={(checked) => setHeroData({ ...heroData, isActive: checked })}
                    />
                    <Label htmlFor="isActive">Section Active</Label>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="media">
              <Card>
                <CardHeader>
                  <CardTitle>Media Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Label>Hero Image</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <img
                        src={heroData.backgroundImage || "/placeholder.svg"}
                        alt="Current hero image"
                        className="mx-auto mb-4 max-h-48 object-contain"
                      />
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Current image</p>
                        <div className="flex justify-center">
                          <Button variant="outline" onClick={() => document.getElementById("imageUpload")?.click()}>
                            <Upload className="h-4 w-4 mr-2" />
                            Upload New Image
                          </Button>
                          <input
                            id="imageUpload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="design">
              <Card>
                <CardHeader>
                  <CardTitle>Design Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="backgroundColor">Background Gradient</Label>
                    <Select
                      value={heroData.backgroundColor}
                      onValueChange={(value) => setHeroData({ ...heroData, backgroundColor: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="from-secondary/20 to-secondary/40">Gold Gradient</SelectItem>
                        <SelectItem value="from-primary/20 to-primary/40">Blue Gradient</SelectItem>
                        <SelectItem value="from-gray-100 to-gray-200">Gray Gradient</SelectItem>
                        <SelectItem value="from-white to-gray-50">Light Gradient</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="textColor">Text Color</Label>
                    <Select
                      value={heroData.textColor}
                      onValueChange={(value) => setHeroData({ ...heroData, textColor: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="text-primary">Primary Blue</SelectItem>
                        <SelectItem value="text-secondary">Secondary Gold</SelectItem>
                        <SelectItem value="text-gray-900">Dark Gray</SelectItem>
                        <SelectItem value="text-white">White</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="layout">
              <Card>
                <CardHeader>
                  <CardTitle>Layout Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="layout">Layout Type</Label>
                    <Select
                      value={heroData.layout}
                      onValueChange={(value) => setHeroData({ ...heroData, layout: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="split">Split Layout (Text + Image)</SelectItem>
                        <SelectItem value="centered">Centered Layout</SelectItem>
                        <SelectItem value="full-width">Full Width Background</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </AdminLayout>
  )
}
