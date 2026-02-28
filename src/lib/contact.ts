// Remova espaços, parênteses e o 9 extra se o link não abrir
// O padrão mais seguro é: 55 + DDD + 8 ou 9 dígitos
const whatsappNumber = "5547996028431";

const whatsappMessage = encodeURIComponent(
  "Olá! Vim pelo site da Be.Capable e gostaria de solicitar um orçamento.",
);

export const WHATSAPP_URL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
