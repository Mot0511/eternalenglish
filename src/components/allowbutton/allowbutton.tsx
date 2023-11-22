import cl from './allowbutton.module.css'
const Allowbutton = (props: any) => {
    return (
        <button className={cl.button} {...props}>{props.children}</button>
    );
};

export default Allowbutton;