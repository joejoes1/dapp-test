import { toast } from 'react-toastify';

const copyContent = async (text: string, successText?: string) => {
  try {
    await navigator.clipboard.writeText(text);
    if (successText) {
      toast(successText, { type: 'success', position: 'bottom-right' });
    }
  } catch (err) {
    toast('Error when trying to copy text', { type: 'error', position: 'bottom-right' });
  }
};

export default copyContent;
