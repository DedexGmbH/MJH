import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const ContactButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-rose-100 hover:bg-rose-200 text-rose-600 border-rose-200"
        >
          Contact Me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact Information</DialogTitle>
          <DialogDescription>
            Feel free to reach out to me!
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Name:</span>
            <span>Your Name</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Phone:</span>
            <span>+1234567890</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Email:</span>
            <span>your.email@example.com</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};