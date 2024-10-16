import './TopBar.css';

const TobBar = (props) => {
    const {currView} = props;
    return <div className='top-bar-container'>
        <h2>{currView}</h2>
        <div className='top-bar-user-info'>
            <span>John Doe</span>
            <img src="/profile_pic_freepikcom.jpg" alt="profile picture" />
        </div>
    </div>
}
export default TobBar;