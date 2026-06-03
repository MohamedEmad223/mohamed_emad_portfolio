/* ─── SOCIAL LINKS ───
 * Each entry's `Icon` is a component (lucide or a custom brand SVG) rendered
 * as <s.Icon size={...} /> in the footer.
 */
import { MessageCircle } from "lucide-react";
import { Linkedin, Github, Facebook, Instagram, XIcon } from "../components/icons.jsx";
import { WHATSAPP_NUMBER } from "../config.js";

export const socials = [
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-emad22/" },
  { Icon: Github, label: "GitHub", href: "https://github.com/MohamedEmad223" },
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/Bakrow10" },
  { Icon: XIcon, label: "X", href: "https://x.com/B_akrow10" },
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mohamedemadx22?igsh=eXRteTVjNnR3NHR3" },
  { Icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${WHATSAPP_NUMBER}` },
];
