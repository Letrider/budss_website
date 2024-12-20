import { useContext, Fragment } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../Button/Button';
import ResponsiveImage from '../ResponsiveImage';
import cn from './FirstSection.module.scss';
import { ModalContext } from '../../contexts/ModalContext';
import { TRANSITION } from '../../configs/Transition.config';

export const FirstSection = () => {
     const { setModalIsOpen } = useContext(ModalContext);
     const text = 'Everyone is an Influencer'.split(' ');

     return (
          <section className={cn['section-1']}>
               <aside className={cn['section-1__left']}>
                    <motion.h1>
                         {text.map((el, i) => (
                              <Fragment key={'[CUSTOM-TEXT]: ' + i}>
                                   <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                             duration: 0.25,
                                             delay: i / 1.8,
                                        }}
                                   >
                                        {el}{' '}
                                   </motion.span>
                                   {el === 'Everyone' && (
                                        <motion.br
                                             initial={{ opacity: 0 }}
                                             animate={{ opacity: 1 }}
                                             transition={{
                                                  duration: 0.25,
                                                  delay: TRANSITION.title(i),
                                             }}
                                        />
                                   )}
                              </Fragment>
                         ))}
                    </motion.h1>
                    <motion.p
                         initial={{
                              position: 'relative',
                              left: -30,
                              opacity: 0,
                         }}
                         transition={{
                              delay: TRANSITION.paragraph,
                         }}
                         animate={{ left: 0, opacity: 1 }}
                    >
                         Budss is a payments as a service and WOM engine
                         dedicated
                         <br />
                         to acquisition and retention of customers to your
                         business.
                    </motion.p>

                    <Button
                         label={'Contact sales'}
                         type="Primary"
                         onClick={() => setModalIsOpen(true)}
                    />
               </aside>
               <motion.figure
                    className={cn['section-1__right']}
                    initial={{ position: 'relative', right: -30, opacity: 0 }}
                    animate={{ right: 0, opacity: 1 }}
                    transition={{
                         delay: TRANSITION.womanImage,
                    }}
               >
                    <ResponsiveImage
                         className={cn['section-1__right-woman']}
                         srcDefault={'/woman.png'}
                    />
               </motion.figure>
          </section>
     );
};

/*
     return (
          <section className={cn['section-1']}>
               <aside className={cn['section-1__left']}>
                    <motion.h1>
                         {text.map((el, i) => (
                              <Fragment key={'[CUSTOM-TEXT]: ' + i}>
                                   <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                             duration: 0.25,
                                             delay: i / 10,
                                        }}
                                   >
                                        {el}{' '}
                                   </motion.span>
                                   {el === 'Everyone' && (
                                        <motion.br
                                             initial={{ opacity: 0 }}
                                             animate={{ opacity: 1 }}
                                             transition={{
                                                  duration: 0.25,
                                                  delay: (i + 1) / 10,
                                             }}
                                        />
                                   )}
                              </Fragment>
                         ))}
                    </motion.h1>
                                 <p>
                         Budss is a payments as a service and WOM engine
                         dedicated
                         <br />
                         to acquisition and retention of customers to your
                         business.
                    </p>
                    <Button
                         label={'Contact sales'}
                         type="Primary"
                         onClick={() => setModalIsOpen(true)}
                    />
               </aside>
               <figure className={cn['section-1__right']}>
                    <ResponsiveImage
                         className={cn['section-1__right-woman']}
                         srcDefault={'/woman.png'}
                    />
               </figure>
          </section>
     );
};
*/
