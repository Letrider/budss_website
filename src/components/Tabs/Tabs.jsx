import cn from './Tabs.module.scss';
import { TabsConfigs } from '../../configs/Tabs.config';

export default function Tabs({
     currentTab = TabsConfigs.Business,
     setCurrentTab = console.log,
}) {
     return (
          <nav className={cn['Tabs']}>
               <ul className={cn['Tabs--list']}>
                    {Object.entries(TabsConfigs).map(([key, label]) => (
                         <li
                              key={key}
                              className={`${cn['Tabs--list_item']} ${currentTab === label ? cn['isActive'] : ''}`}
                              onClick={() => setCurrentTab(label)}
                         >
                              {label}
                         </li>
                    ))}
               </ul>
          </nav>
     );
}