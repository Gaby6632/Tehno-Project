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
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg glow-border"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>
      <AIAssistantChat isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
