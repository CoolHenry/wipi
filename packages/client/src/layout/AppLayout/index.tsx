import React, { createContext } from 'react';

import style from './index.module.scss';

// Create a context with default values
export const AppLayoutContext = createContext({ needFooter: true, hasBg: false });

interface Iprops {
  needFooter?: boolean;
  hasBg?: boolean;
  children: React.ReactNode;
}

export const AppLayout: React.FC<Iprops> = ({ children, needFooter = true, hasBg }) => {
  return (
    <AppLayoutContext.Provider value={{ needFooter, hasBg }}>
      <div className="wrapper">
        <main className={style.main} style={{ backgroundColor: hasBg ? 'transparent' : 'var(--bg-body)' }}>
          {children}
        </main>
      </div>
    </AppLayoutContext.Provider>
  );
};
