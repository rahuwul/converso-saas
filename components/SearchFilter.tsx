"use client";


import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { subjects } from '@/constants'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";




const SearchFilter = () => {
 const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

     const [subject, setSubject] = useState("all");

     useEffect(() => {
        let newUrl = "";
        if (subject === "all") {
            newUrl = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["subject"],
            });
        } else {
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "subject",
                value: subject,
            });
        }
        router.push(newUrl, { scroll: false });
    }, [subject]);
    
  return (
    <div><Select onValueChange={setSubject} value={subject}>
  <SelectTrigger className="w-[180px] border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
    <SelectValue placeholder="Select Subject" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="all" className="capitalize">
        All Subjects
    </SelectItem>
   {subjects.map((subject) => (
        <SelectItem
            key={subject}
            value={subject}
            className="capitalize"
        >
            {subject}
        </SelectItem>
   ))}
  </SelectContent>
</Select>
</div>
  )
}

export default SearchFilter