import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { Textarea } from "./ui/textarea";
import { toast } from "react-toastify";

function checkValidName(name: string): Boolean {
  if (name.length < 0) return false;
  if (name.length > 30) return false;
  return true;
}
function validatePhone(str: string) {
  return str.split("").reduce((acc, char) => {
    return (acc && char >= "0" && char <= "9") || char == " ";
  }, true);
}

function checkValidPhone(phone: string) {
  if (phone.length >= 18) return false;
  return validatePhone(phone);
}
function validateEmail(email: string) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
function checkValidEmail(email: string): boolean {
  if (email.length <= 0) return false;
  if (email.length > 25) return false;

  if (!validateEmail(email)) return false;
  return true;
}
export default function Contact({
  dialogTriggger,
}: {
  dialogTriggger?: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  };
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async (e: any) => {
    e.preventDefault();
    checkValidEmail(email);
    if (email == "" && phone == "") {
      toast.warn("Please Enter Either Email Or Contact No! ");
      return;
    }
    if (message == "") {
      toast.warn("Please Enter A Message!");
      return;
    }
    try {
      const subject = "Contact Request From NilayCodes.in";
      const body = {
        name,
        email_id: email,
        phone,
        service,
        message,
      };
      const myMail = "nbanerjee02.asn@gmail.com";
      const emails = email ? email + ", " + myMail : myMail;
      const timeout = new Promise((res, rej) => setTimeout(rej, 100000));
      toast.promise(timeout, {
        pending: "Sending Email ✉️",
        success: "Email sent Successful",
        error: "Email Sending Failed! ❌",
      });

      //TODO: use Promise to make this better
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          subject,
          body,
          email: emails,
        }),
      });
      const data = await res.json();
      if (data.status === 200) {
        toast.dismiss();
        toast.success("Email Sent Successfully 🎉");
        dialogTriggger && dialogTriggger.setIsOpen(false);
        return;
      } else {
        toast.dismiss();
        toast.error("Email Sending Failed! ❌");
      }
    } catch (error) {
      console.log("Error sending Email", error);
    }
  };
  return (
    <div className="-mx-2">
      <Dialog
        open={dialogTriggger?.isOpen}
        onOpenChange={dialogTriggger?.setIsOpen}
      >
        {!dialogTriggger && (
          <DialogTrigger asChild>
            <Button
              className="bg-background hover:bg-background text-base hover:text-accent"
              variant={"ghost"}
            >
              Contact
            </Button>
          </DialogTrigger>
        )}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Let's Work Together</DialogTitle>
            <DialogDescription>
              Let's build something amazing together! Have a project in mind or
              simply want to connect? Feel free to reach out. I'm eager to
              discuss your ideas and explore potential collaborations.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3 p-3">
            <Input
              type="name"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                const temp = e.target.value;
                if (checkValidName(temp)) setName(temp);
              }}
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => {
                const temp = e.target.value;
                if (checkValidPhone(temp)) {
                  setPhone(temp);
                }
              }}
            />
            <Select
              onValueChange={(value) => setService(value)}
              defaultValue={service}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="Full Stack Development">
                    Full Stack Development
                  </SelectItem>
                  <SelectItem value="Front End Development">
                    Front End Development
                  </SelectItem>
                  <SelectItem value="Back End Development">
                    Backend Development
                  </SelectItem>
                  <SelectItem value="Robotics/Embedded Systems">
                    Robotics/Embedded Systems
                  </SelectItem>
                  <SelectItem value="Others">Others</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea
              className="h-[200px]"
              placeholder="Type your message here."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button
              variant={"custom"}
              type="submit"
              className="capitalize bg-accent text-white hover:bg-cyan-300 hover:text-black"
              onClick={sendMessage}
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
