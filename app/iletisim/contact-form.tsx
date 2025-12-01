"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { toast } from "sonner"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      })

      if (response.ok) {
        toast.success("Mesajınız başarıyla gönderildi!", {
          description: "En kısa sürede size dönüş yapacağız."
        })
        form.reset()
      } else {
        throw new Error("Form gönderilirken bir hata oluştu")
      }
    } catch (error) {
      toast.error("Bir hata oluştu", {
        description: "Lütfen daha sonra tekrar deneyin veya telefon ile iletişime geçin."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardContent className="p-6 sm:p-8">
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-6"
        >
          {/* Netlify form için gerekli hidden field */}
          <input type="hidden" name="form-name" value="contact" />
          
          {/* Spam koruması için honeypot */}
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                Ad *
              </label>
              <Input 
                id="firstName" 
                name="firstName"
                placeholder="Adınız" 
                className="text-sm sm:text-base"
                required 
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Soyad *
              </label>
              <Input 
                id="lastName" 
                name="lastName"
                placeholder="Soyadınız" 
                className="text-sm sm:text-base"
                required 
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-posta *
            </label>
            <Input 
              id="email" 
              name="email"
              type="email" 
              placeholder="ornek@email.com" 
              className="text-sm sm:text-base"
              required 
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Telefon
            </label>
            <Input 
              id="phone" 
              name="phone"
              placeholder="0555 123 45 67" 
              className="text-sm sm:text-base" 
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Konu *
            </label>
            <Input 
              id="subject" 
              name="subject"
              placeholder="Mesajınızın konusu" 
              className="text-sm sm:text-base"
              required 
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Mesaj *
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Mesajınızı buraya yazın..."
              rows={6}
              className="text-sm sm:text-base resize-none"
              required
            />
          </div>

          <Button 
            type="submit"
            size="lg" 
            className="w-full bg-primary hover:bg-primary/90 text-base sm:text-lg py-3 sm:py-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
