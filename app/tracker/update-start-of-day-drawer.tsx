/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/RqVDtma6FR9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
 **/
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { format, parse } from "date-fns";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
  onStartOfDayChanged: (newStartOfDate: Date) => void;
  currentTime?: Date;
};

const startOfDaySchema = z.object({
  newTime: z.string(),
});

type UpdateStartOfDaySchema = z.infer<typeof startOfDaySchema>;

export const UpdateStartOfDayDrawer = ({
  children,
  onStartOfDayChanged,
  currentTime,
}: Props) => {
  const [open, setOpen] = useState(false);
  const form = useForm<UpdateStartOfDaySchema>({
    resolver: zodResolver(startOfDaySchema),
    defaultValues: {
      newTime: currentTime ? format(currentTime, "HH:mm") : undefined,
    },
  });

  const onSubmit = (e: UpdateStartOfDaySchema) => {
    const dateTime = parse(e.newTime, "HH:mm", new Date());
    onStartOfDayChanged(dateTime);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[420px]">
        <DialogHeader>
          <DialogTitle>Change Start Time</DialogTitle>
          <DialogDescription>
            Select a new start time for your day.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-6 py-6">
              <FormField
                control={form.control}
                name="newTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="newTime">New Start Time</FormLabel>
                    <FormControl>
                      <Input
                        type="time"
                        className="flex items-center justify-between w-full"
                        {...field}
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            </div>
            <DialogFooter className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button variant="outline" className="w-full sm:w-auto">
                Cancel
              </Button>
              <Button type="submit" className="w-full sm:w-auto">
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
