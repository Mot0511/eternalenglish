import cl from './mybutton.module.css'

const Mybutton = (props: any) => {
    return (
        <button style={{width: props.fullwidth ? '100%' : ''}} className={cl.button} {...props}>{props.children}</button>
    );
};

export default Mybutton;