const whatsappNumber = "5547960284310";
const whatsappMessage = encodeURIComponent(
  "Olá! Vim pelo site da Be.Capable e gostaria de solicitar um orçamento."
);

export const WHATSAPP_URL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
