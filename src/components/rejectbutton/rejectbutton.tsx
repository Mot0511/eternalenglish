import cl from './rejectbutton.module.css'

const Rejectbutton = (props: any) => {
    return (
        <button className={cl.button} {...props}>{props.children}</button>
    );
};

export default Rejectbutton;