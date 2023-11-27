"use client"
import { ChatInterface } from "@/app/ask-ai/ChatInterface";
import { Button } from '@/components/ui/button';
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const page = ({ params }: { params: { id: string } }) => {
    const router = useRouter()
    
    return (
        <div className="sm:px-10">
            <Button onClick={() => router.push("/dashboard/chat-ai")} className="flex justify-center gap-1 items-center" variant={"secondary"}><ChevronLeft size={15} />Back</Button>
            <ChatInterface chatId={params.id} />
        </div>
    );
};

export default page;