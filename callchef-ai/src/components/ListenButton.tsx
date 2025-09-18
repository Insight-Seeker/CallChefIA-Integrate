"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useConversation } from "@elevenlabs/react";

type Props = {
  label?: string;
  agentId?: string;
  className?: string;
  size?: "default" | "lg" | "sm";
  variant?: "default" | "outline";
};

export default function ListenButton({
  label = "Écouter la démo",
  agentId,
  className,
  size = "lg",
  variant = "outline",
}: Props) {
  const conv = useConversation();
  const [busy, setBusy] = useState(false);
  const [live, setLive] = useState(false);
  const finalAgent = agentId || process.env.NEXT_PUBLIC_ELEVEN_AGENT_ID;

  async function start() {
    try {
      setBusy(true);
      await navigator.mediaDevices.getUserMedia({ audio: true });
      const res = await fetch(`/api/webrtc-token?agent_id=${encodeURIComponent(finalAgent || "")}`);
      if (!res.ok) throw new Error("Token server error");
      const { token } = await res.json();
      await conv.startSession({ conversationToken: token, connectionType: "webrtc" });
      setLive(true);
      conv.on("session_ended", () => setLive(false));
    } catch (e) {
      console.error(e);
    } finally {
      setBusy(false);
    }
  }

  function stop() {
    conv.endSession();
    setLive(false);
  }

  return (
    <Button size={size} variant={variant as any} className={className} onClick={live ? stop : start} disabled={busy}>
      <Phone className="w-5 h-5 mr-2" />
      {live ? "Arrêter la démo" : label}
    </Button>
  );
}
