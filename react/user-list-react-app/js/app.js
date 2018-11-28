

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
        <div className="user clearFix">
            <div className="image">
                <img src={props.userPicture} />
            </div>
            <div className="info">
                <p>Name: {props.userName}</p>
                <p>Email: {props.userEmail}</p>
                <p>Date: {props.userBirthday}</p>
            </div>
        </div>
    );
}

const UserList = (props) => {
    console.log(props);
    const reactUserItems = props.userList.map((user, index) => {
        return <UserItem key={index} userName={user.firstName} userEmail={user.email} userBirthday={user.birthDate} userPicture={user.pictures.thumbnail} />
    });

    return (
        <div className="userList clearFix">
            {reactUserItems}
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