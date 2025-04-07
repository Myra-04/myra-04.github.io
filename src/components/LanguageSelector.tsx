
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const LanguageSelector: React.FC = () => {
  const { currentLanguage, languages, changeLanguage } = useLanguage();
  
  return (
    <Select
      value={currentLanguage.code}
      onValueChange={changeLanguage}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder={currentLanguage.name} />
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            {language.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
