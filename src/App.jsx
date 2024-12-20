import { useMemo, useState } from 'react';
import {
     Header,
     Tabs,
     BannerSection,
     Modal,
     FirstSection,
     SecondSection,
     ThirdSection,
     Cookie,
} from './components';
import { ModalContext } from './contexts/ModalContext';
import { TabsConfigs } from './configs/Tabs.config';

function App() {
     const [activeTab, setActiveTab] = useState(TabsConfigs.Business);
     const [modalIsOpen, setModalIsOpen] = useState(false);
     const [showCookie, setShowCookie] = useState(false);

     const contextValue = useMemo(() => ({ setModalIsOpen }), [setModalIsOpen]);

     return (
          <main className="budss">
               <Tabs currentTab={activeTab} setCurrentTab={setActiveTab} />
               <ModalContext.Provider value={contextValue}>
                    <Header />
                    <FirstSection />
               </ModalContext.Provider>
               <SecondSection />
               <ThirdSection />
               <BannerSection />
               {showCookie && <Cookie setShow={setShowCookie} />}
               <Modal
                    isOpen={modalIsOpen}
                    onClose={() => setModalIsOpen(false)}
               />
          </main>
     );
}

export default App;
