import Link from 'next/link';

const style = {
    marginRight: 15,
    color:"red"
};

const Header = () => (
    <div>
        <Link href='/'>
            <a style={style}> Home</a>
        </Link>
        <Link href='/About'>
            <a style={style}>About</a>
        </Link>
    </div>
);
export default Header;