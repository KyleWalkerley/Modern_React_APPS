import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (      
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    commentPost="Nice Blog post!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:00PM" 
                    commentPost="Love the blog of the day post!"
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            
            <ApprovalCard>  
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 5:00PM" 
                    commentPost="Nice blog!"
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));