

const Header = (props) => {
    return (
        <h1>{props.appTitle}</h1>
    );
}

const PostItem = (props) => {
    console.log(props);

    return (
        <div>
            <h3>{props.postName}</h3>
            <p>{props.postBody}</p>
        </div>
    );
}

const PostsList = (props) => {
    console.log(props);
    const myPostItems = props.postList.map((post, index) => {
        return <PostItem key={index} postName={post.title} postBody={post.body} />
    });

    return (
        <div className="posts">
            {myPostItems}
        </div>
    );
}

const App = () => {
    return (
        <div>
            <Header appTitle="My React Blog" />
            <hr />
            <PostsList postList={posts} />
        </div>
    );
};


const rootElement = document.querySelector('.root');
ReactDOM.render(<App />, rootElement);