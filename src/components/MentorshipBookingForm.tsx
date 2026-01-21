import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  currentRole: z.string().min(1, {
    message: "Please enter your current role.",
  }),
  careerGoals: z.string().min(10, {
    message: "Please describe your career goals (at least 10 characters).",
  }),
  preferredMentor: z.string().min(1, {
    message: "Please select a preferred mentor.",
  }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface Mentor {
  id: string;
  name: string;
  role: string;
}

interface MentorshipBookingFormProps {
  mentors: Mentor[];
  onSubmit?: (data: FormValues) => void;
}

const MentorshipBookingForm = ({ mentors, onSubmit }: MentorshipBookingFormProps) => {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      currentRole: "",
      careerGoals: "",
      preferredMentor: "",
      message: "",
    },
  });

  const handleSubmit = (data: FormValues) => {
    // Log form data (can be replaced with API call)
    console.log("Mentorship booking request:", data);
    
    // Call custom onSubmit if provided
    if (onSubmit) {
      onSubmit(data);
    }

    // Show success toast
    toast({
      title: "Booking Request Submitted",
      description: "We'll get back to you soon to schedule your mentorship session.",
    });

    // Reset form
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+91 9876543210" {...field} />
              </FormControl>
              <FormDescription>Optional - We'll use this to contact you if needed.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="currentRole"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Role *</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Software Engineer, Product Manager, Student" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="careerGoals"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Career Goals *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your career goals and what you'd like to discuss in the mentorship session..."
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                What are you hoping to achieve? What challenges are you facing?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="preferredMentor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Mentor *</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a mentor" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {mentors.map((mentor) => (
                    <SelectItem key={mentor.id} value={mentor.id}>
                      {mentor.name} - {mentor.role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Select a mentor whose expertise aligns with your goals.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any additional information you'd like to share..."
                  className="min-h-[80px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>Optional - Any specific topics or questions you'd like to discuss.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-foreground text-background hover:opacity-90" size="lg">
          Submit Booking Request
        </Button>
      </form>
    </Form>
  );
};

export default MentorshipBookingForm;
