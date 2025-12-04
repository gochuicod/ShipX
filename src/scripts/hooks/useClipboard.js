import { useState, useCallback } from "react";

export const useClipboard = (timeout = 2000) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(
    (text) => {
      if (!text) return;

      const triggerCopiedState = () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), timeout);
      };

      const fallbackCopy = (textToCopy) => {
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand("copy");
          triggerCopiedState();
        } catch (err) {
          console.error("Fallback copy failed", err);
        }
        document.body.removeChild(textArea);
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard
          .writeText(text)
          .then(triggerCopiedState)
          .catch(fallbackCopy);
      } else {
        fallbackCopy(text);
      }
    },
    [timeout],
  );

  return { isCopied, copy };
};
