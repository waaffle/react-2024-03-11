import classNames from "classnames"
import { FooterContainer } from "../footer/container"
import { HeaderContainer } from "../header/container"
import styles from './styles.module.scss'

export const Layout = ({ children, theme }) => {
    
    return (
        <div className={classNames(
           (theme === "dark") && styles.dark
        )}>
  
        <HeaderContainer className={styles.externalHeader}/>
        
            {children}
        
        <FooterContainer className={styles.externalFooter}/>
        
        </div>
)}