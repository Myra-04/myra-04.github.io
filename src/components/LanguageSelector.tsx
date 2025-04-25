
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { currentLanguage, languages, changeLanguage } = useLanguage();
  
  // Language display names (can be shown in their native script)
  const getLanguageDisplay = (code: string) => {
    switch(code) {
      case 'en': return 'English';
      case 'ms': return 'Bahasa Malaysia';
      case 'zh': return '中文 (Chinese)';
      case 'ib': return 'Bahasa Iban';
      case 'bd': return 'Bahasa Bidayuh';
      case 'ky': return 'Bahasa Kayan';
      case 'kn': return 'Bahasa Kelabit';
      default: return code;
    }
  };
  
  return (
    <Select
      value={currentLanguage.code}
      onValueChange={changeLanguage}
    >
      <SelectTrigger className="w-full">
        <div className="flex items-center gap-2">
          <Globe size={16} />
          <SelectValue placeholder={getLanguageDisplay(currentLanguage.code)} />
        </div>
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            {getLanguageDisplay(language.code)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
