import Header from '../component/header';

const styleLayout = {
    padding: 10,
    border:"1px solid red"
}

const Layout = props => (
    <div style={styleLayout}>
        <Header/>
        {props.children}
    </div>
);
export default Layout;
