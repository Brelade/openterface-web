import { Popover } from 'antd';
import { SettingsIcon } from 'lucide-react';
import { Language } from './language.tsx';

export const Settings = () => {
  const content = (
    <div className="flex flex-col space-y-0.5">
      <Language />
    </div>
  );

  return (
    <Popover content={content} placement="bottomLeft" trigger="click" arrow={false}>
      <div className="flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded text-neutral-300 hover:bg-neutral-700/50 hover:text-white">
        <SettingsIcon size={18} />
      </div>
    </Popover>
  );
};