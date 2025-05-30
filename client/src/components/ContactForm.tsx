import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  title: z.string().min(2, "Title must be at least 2 characters"),
  organization: z.string().min(2, "Organization must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  region: z.string().optional(),
  category: z.string().min(1, "Please select an engagement category"),
  description: z.string().min(50, "Please provide a detailed description (minimum 50 characters)"),
  agreedToTerms: z.string().min(1, "You must agree to the confidentiality terms"),
});

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      title: "",
      organization: "",
      email: "",
      region: "",
      category: "",
      description: "",
      agreedToTerms: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: z.infer<typeof formSchema>) => {
      const response = await apiRequest("POST", "/api/inquiries", data);
      return await response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Strategic Inquiry Submitted",
        description: "Our team will respond within 48 hours through secure channels.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: "Please check your information and try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    submitMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="bg-card/30 p-8 rounded-2xl text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">Inquiry Received</h3>
          <p className="text-muted-foreground">
            Thank you for your strategic inquiry. Our team will review your submission and respond within 48 hours through secure channels.
          </p>
        </div>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card/30 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold mb-6">Strategic Inquiry Form</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title *</FormLabel>
                  <FormControl>
                    <Input placeholder="Your title/position" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization *</FormLabel>
                <FormControl>
                  <Input placeholder="Organization name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="region"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Region</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="north-america">North America</SelectItem>
                      <SelectItem value="europe">Europe</SelectItem>
                      <SelectItem value="asia-pacific">Asia-Pacific</SelectItem>
                      <SelectItem value="middle-east-africa">Middle East & Africa</SelectItem>
                      <SelectItem value="latin-america">Latin America</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Engagement Category *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="sovereign-capability">Sovereign Capability Enhancement</SelectItem>
                    <SelectItem value="frontier-scientific">Frontier Scientific Exploration</SelectItem>
                    <SelectItem value="ai-consulting">AI & Digital Transformation</SelectItem>
                    <SelectItem value="venture-capital">Venture Capital Orchestration</SelectItem>
                    <SelectItem value="ma-strategic">M&A & Strategic Investment</SelectItem>
                    <SelectItem value="assets-brokerage">Strategic Assets Brokerage</SelectItem>
                    <SelectItem value="geostrategic">Geostrategic Engagement</SelectItem>
                    <SelectItem value="management-consulting">Management Consulting</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Strategic Initiative Description *</FormLabel>
                <FormControl>
                  <Textarea 
                    rows={6} 
                    placeholder="Please provide a comprehensive description of your strategic initiative, including scope, objectives, stakeholders, and timeline considerations..." 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="agreedToTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value === "true"}
                    onCheckedChange={(checked) => field.onChange(checked ? "true" : "")}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm">
                    I acknowledge that this inquiry involves confidential strategic information and agree to maintain appropriate discretion pending formal engagement protocols.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-semibold text-lg py-4"
            disabled={submitMutation.isPending}
          >
            {submitMutation.isPending ? "Submitting..." : "Submit Strategic Inquiry"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
