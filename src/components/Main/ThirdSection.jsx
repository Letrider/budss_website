import ResponsiveImage from '../ResponsiveImage';
import cn from './ThirdSection.module.scss';

export const ThirdSection = () => {
     return (
          <section className={cn['section-3']}>
               <div className={cn['section-3--phone-wrapper']}>
                    <ResponsiveImage
                         srcDefault={'/phone.png'}
                         className={cn['section-3--phone-wrapper__image']}
                    />
               </div>
               <marquee direction="right">
                    <div className={cn['Secondary-01']}>
                         <ResponsiveImage
                              srcDefault={'/hwb.png'}
                              className={cn['hwb']}
                         />
                         <span>How Budss Works</span>
                         <ResponsiveImage
                              srcDefault={'/hwb.png'}
                              className={cn['hwb']}
                         />
                    </div>
               </marquee>
               <marquee>
                    <div className={cn['Primary']}>
                         <ResponsiveImage
                              srcDefault={'/hwb.png'}
                              className={cn['hwb']}
                         />
                         <span>How Budss Works</span>
                         <ResponsiveImage
                              srcDefault={'/hwb.png'}
                              className={cn['hwb']}
                         />
                    </div>
               </marquee>
               <marquee direction="right">
                    <div className={cn['Secondary-02']}>
                         <ResponsiveImage
                              srcDefault={'/hwb.png'}
                              className={cn['hwb']}
                         />
                         <span>How Budss Works</span>
                         <ResponsiveImage
                              srcDefault={'/hwb.png'}
                              className={cn['hwb']}
                         />
                    </div>
               </marquee>
          </section>
     );
};
