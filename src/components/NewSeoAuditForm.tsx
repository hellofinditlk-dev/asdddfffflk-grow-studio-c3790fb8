import { useState } from "react";
import InquiryForm from "@/components/InquiryForm";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function NewSeoAuditForm() {
  const [business, setBusiness] = useState("");
  const [website, setWebsite] = useState("");
  const [spend, setSpend] = useState("");
  return <div className="space-y-4">
    <Input aria-label="Business name" placeholder="Business name" value={business} onChange={event => setBusiness(event.target.value)} maxLength={150} />
    <Input aria-label="Website" placeholder="Website" type="url" value={website} onChange={event => setWebsite(event.target.value)} maxLength={300} />
    <Select value={spend} onValueChange={setSpend}>
      <SelectTrigger aria-label="Monthly Google Ads spend"><SelectValue placeholder="Monthly Google Ads spend" /></SelectTrigger>
      <SelectContent>
        <SelectItem value="under">Under [ADD LKR AMOUNT]</SelectItem>
        <SelectItem value="range-one">[ADD RANGE]</SelectItem>
        <SelectItem value="range-two">[ADD RANGE]</SelectItem>
        <SelectItem value="above">Above [ADD LKR AMOUNT]</SelectItem>
        <SelectItem value="none">Not running ads yet</SelectItem>
      </SelectContent>
    </Select>
    <InquiryForm service={`Free Google Ads audit; Business: ${business}; Website: ${website}; Monthly Google Ads spend: ${spend}`} />
  </div>;
}