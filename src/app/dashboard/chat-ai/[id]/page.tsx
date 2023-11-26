import { ChatInterface } from "@/app/ask-ai/ChatInterface";


const page = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <ChatInterface chatId={params.id} />
        </div>
    );
};

export default page;