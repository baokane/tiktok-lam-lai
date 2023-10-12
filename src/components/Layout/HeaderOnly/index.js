import Header from '../Component/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header></Header>
            {children}
        </div>
    );
}

export default HeaderOnly;
