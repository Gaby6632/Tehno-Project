import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { AIAssistantChat } from "./AIAssistantChat";

export const AIAssistantButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-[100]"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full h-12 w-12 md:h-14 md:w-14 shadow-lg glow-border"
        >
          <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </motion.div>
      <AIAssistantChat isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
