

const Header = (props) => {
    return (
        <div className="header">
            <h1>{props.appTitle}</h1>
        </div>
    );
}

const Footer = (props) => {
    return (
        <div className="footer">
            <p>{props.footerText}</p>
        </div>
    );
}

const UserItem = (props) => {
    console.log(props);

    return (
        <div className="user-list clearFix">
            <div className="image float-left">
                <img className="thumbnail" src={props.userPicture} />
            </div>
            <div className="info-list float-left">
                <p>Name: {props.userName}</p>
                <p>Email: {props.userEmail}</p>
                <p>Date: {props.userBirthday}</p>
            </div>
        </div>
    );
}

const UserCard = (props) => {
    console.log(props);

    return (
        <div className="user-card clearFix">
            <div className="image">
                <img className="large" src={props.userPicture} />
                <p className="name">{props.userName}</p>
            </div>
            <div className="info">
                <p>Email: {props.userEmail}</p>
                <p>Date: {props.userBirthday}</p>
            </div>
        </div>
    );
}

const UserList = (props) => {
    console.log(props);
    let reactUsers;
    if (gridLayout) {
        reactUsers = props.userList.map((user, index) => {
            return <UserCard key={index} userName={user.firstName} userEmail={user.hiddenEmail} userBirthday={user.birthDate} userPicture={user.pictures.large} />
        });
    } else {
        reactUsers = props.userList.map((user, index) => {
            return <UserItem key={index} userName={user.firstName} userEmail={user.email} userBirthday={user.birthDate} userPicture={user.pictures.thumbnail} />
        });
    }

    return (
        <div className="userList clearFix">
            {reactUsers}
        </div>
    );
}

const App = () => {
    return (
        <div>
            <Header appTitle="React Users" />
            <hr />
            <UserList userList={mappedUsers} />
            <Footer footerText="&copy;2018Copyright BIT" />
        </div>
    );
};


const rootElement = document.querySelector('.root');
ReactDOM.render(<App />, rootElement);